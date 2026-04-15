"use client";

import { useState, useRef, useEffect } from "react";
import { askGroq, type ChatMessage as ChatMsg } from "@/lib/chat";
import { ChatMessage } from "./ChatMessage";

export function Chat() {
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const question = input.trim();
    if (!question || loading) return;

    setInput("");
    setError(null);

    const userMsg: ChatMsg = { role: "user", content: question };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    abortRef.current = new AbortController();

    const result = await askGroq(
      question,
      messages,
      abortRef.current.signal,
    );

    if (result.error) {
      setError(result.error);
    } else {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: result.message },
      ]);
    }

    setLoading(false);
    abortRef.current = null;
  }

  return (
    <div className="flex flex-1 flex-col w-full px-3 py-4">
      {/* Chat header */}
      <div className="mb-4 border-b border-border pb-3">
        <h2 className="text-[16px] font-semibold text-text-bright">
          Chat IA
        </h2>
        <p className="text-[11px] text-text-muted">
          Posez vos questions sur le protocole BROOLYKID
        </p>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto min-h-0 mb-4">
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full text-text-muted text-[13px]">
            Posez une question pour commencer...
          </div>
        )}
        {messages.map((msg, i) => (
          <ChatMessage key={i} role={msg.role} content={msg.content} />
        ))}
        {loading && (
          <div className="flex justify-start mb-3">
            <div className="bg-bg-secondary border border-border rounded px-3 py-2 text-[13px]">
              <span className="text-[11px] text-accent block mb-1">
                BROOLYKID IA
              </span>
              <span className="text-text-muted animate-pulse">
                réflexion en cours...
              </span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Error display */}
      {error && (
        <div className="mb-3 rounded border border-error bg-error/20 px-3 py-2 text-[13px] text-text-primary">
          {error}
        </div>
      )}

      {/* Input form */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Votre question..."
          disabled={loading}
          className="flex-1 rounded border border-border bg-bg-secondary px-3 py-2 text-[13px] text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none disabled:opacity-50"
          maxLength={2000}
          aria-label="Question pour le chat IA"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="rounded border border-border bg-bg-tertiary px-4 py-2 text-[13px] text-text-secondary hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Envoyer"
        >
          ↵
        </button>
      </form>
    </div>
  );
}
