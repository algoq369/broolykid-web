"use client";

import {
  BOOK_PHASES,
  PHASE_ORDER,
  getAdjacentPhases,
  getPhaseIndex,
  type PhaseId,
} from "@/lib/content";

interface ReaderProps {
  activePhase: PhaseId;
  onPhaseChange: (phase: PhaseId) => void;
}

export function Reader({ activePhase, onPhaseChange }: ReaderProps) {
  const phase = BOOK_PHASES[activePhase];
  const { prev, next } = getAdjacentPhases(activePhase);
  const currentIndex = getPhaseIndex(activePhase);
  const total = PHASE_ORDER.length;

  return (
    <article className="flex flex-1 flex-col max-w-[900px] w-full mx-auto px-4 sm:px-8 py-6">
      {/* Phase header */}
      <header className="mb-6 border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <span className="text-[24px] text-accent">{phase.sigle}</span>
          <div>
            <h2 className="text-[16px] font-semibold text-text-bright">
              {phase.title}
            </h2>
            <p className="text-[13px] text-text-secondary">
              {phase.subtitle}
            </p>
          </div>
        </div>
        <p className="mt-2 text-[11px] text-text-muted">
          Pages {phase.pages}
        </p>
      </header>

      {/* Content */}
      <div className="flex-1 text-[14px] leading-[1.8] text-text-primary whitespace-pre-line overflow-y-auto">
        {phase.content}
      </div>

      {/* Navigation */}
      <footer className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <button
          className="text-[13px] text-text-secondary hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed"
          onClick={() => prev && onPhaseChange(prev)}
          disabled={!prev}
          aria-label="Phase précédente"
        >
          ← précédent
        </button>

        <span className="text-[11px] text-text-muted">
          {currentIndex + 1}/{total}
        </span>

        <button
          className="text-[13px] text-text-secondary hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed"
          onClick={() => next && onPhaseChange(next)}
          disabled={!next}
          aria-label="Phase suivante"
        >
          suivant →
        </button>
      </footer>
    </article>
  );
}
