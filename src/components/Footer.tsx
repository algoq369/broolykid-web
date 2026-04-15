import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-6 px-4 text-center border-t border-border">
      <p className="text-[11px] text-text-muted">
        AlgoQ — 2025 | 82 pages | développement sacré
      </p>
      <div className="mt-2 flex items-center justify-center gap-4 text-[11px]">
        <Link
          href="/mentions"
          className="text-text-muted hover:text-accent"
        >
          Mentions légales
        </Link>
        <span className="text-border">|</span>
        <Link
          href="/privacy"
          className="text-text-muted hover:text-accent"
        >
          Confidentialité
        </Link>
      </div>
    </footer>
  );
}
