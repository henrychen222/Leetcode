/**
 * 03/13/21 evening
 * https://leetcode.com/contest/weekly-contest-232/problems/maximum-score-of-a-good-subarray/
 */

const pr = console.log;

// issue
const mx = Math.max;
const maximumScore = (a, k) => {
    let n = a.length;
    let res = 0;
    for (let i = 0; i <= k; i++) {
        let min = a[i];
        for (let j = k; j < n; j++) {
            if (a[j] < min) min = a[j];
            let m = j - i + 1;
            // pr(a.slice(i, j + 1), min, min * m)
            res = mx(res, min * m);
        }
    }
    return res;
};

const main = () => {
    let nums = [1, 4, 3, 7, 4, 5], k = 3;
    let nums2 = [5, 5, 4, 5, 4, 1, 1, 1], k2 = 0;
    let nums_debug1 = [6569, 9667, 3148, 7698, 1622, 2194, 793, 9041, 1670, 1872], k_debug1 = 5;
    pr(maximumScore(nums, k));
    pr(maximumScore(nums2, k2));
    pr(maximumScore(nums_debug1, k_debug1)); // 9732
};

main()