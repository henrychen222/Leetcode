
/**
 * 03/05/22 evening
 * https://leetcode.com/contest/weekly-contest-283/problems/cells-in-a-range-on-an-excel-sheet/
 */

const pr = console.log;


const createBinaryTree = (parent) => {
    return createTree(parent, parent.length);
};

// reference: https://www.geeksforgeeks.org/construct-a-binary-tree-from-parent-array-representation/
function createTree(parent, n) {
    let created = Array(n).fill(null);
    for (var i = 0; i < n; i++) dfs(parent, i, created);
    return root;
}

function dfs(parent, i, created) {
    if (created[i] != null) return;
    created[i] = new TreeNode(i);
    if (parent[i] == -1) {
        root = created[i];
        return;
    }
    if (created[parent[i]] == null) dfs(parent, parent[i], created);
    let p = created[parent[i]];
    if (p.left == null) {
        p.left = created[i];
    } else {
        p.right = created[i];
    }
}

const inOrder_DFS = (root) => {
    if (!root) return [];
    let left = inOrder_DFS(root.left);
    let right = inOrder_DFS(root.right);
    return left.concat(root.val).concat(right);
};

const main = () => {
    let parent = [-1, 0, 0, 1, 1, 3, 5];
    let root = createBinaryTree(parent);
    printTree(root)
    pr(inOrder_DFS(root)) // [ 6, 5, 3, 1, 4, 0, 2]
};

main()
