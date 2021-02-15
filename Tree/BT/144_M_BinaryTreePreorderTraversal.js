/**
 * 02/14/21 evening
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 */

// Accepted --- 80ms 61.57%
const preorderTraversal = (root) => preOrder_DFS(root);

const preOrder_DFS = (root) => {
    if (!root) return [];
    let left = preOrder_DFS(root.left);
    let right = preOrder_DFS(root.right);
    return [root.val].concat(left).concat(right);
};