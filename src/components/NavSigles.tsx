"use client";

import { BOOK_PHASES, PHASE_ORDER, type PhaseId } from "@/lib/content";

interface NavSiglesProps {
  activePhase: PhaseId;
  onPhaseChange: (phase: PhaseId) => void;
}

export function NavSigles({ activePhase, onPhaseChange }: NavSiglesProps) {
  return (
    <nav className="flex flex-col py-4" aria-label="Navigation des phases">
      {PHASE_ORDER.map((phaseId) => {
        const phase = BOOK_PHASES[phaseId];
        const isActive = activePhase === phaseId;
        return (
          <button
            key={phaseId}
            className={`flex items-center gap-3 px-4 py-2.5 text-left transition-all
              ${
                isActive
                  ? "bg-accent-glow border-l-2 border-accent text-text-bright"
                  : "border-l-2 border-transparent text-text-secondary hover:text-text-bright hover:bg-bg-tertiary"
              }`}
            onClick={() => onPhaseChange(phaseId)}
            aria-label={phase.title}
            aria-current={isActive ? "page" : undefined}
          >
            <span
              className={`text-[16px] w-5 text-center shrink-0 ${isActive ? "text-accent" : ""}`}
            >
              {phase.sigle}
            </span>
            <span className="text-[11px] leading-tight truncate">
              {phase.title}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
