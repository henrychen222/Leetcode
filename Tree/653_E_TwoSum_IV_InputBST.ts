/**
 * 6.28 night
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
 */

export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

// Accepted --- 120ms 45.8MB 100.00%
const findTarget = (root: TreeNode | null, k: number): boolean => {
    let data = inorder(root);
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if ((data[i] + data[j]) == k) {
                return true;
            }
        }
    }
    return false;
};

// https://stackoverflow.com/questions/49063499/inorder-traversal-of-tree-in-python-returning-a-list
const inorder = (root: TreeNode | null): number[] => {
    if (root == null) return [];
    let left = inorder(root.left);
    let right = inorder(root.right);
    return left.concat(root.val).concat(right);
};

const main = () => {
    let root = new TreeNode(5);
    root.left = new TreeNode(3);
    root.right = new TreeNode(6);
    root.left.left = new TreeNode(2);
    root.left.right = new TreeNode(4);
    root.right.right = new TreeNode(7);
    let k = 9;
    console.log(findTarget(root, k));

    let k2 = 28;
    console.log(findTarget(root, k2));
}

main()