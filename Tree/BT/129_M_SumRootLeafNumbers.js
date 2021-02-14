/**
 * 2.13 night
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 72ms 97.61%
const sumNumbers = (root) => {
    let p = getAllPathNew(root).map(x => BigInt(x.join("")));
    // console.log(p);
    return p.length == 0 ? 0 : Number(p.reduce((x, y) => x + y));
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
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    console.log(sumNumbers(root));

    let root2 = new TreeNode(4);
    root2.left = new TreeNode(9);
    root2.right = new TreeNode(0);
    root2.left.left = new TreeNode(5);
    root2.left.right = new TreeNode(1);
    console.log(sumNumbers(root2));

    let debug = null;
    console.log(sumNumbers(debug));
};

main()