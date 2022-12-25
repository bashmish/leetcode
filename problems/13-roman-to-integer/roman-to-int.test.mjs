import { expect, test } from "vitest";
import { romanToInt } from "./roman-to-int.mjs";

test("Case 1", () => {
  expect(romanToInt("III")).toBe(3);
});

test("Case 2", () => {
  expect(romanToInt("LVIII")).toBe(58);
});

test("Case 3", () => {
  expect(romanToInt("MCMXCIV")).toBe(1994);
});
