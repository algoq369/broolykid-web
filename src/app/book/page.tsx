"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("@/components/PDFViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex-1 flex items-center justify-center bg-bg-tertiary">
      <div className="flex flex-col items-center gap-3">
        <div className="text-[24px] text-accent animate-pulse">◇</div>
        <p className="text-[11px] text-text-muted tracking-[2px]">
          chargement du livre...
        </p>
      </div>
    </div>
  ),
});

export default function BookPage() {
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const goTo = useCallback(
    (page: number) => {
      const p = Math.max(1, Math.min(page, numPages || 1));
      setCurrentPage(p);
    },
    [numPages]
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border">
        <Link href="/" className="text-text-muted hover:text-accent text-[12px] tracking-[2px]">
          ← PROTOCOLE
        </Link>
        <h1 className="text-[16px] font-semibold tracking-[6px] text-text-bright">
          BROOLYKID
        </h1>
        <span className="text-[11px] text-text-muted tracking-[1px]">◇ LIVRE</span>
      </header>

      {/* CONTROLS */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-bg-secondary">
        <div className="flex items-center gap-3">
          <button
            onClick={() => goTo(currentPage - 1)}
            disabled={currentPage <= 1}
            className="px-3 py-1 text-[12px] border border-border text-text-muted hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            ←
          </button>
          <div className="flex items-center gap-1 text-[11px]">
            <input
              type="number"
              min={1}
              max={numPages || 1}
              value={currentPage}
              onChange={(e) => goTo(parseInt(e.target.value, 10) || 1)}
              className="w-[44px] text-center bg-transparent border border-border text-text-bright py-0.5 text-[11px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-accent focus:outline-none"
            />
            <span className="text-text-muted">/</span>
            <span className="text-text-muted">{numPages || "..."}</span>
          </div>
          <button
            onClick={() => goTo(currentPage + 1)}
            disabled={currentPage >= numPages}
            className="px-3 py-1 text-[12px] border border-border text-text-muted hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            →
          </button>
        </div>
        <a
          href="/BROOLYKID_FR.pdf"
          download="BROOLYKID_FR.pdf"
          className="px-3 py-1 text-[11px] border border-border text-text-muted hover:border-accent hover:text-accent transition-all"
        >
          ↓ PDF
        </a>
      </div>

      {/* PDF VIEWER */}
      <PDFViewer
        currentPage={currentPage}
        onLoadSuccess={(total: number) => setNumPages(total)}
      />

      {/* FOOTER */}
      <footer className="flex items-center justify-between px-6 py-3 border-t border-border text-[10px] text-text-muted">
        <span>AlgoQ — 2025</span>
        <span>{numPages || 82} pages · développement sacré</span>
        <Link href="/" className="hover:text-accent">← retour protocole</Link>
      </footer>
    </div>
  );
}
