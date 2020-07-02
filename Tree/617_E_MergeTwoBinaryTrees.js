/**
 * 7.1 night
 * https://leetcode.com/problems/merge-two-binary-trees/
 * reference: https://www.cnblogs.com/grandyang/p/7058935.html
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 108ms 44.2MB 27.26%
const mergeTrees = (t1, t2) => {
    if (!t1) return t2;
    if (!t2) return t1;
    let t = new TreeNode(t1.val + t2.val);
    t.left = mergeTrees(t1.left, t2.left);
    t.right = mergeTrees(t1.right, t2.right);
    return t;
};

const main = () => {
    let root = new TreeNode(1);
    root.left = new TreeNode(3);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(5);

    let root2 = new TreeNode(2);
    root2.left = new TreeNode(1);
    root2.right = new TreeNode(3);
    root2.left.right = new TreeNode(4);
    root2.right.right = new TreeNode(7);
    console.log(mergeTrees(root, root2));
};

main()