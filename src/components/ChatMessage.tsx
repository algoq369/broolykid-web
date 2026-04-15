interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}
    >
      <div
        className={`max-w-[80%] rounded px-3 py-2 text-[13px] leading-[1.7] ${
          isUser
            ? "bg-bg-tertiary text-text-primary border border-border"
            : "bg-bg-secondary text-text-primary border border-border"
        }`}
      >
        {!isUser && (
          <span className="text-[11px] text-accent block mb-1">
            BROOLYKID IA
          </span>
        )}
        <div className="whitespace-pre-line">{content}</div>
      </div>
    </div>
  );
}
