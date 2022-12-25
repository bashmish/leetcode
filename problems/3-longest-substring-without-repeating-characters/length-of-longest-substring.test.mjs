import { expect, test } from "vitest";
import { lengthOfLongestSubstring } from "./length-of-longest-substring.mjs";

test("Case 1", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});

test("Case 2", () => {
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
});

test("Case 3", () => {
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});

test("Case 4", () => {
  expect(lengthOfLongestSubstring("wpwkew")).toBe(4);
});

test("Case 5", () => {
  expect(lengthOfLongestSubstring(" ")).toBe(1);
});

test("Case 6", () => {
  expect(lengthOfLongestSubstring("aabaab!bb")).toBe(3);
});
