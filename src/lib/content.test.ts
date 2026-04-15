import { describe, it, expect } from "vitest";
import {
  BOOK_PHASES,
  PHASE_ORDER,
  getPhase,
  getPhaseIndex,
  getAdjacentPhases,
} from "./content";

describe("content", () => {
  it("has exactly 9 phases", () => {
    expect(PHASE_ORDER).toHaveLength(9);
    expect(Object.keys(BOOK_PHASES)).toHaveLength(9);
  });

  it("all phases have required fields", () => {
    for (const id of PHASE_ORDER) {
      const phase = BOOK_PHASES[id];
      expect(phase.id).toBe(id);
      expect(phase.sigle).toBeTruthy();
      expect(phase.title).toBeTruthy();
      expect(phase.subtitle).toBeTruthy();
      expect(phase.pages).toBeTruthy();
      expect(phase.content.length).toBeGreaterThan(10);
    }
  });

  it("sigles match expected symbols", () => {
    const expectedSigles = ["◇", "α", "β", "γ", "δ", "ε", "ζ", "η", "✧"];
    const actualSigles = PHASE_ORDER.map((id) => BOOK_PHASES[id].sigle);
    expect(actualSigles).toEqual(expectedSigles);
  });

  it("PHASE_ORDER matches BOOK_PHASES keys", () => {
    const phaseKeys = Object.keys(BOOK_PHASES).sort();
    const orderKeys = [...PHASE_ORDER].sort();
    expect(orderKeys).toEqual(phaseKeys);
  });

  describe("getPhase", () => {
    it("returns the correct phase", () => {
      expect(getPhase("intro").title).toBe("INTRODUCTION GÉNÉRALE");
      expect(getPhase("conclusion").sigle).toBe("✧");
    });
  });

  describe("getPhaseIndex", () => {
    it("returns correct indices", () => {
      expect(getPhaseIndex("intro")).toBe(0);
      expect(getPhaseIndex("conclusion")).toBe(8);
      expect(getPhaseIndex("alpha")).toBe(1);
    });
  });

  describe("getAdjacentPhases", () => {
    it("returns null prev for first phase", () => {
      const { prev, next } = getAdjacentPhases("intro");
      expect(prev).toBeNull();
      expect(next).toBe("alpha");
    });

    it("returns null next for last phase", () => {
      const { prev, next } = getAdjacentPhases("conclusion");
      expect(prev).toBe("golf");
      expect(next).toBeNull();
    });

    it("returns both neighbors for middle phase", () => {
      const { prev, next } = getAdjacentPhases("charlie");
      expect(prev).toBe("bravo");
      expect(next).toBe("delta");
    });
  });
});
