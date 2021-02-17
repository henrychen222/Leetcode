/**
 * 2.15 night
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 512ms 6.20%
let se;
const goodNodes = (root) => {
    let p = getAllPathNew_TLR_WithValue(root);
    // console.log(p);
    se = new Set([p[0][0]]);
    for (const a of p) count(a);
    // console.log(se);
    return se.size;
};

const count = (a) => {
    let n = a.length;
    let curMax = getNodeVal(a[0]);
    for (let i = 1; i < n; i++) {
        let num = getNodeVal(a[i]);
        if (num >= curMax) {
            se.add(a[i]);
            curMax = num;
        }
    }
};

const getNodeVal = (s) => {
    let res = '';
    for (const c of s) {
        if (c == 'T' || c == 'L' || c == 'R') {
            break;
        } else {
            res += c;
        }
    }
    return Number(res);
};

const getAllPathNew_TLR_WithValue = (root) => {
    let res = [];
    let path = [];
    dfs(root, path, res, false, true);
    return res;
};

const dfs = (node, path, res, isLeft, isRoot) => {
    if (!node) return;
    let n = path.length;
    if (!isRoot) {
        if (isLeft) {
            path.push(node.val + 'L' + n + (n == 0 ? 'z' : path[n - 1]));
        } else {
            path.push(node.val + 'R' + n + (n == 0 ? 'z' : path[n - 1]));
        }
    } else {
        path.push(node.val + 'T' + n);
    }
    if (!node.left && !node.right) res.push([...path]);
    dfs(node.left, path, res, true, false);
    dfs(node.right, path, res, false, false);
    path.pop();
};

const main = () => {
    let root = new TreeNode(3);
    root.left = new TreeNode(1);
    root.right = new TreeNode(4);
    root.left.left = new TreeNode(3);
    root.right.left = new TreeNode(1);
    root.right.right = new TreeNode(5);
    console.log(goodNodes(root));

    /**
     *           2
     *        4     4
     *      4     1   3
     *          5  
     *            5
     *          4   4
     */
    let debug = new TreeNode(2);
    debug.left = new TreeNode(4);
    debug.right = new TreeNode(4);
    debug.left.left = new TreeNode(4);
    debug.right.left = new TreeNode(1);
    debug.right.right = new TreeNode(3);
    debug.right.left.left = new TreeNode(5);
    debug.right.left.left.right = new TreeNode(5);
    debug.right.left.left.right.left = new TreeNode(4);
    debug.right.left.left.right.right = new TreeNode(4);
    console.log(goodNodes(debug)); // 6
}

main();

// getNodeVal('4L2Tz');