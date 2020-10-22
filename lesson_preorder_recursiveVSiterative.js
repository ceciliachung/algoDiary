// your code goes here
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function preorder2(root) {
  if (root === null) {
    return;
  }
  let stack = [[root, 0]];
  while (stack.length > 0) {
    let node = stack[stack.length - 1][0];
    stack[stack.length - 1][1]++;
    let count = stack[stack.length - 1][1];
    switch (count) {
      case 1:
        f(node);
        if (node.left !== null) {
          stack.push([node.left, 0]);
        }
        break;
      case 2:
        if (node.right !== null) {
          stack.push([node.right, 0]);
        }
        break;
      default:
        stack.pop();
        break;
    }
  }
}

function preorder(root) {
  if (root === null) {
    return;
  }
  f(root);
  preorder(root.left);
  preorder(root.right);
}

function f(root) {
  console.log(root.val);
}

let TN = TreeNode;
let tree = new TN(1, new TN(2), new TN(3, new TN(4, new TN(5))));
try {
  preorder2(tree);
} catch (e) {
  console.log(e);
}
