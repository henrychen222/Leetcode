/**
 * 7.4 morning
 * https://leetcode.com/problems/all-elements-in-two-binary-search-trees/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 388ms 72MB 14.41%
const getAllElements = (root1, root2) => {
    let data1 = inOrder_DFS(root1);
    let data2 = inOrder_DFS(root2);
    return data1.concat(data2).sort((a, b) => a - b);
};

const inOrder_DFS = (root) => {
    if (!root) return [];
    let left = inOrder_DFS(root.left);
    let right = inOrder_DFS(root.right);
    return left.concat(root.val).concat(right);
};

const main = () => {
    let root1 = new TreeNode(2);
    root1.left = new TreeNode(1);
    root1.right = new TreeNode(4);
    let root2 = new TreeNode(1);
    root2.left = new TreeNode(0);
    root2.right = new TreeNode(3);
    console.log(getAllElements(root1, root2));
};

main()