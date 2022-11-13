/*
* 09/17/22 evening
* https://leetcode.com/contest/weekly-contest-311/problems/reverse-odd-levels-of-binary-tree/
*/

const pr = console.log;

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted
const reverseOddLevels = (root) => {
    let d = levelOrder_BFS(root), a = [];
    // pr('d', d)
    for (let i = 0; i < d.length; i++) {
        if (i & 1) d[i].reverse();
    }
    // pr(d);
    for (const e of d) {
        for (const x of e) a.push(x);
    }
    // pr('a', a);
    let res = buildTree(a);
    printTree(res)
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

const main = () => {
    let root = [2,3,5,8,13,21,34];
    let root2 = [7,13,11];
    let root3 = [0,1,2,0,0,0,0,1,1,1,1,2,2,2,2]
    reverseOddLevels(buildTree(root));
    reverseOddLevels(buildTree(root2));
    reverseOddLevels(buildTree(root3));

    // pr(printTree(buildTree(root)))
};

main()
