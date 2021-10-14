/**
 * 10/12/21 morning
 * https://leetcode.com/problems/cherry-pickup/
 * 
 * reference:
 * https://www.cnblogs.com/grandyang/p/8215787.html
 * https://leetcode.com/problems/cherry-pickup/discuss/109903/step-by-step-guidance-of-the-on3-time-and-on2-space-solution
 * https://leetcode.com/problems/cherry-pickup/discuss/109906/annotated-c-dp-solution
 */

const initialize2DArrayNew = (n, m) => { let data = []; for (let i = 0; i < n; i++) { let tmp = Array(m).fill(0); data.push(tmp); } return data; };

// Accepted --- 96ms 100%
const mx = Math.max;
const cherryPickup = (g) => {
    let n = g.length;
    let dp = initialize2DArrayNew(n, n); // holds maximum cherries of two k-length paths can pickup. The two k-length paths arrive at (i, k - i) and (j, k - j)
    dp[0][0] = g[0][0];
    let max = 2 * n - 1; // number of steps from (0, 0) to (n-1, n-1)
    for (let k = 1; k < max; k++) {
        for (let i = n - 1; ~i; i--) {
            for (let x = n - 1; ~x; x--) { // go: (i, j)   back: (x, y);
                let j = k - i, y = k - x;
                // pr(i, j, x, y)
                if (j < 0 || j >= n || y < 0 || y >= n || g[i][j] == -1 || g[x][y] == -1) {
                    dp[i][x] = -1;
                    continue;
                }
                if (i > 0) dp[i][x] = mx(dp[i][x], dp[i - 1][x]);
                // pr(dp[i][x]);
                if (x > 0) dp[i][x] = mx(dp[i][x], dp[i][x - 1]);
                if (i > 0 && x > 0) dp[i][x] = mx(dp[i][x], dp[i - 1][x - 1]);
                if (dp[i][x] >= 0) dp[i][x] += g[i][j] + (i != x ? g[x][y] : 0);
                // pr(dp[i][x]);
            }
        }
    }
    return dp[n - 1][n - 1] < 0 ? 0 : dp[n - 1][n - 1];
};

const pr = console.log;
const main = () => {
    let grid = [
        [0, 1, -1],
        [1, 0, -1],
        [1, 1, 1]
    ];
    let grid2 = [
        [1, 1, -1],
        [1, -1, 1],
        [-1, 1, 1]
    ];
    pr(cherryPickup(grid))
    pr(cherryPickup(grid2))
};

main()