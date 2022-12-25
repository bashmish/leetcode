import { expect, test } from "vitest";
import { isPalindrome } from "./is-palindrome.mjs";

test("Case 1", () => {
  expect(isPalindrome(121)).toBe(true);
});

test("Case 2", () => {
  expect(isPalindrome(-121)).toBe(false);
});

test("Case 3", () => {
  expect(isPalindrome(10)).toBe(false);
});

test("Case 4", () => {
  expect(isPalindrome(0)).toBe(true);
});
