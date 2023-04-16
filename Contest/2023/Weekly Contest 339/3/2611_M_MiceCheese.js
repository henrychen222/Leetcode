/*
 * 04/01/23 evening
 * https://leetcode.com/contest/weekly-contest-339/problems/mice-and-cheese/
 */

const pr = console.log;

// Accepted
// reference: https://leetcode.cn/circle/discuss/K0dVcY/ TsReaper Heltion
const miceAndCheese = (a, b, k) => differenceGreedy(a, b, k)

const differenceGreedy = (a, b, k) => {
    let n = a.length, diff = [], res = 0;
    for (let i = 0; i < n; i++) {
        res += b[i]; // suppose all cheese are eaten by second mouse at first
        diff.push(a[i] - b[i]);
    }
    diff.sort((x, y) => y - x);
    for (let i = 0; i < k; i++) res += diff[i]; // greedy: replace the first k cheese eaten by first mouse from higher -> lower
    return res;
};


/////////////////////////////////////////////////////////////
const sm = (a) => a.reduce(((x, y) => x + y), 0);

// WA
const miceAndCheese1 = (a, b, k) => {
    let n = a.length, dp = [...Array(n + 1)].map(() => Array(k + 1).fill(0));
    if (k == n) return sm(a);
    dp[0][1] = a[0];
    dp[0][0] = b[0];
    for (let i = 1; i < n; i++) {
        dp[i][0] = dp[i - 1][0] + b[i];
        for (let j = 1; j <= k; j++) {
            dp[i][j] = Math.max(dp[i - 1][j] + b[i], dp[i - 1][j - 1] + a[i]);
        }
    }
    // pr(dp)
    return dp[n - 1][k];
};


const main = () => {
    let a = [1, 1, 3, 4], b = [4, 4, 1, 1], k = 2
    let a2 = [1, 1], b2 = [1, 1], k2 = 2
    let a_debug1 = [1, 4, 4, 6, 4], b_debug1 = [6, 5, 3, 6, 1], k_debug1 = 1;
    let a_debug2 = [1, 3, 1], b_debug2 = [4, 3, 4], k_debug2 = 3
    let a_debug3 = [1, 1, 2, 1, 2], b_debug3 = [3, 2, 3, 3, 2], k_debug3 = 4;
    pr(miceAndCheese(a, b, k))
    pr(miceAndCheese(a2, b2, k2))
    pr(miceAndCheese(a_debug1, b_debug1, k_debug1)) // 24
    pr(miceAndCheese(a_debug2, b_debug2, k_debug2)) // 5
    pr(miceAndCheese(a_debug3, b_debug3, k_debug3)) // 9
};

main()