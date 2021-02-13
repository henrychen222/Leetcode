/**
 * 02/11/21 afternooon
 * https://leetcode.com/problems/smallest-string-starting-from-leaf/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 108ms 31.31%
let ma;
const smallestFromLeaf = (root) => {
    ma = new Map();
    for (let i = 0; i <= 25; i++) {
        ma.set(i, String.fromCharCode(97 + i));
    }
    let p = getAllPathNew(root);
    // console.log(p);
    return p.map(x => x.reverse().join("")).sort((a, b) => a.localeCompare(b))[0];
};

const getAllPathNew = (root) => {
    let res = [];
    let path = [];
    dfs(root, path, res);
    return res;
};

const dfs = (node, path, res) => {
    if (!node) return;
    path.push(ma.get(node.val));
    if (!node.left && !node.right) res.push([...path]);
    dfs(node.left, path, res);
    dfs(node.right, path, res);
    path.pop();
};

const main = () => {
    let root = new TreeNode(0);
    root.left = new TreeNode(1);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(3);
    root.right.right = new TreeNode(4);
    console.log(smallestFromLeaf(root));
};

main()