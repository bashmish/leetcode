import { expect, test } from "vitest";
import { convert } from "./convert.mjs";

test("Case 1", () => {
  expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
});

test("Case 2", () => {
  expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
});

test("Case 3", () => {
  expect(convert("A", 1)).toBe("A");
});

test("Case 4", () => {
  expect(convert("ABC", 1)).toBe("ABC");
});
