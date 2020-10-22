// 206. Reverse Linked List
/** (EASY) || Wed Oct 21, 2020 || LINKED LISTS
https://leetcode.com/problems/reverse-linked-list/ 
 
Reverse a singly linked list.

Example:
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL

Follow up:
 * A linked list can be reversed either iteratively or recursively. Could you implement both?


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// OPTION A: time complexity O(n) and space complexity O(n) because of Stack

const reverseList = function (head) {
  if (head === null) {
    return head;
  }
  // reverse list by using a stack
  let stack = [];
  let iterator = head;
  while (iterator !== null) {
    stack.push(iterator);
    iterator = iterator.next;
  }

  // build the reversed list
  const newHead = stack.pop();
  let newTail = newHead;
  while (stack.length > 0) {
    const node = stack.pop();
    newTail.next = node;
    newTail = node;
  }
  newTail.next = null;

  return newHead;
};

// OPTION A-2: recursive
const reverseList = function (head) {
  return helperFunc(head)[0];
};

const helperFunc = function (head) {
  if (head === null) {
    return [head, null];
  }
  let [newHead, newTail] = helperFunc(head.next);
  if (newHead === null && newTail === null) {
    return [head, head];
  }
  newTail.next = head;
  head.next = null;
  newTail = head;
  return [newHead, newTail];
};

// OPTION B: time complexity O(n) and space complexity O(1)
const reverseList = function (head) {
  if (head === null) {
    return head;
  }
  // Initialize 3 pointers (prev, curr, next):
  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next;
    // switch the arrow's direction
    curr.next = prev;
    // update prev and curr for next iteration
    prev = curr;
    curr = next;
  }

  return prev;
};
