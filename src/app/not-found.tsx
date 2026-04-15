import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 text-center min-h-screen">
      <span className="text-[48px] text-accent mb-4">◇</span>
      <h2 className="text-[20px] font-semibold text-text-bright mb-2">
        404 — Page introuvable
      </h2>
      <p className="text-[13px] text-text-secondary mb-6">
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="rounded border border-border bg-bg-tertiary px-4 py-2 text-[13px] text-text-secondary hover:border-accent hover:text-accent"
      >
        ← Retour à l&apos;accueil
      </Link>
    </div>
  );
}
