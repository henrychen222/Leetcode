/**
 * 7.3 morning
 * https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 92ms 33.6MB  8.48%
const findSecondMinimumValue = (root) => {
    let data = inOrder_DFS(root);
    return [...new Set(data)].sort((a, b) => a - b)[1] || -1;
};

const inOrder_DFS = (root) => {
    if (!root) return [];
    let left = inOrder_DFS(root.left);
    let right = inOrder_DFS(root.right);
    return left.concat(root.val).concat(right);
};

////////////////////////// reference: https://www.cnblogs.com/grandyang/p/7590156.html /////////////////
// Accepted --- 80ms 32.6MB 15.62%  
const findSecondMinimumValue_iteration = (root) => {
    let rootVal = root.val;
    let min = Number.MAX_VALUE;
    let q = [root];
    while (q.length != 0) {
        let node = q[0];
        q.shift();
        if (node.val != rootVal) min = Math.min(min, node.val);
        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
    }
    return (min == rootVal || min == Number.MAX_VALUE) ? -1 : min;
};

// Accepetd --- 92ms 32.6MB 8.48%
const findSecondMinimumValue_recursion = (root) => {
    return helper(root, root.val);
};

const helper = (node, rootVal) => {
    if (!node) return -1;
    if (node.val != rootVal) return node.val;
    let left = helper(node.left, rootVal);
    let right = helper(node.right, rootVal);
    return (left == -1 || right == -1) ? Math.max(left, right) : Math.min(left, right);
};

const main = () => {
    let root = new TreeNode(2);
    root.left = new TreeNode(2);
    root.right = new TreeNode(5);
    root.right.left = new TreeNode(5);
    root.right.right = new TreeNode(7);
    console.log(findSecondMinimumValue(root));
    console.log(findSecondMinimumValue_iteration(root));
    console.log(findSecondMinimumValue_recursion(root));

    let root2 = new TreeNode(2);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(2);
    console.log(findSecondMinimumValue(root2));
    console.log(findSecondMinimumValue_iteration(root2));
    console.log(findSecondMinimumValue_recursion(root2));
};

main()