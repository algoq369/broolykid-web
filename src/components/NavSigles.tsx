"use client";

import { BOOK_PHASES, PHASE_ORDER, type PhaseId } from "@/lib/content";

interface NavSiglesProps {
  activePhase: PhaseId;
  onPhaseChange: (phase: PhaseId) => void;
  onChatToggle: () => void;
  chatOpen: boolean;
}

export function NavSigles({
  activePhase,
  onPhaseChange,
  onChatToggle,
  chatOpen,
}: NavSiglesProps) {
  return (
    <nav
      className="flex items-center justify-center gap-1 px-4 py-3 flex-wrap"
      aria-label="Navigation des phases"
    >
      {PHASE_ORDER.map((phaseId) => {
        const phase = BOOK_PHASES[phaseId];
        const isActive = activePhase === phaseId && !chatOpen;
        return (
          <button
            key={phaseId}
            className={`sigle ${isActive ? "active" : ""}`}
            onClick={() => onPhaseChange(phaseId)}
            aria-label={phase.title}
            aria-current={isActive ? "page" : undefined}
            title={phase.title}
          >
            {phase.sigle}
          </button>
        );
      })}

      <span className="mx-1 text-border">|</span>

      <button
        className={`sigle ${chatOpen ? "active" : ""}`}
        onClick={onChatToggle}
        aria-label="Ouvrir le chat"
        title="Chat IA"
      >
        ⊕
      </button>
    </nav>
  );
}
