// 02/09/21 evening

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const createBSTFromSortedArray = (nums, start, end) => {
    if (start > end) return null;
    let mid = start + end >> 1;
    let root = new TreeNode(nums[mid]);
    root.left = createBSTFromSortedArray(nums, start, mid - 1);
    root.right = createBSTFromSortedArray(nums, mid + 1, end);
    return root;
};