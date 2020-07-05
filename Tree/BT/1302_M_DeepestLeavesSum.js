/**
 * 7.4 morning
 * https://leetcode.com/problems/deepest-leaves-sum/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 156ms 46.4MB 9.59%
const deepestLeavesSum = (root) => {
    let data = levelOrder_BFS(root);
    let sum = 0;
    for (const i of data[data.length - 1]) {
        sum += i;
    }
    return sum;
};

const levelOrder_BFS = (root) => {
    let data = [];
    getAllLevels(root, 0, data);
    return data;
};

const getAllLevels = (root, level, data) => {
    if (!root) return;
    if (level >= data.length) {
        let list = [];
        data.push(list);
    }
    data[level].push(root.val);
    getAllLevels(root.left, level + 1, data);
    getAllLevels(root.right, level + 1, data);
};


const main = () => {
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.left.left.left = new TreeNode(7);
    root.right.right = new TreeNode(6);
    root.right.right.right = new TreeNode(8);
    console.log(deepestLeavesSum(root));
};

main()