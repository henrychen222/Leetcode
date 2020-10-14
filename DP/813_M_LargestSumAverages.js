/**
 * 10.11 evening
 * https://leetcode.com/problems/largest-sum-of-averages/
 */



// Accepted --- 84ms 88.89%
/**
 * reference: 
 * https://leetcode.com/problems/largest-sum-of-averages/discuss/122739/C++JavaPython-Easy-Understood-Solution-with-Explanation
 * https://www.cnblogs.com/grandyang/p/9504413.html
 */
const largestSumOfAverages = (A, K) => {
    let n = A.length;
    let memo = initialize2DArrayNew(n + 1, n + 1);
    let cur = 0;
    for (let i = 0; i < n; i++) {
        cur += A[i];
        memo[i + 1][1] = cur / (i + 1);
    }
    return dfs(n, K, A, memo);
};

const dfs = (n, k, A, memo) => {
    if (memo[n][k] > 0) return memo[n][k];
    if (n < k) return 0;
    let cur = 0;
    for (let i = n - 1; ~i; i--) {
        cur += A[i];
        memo[n][k] = Math.max(memo[n][k], dfs(i, k - 1, A, memo) + cur / (n - i));
    }
    return memo[n][k];
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};

// Accepted --- 84ms 88.89%
/**
 * reference: 
 * https://leetcode.com/problems/largest-sum-of-averages/solution/
 * https://www.cnblogs.com/grandyang/p/9504413.html
 */
const largestSumOfAverages1 = (A, K) => {
    let n = A.length;
    let pre = new Array(n + 1).fill(0); // prefix sum
    for (let i = 0; i < n; i++) {
        pre[i + 1] = pre[i] + A[i];
    }
    let dp = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        dp[i] = (pre[n] - pre[i]) / (n - i);
    }
    console.log(pre, dp);
    for (let k = 0; k < K - 1; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                dp[i] = Math.max(dp[i], (pre[j] - pre[i]) / (j - i) + dp[j]);
            }
        }
    }
    console.log(pre, dp);
    return dp[0];
};

// wrong
// const largestSumOfAverages = (A, K) => {
//     let n = A.length;
//     let pre = new Array(n + 1).fill(0);
//     for (let i = 0; i < n; i++) {
//         pre[i + 1] = pre[i] + A[i];
//     }
//     let dp = new Array(n).fill(0);
//     for (let i = 0; i < n; i++) {
//         dp[i] = parseInt((pre[n] - pre[i]) / (n - i));
//     }
//     console.log(pre, dp);
//     for (let k = 0; k < K - 1; k++) {
//         for (let i = 0; i < n; i++) {
//             for (let j = i + 1; j < n; j++) {
//                 dp[i] = Math.max(dp[i], parseInt((pre[j] - pre[i]) / (j - i)) + dp[j]);
//             }
//         }
//     }
//     console.log(pre, dp);
//     return dp[0];
// };

const main = () => {
    let A = [9, 1, 2, 3, 9];
    let K = 3;
    let A_debug1 = [1, 2, 3, 4, 5, 6, 7];
    let K_debug1 = 4;
    console.log(largestSumOfAverages(A, K));
    console.log(largestSumOfAverages(A_debug1, K_debug1)); // 20.5
};

main()