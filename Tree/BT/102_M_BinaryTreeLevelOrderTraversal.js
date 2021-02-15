/**
 * 02/14/21 evening
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 */

// Accepted --- 92ms 24.86%
const levelOrder = (root) => levelOrder_BFS(root);

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