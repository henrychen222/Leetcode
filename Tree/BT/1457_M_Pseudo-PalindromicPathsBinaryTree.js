/**
 * 2.16 night
 * https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// TLE 53/56
let res;
let memo;
const pseudoPalindromicPaths = (root) => {
    res = 0;
    memo = new Set();
    dfs(root, []);
    return res;
};

const ok = (a) => {
    let m = new Map();
    // if ([...new Set(a)].length == 1) return true;
    for (const e of a) {
        m.set(e, m.get(e) + 1 || 1);
    }
    // console.log(a);
    // console.log(m);
    let cntOdd = 0;
    for (const [, v] of m) {
        if (v & 1) cntOdd++;
        if (cntOdd > 1) return false;
    }
    // console.log(cntOdd);
    // if (cntOdd > 1) return false;
    return true;
};

const dfs = (node, path) => {
    if (!node) return;
    path.push(node.val);
    if (!node.left && !node.right) {
        let tmp = [...path];
        let save = tmp.join("");
        if (memo.has(save)) {
            res++;
        } else {
            if (ok(tmp)) {
                res++;
                memo.add(save);
            }
        }
    }
    dfs(node.left, path, res);
    dfs(node.right, path, res);
    path.pop();
};

const main = () => {
    let root = new TreeNode(2);
    root.left = new TreeNode(3);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(1);
    root.right.right = new TreeNode(1);
    console.log(pseudoPalindromicPaths(root));
}

main();