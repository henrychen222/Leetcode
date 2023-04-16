/*
 * 11/19/22 evening
 * https://leetcode.com/contest/weekly-contest-320/problems/closest-nodes-queries-in-a-binary-search-tree/
 */

const pr = console.log;

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// TLE
// const closestNodes1 = (root, queries) => {
//     let d = inOrder_DFS(root);
//     d.sort((x, y) => x - y);
//     let maxD = d[d.length - 1], minD = d[0], a = Array(maxD + 1).fill(0), res = [];
//     // pr(d)
//     for (let i = 0; i + 1 < d.length; i++) {
//         let l = d[i], r = d[i + 1];
//         for (let x = l; x <= r; x++) {
//             if (x == l || x == r) {
//                 a[x] = [x, x];
//             } else {
//                 a[x] = [l, r];
//             }
//         }
//     }
//     // pr(a);
//     for (const x of queries) {
//         if (x > maxD) {
//             res.push([maxD, -1]);
//         } else if (x < minD) {
//             res.push([-1, minD]);
//         } else {
//             res.push(a[x]);
//         }
//     }
//     return res;
// };

function Bisect() {
    return { insort_right, insort_left, bisect_left, bisect_right }
    function insort_right(a, x, lo = 0, hi = null) {
        lo = bisect_right(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_right(a, x, lo = 0, hi = null) { // > upper_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] > x ? hi = mid : lo = mid + 1;
        }
        return lo;
    }
    function insort_left(a, x, lo = 0, hi = null) {
        lo = bisect_left(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_left(a, x, lo = 0, hi = null) { // >= lower_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

// Accepted
const closestNodes = (root, queries) => {
    inorderTraversal(root);
    d.sort((x, y) => x - y);
    // pr(d)
    let maxD = d[d.length - 1], minD = d[0], res = [], bi = new Bisect();
    for (const x of queries) {
        if (x > maxD) {
            res.push([maxD, -1]);
        } else if (x < minD) {
            res.push([-1, minD]);
        } else {
            let r = bi.bisect_left(d, x), l = d[r] == x ? r : r - 1;
            // pr(l, r);
            res.push([d[l], d[r]]);
        }
    }
    return res;
};

let d;
const inorderTraversal = (root) => {
    d = [];
    dfs(root);
    return d;
};

const dfs = (node) => {
   if (!node) return;
   dfs(node.left);
   d.push(node.val);
   dfs(node.right);
};

// fuck cause TLE
// const inOrder_DFS = (root) => {
//     if (!root) return [];
//     let left = inOrder_DFS(root.left);
//     let right = inOrder_DFS(root.right);
//     return left.concat(root.val).concat(right);
// };

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
    let root = [6, 2, 13, 1, 4, 9, 15, null, null, null, null, null, null, 14], queries = [2, 5, 16];
    let root2 = [4, null, 9], queries2 = [3]
    pr(closestNodes(buildTree(root), queries));
    pr(closestNodes(buildTree(root2), queries2));
};

main()
