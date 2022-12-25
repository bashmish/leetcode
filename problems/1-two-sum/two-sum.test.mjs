import { expect, test } from "vitest";
import { twoSum } from "./two-sum.mjs";

test("Case 1", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});

test("Case 2", () => {
  expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
});

test("Case 3", () => {
  expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
});

test("Case 4", () => {
  expect(twoSum([0, 4, 3, 0], 0)).toStrictEqual([0, 3]);
});
