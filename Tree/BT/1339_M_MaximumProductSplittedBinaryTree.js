/**
 * 08/19/21 afternoon
 * https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 180ms 23.08%
// reference: https://leetcode.com/contest/weekly-contest-174/ranking uwi
let subtreeSum;
const mod = 1e9 + 7;
const maxProduct = (root) => {
    subtreeSum = [];
    let tot = dfs(root);
    pr(subtreeSum, tot);
    let res = 0;
    for (const x of subtreeSum) {
        let another = tot - x;
        res = Math.max(res, x * another);
    }
    return res % mod;
};

const dfs = (node) => {
    if (!node) return 0;
    let sum = node.val + dfs(node.left) + dfs(node.right);
    subtreeSum.push(sum);
    return sum;
};

const pr = console.log;
const main = () => {
    let root = new TreeNode(1)
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    pr(maxProduct(root))
};

main()