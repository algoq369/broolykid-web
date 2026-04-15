"use client";

import { BOOK_PHASES, PHASE_ORDER, type PhaseId } from "@/lib/content";

interface MilestonesProps {
  activePhase: PhaseId;
  onPhaseChange: (phase: PhaseId) => void;
}

export function Milestones({ activePhase, onPhaseChange }: MilestonesProps) {
  return (
    <div className="px-4 py-3" aria-label="Progression des phases">
      {/* Timeline bar */}
      <div className="relative flex items-center justify-between max-w-[600px] mx-auto">
        {/* Connecting line */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-border -translate-y-1/2" />

        {PHASE_ORDER.map((phaseId) => {
          const phase = BOOK_PHASES[phaseId];
          const isActive = activePhase === phaseId;
          const isPast =
            PHASE_ORDER.indexOf(phaseId) <
            PHASE_ORDER.indexOf(activePhase);

          return (
            <button
              key={phaseId}
              className={`relative z-10 flex h-3 w-3 items-center justify-center rounded-full border transition-all
                ${
                  isActive
                    ? "border-accent bg-accent scale-125"
                    : isPast
                      ? "border-accent-dim bg-accent-dim"
                      : "border-border-hover bg-bg-secondary"
                }`}
              onClick={() => onPhaseChange(phaseId)}
              aria-label={phase.title}
              title={`${phase.sigle} ${phase.title}`}
            />
          );
        })}
      </div>

      {/* Phase label */}
      <p className="mt-2 text-center text-[11px] text-text-muted">
        {BOOK_PHASES[activePhase].sigle} {BOOK_PHASES[activePhase].title}
      </p>
    </div>
  );
}
