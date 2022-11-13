
/**
 * 03/05/22 evening
 * https://leetcode.com/contest/weekly-contest-283/problems/cells-in-a-range-on-an-excel-sheet/
 */

const pr = console.log;

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

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


const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };

// Accepted
const MAX = 1e5 + 1;
const createBinaryTree = (edges) => {
    let g = Array(MAX).fill(null), notRoot = Array(MAX).fill(false);
    for (const edge of edges) {
        let [u, v, dir] = edge;
        if (!g[u]) g[u] = new TreeNode(u);
        if (!g[v]) g[v] = new TreeNode(v);
        // pr(g[u], g[v])
        notRoot[v] = true;
        dir ? g[u].left = g[v] : g[u].right = g[v];
    }
    for (let i = 0; i < MAX; i++) {
        // pr(i, g[i])
        if (g[i] && !notRoot[i]) return g[i];
    }
    return null;
};

const main = () => {
    let descriptions = [[20, 15, 1], [20, 17, 0], [50, 20, 1], [50, 80, 0], [80, 19, 1]]
    let descriptions2 = [[1, 2, 1], [2, 3, 0], [3, 4, 1]];
    printTree(createBinaryTree(descriptions))
    printTree(createBinaryTree(descriptions2))
};

main()
