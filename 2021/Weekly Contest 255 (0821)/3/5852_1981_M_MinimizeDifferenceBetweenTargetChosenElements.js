/**
 * 08/21/21 evening
 * https://leetcode.com/contest/weekly-contest-255/problems/minimize-the-difference-between-target-and-chosen-elements/
 */

const pr = console.log;

// don't know
const abs = Math.abs;
const minimizeTheDifference = (g, t) => {
    let n = g.length;
    let m = g[0].length;
    let dp = initialize2DArrayNew(n, m);
    pr(dp)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i == 0) {
                dp[i][j] = g[i][j];
            } else {
                let best = Number.MAX_SAFE_INTEGER;
                for (let col = 0; col < m; col++) {
                    let sum = g[i][j] + dp[i - 1][col];
                    let dis = abs(sum - t);
                    best = Math.min(best, dis);
                }
                dp[i][j] += t - best;
            }
        }
        pr(dp);
    }
};

const initialize2DArrayNew = (n, m) => { let data = []; for (let i = 0; i < n; i++) { let tmp = Array(m).fill(0); data.push(tmp); } return data; };

const main = () => {
    let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], target = 13
    let mat2 = [[1], [2], [3]], target2 = 100;
    let mat3 = [[1, 2, 9, 8, 7]], target3 = 6;
    pr(minimizeTheDifference(mat, target))
    pr(minimizeTheDifference(mat2, target2))
    pr(minimizeTheDifference(mat3, target3))
};

main()