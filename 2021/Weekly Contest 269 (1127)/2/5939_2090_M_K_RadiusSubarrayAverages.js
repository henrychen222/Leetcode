/**
 * 11/27/21 evening
 * https://leetcode.com/contest/weekly-contest-269/problems/k-radius-subarray-averages/
 */

const pr = console.log;

const preSum = (a) => { let pre = [0]; for (let i = 0; i < a.length; i++) { pre.push(pre[i] + a[i]); } return pre; };

// Accepted
const getAverages = (a, k) => {
    let n = a.length, pre = preSum(a), res = [];
    // pr(pre);
    for (let i = 0; i < n; i++) {
        if (i < k) {
            res.push(-1);
            continue;
        }
        let l = i - k, r = i + k, sum = pre[r + 1] - pre[l], len = 2 * k + 1;
        if (a[l] == undefined || a[r] == undefined) {
            res.push(-1);
            continue;
        }
        let avg = parseInt(sum / len);
        // pr(l, r, "sum", sum, "len", len, "avg", avg);
        res.push(avg);
    }
    return res;
};

const main = () => {
    let nums = [7, 4, 3, 9, 1, 8, 5, 2, 6], k = 3;
    let nums2 = [100000], k2 = 0;
    let nums3 = [8], k3 = 100000;
    pr(getAverages(nums, k))
    pr(getAverages(nums2, k2))
    pr(getAverages(nums3, k3))
};

main()