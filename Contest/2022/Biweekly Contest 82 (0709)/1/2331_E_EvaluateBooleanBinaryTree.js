/**
 * 07/09/22 morning
 * https://leetcode.com/contest/biweekly-contest-82/problems/evaluate-boolean-binary-tree/
 */

const pr = console.log;


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- reference: uwi
const evaluateTree = (root) => dfs(root)

const dfs = (root) => {
    if (!root) return false
    if (root.val == 1) return true
    if (root.val == 0) return false
    if (root.val == 2) return dfs(root.left) | dfs(root.right)
    if (root.val == 3) return dfs(root.left) & dfs(root.right)
    return false;
};

const main = () => {
    let root = new TreeNode(2);
    root.left = new TreeNode(1);
    root.right = new TreeNode(3);
    root.right.left = new TreeNode(0);
    root.right.right = new TreeNode(1);
    pr(evaluateTree(root));
};

main()