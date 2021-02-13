/**
 * 02/11/21 afternooon
 * https://leetcode.com/problems/path-sum-ii/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 80ms 99.76%
const pathSum = (root, targetSum) => {
    let p = getAllPathNew(root);
    // console.log(p);
    let res = [];
    for (const a of p) {
        let sum = a.reduce((x, y) => x + y);
        if (sum == targetSum) res.push(a);
    }
    return res;
};

const getAllPathNew = (root) => {
    let res = [];
    let path = [];
    dfs(root, path, res);
    return res;
};

const dfs = (node, path, res) => {
    if (!node) return;
    path.push(node.val);
    if (!node.left && !node.right) res.push([...path]);
    dfs(node.left, path, res);
    dfs(node.right, path, res);
    path.pop();
};

const main = () => {
    let root = new TreeNode(5);
    root.left = new TreeNode(4);
    root.right = new TreeNode(8);
    root.left.left = new TreeNode(11);
    root.left.left.left = new TreeNode(7);
    root.left.left.right = new TreeNode(2);
    root.right.left = new TreeNode(13);
    root.right.right = new TreeNode(4);
    root.right.right.left = new TreeNode(5);
    root.right.right.right = new TreeNode(1);
    let targetSum = 22;
    console.log(pathSum(root, targetSum));
};

main()