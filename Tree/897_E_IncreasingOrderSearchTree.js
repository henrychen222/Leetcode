/**
 * 6.29 night
 * https://leetcode.com/problems/n-ary-tree-postorder-traversal/
 * reference: https://www.cnblogs.com/grandyang/p/10970623.html
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 64ms 33.7MB 63.19%
const increasingBST = (root) => {
    return helper(root, null);
};

const helper = (node, prev) => {
    if (!node) return prev;
    let res = helper(node.left, node);
    node.left = null;
    node.right = helper(node.right, prev);
    return res;
};

// Accepted --- 104ms 33.7MB 5.51%
const increasingBST2 = (root) => {
    let mock = new TreeNode(-1);
    let prev = mock;
    let stack = [];
    while (root || stack.length != 0) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack[stack.length - 1];
        stack.pop();
        prev.right = root;
        prev = prev.right;
        root.left = null;
        root = root.right;
    }
    return mock.right;
};

const main = () => {
    // [5,3,6,2,4,null,8,1,null,null,null,7,9]
    let root = new TreeNode(5);
    root.left = new TreeNode(3);
    root.right = new TreeNode(6);
    root.left.left = new TreeNode(2);
    root.left.right = new TreeNode(4);
    root.left.left.left = new TreeNode(1);
    root.right.right = new TreeNode(8);
    root.right.right.left = new TreeNode(7);
    root.right.right.right = new TreeNode(9);
    // console.log(increasingBST(root));
    console.log(increasingBST2(root)); // run seperately
};

main()