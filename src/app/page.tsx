"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { NavSigles } from "@/components/NavSigles";
import { Reader } from "@/components/Reader";
import { Milestones } from "@/components/Milestones";
import { Footer } from "@/components/Footer";
import type { PhaseId } from "@/lib/content";

export default function Home() {
  const [activePhase, setActivePhase] = useState<PhaseId>("intro");
  const [chatOpen, setChatOpen] = useState(false);

  function handlePhaseChange(phase: PhaseId) {
    setChatOpen(false);
    setActivePhase(phase);
  }

  function handleChatToggle() {
    setChatOpen((prev) => !prev);
  }

  return (
    <div className="flex flex-1 flex-col min-h-screen">
      <Header />

      <NavSigles
        activePhase={activePhase}
        onPhaseChange={handlePhaseChange}
        onChatToggle={handleChatToggle}
        chatOpen={chatOpen}
      />

      <Milestones
        activePhase={activePhase}
        onPhaseChange={handlePhaseChange}
      />

      <main className="flex flex-1">
        {chatOpen ? (
          <div className="flex flex-1 items-center justify-center text-text-muted text-[13px]">
            chat IA — bientôt disponible
          </div>
        ) : (
          <Reader
            activePhase={activePhase}
            onPhaseChange={handlePhaseChange}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
