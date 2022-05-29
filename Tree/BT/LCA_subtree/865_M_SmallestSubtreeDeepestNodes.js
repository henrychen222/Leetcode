/**
 * 05/12/22 night
 * https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/
 */

const pr = console.log;

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 96ms 41.61%
let maxD;
let MAX = 501;
const subtreeWithAllDeepest = (root) => {
    d = Array(MAX).fill(0);
    getAllDepth(root, 0);
    maxD = Math.max(...d);
    // pr(d, maxD)
    return dfs(root, 0);
};

// reference: https://www.geeksforgeeks.org/lowest-common-ancestor-of-the-deepest-leaves-of-a-binary-tree/
const dfs = (node, depth) => {
    if (!node) return null;
    if (depth == maxD) return node; // deepest leaves
    let subTreeL = dfs(node.left, depth + 1);
    let subTreeR = dfs(node.right, depth + 1);
    if (subTreeL) {
        if (subTreeR) {
            return node;
        } else {
            return subTreeL;
        }
    } else {
        return subTreeR;
    }
};

const getAllDepth = (node, depth) => {
    if (!node) return;
    d[node.val] = depth;
    getAllDepth(node.left, depth + 1);
    getAllDepth(node.right, depth + 1);
};


const printTree = (root) => { // level order bfs with null
    let q = [root],
        a = [];
    while (q.length) {
        let cur = q.shift();
        a.push(cur != null ? cur.val : null);
        if (cur != null) {
            q.push(cur.left);
            q.push(cur.right);
        }
    }
    while (a[a.length - 1] == null) a.pop();
    console.log(JSON.stringify(a));
};

const main = () => {
    let root = new TreeNode(3);
    root.left = new TreeNode(5);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(6);
    root.left.right = new TreeNode(2);
    root.left.right.left = new TreeNode(7);
    root.left.right.right = new TreeNode(4);
    root.right.left = new TreeNode(0);
    root.right.right = new TreeNode(8);
    printTree(root);
    let res = subtreeWithAllDeepest(root);
    pr("res", res);
    printTree(res);


    let root2 = new TreeNode(3);
    root2.left = new TreeNode(5);
    root2.right = new TreeNode(1);
    root2.left.left = new TreeNode(6);
    root2.left.right = new TreeNode(2);
    root2.left.right.left = new TreeNode(7);
    root2.left.right.right = new TreeNode(4);
    root2.right.left = new TreeNode(0);
    root2.right.left.left = new TreeNode(9);
    root2.right.right = new TreeNode(8);
    printTree(root2);
    let res2 = subtreeWithAllDeepest(root2);
    pr("res2", res2);
    printTree(res2);
};

main()