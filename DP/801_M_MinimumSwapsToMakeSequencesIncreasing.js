/**
 * 11.10 evening
 * https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/
 */

// Accepted --- 96ms 13.89%
// reference:https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/discuss/558341/Python-DFS-%2B-Memoization
let memo = new Map();
let n;
const minSwap = (A, B) => {
    memo.clear();
    n = A.length;
    return dfs(0, -1, -1, A, B, false);
};

const dfs = (i, prevA, prevB, A, B, flag) => {
    if (i == n) return 0;
    let k = JSON.stringify([i, flag]);
    if (memo.has(k)) {
        return memo.get(k);
    }
    let swap = Number.POSITIVE_INFINITY;
    let noSwap = Number.POSITIVE_INFINITY;
    if (A[i] > prevB && B[i] > prevA) {
        swap = 1 + dfs(i + 1, B[i], A[i], A, B, true);
    }
    if (A[i] > prevA && B[i] > prevB) {
        noSwap = dfs(i + 1, A[i], B[i], A, B, false);
    }
    let tmp = Math.min(swap, noSwap);
    memo.set(k, tmp);
    // console.log(memo);
    // console.log(swap);
    // console.log(noSwap);
    return tmp;
};

// Accepted --- 108ms 5.56%
const dfs2 = (i, prevA, prevB, A, B, flag) => {
    if (i == n) return 0;
    let k = JSON.stringify([i, flag]);
    if (memo.has(k)) {
        return memo.get(k);
    }
    let swap = Infinity; // difference
    let noSwap = Infinity;
    if (A[i] > prevB && B[i] > prevA) {
        swap = 1 + dfs2(i + 1, B[i], A[i], A, B, true);
    }
    if (A[i] > prevA && B[i] > prevB) {
        noSwap = dfs2(i + 1, A[i], B[i], A, B, false);
    }
    let tmp = Math.min(swap, noSwap);
    memo.set(k, tmp);
    return tmp;
};

// Accepted --- 88ms 52.78%
// reference: https://www.tutorialspoint.com/minimum-swaps-to-make-sequences-increasing-in-cplusplus
const minSwap1 = (A, B) => {
    let n = A.length;
    let dp = new Array(n).fill(0); // swap
    let noSwap = new Array(n).fill(0);
    dp[0] = 1;
    for (let i = 1; i < n; i++) {
        dp[i] = n;
        noSwap[i] = n;
        if (A[i] > A[i - 1] && B[i] > B[i - 1]) {
            noSwap[i] = noSwap[i - 1];
            dp[i] = dp[i - 1] + 1;
        }
        if (A[i] > B[i - 1] && B[i] > A[i - 1]) {
            dp[i] = Math.min(dp[i], noSwap[i - 1] + 1);
            noSwap[i] = Math.min(dp[i - 1], noSwap[i]);
        }
        // console.log(dp, noSwap);
    }
    return Math.min(dp[n - 1], noSwap[n - 1]);
};

const main = () => {
    let A = [1, 3, 5, 4],
        B = [1, 2, 3, 7];
    let A_debug1 = [0, 3, 5, 8, 9],
        B_debug1 = [2, 1, 4, 6, 9];
    console.log(minSwap(A, B));
    console.log(minSwap(A_debug1, B_debug1)); // 1
};

main()