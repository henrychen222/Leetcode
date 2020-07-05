/**
 * 7.4 morning
 * https://leetcode.com/problems/longest-univalue-path/
 * reference: https://www.cnblogs.com/grandyang/p/7636259.html
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 312ms 57.7MB 21.08%  method 3
const longestUnivaluePath = (root) => {
    if (!root) return 0;
    let sub = Math.max(longestUnivaluePath(root.left), longestUnivaluePath(root.right));
    return Math.max(sub, helper(root.left, root.val) + helper(root.right, root.val));
};

const helper = (node, parent) => {
    if (!node || node.val != parent) return 0;
    return 1 + Math.max(helper(node.left, node.val), helper(node.right, node.val));
};

// Accepted --- 292ms 57.7MB 22.89%  https://leetcode.com/problems/longest-univalue-path/discuss/108136/JavaC%2B%2B-Clean-Code (fix &res issue use array instead)
const longestUnivaluePath1 = (root) => {
    let res = [0];
    if (root) dfs(root, res);
    return res[0];
};

const dfs = (node, res) => {
    if (!node) return 0;
    let left = dfs(node.left, res);
    let right = dfs(node.right, res);
    left = (node.left && node.val == node.left.val) ? left + 1 : 0;
    right = (node.right && node.val == node.right.val) ? right + 1 : 0;
    res[0] = Math.max(res[0], left + right);
    return Math.max(left, right);
};

// Accepted --- 360ms 84.7MB 9.64%
const longestUnivaluePath2 = (root) => {
    res = [0];
    if (root) helper2(root, root.val, res);
    return res[0];
};

const helper2 = (node, parent, res) => {
    if (!node) return 0;
    let left = helper2(node.left, node.val, res);
    let right = helper2(node.right, node.val, res);
    res[0] = Math.max(res[0], left + right);
    if (node.val == parent) return Math.max(left, right) + 1;
    return 0;
};

const main = () => {
    let root = new TreeNode(5);
    root.left = new TreeNode(4);
    root.right = new TreeNode(5);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(1);
    root.right.right = new TreeNode(5);
    console.log(longestUnivaluePath(root));
    console.log(longestUnivaluePath1(root));
    console.log(longestUnivaluePath2(root));

    let root2 = new TreeNode(1);
    root2.left = new TreeNode(4);
    root2.right = new TreeNode(5);
    root2.left.left = new TreeNode(4);
    root2.left.right = new TreeNode(4);
    root2.right.right = new TreeNode(5);
    console.log(longestUnivaluePath(root2));
    console.log(longestUnivaluePath1(root2));
    console.log(longestUnivaluePath2(root2));
};

main()