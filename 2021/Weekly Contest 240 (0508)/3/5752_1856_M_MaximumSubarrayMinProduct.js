/**
 * 05/08/21 evening
 * https://leetcode.com/contest/weekly-contest-240/problems/maximum-subarray-min-product/
 */

const pr = console.log;


// TLE
const mi = Math.min;
const mx = Math.max;
const maxSumMinProduct = (a) => {
    let n = a.length;
    let pre = preSum(a, n);
    // pr(pre);
    let res =  0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sum = pre[j + 1] - pre[i];
            let sub = a.slice(i, j + 1);
            let min = mi.apply(Math, sub);
            // pr(sum, sub, min);
            res = mx(res, sum * min);
        }
    }
    return res;
};

const preSum = (a, n) => {
    let pre = [0];
    for (let i = 0; i < n; i++) {
        pre.push(pre[i] + a[i]);
    }
    return pre;
};

const main = () => {
    let nums = [1, 2, 3, 2];
    let nums2 = [2, 3, 3, 1, 2];
    let nums3 = [3, 1, 5, 6, 4, 2];
    pr(maxSumMinProduct(nums));
    pr(maxSumMinProduct(nums2));
    pr(maxSumMinProduct(nums3));
};

main()