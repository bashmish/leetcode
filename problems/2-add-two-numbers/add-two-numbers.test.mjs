import { expect, test } from "vitest";
import {
  addTwoNumbers,
  listNodeToNumber,
  numberToListNode,
} from "./add-two-numbers.mjs";

test("Case 1", () => {
  expect(
    listNodeToNumber(
      addTwoNumbers(numberToListNode(342), numberToListNode(465))
    )
  ).toBe(807);
});

test("Case 2", () => {
  expect(
    listNodeToNumber(addTwoNumbers(numberToListNode(0), numberToListNode(0)))
  ).toBe(0);
});

test("Case 3", () => {
  expect(
    listNodeToNumber(
      addTwoNumbers(numberToListNode(9999999), numberToListNode(9999))
    )
  ).toBe(10009998);
});
