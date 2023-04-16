// 02/09/21 evening

//////////////////////////////// BFS /////////////////////////////////////
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


//////////////////////////////// DFS /////////////////////////////////////
const inOrder_DFS = (root) => { // fast
    let d = [];
    dfs(root, d);
    return d;
};

const dfs = (node, d) => {
    if (!node) return;
    dfs(node.left, d);
    d.push(node.val);
    dfs(node.right, d);
};

// const inOrder_DFS = (root) => { // slow
//     if (!root) return [];
//     let left = inOrder_DFS(root.left);
//     let right = inOrder_DFS(root.right);
//     return left.concat(root.val).concat(right);
// };

const preOrder_DFS = (root) => {
    if (!root) return [];
    let left = preOrder_DFS(root.left);
    let right = preOrder_DFS(root.right);
    return [root.val].concat(left).concat(right);
};

const postOrder_DFS = (root) => {
    if (!root) return [];
    let left = postOrder_DFS(root.left);
    let right = postOrder_DFS(root.right);
    return left.concat(right).concat(root.val);
};


//////////////////////////////// PATH /////////////////////////////////////
const getAllPathNew = (root) => {
    let res = [];
    let path = [];
    DFS(root, path, res);
    return res;
};

const DFS = (node, path, res) => {
    if (!node) return;
    path.push(node.val);
    if (!node.left && !node.right) res.push([...path]);
    DFS(node.left, path, res);
    DFS(node.right, path, res);
    path.pop();
};


/**
 * 02/27/22 evening
 * reference: 
 * https://www.geeksforgeeks.org/deletion-binary-tree/
 */

const bt = require("./buildTree");

// BT (binary tree)
function deletion(root, v) {
    if (!root) return;
    if (!root.left && !root.right) {
        if (v == root.val) root = null;
        return;
    }
    let q = [root], cur = null, find = null;
    while (q.length > 0) {
        cur = q.shift();
        if (cur.val == v) find = cur;
        if (cur.left) q.push(cur.left);
        if (cur.right) q.push(cur.right);
    }
    if (find) {
        let x = cur.val;
        deleteDeepest(root, cur);
        find.val = x;
    }
}
function deleteDeepest(root, delNode) {
    let q = [root];
    while (q.length > 0) {
        let cur = q.shift();
        if (cur == delNode) {
            cur = null;
            return;
        }
        if (cur.right) {
            if (cur.right == delNode) {
                cur.right = null;
                return;
            } else {
                q.push(cur.right);
            }
        }
        if (cur.left) {
            if (cur.left == delNode) {
                cur.left = null;
                return;
            } else {
                q.push(cur.left);
            }
        }
    }
}

const main = () => {
    let a = [13, 12, 10, 4, 19, 16, 9];
    let root = bt.buildTree(a);
    bt.printTree(root); // [13,12,10,4,19,16,9]
    deletion(root, 12);
    bt.printTree(root); // [13,9,10,4,19,16]
};

main()