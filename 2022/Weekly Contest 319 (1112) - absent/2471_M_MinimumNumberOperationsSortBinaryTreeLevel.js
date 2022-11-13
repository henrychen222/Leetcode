/*
 * 11/12/22 night
 * https://leetcode.com/contest/weekly-contest-319/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/
 */

const pr = console.log;

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const minimumOperations = (root) => {
    let d = levelOrder_BFS(root), res = 0;
    for (const a of d) res += minSwapSortArray(a);
    return res;
};

// reference: https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/
const minSwapSortArray = (a) => {
    let n = a.length, b = [...a].sort((x, y) => x - y), m = new Map(), res = 0;
    for (let i = 0; i < n; i++) m.set(a[i], i);
    for (let i = 0; i < n; i++) {
        if (a[i] != b[i]) {
            res++;
            let j = m.get(b[i]);
            m.set(a[i], j);
            m.set(b[i], i);
            [a[i], a[j]] = [a[j], a[i]];
        }
    }
    return res;
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
    let root = [1, 4, 3, 7, 6, 8, 5, null, null, null, null, 9, null, 10]
    let root2 = [1,3,2,7,6,5,4]
    let root3 = [1,2,3,4,5,6];
    pr(minimumOperations(buildTree(root)));
    pr(minimumOperations(buildTree(root2)));
    pr(minimumOperations(buildTree(root3)));
};

main()