/**
 * 7.2 night
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 * reference: https://www.cnblogs.com/grandyang/p/4295245.html
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accpeted --- 112ms 39.1MB 13.19%
const sortedArrayToBST1 = (nums) => {
    return helper(nums, 0, nums.length - 1);
};

const helper = (nums, left, right) => {
    if (left > right) return null;
    let mid = left + ((right - left) >> 1);
    let current = new TreeNode(nums[mid]);
    current.left = helper(nums, left, mid - 1);
    current.right = helper(nums, mid + 1, right);
    return current;
};

// Accepted --- 116ms 40MB 11.38%
const sortedArrayToBST = (nums) => {
    if (nums.length == 0) return null;
    let mid = nums.length >> 1;
    let current = new TreeNode(nums[mid]);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid + 1, nums.length);
    current.left = sortedArrayToBST(left);
    current.right = sortedArrayToBST(right);
    return current;
};

const main = () => {
    let nums = [-10, -3, 0, 5, 9];
    console.log(sortedArrayToBST1(nums)); // [0,-10,5,null,-3,null,9]
    console.log(sortedArrayToBST(nums)); // [0,-3,9,-10,null,5]
};

main()