interface LoadingSpinnerProps {
  text?: string;
}

export function LoadingSpinner({ text = "chargement..." }: LoadingSpinnerProps) {
  return (
    <div className="flex items-center gap-2 text-[13px] text-text-muted">
      <span className="inline-block h-3 w-3 animate-spin rounded-full border border-accent border-t-transparent" />
      {text}
    </div>
  );
}
