/**
 * 7.2 night
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 72ms 39MB 69.05%
const maxDepth = (root) => {
    let data = [];
    getAllLevels(root, 0, data);
    return data.length;
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
    let root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);
    console.log(maxDepth(root));
};

main()