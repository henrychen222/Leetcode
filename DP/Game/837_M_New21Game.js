/**
 * 12.23 evening
 * https://leetcode.com/problems/new-21-game/
 */


// Accepted --- 76ms 100%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/10386525.html
 * https://leetcode.com/problems/new-21-game/discuss/132334/One-Pass-DP-O(N)
 */
const new21Game = (N, K, W) => {
    if (K == 0 || N >= K + W) return 1;
    let dp = Array(N + 1).fill(0);
    dp[0] = 1;
    let sumW = 1;
    let res = 0;
    for (let i = 1; i <= N; i++) {
        dp[i] = sumW / W;
        i < K ? sumW += dp[i] : res += dp[i];
        if (i - W >= 0) sumW -= dp[i - W];
    }
    return res;
};

// 100ms 20.00%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/10386525.html
 * https://leetcode.com/problems/new-21-game/discuss/132358/Java-O(K-%2B-W)-DP-solution-with-explanation
 */
const new21Game2 = (N, K, W) => {
    if (K == 0) return 1;
    let dp = Array(K + W).fill(0);
    dp[0] = 1;
    for (let i = 1; i < K + W; i++) {
        dp[i] = dp[i - 1];
        if (i <= W) {
            dp[i] += dp[i - 1] / W;
        } else {
            dp[i] += (dp[i - 1] - dp[i - W - 1]) / W;
        }
        if (i > K) {
            dp[i] -= (dp[i - 1] - dp[K - 1]) / W;
        }
    }
    return dp[N] - dp[K - 1];
};

// Accepted --- 88ms 80.00%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/10386525.html
 * https://leetcode.com/problems/new-21-game/discuss/132478/C%2B%2B-12ms-O(K%2BW)-solution-with-explanation
 */
const min = Math.min;
const new21Game1 = (N, K, W) => {
    if (K == 0 || N >= K + W) return 1;
    let dp = Array(K + W).fill(0); // dp[i]: [0, i] 内的点数的概率综合
    dp[0] = 1;
    for (let i = 1; i < K + W; i++) {
        let tmp = min(i - 1, K - 1);
        if (i <= W) {
            dp[i] = dp[i - 1] + dp[tmp] / W;
        } else {
            dp[i] = dp[i - 1] + (dp[tmp] - dp[i - W - 1]) / W;
        }
    }
    // console.log(dp);
    return (dp[N] - dp[K - 1]) / (dp[K + W - 1] - dp[K - 1]);
};

const main = () => {
    let N = 10,
        K = 1,
        W = 10;
    let N2 = 6,
        K2 = 1,
        W2 = 10;
    let N3 = 21,
        K3 = 17,
        W3 = 10;
    console.log(new21Game(N, K, W));
    console.log(new21Game(N2, K2, W2));
    console.log(new21Game(N3, K3, W3));
};

main()