/*
 * 10/29/22 night
 * https://leetcode.com/contest/weekly-contest-317/problems/height-of-binary-tree-after-subtree-removal-queries/
 */

const pr = console.log;

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted
// reference: TsReaper https://leetcode.cn/circle/discuss/7A4iOi/
let dep, L, R, n, cnt;
const treeQueries = (root, queries) => {
    n = 0, cnt = 0, dep = [], L = [], R = [];
    dfs(root, 0);
    // pr(dep)
    let pre = Array(n + 2).fill(0), suf = Array(n + 2).fill(0), res = [];
    for (let i = 1; i <= n; i++) pre[i] = Math.max(pre[i - 1], dep[i]);
    for (let i = n; i > 0; i--) suf[i] = Math.max(suf[i + 1], dep[i]);
    // pr(pre)
    // pr(suf)
    for (const q of queries) res.push(Math.max(pre[L[q] - 1], suf[R[q] + 1]));
    return res;
};

const dfs = (cur, d) => {
    let idx = cur.val;
    n = Math.max(idx, n);
    // pr(dep, L, R);
    while (dep.length < n) {
        dep.push(0);
        L.push(0);
        R.push(0);
    }
    cnt++;
    dep[cnt] = d;
    L[idx] = cnt;
    if (cur.left) dfs(cur.left, d + 1);
    if (cur.right) dfs(cur.right, d + 1);
    R[idx] = cnt;
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
    let root = [1, 3, 4, 2, null, 6, 5, null, null, null, null, null, 7], queries = [4];
    let root2 = [5, 8, 9, 2, 1, 3, 7, 4, 6], queries2 = [3, 2, 4, 8];
    let root_debug1 = [1, null, 5, 3, null, 2, 4], queries_debug1 = [3, 5, 4, 2, 4];
    pr(treeQueries(buildTree(root), queries))
    pr(treeQueries(buildTree(root2), queries2))
    pr(treeQueries(buildTree(root_debug1), queries_debug1)) // [1,0,3,3,3]
};

main()