"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
      <span className="text-[24px] text-accent mb-4">✧</span>
      <h2 className="text-[16px] font-semibold text-text-bright mb-2">
        Une erreur est survenue
      </h2>
      <p className="text-[13px] text-text-secondary mb-6 max-w-md">
        {error.message || "Quelque chose s'est mal passé. Veuillez réessayer."}
      </p>
      <button
        onClick={reset}
        className="rounded border border-border bg-bg-tertiary px-4 py-2 text-[13px] text-text-secondary hover:border-accent hover:text-accent"
      >
        Réessayer
      </button>
    </div>
  );
}
