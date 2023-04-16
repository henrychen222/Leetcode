/**
 * 05/29/21 morning
 * https://leetcode.com/contest/biweekly-contest-53/problems/minimize-maximum-pair-sum-in-array/
 */

const pr = console.log;

// Accepted
const mx = Math.max;
const stin = (a) => a.sort((x, y) => x - y);
const minPairSum = (a) => {
    stin(a);
    let res = 0;
    let n = a.length;
    for (let i = 0; i < n; i++) {
        let sum = a[i] + a[n - 1 - i];
        res = mx(res, sum);
    }
    return res;
};

const main = () => {
    let nums = [3, 5, 2, 3];
    let nums2 = [3, 5, 4, 2, 4, 6];
    pr(minPairSum(nums))
    pr(minPairSum(nums2))
};

main()