/**
 * 02/27/22 night
 * https://leetcode.com/problems/delete-leaves-with-a-given-value/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const pr = console.log;

// Accepted --- 102ms 67.70%
// reference: https://zxi.mytechroad.com/blog/tree/leetcode-1325-delete-leaves-with-a-given-value/
let t;
const removeLeafNodes = (root, target) => {
    t = target;
    return dfs(root);
};

const dfs = (node) => {
    if (!node) return null;
    node.left = dfs(node.left);
    node.right = dfs(node.right);
    return !node.left && !node.right && node.val == t ? null : node; // leafs and equal given sum set to null
    // return node.left || node.right || node.val != t ? node : null; // Accepted --- 106ms 66.46%
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
    let root = [1, 2, 3, 2, null, 2, 4],
        target = 2;
    let root2 = [1, 3, 3, 3, 2],
        target2 = 3;
    let root3 = [1, 2, null, 2, null, 2],
        target3 = 2;
    printTree(removeLeafNodes(buildTree(root), target))
    printTree(removeLeafNodes(buildTree(root2), target2))
    printTree(removeLeafNodes(buildTree(root3), target3))
};

main()