/**
 * 08/20/22 evening
 * https://leetcode.com/contest/weekly-contest-307/problems/amount-of-time-for-binary-tree-to-be-infected/
 */

const pr = console.log;

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const initializeGraphSet = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push(new Set()); } return g; };

// Accepted no time
let g, n;
const amountOfTime = (root, start) => {
    n = 0;
    dfsGetMax(root);
    g = initializeGraphSet(n + 1);
    // pr(n);
    dfs(root);
    let dis = minDis(g, start), res = Number.MIN_SAFE_INTEGER;
    // pr(g);
    for (const x of dis) {
        if (x != Number.MAX_SAFE_INTEGER) res = Math.max(res, x);
    }
    return res;
};

const minDis = (g, start) => {
    let n = g.length, dis = Array(n).fill(Number.MAX_SAFE_INTEGER), q = [start];
    dis[start] = 0;
    while (q.length) {
        let cur = q.shift();
        for (const child of g[cur]) {
            if (dis[child] > dis[cur] + 1) {
                dis[child] = dis[cur] + 1;
                q.push(child);
            }
        }
    }
    return dis;
};

const dfs = (cur) => {
    if (!cur) return;
    if (cur.left) {
        g[cur.val].add(cur.left.val);
        g[cur.left.val].add(cur.val)
    }
    if (cur.right) {
        g[cur.val].add(cur.right.val);
        g[cur.right.val].add(cur.val)
    }
    n = Math.max(n, cur.val);
    dfs(cur.left);
    dfs(cur.right);
};

const dfsGetMax = (cur) => {
    if (!cur) return;
    n = Math.max(n, cur.val);
    dfsGetMax(cur.left);
    dfsGetMax(cur.right);
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
    let root = [1, 5, 3, null, 4, 10, 6, 9, 2], start = 3;
    let root2 = [1], start2 = 1
    let root_debug1 = [1,null,2,null,3,null,4,null,5], start_debug1 = 2;
    pr(amountOfTime(buildTree(root), start));
    pr(amountOfTime(buildTree(root2), start2));
    pr(amountOfTime(buildTree(root_debug1), start_debug1));
};

main()