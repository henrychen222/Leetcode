/**
 * 03/09/21 morning
 * https://leetcode.com/problems/add-one-row-to-tree/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const pr = console.log;

// Accepted --- 96ms 100.00%
const addOneRow = (root, v, d) => {
    if (d == 1) {
        let tmp = new TreeNode(v);
        tmp.left = root;
        return tmp;
    }
    dfs(root, 1, v, d);
    return root;
};

const dfs = (root, level, v, d) => {
    if (!root) return;
    if (level < d - 1) {
        dfs(root.left, level + 1, v, d);
        dfs(root.right, level + 1, v, d);
    } else {
        /* Also Accepted --- 100ms 96%
        [root.left, root.left.left] = [new TreeNode(v), root.left];
        [root.right, root.right.right] = [new TreeNode(v), root.right];
        */
        let tmpL = root.left;
        let tmpR = root.right;
        root.left = new TreeNode(v);
        root.right = new TreeNode(v);
        root.left.left = tmpL;
        root.right.right = tmpR;
    }
};

// const addOneRow1 = (root, v, d) => {
//     let a = levelOrder_BFS(root);
//     let add = Array(a[d - 2].length * 2).fill(v);
//     a.splice(d - 1, 0, add);
//     let res = [];
//     for (const e of a) {
//         for (const v of e) {
//             res.push(v);
//         }
//     }
//     pr(a);
//     pr(res);
//     // return createTreeFromLOT(res, res.length); // don't know
// };

// const levelOrder_BFS = (root) => {
//     let data = [];
//     getAllLevels(root, 0, data);
//     return data;
// };

// const getAllLevels = (root, level, data) => {
//     if (!root) return;
//     if (level >= data.length) data.push([]);
//     data[level].push(root.val);
//     getAllLevels(root.left, level + 1, data);
//     getAllLevels(root.right, level + 1, data);
// };

const main = () => {
    let root = new TreeNode(4);
    root.left = new TreeNode(2);
    root.right = new TreeNode(6);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(1);
    root.right.left = new TreeNode(5);
    let v = 1;
    let d = 2;
    pr(addOneRow(root, v, d));
};

main()


// https://www.geeksforgeeks.org/construct-bst-given-level-order-traversal/
// const createBSTFromLOT = (a, n) => {
//     if (n == 0) return null;
//     let root = null;
//     for (let i = 0; i < n; i++) root = dfs(root, a[i]);
//     return root;
// };

// const dfs = (root, v) => {
//     if (root == null) {
//         root = new TreeNode(v);
//         return root;
//     }
//     if (v <= root.val) {
//         root.left = dfs(root.left, v);
//     } else {
//         root.right = dfs(root.right, v);
//     }
//     return root;
// };


// https://stackoverflow.com/questions/23754060/how-to-construct-a-binary-tree-using-a-level-order-traversal-sequence
// const createTreeFromLOT = (a, n) => {
//     let root = null;
//     let q = [];
//     for (let i = 0; i < n; i++) root = insertNode(root, a[i], q);
//     return root;
// };

// const insertNode = (root, v, q) => {
//     let node = new TreeNode(v);
//     if (root == null) {
//         root = node;
//     } else if (q[0].left == null) {
//         q[0].left = node;
//     } else {
//         q[0].right = node;
//         q.pop();
//     }
//     q.push(node);
//     return root;
// };