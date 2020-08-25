/**
 * 8.24 evening
 * https://leetcode.com/problems/range-sum-query-immutable/
 */

// Accepted --- 244ms 10.12%
function NumArray(nums) {
    this.nums = nums;
};

NumArray.prototype.sumRange = function (i, j) {
    let sum = 0;
    for (let idx = i; idx <= j; idx++) {
        sum += this.nums[idx];
    }
    return sum;
};

const main = () => {
    let nums = [-2, 0, 3, -5, 2, -1];
    let na = new NumArray(nums);
    console.log(na.sumRange(0, 2));
    console.log(na.sumRange(2, 5));
    console.log(na.sumRange(0, 5));
}

main()