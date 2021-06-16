/**
 * 06/11/21 night
 * https://leetcode.com/problems/stone-game-vii/
 */

// Accepted --- 308ms 100%
// reference: https://leetcode.com/contest/weekly-contest-219/ranking cuiaoxiang
const stoneGameVII = (a) => {
    let n = a.length;
    let dp = initialize2DArrayNew(n, n);
    let pre = preSum(a, n);
    for (let i = n - 1; ~i; i--) {
        for (let j = i; j < n; j++) {
            if (i == j) {
                dp[i][j] = 0;
            } else {
                let L = pre[j + 1] - pre[i + 1] - dp[i + 1][j];
                let R = pre[j] - pre[i] - dp[i][j - 1];
                dp[i][j] = Math.max(L, R);
            }
            // pr(dp); // bottom right -> top left (bottom-up)
        }
    }
    return dp[0][n - 1];
};

// Accepted --- 320ms 100%
// reference: https://leetcode.com/contest/weekly-contest-219/ranking uwi
const stoneGameVII1 = (a) => {
    let n = a.length;
    let dp = initialize2DArrayNew(n, n);
    let pre = preSum(a, n);
    // pr(pre);
    for (let len = 1; len <= n; len++) {
        for (let i = 0; i + len - 1 < n; i++) {
            let j = i + len - 1;
            // pr(i, j, a.slice(i, j + 1))
            if (len == 1) {
                dp[i][j] = 0;
            } else {
                let L = pre[j + 1] - pre[i + 1] - dp[i + 1][j];
                let R = pre[j] - pre[i] - dp[i][j - 1];
                // pr(L, R);
                dp[i][j] = Math.max(L, R);
            }
            // pr(dp); // top left -> bottom right (top down)
        }
    }
    return dp[0][n - 1];
};

const initialize2DArrayNew = (n, m) => {
    let data = [];
    for (let i = 0; i < n; i++) {
        let tmp = Array(m).fill(0);
        data.push(tmp);
    }
    return data;
};

const preSum = (a, n) => {
    let pre = [0];
    for (let i = 0; i < n; i++) {
        pre.push(pre[i] + a[i]);
    }
    return pre;
};

const pr = console.log;
const main = () => {
    let stones = [5, 3, 1, 4, 2];
    let stones2 = [7, 90, 5, 1, 100, 10, 10, 2];
    pr(stoneGameVII(stones))
    pr(stoneGameVII(stones2))
};

main()