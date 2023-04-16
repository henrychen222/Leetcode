/**
 * 5.23 night
 * https://leetcode.com/contest/weekly-contest-190/problems/pseudo-palindromic-paths-in-a-binary-tree/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const pseudoPalindromicPaths = (root) => {
    let count = 0
    if (checkPalindrom(getAllPaths)) {
        count++;
    }
    return count
};

const checkPalindrom = (str) => {
    return str == str.split('').reverse().join('');
}

const getAllPaths = (node, path, pathLen) => {
    if (node == null) return;
    path[pathLen] = node.val;
    // console.log(node.val)
    pathLen++;
    if (node.left == null && node.right == null) {
        return getArray(path, pathLen);
    } else {
        getAllPaths(node.left, path, pathLen);
        getAllPaths(node.right, path, pathLen);
    }
}

const getArray = (ints, len) => {
    let res = [];
    for (let i = 0; i < len; i++) {
        console.log(ints[i] + "")
        res.push(ints[i] + "");
    }
    console.log(res);
    return res;
}

const main = () => {
    // [2, 3, 1, 3, 1, null, 1];
    let root = new TreeNode(2);
    root.left = new TreeNode(3);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(1);
    root.right.right = new TreeNode(1);

    let path = [];
    for (let i = 0; i < 1000; i++) {
        path.push("")
    }
    console.log(getAllPaths(root, path, 0));
    // console.log(pseudoPalindromicPaths(root));
};

main();