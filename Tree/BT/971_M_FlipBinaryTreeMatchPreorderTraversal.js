/**
 * 03/29/21 night
 * https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const pr = console.log;

// Accepted --- 84ms 75%
let res, idx, voy;
const flipMatchVoyage = (root, voyage) => {
    res = [];
    idx = 0;
    voy = voyage;
    return dfs(root) ? res : [-1];
};

const dfs = (cur) => {
    if (!cur) return true;
    if (cur.val != voy[idx++]) return false;
    if (cur.left && cur.left.val != voy[idx]) {
        res.push(cur.val);
        return dfs(cur.right) && dfs(cur.left);
    }
    return dfs(cur.left) && dfs(cur.right);
};

// Accepted --- 80ms 92.86%
// let res, idx;
// const flipMatchVoyage = (root, voyage) => {
//     res = [];
//     idx = 0;
//     return dfs(root, voyage) ? res : [-1];
// };

// const dfs = (cur, voy) => {
//     if (!cur) return true;
//     if (cur.val != voy[idx++]) return false;
//     if (cur.left && cur.left.val != voy[idx]) {
//         res.push(cur.val);
//         return dfs(cur.right, voy) && dfs(cur.left, voy);
//     }
//     return dfs(cur.left, voy) && dfs(cur.right, voy);
// };

const main = () => {
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    let voyage = [2, 1];
    pr(flipMatchVoyage(root, voyage));
    let root2 = new TreeNode(1);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(3);
    let voyage2 = [1, 3, 2];
    let voyage3 = [1, 2, 3];
    pr(flipMatchVoyage(root2, voyage2));
    pr(flipMatchVoyage(root2, voyage3));
};

main()