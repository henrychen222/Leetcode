/**
 * 7.11 morning
 * https://leetcode.com/contest/biweekly-contest-30/problems/range-sum-of-sorted-subarray-sums/
 * https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/discuss/730726/javascript-two-pointer-solution
 */

// Accepted
const rangeSum = (nums, n, left, right) => {
    let data = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            let subarr = nums.slice(i, j);
            data.push(sum(subarr));
        }
    }
    data.sort((a, b) => a - b);
    let res;
    res = data.slice(left - 1, right);
    return sum(res) % 1000000007;
};

const sum = (arr) => {
    return arr.reduce((acc, cur) => acc + cur);
};

const main = () => {
    let nums = [1, 2, 3, 4], n = 4, left = 1, right = 5;
    let nums2 = [1, 2, 3, 4], n2 = 4, left2 = 3, right2 = 4;
    let nums3 = [1, 2, 3, 4], n3 = 4, left3 = 1, right3 = 10;
    console.log(rangeSum(nums, n, left, right));
    console.log(rangeSum(nums2, n2, left2, right2));
    console.log(rangeSum(nums3, n3, left3, right3));
};

main()