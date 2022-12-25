import { expect, test } from "vitest";
import { longestCommonPrefix } from "./longest-common-prefix.mjs";

test("Case 1", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
});

test("Case 2", () => {
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
});
