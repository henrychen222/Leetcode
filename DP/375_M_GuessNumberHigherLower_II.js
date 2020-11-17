/**
 * 11.15 evening
 * https://leetcode.com/problems/guess-number-higher-or-lower-ii/
 * 
 * reference:
 * https://www.cnblogs.com/grandyang/p/5677550.html
 * https://leetcode.com/problems/guess-number-higher-or-lower-ii/discuss/84764/Simple-DP-solution-with-explanation~~
 */

// Accepted --- 188ms 71.74%
let memo;
const getMoneyAmount = (n) => {
    memo = initialize2DArrayNew(n + 1, n + 1);
    return dfs(1, n);
};

const dfs = (start, end) => {
    if (start >= end) return 0;
    if (memo[start][end] > 0) return memo[start][end];
    let res = Number.MAX_VALUE;
    for (let i = start; i <= end; i++) {
        let tmp = i + Math.max(dfs(start, i - 1), dfs(i + 1, end));
        res = Math.min(res, tmp);
    }
    memo[start][end] = res;
    // console.log(memo);
    return res;
};


// Accepted --- 116ms 100.00%  bottom up DP
const getMoneyAmount_DP = (n) => {
    let dp = initialize2DArrayNew(n + 1, n + 1);
    for (let i = 2; i <= n; i++) {
        for (let j = i - 1; j > 0; j--) {
            let min = Number.MAX_VALUE;
            for (let k = j + 1; k < i; k++) {
                let tmp = k + Math.max(dp[j][k - 1], dp[k + 1][i]);
                min = Math.min(min, tmp);
            }
            dp[j][i] = j + 1 == i ? j : min;
        }
    }
    // console.log(dp);
    return dp[1][n];
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};

const main = () => {
    let n = 10;
    let n2 = 1;
    let n3 = 2;
    console.log(getMoneyAmount(n));
    console.log(getMoneyAmount(n2));
    console.log(getMoneyAmount(n3));
};

main()