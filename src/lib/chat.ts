import { classifyError, userMessage, type ErrorCategory } from "./errors";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ChatResponse {
  message: string;
  error?: string;
  category?: ErrorCategory;
}

async function withRetry<T>(
  fn: () => Promise<T>,
  attempts = 3,
  baseDelay = 1000,
): Promise<T> {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === attempts - 1) throw err;
      const delay = baseDelay * Math.pow(2, i);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw new Error("withRetry exhausted");
}

export async function askGroq(
  question: string,
  history: ChatMessage[],
  signal?: AbortSignal,
): Promise<ChatResponse> {
  try {
    const response = await withRetry(() =>
      fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, history }),
        signal,
      }),
    );

    if (!response.ok) {
      const category = classifyError(response.status);
      return { message: "", error: userMessage(category), category };
    }

    const data = await response.json();
    return { message: data.message };
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      return { message: "", error: "Requête annulée." };
    }
    return {
      message: "",
      error: userMessage("network"),
      category: "network",
    };
  }
}
