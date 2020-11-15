/**
 * 11.13 evening night
 * https://leetcode.com/problems/wiggle-subsequence/
 * 
 * reference:
 * https://www.cnblogs.com/grandyang/p/5697621.html
 * https://leetcode.com/problems/wiggle-subsequence/discuss/84883/two-solutions-one-is-dp-the-other-is-greedy-8-lines
 */

// Accepted --- 72ms 88.24% Greedy
const wiggleMaxLength = (nums) => {
    let n = nums.length;
    if (n == 0) return 0;
    let p = 1;
    let ne = 1;
    for (let i = 1; i < n; i++) {
        if (nums[i] > nums[i - 1]) {
            p = ne + 1;
        } else if (nums[i] < nums[i - 1]) {
            ne = p + 1;
        }
        // console.log(p, ne)
    }
    return Math.max(p, ne);
    // return p > ne ? p : ne;  // 80ms 45.59%
};

// Accepted --- 84ms 23.53%
const wiggleMaxLength_DP = (nums) => {
    let n = nums.length;
    if (n == 0) return 0;
    let dp = new Array(n).fill(1); // dp[i]: 到i位置时首差值为负的摆动子序列的最大长度
    let p = new Array(n).fill(1); // p[i]: 到i位置时首差值为正的摆动子序列的最大长度
    for (i = 1; i < n; i++) {
        for (j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                p[i] = Math.max(p[i], dp[j] + 1);
            } else if (nums[i] < nums[j]) {
                dp[i] = Math.max(dp[i], p[j] + 1);
            }
        }
    }
    // console.log(dp, p)
    return Math.max(dp[n - 1], p[n - 1]);
};

// TLE 9/27
// const wiggleMaxLength1 = (nums) => {
//     let res = 0;
//     let n = nums.length;
//     let N = 2 ** n;
//     for (let i = 0; i < N; i++) {
//         let data = [];
//         for (let j = 0; j < n; j++) {
//             if (i & (1 << j)) {
//                 data.push(nums[j]);
//             }
//         }
//         // console.log(data);
//         let len = data.length;
//         if (isWiggle(data, len)) {
//             res = Math.max(res, len);
//         }
//     }
//     return res;
// };

// const isWiggle = (arr, n) => {
//     if (n < 2) return true;
//     if (n == 2) return arr[0] == arr[1] ? false : true;
//     for (let i = 1; i + 1 < n; i++) {
//         if ((arr[i] - arr[i - 1]) * (arr[i + 1] - arr[i]) >= 0) return false;
//     }
//     return true;
// };

const main = () => {
    let nums = [1, 7, 4, 9, 2, 5];
    let nums2 = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8];
    let nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let debug1 = [0, 0];
    let debug2 = [33, 53, 12, 64, 50, 41, 45, 21, 97, 35, 47, 92, 39, 0, 93, 55, 40, 46, 69, 42, 6, 95, 51, 68, 72, 9, 32, 84, 34, 64, 6, 2, 26, 98, 3, 43, 30, 60, 3, 68, 82, 9, 97, 19, 27, 98, 99, 4, 30, 96, 37, 9, 78, 43, 64, 4, 65, 30, 84, 90, 87, 64, 18, 50, 60, 1, 40, 32, 48, 50, 76, 100, 57, 29, 63, 53, 46, 57, 93, 98, 42, 80, 82, 9, 41, 55, 69, 84, 82, 79, 30, 79, 18, 97, 67, 23, 52, 38, 74, 15];
    console.log(wiggleMaxLength(nums));
    console.log(wiggleMaxLength(nums2));
    console.log(wiggleMaxLength(nums3));
    console.log(wiggleMaxLength(debug1)); // 1
    console.log(wiggleMaxLength(debug2));
};

main()