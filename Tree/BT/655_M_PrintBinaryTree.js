/**
 * 11/20/21 afternoon
 * https://leetcode.com/problems/print-binary-tree/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const initialize2DArray = (n, m) => { let data = []; for (let i = 0; i < n; i++) { let tmp = Array(m).fill(""); data.push(tmp); } return data; };

// Accepted --- 76ms
let h;
const printTree = (root) => {
   let dd = levelOrder_BFS(root);
   let n = dd.length, m = 2 ** n - 1;
   h = n - 1;
   // pr(dd);
   let g = initialize2DArray(n, m);
   let d = inOrder_DFS(root, 0, (m - 1) / 2);
   // pr(d);
   for (const e of d) {
       let [x, i, j] = e;
       g[i][j] = x + "";
   }
   return g;
};

const inOrder_DFS = (root, r, c) => {
    if (!root) return [];
    let left = inOrder_DFS(root.left, r + 1, c - 2 ** (h - r - 1));
    let right = inOrder_DFS(root.right, r + 1, c + 2 ** (h - r - 1));
    return left.concat([[root.val, r, c]]).concat(right);
};

const levelOrder_BFS = (root) => {
    let data = [];
    getAllLevels(root, 0, data);
    return data;
};

const getAllLevels = (root, level, data) => {
    if (!root) return;
    if (level >= data.length) data.push([]);
    data[level].push(root.val);
    getAllLevels(root.left, level + 1, data);
    getAllLevels(root.right, level + 1, data);
};

const pr = console.log;
const main = () => {
    let root = new TreeNode(1);
    root.left = new TreeNode(2);

    let root2 = new TreeNode(1);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(3);
    root2.left.right = new TreeNode(4);
    pr(printTree(root))
    pr(printTree(root2))
};

main()