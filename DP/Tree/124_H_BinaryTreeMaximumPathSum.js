/*
 * 01/14/22 night
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 */

const pr = console.log;

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const sm = (a) => a.reduce(((x, y) => x + y), 0);

// Accepted --- 86ms 83.9%
// reference: https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/39775/accepted-short-solution-in-java/
let res;
const maxPathSum = (root) => {
    res = Number.MIN_SAFE_INTEGER;
    dfs(root)
    return res;
};

const dfs = (cur) => {
    if (cur == null) return 0;
    let childs = [cur.left, cur.right];
    let d = [];
    for (const child of childs) d.push(Math.max(0, dfs(child)));
    // pr(d)
    let v = sm(d) + cur.val;
    res = Math.max(res, v); // both subtree finish backtrack to parent
    return Math.max(...d) + cur.val; // continue path  Math.max(leftSubtree sum, rightSubtree sum) + cur
};

/////////////////////////////////////////////
let memo;
const maxPathSum1 = (root) => {
    memo = new Map();
    let res = [];
    let nodes = inOrder_DFS(root);
    // pr(nodes)
    for (const i of nodes) {
        let v = dfs(i);
        res.push(v);
    }
    return Math.max(Math.max(...nodes.map(node => node.val)), Math.max(...res));
};

const dfs2 = (cur) => {
    if (cur == null) return;
    let ke = cur.val;
    if (memo.has(ke)) return memo.get(ke);
    let d = [ke];
    let childs = [cur.left, cur.right];
    for (const child of childs) {
        if (child != null) {
            let v = dfs2(child);
            d.push(Math.max(0, v)); // issue  left child -> parent -> right -> parent -> ancestor (not valid path)
        }
    }
    let res = sm(d);
    pr(d, sm(d))
    memo.set(ke, res);
    return res;
};

const inOrder_DFS = (root) => {
    let d = [];
    dfs1(root, d);
    return d;
};

const dfs1 = (node, d) => {
    if (!node) return;
    dfs1(node.left, d);
    d.push(node);
    dfs1(node.right, d);
};

const printTree = (root) => { // level order bfs with null
    let q = [root], a = [];
    while (q.length) {
        let cur = q.shift();
        a.push(cur != null ? cur.val : null);
        if (cur != null) {
            q.push(cur.left);
            q.push(cur.right);
        }
    }
    while (a[a.length - 1] == null) a.pop();
    console.log(JSON.stringify(a));
};

const buildTree = (a) => {
    let i = 0, root = a[i] != null ? new TreeNode(a[i]) : null, q = [root];
    i++;
    while (q.length && i < a.length) {
        let cur = q.shift();
        if (cur) {
            cur.left = a[i] != null ? new TreeNode(a[i]) : null;
            q.push(cur.left);
            i++;
            if (i >= a.length) break;
            cur.right = a[i] != null ? new TreeNode(a[i]) : null;
            q.push(cur.right);
            i++;
        }
    }
    return root;
};

const main = () => {
    let root = [1, 2, 3];
    let root2 = [-10, 9, 20, null, null, 15, 7];
    let debug1 = [2, -1];
    let debug2 = [1, -2, 3];
    let debug3 = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
    pr(maxPathSum(buildTree(root)));
    pr(maxPathSum(buildTree(root2)));
    pr(maxPathSum(buildTree(debug1))); // 2
    pr(maxPathSum(buildTree(debug2))); // 4
    pr(maxPathSum(buildTree(debug3))); // 48
};

main()

/*
      5
     / \
    4   8
   /   / \
  11  13  4
 / \       \
7   2       1

7 + 11 + 4 + 5 + 8 + 13 = 48
*/

