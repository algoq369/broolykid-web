"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { NavSigles } from "@/components/NavSigles";
import { Reader } from "@/components/Reader";
import { Footer } from "@/components/Footer";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { BOOK_PHASES, PHASE_ORDER, type PhaseId } from "@/lib/content";

const Chat = dynamic(() => import("@/components/Chat").then((m) => m.Chat), {
  loading: () => (
    <div className="flex flex-1 items-center justify-center">
      <LoadingSpinner text="chargement du chat..." />
    </div>
  ),
});

export default function Home() {
  const [activePhase, setActivePhase] = useState<PhaseId>("intro");
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Mobile: horizontal sigle nav */}
      <nav
        className="flex items-center justify-center gap-1 px-4 py-3 flex-wrap border-b border-border lg:hidden"
        aria-label="Navigation des phases"
      >
        {PHASE_ORDER.map((phaseId) => {
          const phase = BOOK_PHASES[phaseId];
          const isActive = activePhase === phaseId && !chatOpen;
          return (
            <button
              key={phaseId}
              className={`sigle ${isActive ? "active" : ""}`}
              onClick={() => {
                setChatOpen(false);
                setActivePhase(phaseId);
              }}
              aria-label={phase.title}
              title={phase.title}
            >
              {phase.sigle}
            </button>
          );
        })}
        <span className="mx-1 text-border">|</span>
        <button
          className={`sigle ${chatOpen ? "active" : ""}`}
          onClick={() => setChatOpen((prev) => !prev)}
          aria-label="Chat IA"
          title="Chat IA"
        >
          ⊕
        </button>
      </nav>

      {/* 3-column layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar — desktop */}
        <aside className="hidden lg:flex flex-col w-[220px] shrink-0 border-r border-border bg-bg-secondary overflow-y-auto">
          <NavSigles
            activePhase={activePhase}
            onPhaseChange={setActivePhase}
          />
        </aside>

        {/* Center — content area */}
        <main className="flex flex-1 min-w-0">
          {chatOpen && (
            <div className="flex flex-1 lg:hidden">
              <Chat />
            </div>
          )}
          <div className={`flex flex-1 ${chatOpen ? "hidden lg:flex" : ""}`}>
            <Reader
              activePhase={activePhase}
              onPhaseChange={setActivePhase}
            />
          </div>
        </main>

        {/* Right sidebar — Chat — desktop */}
        <aside className="hidden lg:flex flex-col w-[340px] shrink-0 border-l border-border bg-bg-secondary">
          <Chat />
        </aside>
      </div>

      <Footer />
    </div>
  );
}
