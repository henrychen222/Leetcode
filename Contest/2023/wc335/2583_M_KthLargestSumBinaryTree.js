/*
 * 03/10/23 night
 * https://leetcode.com/contest/weekly-contest-335/problems/kth-largest-sum-in-a-binary-tree/
 */

const pr = console.log;

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const sm = (a) => a.reduce(((x, y) => x + y), 0);

const kthLargestLevelSum = (root, k) => {
    let d = levelOrder_BFS(root), res = d.map(a => sm(a)).sort((x, y) => y - x)[k - 1];
    return res ? res : -1;
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
    let root = [5, 8, 9, 2, 1, 3, 7, 4, 6], k = 2;
    let root2 = [1, 2, null, 3], k2 = 1
    pr(kthLargestLevelSum(buildTree(root), k));
    pr(kthLargestLevelSum(buildTree(root2), k2));
};

main()