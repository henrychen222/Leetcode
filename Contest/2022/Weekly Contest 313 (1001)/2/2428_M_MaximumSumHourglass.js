/*
 * 10/01/22 evning
 * https://leetcode.com/contest/weekly-contest-313/problems/maximum-sum-of-an-hourglass/
 */

const pr = console.log;

const sm = (a) => a.reduce(((x, y) => x + y), 0);

// Accepted
const maxSum = (g) => {
    let n = g.length, m = g[0].length, res = 0;
    for (let i = 0; i + 2 < n; i++) {
        for (let j = 0; j + 2 < m; j++) {
            let a = [g[i][j], g[i][j + 1], g[i][j + 2], g[i + 1][j + 1], g[i + 2][j], g[i + 2][j + 1], g[i + 2][j + 2]];
            res = Math.max(res, sm(a));
        }
    }
    return res;
};

const main = () => {
    let g = [[6, 2, 1, 3], [4, 2, 1, 5], [9, 2, 8, 7], [4, 1, 2, 9]];
    let g2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    pr(maxSum(g))
    pr(maxSum(g2))
};

main()