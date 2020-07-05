/**
 * 7.4 morning
 * https://leetcode.com/problems/path-sum/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 116ms 40.4MB 10.53%
const hasPathSum1 = (root, sum) => {
    let data = [];
    let path = [];
    getAllPath(root, path, data);
    for (const p of data) {
        let tmp = 0;
        for (const i of p) {
            tmp += i;
        }
        if (tmp == sum) {
            return true;
        }
    }
    return false;
};

const getAllPath = (node, path, data) => {
    if (!node) return;
    path.push(node.val);
    if (node.left == null && node.right == null) {
        let temp = [...path];
        data.push(temp);
    }
    getAllPath(node.left, path, data);
    getAllPath(node.right, path, data);
    path.pop();
};

/////////////////////////reference: https://www.cnblogs.com/grandyang/p/4036961.html //////////////////
// Accepted --- 132ms 40.6MB 6.14%
const hasPathSum = (root, sum) => {
    if (!root) return false;
    if (!root.left && !root.right && root.val == sum) return true;
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};

// Accepted --- 108ms 39.2MB 12.75%
const hasPathSum_iteration = (root, sum) => {
    if (!root) return false;
    let q = [root];
    while (q.length != 0) {
        let tmp = q[0];
        q.shift();
        if (!tmp.left && !tmp.right && tmp.val == sum) return true;
        if (tmp.left) {
            tmp.left.val += tmp.val;
            q.push(tmp.left);
        }
        if (tmp.right) {
            tmp.right.val += tmp.val;
            q.push(tmp.right);
        }
    }
    return false;
};

const main = () => {
    let root = new TreeNode(5);
    root.left = new TreeNode(4);
    root.right = new TreeNode(8);
    root.left.left = new TreeNode(11);
    root.left.left.left = new TreeNode(7);
    root.left.left.right = new TreeNode(2);
    root.right.left = new TreeNode(13);
    root.right.right = new TreeNode(4);
    root.right.right.right = new TreeNode(1);
    let sum = 22;
    console.log(hasPathSum1(root, sum));
    console.log(hasPathSum(root, sum));
    console.log(hasPathSum_iteration(root, sum));
};

main()