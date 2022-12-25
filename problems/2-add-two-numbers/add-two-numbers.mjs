/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const res = new ListNode();
  let current = res;
  let sum = 0;
  while (true) {
    const digit1 = l1?.val || 0;
    const digit2 = l2?.val || 0;
    sum = digit1 + digit2 + sum;
    current.val = sum > 9 ? sum - 10 : sum;
    sum = sum > 9 ? 1 : 0;
    l1 = l1?.next;
    l2 = l2?.next;
    if (!l1 && !l2) {
      break;
    }
    current.next = new ListNode();
    current = current.next;
  }
  if (sum) {
    current.next = new ListNode(1);
  }
  return res;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function numberToListNode(number) {
  const array = number
    .toString()
    .split("")
    .map((d) => parseInt(d, 10))
    .reverse();
  const res = new ListNode();
  let current = res;
  array.forEach((digit, index) => {
    current.val = digit;
    if (array[index + 1] !== undefined) {
      current.next = new ListNode();
      current = current.next;
    }
  });
  return res;
}

function listNodeToNumber(listNode) {
  let current = listNode;
  let num = 0;
  let pow = 0;
  while (current) {
    num = num + current.val * 10 ** pow;
    current = current.next;
    pow++;
  }
  return num;
}

export { addTwoNumbers, numberToListNode, listNodeToNumber };
