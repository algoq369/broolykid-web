import { describe, it, expect, vi, beforeEach } from "vitest";

describe("chat client", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  describe("askGroq", () => {
    it("returns message on successful response", async () => {
      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue({
          ok: true,
          json: () => Promise.resolve({ message: "Bonjour!" }),
        }),
      );

      const { askGroq } = await import("./chat");
      const result = await askGroq("test question", []);
      expect(result.message).toBe("Bonjour!");
      expect(result.error).toBeUndefined();
    });

    it("returns error on 429 rate limit", async () => {
      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue({
          ok: false,
          status: 429,
        }),
      );

      const { askGroq } = await import("./chat");
      const result = await askGroq("test", []);
      expect(result.error).toContain("requêtes");
      expect(result.category).toBe("rate_limit");
    });

    it("returns error on 500 server error", async () => {
      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue({
          ok: false,
          status: 500,
        }),
      );

      const { askGroq } = await import("./chat");
      const result = await askGroq("test", []);
      expect(result.error).toContain("indisponible");
      expect(result.category).toBe("server");
    });

    it("handles network errors", async () => {
      vi.stubGlobal(
        "fetch",
        vi.fn().mockRejectedValue(new Error("Network failure")),
      );

      const { askGroq } = await import("./chat");
      const result = await askGroq("test", []);
      expect(result.error).toContain("connexion");
      expect(result.category).toBe("network");
    });

    it("handles abort signal", async () => {
      const abortError = new DOMException("Aborted", "AbortError");
      vi.stubGlobal("fetch", vi.fn().mockRejectedValue(abortError));

      const { askGroq } = await import("./chat");
      const result = await askGroq("test", []);
      expect(result.error).toContain("annulée");
    });
  });
});
