/*
 * 04/03/23 night
 * https://leetcode.com/problems/cherry-pickup-ii/
 */

const pr = console.log;

const initialize3DArray = (n, m, p) => { let r = []; for (let i = 0; i < n; i++) { let d = []; for (let j = 0; j < m; j++) { let t = Array(p).fill(0); d.push(t); } r.push(d); } return r; };

// Bottom-up
// reference: https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-1463-cherry-pickup-ii/
const cherryPickup = (g) => {
    let n = g.length, m = g[0].length, dp = initialize3DArray(n + 2, m + 2, m + 2);
    for (let y = n; y >= 1; y--) {
        for (let x1 = 1; x1 <= m; x1++) {
            for (let x2 = 1; x2 <= m; x2++) {
                let cur = g[y - 1][x1 - 1] + (x1 != x2) * g[y - 1][x2 - 1]
                for (let d1 = -1; d1 <= 1; d1++) {
                    for (let d2 = -1; d2 <= 1; d2++) {
                        dp[y][x1][x2] = Math.max(dp[y][x1][x2], cur + dp[y + 1][x1 + d1][x2 + d2]);
                    }
                }
            }
        }
    }
    return dp[1][1][m];
};

const main = () => {
    let g = [[3, 1, 1], [2, 5, 1], [1, 5, 5], [2, 1, 1]];
    let g2 = [[1, 0, 0, 0, 0, 0, 1], [2, 0, 0, 0, 0, 3, 0], [2, 0, 9, 0, 0, 0, 0], [0, 3, 0, 5, 4, 0, 0], [1, 0, 2, 3, 0, 0, 6]];
    pr(cherryPickup(g))
    pr(cherryPickup(g2))
};

main()