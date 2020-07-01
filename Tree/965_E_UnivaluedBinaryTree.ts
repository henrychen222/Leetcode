/**
 * 6.30 evening
 * https://leetcode.com/problems/univalued-binary-tree/
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

// Accepted --- 80ms 37.3MB 100.00%
const isUnivalTree = (root: TreeNode | null): boolean => {
    let data = inorder(root);
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if ((data[i] != data[j])) {
                return false;
            }
        }
    }
    return true;
}

const inorder = (root: TreeNode | null): number[] => {
    if (root == null) return [];
    let left = inorder(root.left);
    let right = inorder(root.right);
    return left.concat(root.val).concat(right);
}

const main = () => {
    // [1,1,1,1,1,null,1]
    let root = new TreeNode(1);
    root.left = new TreeNode(1);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(1);
    root.right.right = new TreeNode(1);
    console.log(isUnivalTree(root));

    // [2,2,2,5,2]
    let root2 = new TreeNode(2);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(2);
    root2.left.left = new TreeNode(5);
    root2.left.right = new TreeNode(2);
    console.log(isUnivalTree(root2));
}

main()