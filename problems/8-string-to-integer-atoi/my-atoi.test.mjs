import { expect, test } from "vitest";
import { myAtoi } from "./my-atoi.mjs";

test("Case 1", () => {
  expect(myAtoi("42")).toBe(42);
});

test("Case 2", () => {
  expect(myAtoi("   -42")).toBe(-42);
});

test("Case 3", () => {
  expect(myAtoi("4193 with words")).toBe(4193);
});

test("Case 4", () => {
  expect(myAtoi("4193d")).toBe(4193);
});

test("Case 5", () => {
  expect(myAtoi("00320")).toBe(320);
});

test("Case 6", () => {
  expect(myAtoi("2147483648")).toBe(2147483647);
});

test("Case 7", () => {
  expect(myAtoi("-2147483649")).toBe(-2147483648);
});

test("Case 8", () => {
  expect(myAtoi("+10")).toBe(10);
});

test("Case 9", () => {
  expect(myAtoi("++10")).toBe(0);
});

test("Case 10", () => {
  expect(myAtoi("+-10")).toBe(0);
});

test("Case 11", () => {
  expect(myAtoi("9".repeat(200))).toBe(2147483647);
});

test("Case 12", () => {
  expect(myAtoi("-" + "9".repeat(199))).toBe(-2147483648);
});

test("Case 13", () => {
  expect(myAtoi("+")).toBe(0);
});

test("Case 14", () => {
  expect(myAtoi("-")).toBe(-0);
});

test("Case 15", () => {
  expect(myAtoi("0-")).toBe(0);
});

test("Case 16", () => {
  expect(myAtoi("  +  413")).toBe(0);
});

test("Case 17", () => {
  expect(myAtoi("words and 987")).toBe(0);
});
