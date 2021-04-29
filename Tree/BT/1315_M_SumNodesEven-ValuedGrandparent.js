/**
 * 04/27/21 night
 * https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 96ms 98.93%
// reference: https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/discuss/477095/Easy-DFS-solution
const sumEvenGrandparent = (root) => {
    let sum = 0;
    const dfs = (cur, p, gp) => { // record currrent, parent, grand parent
        if (!cur) return;
        if (gp && gp.val % 2 == 0) {
            sum += cur.val;
        }
        dfs(cur.left, cur, p);
        dfs(cur.right, cur, p);
    };
    dfs(root, null, null);
    return sum;
};

// WA  5/14
const sumEvenGrandparent2 = (root) => {
    let path = getAllPathNew(root);
    let a = levelOrder_BFS(root);
    // pr(path);
    let m = new Map();
    for (const p of path) {
        let pn = p.length;
        for (let i = 2; i < pn; i++) {
            if (!m.has(p[i])) m.set(p[i], new Set());
            let tmp = JSON.stringify([p[i], p[i - 2]]);
            m.get(p[i]).add(tmp);
        }
    }
    // pr(m);
    // pr(a);
    let n = a.length;
    let res = 0;
    for (let i = 0; i + 2 < n; i++) {
        let gp = a[i];
        let gc = a[i + 2];
        for (const pa of gp) {
            if (pa % 2 == 0) {
                for (const ch of gc) {
                    if (m.has(ch)) {
                        let se = m.get(ch);
                        for (const e of se) {
                            let tmp = JSON.parse(e);
                            if (tmp[1] == pa) {
                                res += ch;
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
    return res;
};

// WA  6/14 
const sumEvenGrandparent1 = (root) => {
    let path = getAllPathNew(root);
    let a = levelOrder_BFS(root);
    // pr(path);
    let m = new Map();
    for (const p of path) {
        let pn = p.length;
        // pr(pn)
        for (let i = 0; i + 2 < pn; i++) {
            // pr(p[i], p[i + 2]);
            if (!m.has(p[i])) m.set(p[i], new Set());
            let gc = JSON.stringify([p[i + 2], i]);
            m.get(p[i]).add(gc);
        }
    }
    // pr(m);
    // pr(a);
    let n = a.length;
    let res = 0;
    for (let i = 0; i + 2 < n; i++) {
        for (const e of a[i]) {
            if (e % 2 == 0 && m.has(e)) {
                let sum = 0;
                let child = m.get(e);
                for (const c of child) {
                    let tmp = JSON.parse(c);
                    sum += tmp[0];
                }
                res += sum;
            }
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

const getAllPathNew = (root) => {
    let res = [];
    let path = [];
    dfs(root, path, res);
    return res;
};

const dfs = (node, path, res) => {
    if (!node) return;
    path.push(node.val);
    if (!node.left && !node.right) res.push([...path]);
    dfs(node.left, path, res);
    dfs(node.right, path, res);
    path.pop();
};

const pr = console.log;
const main = () => {
    let root = new TreeNode(6);
    root.left = new TreeNode(7);
    root.right = new TreeNode(8);
    root.left.left = new TreeNode(2);
    root.left.left.left = new TreeNode(9);
    root.left.right = new TreeNode(7);
    root.left.right.left = new TreeNode(1);
    root.left.right.right = new TreeNode(4);
    root.right.left = new TreeNode(1);
    root.right.right = new TreeNode(3);
    root.right.right.right = new TreeNode(5);
    pr(sumEvenGrandparent(root));
};

main()