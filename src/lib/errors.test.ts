import { describe, it, expect } from "vitest";
import { classifyError, userMessage } from "./errors";

describe("errors", () => {
  describe("classifyError", () => {
    it("classifies 429 as rate_limit", () => {
      expect(classifyError(429)).toBe("rate_limit");
    });

    it("classifies 401 as auth", () => {
      expect(classifyError(401)).toBe("auth");
    });

    it("classifies 403 as auth", () => {
      expect(classifyError(403)).toBe("auth");
    });

    it("classifies 500+ as server", () => {
      expect(classifyError(500)).toBe("server");
      expect(classifyError(502)).toBe("server");
      expect(classifyError(503)).toBe("server");
    });

    it("classifies other codes as unknown", () => {
      expect(classifyError(400)).toBe("unknown");
      expect(classifyError(404)).toBe("unknown");
    });
  });

  describe("userMessage", () => {
    it("returns French messages for all categories", () => {
      expect(userMessage("rate_limit")).toContain("requêtes");
      expect(userMessage("auth")).toContain("authentification");
      expect(userMessage("server")).toContain("indisponible");
      expect(userMessage("network")).toContain("connexion");
      expect(userMessage("unknown")).toContain("erreur");
    });
  });
});
