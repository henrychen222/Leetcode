// 02/09/21 evening
const bt = require("./buildTree");


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const createBSTFromSortedArray = (nums, start, end) => {
    if (start > end) return null;
    let mid = start + end >> 1;
    let root = new TreeNode(nums[mid]);
    root.left = createBSTFromSortedArray(nums, start, mid - 1);
    root.right = createBSTFromSortedArray(nums, mid + 1, end);
    return root;
};


/**
 * 02/27/22 evening
 * reference:
 * https://www.techiedelight.com/insertion-in-bst/
 * https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/
 * 
 * deletion
 * https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/
 */

// BST (binary search tree)
function search(root, v) { // https://leetcode.com/problems/search-in-a-binary-search-tree/
    if (!root || root.val == v) return root;
    return v < root.val ? search(root.left, v) : search(root.right, v);
}
function insert(root, v) { // https://leetcode.com/problems/insert-into-a-binary-search-tree/
    if (!root) return new TreeNode(v);
    v < root.val ? root.left = insert(root.left, v) : root.right = insert(root.right, v);
    return root;
}
function deletion(root, v) { // https://leetcode.com/problems/delete-node-in-a-bst/
    if (!root) return root;
    if (v < root.val) {
        root.left = deletion(root.left, v);
    } else if (v > root.val) {
        root.right = deletion(root.right, v);
    } else {
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        let minNode = searchLeft(root.right);
        root.val = minNode.val;
        root.right = deletion(root.right, minNode.val);
    }
    return root;
}
function searchLeft(node) {
    while (node.left) node = node.left;
    return node;
}

const pr = console.log;
const main = () => {
    let a = [15, 10, 20, 8, 12, 16, 25];
    let root = bt.buildTree(a);
    bt.printTree(root);
    insert(root, 100);
    bt.printTree(root);
    pr(search(root, 10).val)
    pr(search(root, 100).val)
    deletion(root, 25);
    bt.printTree(root);
};

main()