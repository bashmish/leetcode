import { expect, test } from "vitest";
import { longestPalindrome } from "./longest-palindrome.mjs";

test("Case 1", () => {
  expect(longestPalindrome("babad")).toBe("bab");
});

test("Case 2", () => {
  expect(longestPalindrome("cbbd")).toBe("bb");
});

test("Case 3", () => {
  expect(longestPalindrome("aaaacabacaaaa")).toBe("aaaacabacaaaa");
});

test("Case 4", () => {
  expect(longestPalindrome("aacabdkacaa")).toBe("aca");
});

test("Case 5", () => {
  expect(longestPalindrome("bb")).toBe("bb");
});

test("Case 6", () => {
  expect(longestPalindrome("bab")).toBe("bab");
});
