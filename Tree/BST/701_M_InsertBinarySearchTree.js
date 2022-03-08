/**
 * 02/27/22 evening
 * https://leetcode.com/problems/insert-into-a-binary-search-tree/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const pr = console.log;

function insert(root, v) {
    if (!root) return new TreeNode(v);
    v < root.val ? root.left = insert(root.left, v) : root.right = insert(root.right, v);
    return root;
}

// Accepted --- 137ms 73.00%
const insertIntoBST = (root, val) => {
    if (!root) return new TreeNode(val);
    insert(root, val);
    return root;
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
    let root = [4, 2, 7, 1, 3],
        val = 5;
    let root2 = [40, 20, 60, 10, 30, 50, 70],
        val2 = 25;
    let root3 = [4, 2, 7, 1, 3, null, null, null, null, null, null],
        val3 = 5;
    let root_debug1 = [],
        val_debug1 = 5;
    printTree(insertIntoBST(buildTree(root), val))
    printTree(insertIntoBST(buildTree(root2), val2))
    printTree(insertIntoBST(buildTree(root3), val3))
    printTree(insertIntoBST(buildTree(root_debug1), val_debug1))
};

main()