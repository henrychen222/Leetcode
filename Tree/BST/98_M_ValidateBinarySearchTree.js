/**
 * 02/27/22 afternoon
 * https://leetcode.com/problems/validate-binary-search-tree/
 * 
 * reference:https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const pr = console.log;

const isValidBST = (root) => dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

// Accepted --- 98ms 63.23%
const dfs = (node, min, max) => { // use this way
    if (!node) return true;
    // pr(node.val, min, max, node.val <= min, node.val >= max);
    if (node.val <= min || node.val >= max) return false;
    return dfs (node.left, min, node.val) && dfs (node.right, node.val, max);
};

// Accepted --- 103ms
// const dfs = (node, min, max) => {
//     if (!node) return true;
//     if (node.val < min || node.val > max) return false;
//     return dfs(node.left, min, node.val - 1) && dfs(node.right, node.val + 1, max);
// };

//////////////////////////////////////////////////////////////////
const isValidBST1 = (root) => dfs1(root, null, null);

// Accepted --- 60ms 99.75%
const dfs1 = (node, l, r) => {
    if (!node) return true;
    if (l && l.val >= node.val) return false;
    if (r && r.val <= node.val) return false;
    return dfs1(node.left, l, node) && dfs1(node.right, node, r);
};

// WA
// const dfs1 = (node) => {
//    if (!node) return true;
//    if (node.left && node.left.val >= node.val) return false;
//    if (node.right && node.right.val <= node.val) return false;
//    return dfs1(node.left) && dfs1(node.right);
// };

const buildTree = (a) => {
    let root = null, q = [], i = 0, t = a[i] ? new TreeNode(a[i]) : null;
    root = t;
    q.push(root);
    i++;
    while (q.length && i < a.length) {
        let cur = q.shift();
        if (cur) {
            cur.left = a[i] ? new TreeNode(a[i]) : null;
            q.push(cur.left);
            i++;
            if (i >= a.length) break;
            cur.right = a[i] ? new TreeNode(a[i]) : null;
            q.push(cur.right);
            i++;
        }
    }
    return root;
};

const main = () => {
    let root = [2, 1, 3];
    let root2 = [5, 1, 4, null, null, 3, 6];
    let debug1 = [5, 4, 6, null, null, 3, 7];
    pr(isValidBST(buildTree(root)))
    pr(isValidBST(buildTree(root2)))
    pr(isValidBST(buildTree(debug1))) // false
};

main()