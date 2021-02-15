/**
 * 02/14/21 evening
 * https://leetcode.com/problems/flip-equivalent-binary-trees/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 84ms 66.13%
const arrayEqual = (a, b) => JSON.stringify(a) == JSON.stringify(b);
const flipEquiv = (root1, root2) => {
    if (!root1 && !root2) return true;
    let a1 = levelOrder_BFS(root1).map(x => x.sort((a, b) => a - b));
    let a2 = levelOrder_BFS(root2).map(x => x.sort((a, b) => a - b));
    // console.log(a1, a2);
    let n = a1.length;
    let n2 = a2.length;
    if (n != n2) return false;
    for (let i = 0; i < n; i++) {
        if (!arrayEqual(a1[i], a2[i])) return false;
    }
    let p1 = getAllPathNew(root1);
    let p2 = getAllPathNew(root2);
    for (let i = 1; i < n; i++) {
        let level1 = a1[i];
        let level2 = a2[i];
        // console.log(level1, level2, p1, p2);
        let ln = level1.length;
        for (let j = 0; j < ln; j++) {
            if (findParentFromPath(level1[j], p1) != findParentFromPath(level2[j], p2)) return false;
        }
    }
    return true;
};

const findParentFromPath = (target, p) => {
    for (const a of p) {
        let idx = a.indexOf(target);
        if (idx != -1) return a[idx - 1];
    }
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

const main = () => {
    let root1 = new TreeNode(1);
    root1.left = new TreeNode(2);
    root1.right = new TreeNode(3);
    root1.left.left = new TreeNode(4);
    root1.left.right = new TreeNode(5);
    root1.left.right.left = new TreeNode(7);
    root1.left.right.right = new TreeNode(8);
    root1.right.left = new TreeNode(6);
    let root2 = new TreeNode(1);
    root2.left = new TreeNode(3);
    root2.right = new TreeNode(2);
    root2.left.right = new TreeNode(6);
    root2.right.left = new TreeNode(4);
    root2.right.right = new TreeNode(5);
    root2.right.right.left = new TreeNode(8);
    root2.right.right.right = new TreeNode(7);
    console.log(flipEquiv(root1, root2)); // true

    let root1_2 = null;
    let root2_2 = null;
    console.log(flipEquiv(root1_2, root2_2)); // true

    let root1_3 = null;
    let root2_3 = new TreeNode(1);
    console.log(flipEquiv(root1_3, root2_3)); // false

    let root1_4 = new TreeNode(0);
    root1_4.right = new TreeNode(1);
    let root2_4 = null;
    console.log(flipEquiv(root1_4, root2_4)); // false

    let root1_5 = new TreeNode(0);
    root1_5.right = new TreeNode(1);
    let root2_5 = new TreeNode(0);
    root2_5.left = new TreeNode(1);
    console.log(flipEquiv(root1_5, root2_5)); // true

    let root1_debug1 = new TreeNode(0);
    root1_debug1.left = new TreeNode(3);
    root1_debug1.right = new TreeNode(1);
    root1_debug1.right.right = new TreeNode(2);
    let root2_debug1 = new TreeNode(0);
    root2_debug1.left = new TreeNode(3);
    root2_debug1.right = new TreeNode(1);
    root2_debug1.left.right = new TreeNode(2);
    console.log(flipEquiv(root1_debug1, root2_debug1)); // false


    /**
     *      0                 0
     *    4   1            1     4
     *          2              2
     *            3              3
     */
    let root1_debug2 = new TreeNode(0);
    root1_debug2.left = new TreeNode(4);
    root1_debug2.right = new TreeNode(1);
    root1_debug2.right.right = new TreeNode(2);
    root1_debug2.right.right.right = new TreeNode(3);

    let root2_debug2 = new TreeNode(0);
    root2_debug2.left = new TreeNode(1);
    root2_debug2.right = new TreeNode(4);
    root2_debug2.right.left = new TreeNode(2);
    root2_debug2.right.left.right = new TreeNode(3);
    console.log(flipEquiv(root1_debug2, root2_debug2)); // false
};

main()