/**
 * 10.3 evening
 * https://leetcode.com/contest/weekly-contest-209/problems/even-odd-tree/
 */


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted
const isEvenOddTree = (root) => {
    let data = levelOrder_BFS(root);
    console.log(data);
    let n = data.length;
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            if (!isAscending(data[i]) || !isAllOdd(data[i])) {
                return false;
            }
        } else {
            if (!isDescending(data[i]) || !isAllEven(data[i])) {
                return false;
            }
        }
    }
    return true;
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

const isAscending = (arr) => {
    return arr.every((x, i) => {
        return i === 0 || x > arr[i - 1];
    });
};

const isDescending = (arr) => {
    return arr.every((x, i) => {
        return i === 0 || x < arr[i - 1];
    });
};

const isAllOdd = (arr) => {
    for (const i of arr) {
        if (i % 2 == 0) return false;
    }
    return true;
};

const isAllEven = (arr) => {
    for (const i of arr) {
        if (i % 2 == 1) return false;
    }
    return true;
};

const main = () => {
    // root = [1,10,4,3,null,7,9,12,8,6,null,null,2]
    let root = new TreeNode(1);
    root.left = new TreeNode(10);
    root.right = new TreeNode(4);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(12);
    root.left.left.right = new TreeNode(8);
    root.right.left = new TreeNode(7);
    root.right.left.left = new TreeNode(6);
    root.right.right = new TreeNode(9);
    root.right.right.right = new TreeNode(2);
    console.log(isEvenOddTree(root));
};

main()