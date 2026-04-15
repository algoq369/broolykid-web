import { describe, it, expect, vi } from "vitest";
import { logger } from "./logger";

describe("logger", () => {
  it("logs info as JSON to console.log", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    logger.info("test message", { key: "value" });

    expect(spy).toHaveBeenCalledOnce();
    const parsed = JSON.parse(spy.mock.calls[0][0] as string);
    expect(parsed.level).toBe("info");
    expect(parsed.message).toBe("test message");
    expect(parsed.key).toBe("value");
    expect(parsed.timestamp).toBeTruthy();
    spy.mockRestore();
  });

  it("logs errors to console.error", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    logger.error("fail", { code: 500 });

    expect(spy).toHaveBeenCalledOnce();
    const parsed = JSON.parse(spy.mock.calls[0][0] as string);
    expect(parsed.level).toBe("error");
    expect(parsed.code).toBe(500);
    spy.mockRestore();
  });

  it("logs warnings to console.warn", () => {
    const spy = vi.spyOn(console, "warn").mockImplementation(() => {});
    logger.warn("caution");

    expect(spy).toHaveBeenCalledOnce();
    const parsed = JSON.parse(spy.mock.calls[0][0] as string);
    expect(parsed.level).toBe("warn");
    spy.mockRestore();
  });
});
