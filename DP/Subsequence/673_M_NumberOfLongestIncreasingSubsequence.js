/**
 * 11.5 evening
 * https://leetcode.com/problems/number-of-longest-increasing-subsequence/
 */

// Accepted --- 152ms 6.13%
let len;
let cnt;
const findNumberOfLIS = (nums) => {
    let n = nums.length;
    len = new Array(n).fill(0);
    cnt = new Array(n).fill(0);
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        maxLen = Math.max(maxLen, dfs_len(nums, i));
    }
    // console.log(maxLen);
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (dfs_len(nums, i) == maxLen) {
            // console.log(dfs_cnt(nums, i));
            res += dfs_cnt(nums, i);
        }
    }
    return res;
};

const dfs_len = (nums, idx) => {
    if (idx == 0) return 1;
    if (len[idx] > 0) return len[idx];
    let maxLen = 1;
    for (let i = 0; i < idx; i++) {
        if (nums[idx] > nums[i]) {
            maxLen = Math.max(maxLen, dfs_len(nums, i) + 1);
        }
    }
    return len[idx] = maxLen;
};

const dfs_cnt = (nums, idx) => {
    if (idx == 0) return 1;
    if (cnt[idx] > 0) return cnt[idx];
    let count = 0;
    let l = dfs_len(nums, idx);
    for (let i = 0; i < idx; i++) {
        if (nums[idx] > nums[i]) {
            if (dfs_len(nums, i) == l - 1) {
                count += dfs_cnt(nums, i);
            }
        }
    }
    if (count == 0) count = 1;
    return cnt[idx] = count;
};

// Accepted --- 124ms 18.94%
/**
 * reference:
 * https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-673-number-of-longest-increasing-subsequence/
 * https://www.cnblogs.com/grandyang/p/7603903.html
 * https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/
 */
const findNumberOfLIS_DP = (nums) => {
    let n = nums.length;
    let dp = new Array(n).fill(1); // length of LIS
    let cnt = new Array(n).fill(1);
    for (let i = 0; i < n; i++) { // arr idx
        for (j = 0; j < i; j++) { // subsequence idx
            if (nums[i] > nums[j]) {
                if (dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1;
                    cnt[i] = cnt[j];
                } else if (dp[i] == dp[j] + 1) {
                    cnt[i] += cnt[j];
                }
            }
        }
    }
    // console.log(dp);
    // console.log(cnt);
    let max = Math.max.apply(Math, dp);
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (dp[i] == max) res += cnt[i];
    }
    return res;
};

// Accepted --- 112ms 60.72%
const findNumberOfLIS_DP_modify = (nums) => {
    let n = nums.length;
    let dp = new Array(n).fill(1);
    let cnt = new Array(n).fill(1);
    let max = 0;
    for (let i = 0; i < n; i++) {
        for (j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1;
                    cnt[i] = cnt[j];
                } else if (dp[i] == dp[j] + 1) {
                    cnt[i] += cnt[j];
                }
            }
        }
        max = Math.max(max, dp[i]);
    }
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (dp[i] == max) res += cnt[i];
    }
    return res;
};

// TLE 34/223
// const findNumberOfLIS1 = (nums) => {
//     let max = 0;
//     let n = nums.length;
//     let N = 2 ** n;
//     let res = [];
//     for (let i = 0; i < N; i++) {
//         let data = [];
//         for (let j = 0; j < n; j++) {
//             if (i & (1 << j)) {
//                 data.push(nums[j]);
//             }
//         }
//         if (isAscending(data)) {
//             res.push(data);
//             max = Math.max(max, data.length);
//         }
//     }
//     // console.log(max, res);
//     let cnt = 0;
//     for (const i of res) {
//         if (i.length == max) cnt++;
//     }
//     return cnt;
// };

// const isAscending = (arr) => {
//     return arr.every((x, i) => {
//         return i === 0 || x > arr[i - 1];
//     });
// };

const main = () => {
    let nums = [1, 3, 5, 4, 7];
    let nums2 = [2, 2, 2, 2, 2];
    console.log(findNumberOfLIS(nums));
    console.log(findNumberOfLIS(nums2));
};

main()