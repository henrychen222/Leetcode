/*
 * 01/21/23 evening
 * https://leetcode.com/contest/weekly-contest-329/problems/minimum-cost-to-split-an-array/
 */

const pr = console.log;

// Accepted --- 10325ms
// reference: https://www.geeksforgeeks.org/split-array-into-subarrays-at-minimum-cost-by-minimizing-count-of-repeating-elements-in-each-subarray/
const minCost1 = (a, k) => {
    let n = a.length, max = Math.max(...a), dp = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for (let i = 0; i < n; i++) {
        let f = Array(max + 1).fill(0);
        for (let j = i; j < n; j++) {
            f[a[j]]++;
            let cost = 0;
            for (let x = 0; x <= max; x++) cost += (f[x] == 1) ? 0 : f[x];
            dp[j + 1] = Math.min(dp[i] + cost + k, dp[j + 1]);
        }
    }
    return dp[n];
};

// Accepted --- 158ms
const minCost = (a, k) => {
    let n = a.length, max = Math.max(...a), dp = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for (let i = 0; i < n; i++) {
        let f = Array(max + 1).fill(0), cost = 0;
        for (let j = i; j < n; j++) {
            f[a[j]]++;
            if (f[a[j]] == 2) {
                cost += 2;
            } else if (f[a[j]] > 2) {
                cost++;
            }
            dp[j + 1] = Math.min(dp[i] + cost + k, dp[j + 1]);
        }
    }
    // pr(dp)
    return dp[n];
};

const main = () => {
    let a = [1, 2, 1, 2, 1, 3, 3], k = 2;
    let a2 = [1, 2, 1, 2, 1], k2 = 2;
    let a3 = [1, 2, 1, 2, 1], k3 = 5
    let a_debug1 = [2, 3, 3, 3, 1, 5, 5, 0, 5, 3, 4, 2, 1, 2, 5, 1, 2, 0], k_debug1 = 5;
    pr(minCost(a, k))
    pr(minCost(a2, k2))
    pr(minCost(a3, k3))
    pr(minCost(a_debug1, k_debug1)) // 21
};

main()