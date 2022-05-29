/**
 * 05/12/22 night
 * https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/
 * 
 * same problem with 865
 * https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/
 */

// Accepted --- 73ms 92.11%
let maxD;
let MAX = 1001;
const lcaDeepestLeaves = (root) => {
    d = Array(MAX).fill(0);
    getAllDepth(root, 0);
    maxD = Math.max(...d);
    return dfs(root, 0);
};

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