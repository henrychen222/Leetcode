/**
 * 2.15 night
 * https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 200ms 75.43%
const sum = (a) => a.reduce((x, y) => x + y);
const maxLevelSum = (root) => {
    let a = levelOrder_BFS(root).map(x => sum(x));
    // console.log(a);
    let max = Math.max.apply(Math, a);
    return a.indexOf(max) + 1;
};

const levelOrder_BFS = (root) => {
    let data = [];
    getAllLevels(root, 0, data);
    return data;
};

const getAllLevels = (root, level, data) => {
    if (!root) return;
    if (level >= data.length) data.push([]);
    data[level].push(root.val);
    getAllLevels(root.left, level + 1, data);
    getAllLevels(root.right, level + 1, data);
};

const main = () => {
    let root = new TreeNode(1);
    root.left = new TreeNode(7);
    root.right = new TreeNode(0);
    root.left.left = new TreeNode(7);
    root.left.right = new TreeNode(-8);
    console.log(maxLevelSum(root));
}

main();