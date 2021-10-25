/**
 * 08/28/21 evening
 * https://leetcode.com/contest/weekly-contest-256/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
 */

const pr = console.log;

// don't know
// const minimumDifference = (a, k) => {
//     a.sort((x, y) => y - x);
//     let d = a.slice(0, k);
//     pr(d);
//     let res = Number.MAX_SAFE_INTEGER;
//     let diff = [];
//     for (let i = 1; i < d.length; i++) {
//         let diff = d[i - 1] - d[i];
//         if (diff < res) res = diff;
//     }
//     return res;
// };


// Accepted
// https://www.geeksforgeeks.org/k-numbers-difference-maximum-minimum-k-number-minimized/
const minimumDifference = (a, k) => {
    a.sort((x, y) => x - y);
    let n = a.length;
    let res = Number.MAX_VALUE;
    for (let i = 0; i <= n - k; i++) res = Math.min(res, a[i + k - 1] - a[i]);
    return res;
};


const main = () => {
    let nums = [90], k = 1;
    let nums2 = [9, 4, 1, 7], k2 = 2;
    let nums_debug1 = [41900, 69441, 94407, 37498, 20299, 10856, 36221, 2231, 54526, 79072, 84309, 76765, 92282, 13401, 44698, 17586, 98455, 47895, 98889, 65298, 32271, 23801, 83153, 12186, 7453, 79460, 67209, 54576, 87785, 47738, 40750, 31265, 77990, 93502, 50364, 75098, 11712, 80013, 24193, 35209, 56300, 85735, 3590, 24858, 6780, 50086, 87549, 7413, 90444, 12284, 44970, 39274, 81201, 43353, 75808, 14508, 17389, 10313, 90055, 43102, 18659, 20802, 70315, 48843, 12273, 78876, 36638, 17051, 20478],
        k_debug1 = 5;
    pr(minimumDifference(nums, k));
    pr(minimumDifference(nums2, k2));
    pr(minimumDifference(nums_debug1, k_debug1)); // 1428
};

main()
