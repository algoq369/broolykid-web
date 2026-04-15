import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { BOOK_PHASES, PHASE_ORDER } from "@/lib/content";
import { env } from "@/env";

// --- Rate limiting (in-memory, per IP, 10 req/min) ---

const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

// --- Input validation ---

const ChatInput = z.object({
  question: z.string().min(1).max(2000),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string(),
      }),
    )
    .max(20)
    .optional()
    .default([]),
});

// --- System prompt with full book content ---

function buildSystemPrompt(): string {
  const bookContent = PHASE_ORDER.map((id) => {
    const phase = BOOK_PHASES[id];
    return `## ${phase.sigle} ${phase.title}\n${phase.subtitle}\n(Pages ${phase.pages})\n\n${phase.content}`;
  }).join("\n\n---\n\n");

  return `Tu es un assistant spécialisé dans le protocole BROOLYKID, un protocole holistique de développement sacré de l'enfant. Tu réponds UNIQUEMENT en te basant sur le contenu du livre ci-dessous. Si une question sort du cadre du livre, indique-le poliment.

Réponds toujours en français, de manière claire et bienveillante.

--- CONTENU DU LIVRE (82 pages) ---

${bookContent}

--- FIN DU CONTENU ---`;
}

// --- POST handler ---

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Trop de requêtes. Réessayez dans une minute." },
        { status: 429 },
      );
    }

    // Parse and validate input
    const body = await request.json();
    const parsed = ChatInput.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Entrée invalide.", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { question, history } = parsed.data;

    // Build messages for Groq
    const messages = [
      { role: "system" as const, content: buildSystemPrompt() },
      ...history.map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
      { role: "user" as const, content: question },
    ];

    // Call Groq API with timeout
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30_000);

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-70b-versatile",
          messages,
          temperature: 0.7,
          max_tokens: 1024,
        }),
        signal: controller.signal,
      },
    );

    clearTimeout(timeout);

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown error");
      console.error(`Groq API error ${response.status}: ${errorText}`);
      return NextResponse.json(
        { error: "Erreur du service IA." },
        { status: 502 },
      );
    }

    const data = await response.json();
    const message = data.choices?.[0]?.message?.content ?? "";

    return NextResponse.json({ message });
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      return NextResponse.json(
        { error: "La requête a expiré." },
        { status: 504 },
      );
    }
    console.error("Chat API error:", err);
    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 },
    );
  }
}
