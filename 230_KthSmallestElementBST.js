// 230. Kth Smallest Element in a BST
/** (MEDIUM) || Tue Oct 13, 2020 || BST
https://leetcode.com/problems/kth-smallest-element-in-a-bst/ 
 
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Example 1:
 * Input: root = [3,1,4,null,2], k = 1
 
   3
  / \
 1   4
  \
   2
  
 * Output: 1

Example 2:
 * Input: root = [5,3,6,2,4,null,null,1], k = 3

       5
      / \
     3   6
    / \
   2   4
  /
 1

 * Output: 3


Follow up: What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? 
 * How would you optimize the kthSmallest routine?

 Constraints:
 * The number of elements of the BST is between 1 to 10^4.
 * You may assume k is always valid, 1 ≤ k ≤ BST's total elements.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let found = null;

  const closure = (node, d = 0) => {
    // Base case
    if (node === null) {
      log(d, 'node is null');
      return false;
    }

    log(d, `closure(${node.val})`);

    /* Inorder traversal */
    log(d, 'checking left child');
    const foundInLeft = closure(node.left, d + 1);
    if (foundInLeft) {
      log(d, 'already found the node in left subtree. Exiting early...');
      return true;
    }
    log(d, "didn't find the node yet");

    k--;
    log(d, 'k is now', k);
    if (k === 0) {
      log(d, "found the node! It's val is", node.val);
      found = node.val;
      return true;
    }

    log(d, 'checking right child');
    const foundInRight = closure(node.right, d + 1);
    if (foundInRight) {
      log(d, 'already found the node in right subtree. Exiting early...');
      return true;
    }

    // Not found...
    log(d, 'did not find node. Exiting...');
    return false;
  };

  closure(root);
  return found;
};

const log = (d, ...s) => {
  console.log('....'.repeat(d), ...s);
};
