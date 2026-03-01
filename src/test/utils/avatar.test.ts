import { describe, it, expect } from "vitest";
import { getInitials, getGradient, avatarGradients } from "../../utils/avatar";

describe("getInitials", () => {
  it("returns first and last initials for a two-part name", () => {
    expect(getInitials("John Doe")).toBe("JD");
  });

  it("returns first and last initials for a three-part name", () => {
    expect(getInitials("John Michael Doe")).toBe("JD");
  });

  it("uppercases lowercase names", () => {
    expect(getInitials("jane smith")).toBe("JS");
  });

  it("handles a single-word name by doubling the initial", () => {
    expect(getInitials("Cher")).toBe("CC");
  });
});

describe("getGradient", () => {
  it("returns a value from the avatarGradients array", () => {
    expect(avatarGradients).toContain(getGradient("Alice"));
  });

  it("returns a consistent result for the same name", () => {
    expect(getGradient("Bob")).toBe(getGradient("Bob"));
  });

  it("can produce different results for different names", () => {
    const results = new Set(
      ["Alice", "Bob", "Charlie", "Diana", "Eve"].map(getGradient)
    );
    expect(results.size).toBeGreaterThan(1);
  });
});
