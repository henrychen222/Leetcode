/**
 * 02/11/21 evening
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Accepted --- 104ms 20.72%
const flatten = (root) => {
    if (!root) return;
    let p = preOrder_DFS(root);
    deleteTree(root);
    let n = p.length;
    let a = [];
    for (let i = 0; i < n; i++) {
        a.push(p[i]);
        if (i != n - 1) a.push(null);
    }
    ///////////////// handle in place //////////////////
    // if (a == null || a.length == 0) return null;  // Accepted --- remove this line 100ms 33.28%
    let treeNodeQ = [];
    let numQ = [];
    for (let i = 1; i < a.length; i++) {
        numQ.push(a[i]);
    }
    treeNodeQ.push(root);
    while (numQ.length != 0) {
        let leftVal = numQ.length == 0 ? null : numQ.shift();
        let rightVal = numQ.length == 0 ? null : numQ.shift();
        let current = treeNodeQ.shift();
        if (leftVal != null) { // if (leftVal) is wrong here
            let left = new TreeNode(leftVal);
            current.left = left;
            treeNodeQ.push(left);
        }
        if (rightVal != null) {
            let right = new TreeNode(rightVal);
            current.right = right;
            treeNodeQ.push(right);
        }
    }
    console.log(root);
};

// Accepted --- 104ms 20.72%
const flatten2 = (root) => {
    if (!root) return;
    let p = preOrder_DFS(root);
    deleteTree(root);
    let n = p.length;
    let a = [];
    for (let i = 0; i < n; i++) {
        a.push(p[i]);
        if (i != n - 1) a.push(null);
    }
    ///////////////// use unshift() and pop() //////////////////
    let treeNodeQ = [];
    let numQ = [];
    for (let i = 1; i < a.length; i++) {
        numQ.unshift(a[i]);
    }
    treeNodeQ.unshift(root);
    while (numQ.length != 0) {
        let leftVal = numQ.length == 0 ? null : numQ.pop();
        let rightVal = numQ.length == 0 ? null : numQ.pop();
        let current = treeNodeQ.pop();
        if (leftVal != null) {
            let left = new TreeNode(leftVal);
            current.left = left;
            treeNodeQ.unshift(left);
        }
        if (rightVal != null) {
            let right = new TreeNode(rightVal);
            current.right = right;
            treeNodeQ.unshift(right);
        }
    }
};

// reference: https://stackoverflow.com/questions/12872387/how-to-delete-all-nodes-of-a-binary-search-tree
const deleteTree = (node) => {
    if (node) {
        delete node.left;
        delete node.right;
    }
    node.left = null;
    node.right = null;
};

const preOrder_DFS = (root) => {
    if (!root) return [];
    let left = preOrder_DFS(root.left);
    let right = preOrder_DFS(root.right);
    return [root.val].concat(left).concat(right);
};

// reference: https://stackoverflow.com/questions/37941318/how-to-build-an-incomplete-binary-tree-from-array-representation
// const createBTFromArray = (a) => {
//     if (a == null || a.length == 0) return null;
//     let treeNodeQ = [];
//     let numQ = [];
//     for (let i = 1; i < a.length; i++) {
//         numQ.push(a[i]);
//     }
//     let treeNode = new TreeNode(a[0]);
//     treeNodeQ.push(treeNode);
//     while (numQ.length != 0) {
//         let leftVal = numQ.length == 0 ? null : numQ.shift();
//         let rightVal = numQ.length == 0 ? null : numQ.shift();
//         let current = treeNodeQ.shift();
//         if (leftVal != null) {
//             let left = new TreeNode(leftVal);
//             current.left = left;
//             treeNodeQ.push(left);
//         }
//         if (rightVal != null) {
//             let right = new TreeNode(rightVal);
//             current.right = right;
//             treeNodeQ.push(right);
//         }
//     }
//     return treeNode;
// };

const main = () => {
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(5);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.right.right = new TreeNode(6);
    flatten(root);
};

main()