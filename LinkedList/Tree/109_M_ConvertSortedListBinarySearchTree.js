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

const getAllData = (list) => {
    let res = [];
    let current = list;
    while (current) {
        res.push(current.val);
        current = current.next;
    }
    return res;
};

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

// Accepted --- 100ms 70.80%
const sortedListToBST = (head) => {
    let a = getAllData(head);
    return createBSTFromSortedArray(a, 0, a.length - 1);
};

// reference: https://dev.to/akhilpokle/converting-a-sorted-array-to-binary-search-tree-in-javascript-om
const createBSTFromSortedArray = (nums, start, end) => {
    if (start > end) return null;
    let mid = start + end >> 1;
    let root = new TreeNode(nums[mid]);
    root.left = createBSTFromSortedArray(nums, start, mid - 1);
    root.right = createBSTFromSortedArray(nums, mid + 1, end);
    return root;
};

const main = () => {
    let head = [-10, -3, 0, 5, 9];
    console.log(sortedListToBST(createL(head)));

    // let root = new TreeNode(0);
    // root.left = new TreeNode(-3);
    // root.right = new TreeNode(9);
    // root.left.left = new TreeNode(10);
    // root.right.left = new TreeNode(5);
    // console.log(levelOrder_BFS(root));
};

main()