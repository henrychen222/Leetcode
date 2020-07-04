/**
 * 7.3 morning
 * https://leetcode.com/problems/symmetric-tree/
 * reference: https://www.cnblogs.com/grandyang/p/4051715.html
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 88ms 38.5MB 25.50%  iteration
const isSymmetric = (root) => {
    if (!root) return true;
    let q1 = [];
    let q2 = [];
    q1.push(root.left);
    q2.push(root.right);
    while (q1.length != 0 && q1.length != 0) {
        let node1 = q1[0];
        q1.shift();
        let node2 = q2[0];
        q2.shift();
        if (!node1 && !node2) continue;
        if ((node1 && !node2) || (!node1 && node2)) return false;
        if (node1.val != node2.val) return false;
        q1.push(node1.left);
        q2.push(node2.right); // compare left->left with right->right
        q1.push(node1.right);
        q2.push(node2.left); // compare left->right with right->left
    }
    return true;
};

// Accepted --- 100ms 38.4MB 14.43%
const isSymmetric_recursion = (root) => {
    if (!root) return true;
    return helper(root.left, root.right);
};

const helper = (left, right) => {
    if (!left && !right) return true;
    if ((left && !right) || (!left && right)) return false;
    if (left.val != right.val) return false;
    return helper(left.left, right.right) && helper(left.right, right.left);
};

const main = () => {
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(3);
    console.log(isSymmetric(root));
    console.log(isSymmetric_recursion(root));

    let root2 = new TreeNode(1);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(2);
    root2.left.right = new TreeNode(3);
    root2.right.right = new TreeNode(3);
    console.log(isSymmetric(root2));
    console.log(isSymmetric_recursion(root2));
};

main()