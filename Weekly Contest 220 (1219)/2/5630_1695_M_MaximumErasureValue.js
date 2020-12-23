/**
 * 12.19 evening
 * https://leetcode.com/contest/weekly-contest-220/problems/maximum-erasure-value/
 */

// TLE 58/62
const maximumUniqueSubarray = (nums) => {
    let n = nums.length;
    let res = 0;
    let pre = preSum(nums, n);
    for (let i = 0; i < n; i++) {
        let lastIdx = n - 1;
        let set = new Set();
        set.add(nums[i]);
        let sub = [nums[i]];
        for (let j = i + 1; j < n; j++) {
            if (nums[j] == nums[i] || set.has(nums[j])) {
                lastIdx = j - 1;
                break;
            } else {
                sub.push(nums[j]);
                set.add(nums[j]);
            }
        }
        let sum = pre[lastIdx + 1] - pre[i];
        // console.log(sum, sub, i, lastIdx);
        res = Math.max(res, sum);
    }
    return res;
};

const preSum = (a, n) => {
    let pre = [a[0]];
    for (let i = 1; i < n; i++) {
        pre[i] = pre[i - 1] + a[i];
    }
    pre.unshift(0);
    return pre;
};

// TLE 58/62
const maximumUniqueSubarray1 = (nums) => {
    let n = nums.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let set = new Set();
        set.add(nums[i]);
        let sub = [nums[i]];
        for (let j = i + 1; j < n; j++) {
            if (set.has(nums[j])) {
                break;
            } else {
                sub.push(nums[j]);
                set.add(nums[j]);
            }
        }
        let sum = sub.length ? sub.reduce((a, b) => a + b) : 0;
        // console.log(sum, sub);
        res = Math.max(res, sum);
    }
    return res;
};

const main = () => {
    let nums = [4, 2, 4, 5, 6];
    let nums2 = [5, 2, 1, 2, 5, 2, 1, 2, 5];
    console.log(maximumUniqueSubarray(nums));
    console.log(maximumUniqueSubarray(nums2));
};

main()