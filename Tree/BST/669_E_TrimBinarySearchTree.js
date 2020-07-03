/**
 * 7.2 night
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * reference: https://www.cnblogs.com/grandyang/p/7583185.html
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 160ms 41.2MB 6.37%
const trimBST = (root, L, R) => {
    if (!root) return null;
    if (root.val < L) {
        return trimBST(root.right, L, R);
    }
    if (root.val > R) {
        return trimBST(root.left, L, R);
    }
    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);
    return root;
};

// Accepted --- 84ms 41.7MB 41.83%
const trimBST_iteration = (root, L, R) => {
    if (!root) return null;
    while (root.val < L || root.val > R) {
        if (root.val < L) {
            root = root.right;
        } else {
            root = root.left;
        }
    }
    let current = root;
    while (current) { // Remove the invalid nodes from left subtree.
        while (current.left && current.left.val < L) {
            current.left = current.left.right; // If the left child is smaller than L, then we just keep the right subtree of it. 
        }
        current = current.left;
    }
    current = root;
    while (current) { // Remove the invalid nodes from right subtree
        while (current.right && current.right.val > R) {
            current.right = current.right.left; // If the right child is bigger than R, then we just keep the left subtree of it. 
        }
        current = current.right;
    }
    return root;
};

const main = () => {
    let root = new TreeNode(1);
    root.left = new TreeNode(0);
    root.right = new TreeNode(2);
    let L = 1,
        R = 2;
    console.log(trimBST(root, L, R));
    console.log(trimBST_iteration(root, L, R));

    let root2 = new TreeNode(3);
    root2.left = new TreeNode(0);
    root2.right = new TreeNode(4);
    root2.left.right = new TreeNode(2);
    root2.left.right.left = new TreeNode(1);
    let L2 = 1,
        R2 = 3;
    console.log(trimBST(root2, L2, R2));
    console.log(trimBST_iteration(root2, L2, R2));
};

main()