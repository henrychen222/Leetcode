/**
 * 07/01/20 night
 * https://leetcode.com/problems/search-in-a-binary-search-tree/
 * reference: https://www.cnblogs.com/grandyang/p/9912434.html
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function search(root, v) { // 02/27/22 evening
    if (!root || root.val == v) return root;
    return v < root.val ? search(root.left, v) : search(root.right, v);
}

// Accepted --- 96ms 75.94%
const searchBST2 = (root, val) => search(root, val);

////////////////////////////////////////////////////////////////
// Accepted --- 92ms 42.2MB 46.83%
const searchBST = (root, val) => {
    if (!root) return null;
    if (root.val == val) return root;
    if (root.val > val) { // 二叉搜索树 左<根<右
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
};

// Accepted --- 92ms 42.8MB 46.83%
const searchBST_iteration = (root, val) => {
    while (root && root.val != val) {
        if (root.val > val) {
            root = root.left;
        } else {
            root = root.right;
        }
    }
    return root;
};

const main = () => {
    let root = new TreeNode(4);
    root.left = new TreeNode(2);
    root.right = new TreeNode(7);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);
    console.log(searchBST(root, 2));
    console.log(searchBST_iteration(root, 2));
};

main()