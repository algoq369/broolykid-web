import Link from "next/link";

export function Header() {
  return (
    <header className="flex flex-col items-center py-5 px-4 border-b border-border">
      <Link href="/">
        <h1 className="text-[24px] font-semibold tracking-[8px] text-text-bright hover:text-accent transition-colors cursor-pointer">
          BROOLYKID
        </h1>
      </Link>
      <p className="mt-1 text-[12px] text-text-muted tracking-[2px]">
        protocole de genèse sacrée
      </p>
      <nav className="mt-3 flex items-center gap-6 text-[11px] tracking-[1px]">
        <Link
          href="/"
          className="text-text-muted hover:text-accent transition-colors"
        >
          ◇ PROTOCOLE
        </Link>
        <span className="text-border">|</span>
        <Link
          href="/book"
          className="text-text-muted hover:text-accent transition-colors"
        >
          ◇ LIVRE
        </Link>
      </nav>
    </header>
  );
}
