"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

const TOTAL_PAGES = 82;

export default function BookPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"embed" | "scroll">("embed");

  const handlePageInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = parseInt(e.target.value, 10);
      if (!isNaN(val) && val >= 1 && val <= TOTAL_PAGES) {
        setCurrentPage(val);
      }
    },
    []
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border">
        <Link
          href="/"
          className="text-text-muted hover:text-accent text-[12px] tracking-[2px]"
        >
          ← PROTOCOLE
        </Link>
        <h1 className="text-[16px] font-semibold tracking-[6px] text-text-bright">
          BROOLYKID
        </h1>
        <span className="text-[11px] text-text-muted tracking-[1px]">
          ◇ LIVRE
        </span>
      </header>

      {/* CONTROLS BAR */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-bg-secondary">
        <div className="flex items-center gap-4">
          {/* View mode toggle */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setViewMode("embed")}
              className={`px-3 py-1 text-[11px] border transition-all ${
                viewMode === "embed"
                  ? "border-accent text-accent bg-accent-glow"
                  : "border-border text-text-muted hover:border-accent hover:text-accent"
              }`}
            >
              PAGE
            </button>
            <button
              onClick={() => setViewMode("scroll")}
              className={`px-3 py-1 text-[11px] border transition-all ${
                viewMode === "scroll"
                  ? "border-accent text-accent bg-accent-glow"
                  : "border-border text-text-muted hover:border-accent hover:text-accent"
              }`}
            >
              SCROLL
            </button>
          </div>

          {/* Page navigation (embed mode only) */}
          {viewMode === "embed" && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage <= 1}
                className="px-2 py-1 text-[14px] text-text-muted hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ←
              </button>
              <div className="flex items-center gap-1 text-[11px]">
                <input
                  type="number"
                  min={1}
                  max={TOTAL_PAGES}
                  value={currentPage}
                  onChange={handlePageInput}
                  className="w-[40px] text-center bg-transparent border border-border text-text-bright py-0.5 text-[11px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-accent focus:outline-none"
                />
                <span className="text-text-muted">/</span>
                <span className="text-text-muted">{TOTAL_PAGES}</span>
              </div>
              <button
                onClick={() => setCurrentPage((p) => Math.min(TOTAL_PAGES, p + 1))}
                disabled={currentPage >= TOTAL_PAGES}
                className="px-2 py-1 text-[14px] text-text-muted hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed"
              >
                →
              </button>
            </div>
          )}
        </div>

        {/* Download */}
        <a
          href="/BROOLYKID_FR.pdf"
          download
          className="flex items-center gap-2 px-3 py-1 text-[11px] border border-border text-text-muted hover:border-accent hover:text-accent transition-all"
        >
          ↓ PDF
        </a>
      </div>

      {/* PDF VIEWER */}
      <div className="flex-1 relative bg-bg-tertiary">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-bg-primary">
            <div className="flex flex-col items-center gap-3">
              <div className="text-[24px] text-accent animate-pulse">◇</div>
              <p className="text-[11px] text-text-muted tracking-[2px]">
                chargement du livre...
              </p>
            </div>
          </div>
        )}

        {viewMode === "embed" ? (
          <iframe
            key={`page-${currentPage}`}
            src={`/BROOLYKID_FR.pdf#page=${currentPage}&toolbar=0&navpanes=0`}
            className="w-full h-full border-0"
            title={`BROOLYKID — Page ${currentPage}`}
            onLoad={() => setIsLoading(false)}
          />
        ) : (
          <iframe
            src="/BROOLYKID_FR.pdf#toolbar=0&navpanes=0&scrollbar=1"
            className="w-full h-full border-0"
            title="BROOLYKID — Livre complet"
            onLoad={() => setIsLoading(false)}
          />
        )}
      </div>

      {/* FOOTER */}
      <footer className="flex items-center justify-between px-6 py-3 border-t border-border text-[10px] text-text-muted">
        <span>AlgoQ — 2025</span>
        <span>{TOTAL_PAGES} pages · développement sacré</span>
        <Link href="/" className="hover:text-accent">
          ← retour protocole
        </Link>
      </footer>
    </div>
  );
}
