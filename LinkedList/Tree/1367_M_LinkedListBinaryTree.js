/**
 * 02/09/21 evening
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const createL = (arr) => {
    let tmp, node = null;
    let n = arr.length;
    for (let i = n - 1; ~i; i--) {
        if (!node) {
            node = new ListNode(arr[i]);
        } else {
            tmp = new ListNode(arr[i]);
            tmp.next = node;
            node = tmp;
        }
    }
    return node;
};

const getAllData = (list) => {
    let res = [];
    let current = list;
    while (current) {
        res.push(current.val);
        current = current.next;
    }
    return res;
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

const arrayEqual = (a, b) => {
    return JSON.stringify(a) == JSON.stringify(b);
};

const isSubArray = (child, parent) => {
    let cn = child.length;
    let pn = parent.length;
    for (let i = 0; i < pn; i++) {
        if (child[0] != parent[i] || (i + cn - 1) >= pn) continue; // add this line Accepted --- 288ms 6.35%
        // if (child[0] != parent[i]) continue;  // add this line Accepted --- 340ms 6.35%
        // if ((i + cn - 1) >= pn) continue; // add this line Accepted --- 3132ms 6.35%
        let tmp = parent.slice(i, i + cn);
        if (arrayEqual(tmp, child)) return true;
    }
    return false;
};

// Accepted --- 3156ms 6.35%
const isSubPath = (head, root) => {
    let a = getAllData(head);
    let p = getAllPathNew(root);
    // console.log(a, p);
    for (const e of p) {
        if (isSubArray(a, e)) return true;
    }
    return false;
};

const main = () => {
    let head = [4, 2, 8];
    let root = new TreeNode(1);
    root.left = new TreeNode(4);
    root.right = new TreeNode(4);
    root.left.right = new TreeNode(2);
    root.left.right.left = new TreeNode(1);
    root.right.left = new TreeNode(2);
    root.right.left.left = new TreeNode(6);
    root.right.left.right = new TreeNode(8);
    root.right.left.right.left = new TreeNode(1);
    root.right.left.right.right = new TreeNode(3);
    console.log(isSubPath(createL(head), root));
};

main()

// console.log(arrayEqual([1, 2, 3], [1, 2, 3])); // true
// console.log(arrayEqual([1, 2, 3], [1, 2, 4])); // false
// console.log(arrayEqual(new Uint8Array([1, 2, 3]), new Uint8Array([1, 2, 3]))); // true
// console.log(arrayEqual(new Uint8Array([1, 2, 3]), new Uint8Array([1, 2, 4]))); // false

// console.log(isSubArray([4, 2, 8], [ 1, 4, 2, 6 ])); // false
// console.log(isSubArray([4, 2, 8], [ 1, 4, 2, 8, 1 ])); // true;

// console.log(new Uint8Array([4, 2, 8]).subarray(1));