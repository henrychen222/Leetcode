/**
 * 02/14/21 night
 * https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 92ms 45.21%
const maxAncestorDiff = (root) => {
    let p = getAllPathNew(root);
    let res = 0;
    for (const a of p) {
        let min = Number.MAX_SAFE_INTEGER;
        let max = 0;
        for (const e of a) {
            min = Math.min(min, e);
            max = Math.max(max, e);
        }
        res = Math.max(res, max - min);
    }
    return res;
};

// Accepted --- 80ms 90.41%
const maxAncestorDiff3 = (root) => {
    let p = getAllPathNew(root).map(x => Math.max.apply(Math, x) - Math.min.apply(Math, x));
    return Math.max.apply(Math, p);
};

// Accepted --- 92ms 45.21%
const maxAncestorDiff2 = (root) => {
    let p = getAllPathNew(root).map(x => x.sort((a, b) => a - b))
    let res = 0;
    for (const a of p) {
        res = Math.max(res, a[a.length - 1] - a[0]);
    }
    return res;
};

// Accepted --- 84ms 80.82%
const maxAncestorDiff1 = (root) => {
    let p = getAllPathNew(root).map(x => x.sort((a, b) => a - b)).map(x => x.pop() - x.shift());
    return Math.max.apply(Math, p);
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
    let root = new TreeNode(8);
    root.left = new TreeNode(3);
    root.right = new TreeNode(10);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(6);
    root.left.right.left = new TreeNode(4);
    root.left.right.right = new TreeNode(7);
    root.right.right = new TreeNode(14);
    root.right.right.left = new TreeNode(13);
    console.log(maxAncestorDiff(root));
};

main()