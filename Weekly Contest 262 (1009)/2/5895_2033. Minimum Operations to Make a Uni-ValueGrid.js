/**
 * 10/09/21 evening
 * https://leetcode.com/contest/weekly-contest-262/problems/minimum-operations-to-make-a-uni-value-grid/
 */

const pr = console.log;

const minOperations = (g, x) => {
    let n = g.length, m = g[0].length, tot = n * m, a = Array(tot).fill(0), res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            a[i * m + j] = g[i][j];
        }
    }
    // pr(a)
    a.sort((x, y) => x - y);
    // pr(a)
    for (let i = 0; i < tot; i++) {
        let idx = tot >> 1; // finally value a[idx]
        if ((a[i] - a[idx]) % x != 0) return -1;
        res += Math.abs(a[i] - a[idx]) / x;
        // pr(a[i], a[idx],  Math.abs(a[i] - a[idx]) / x)
    }
    return res;
};

const main = () => {
    let grid = [[2, 4], [6, 8]], x = 2;
    let grid2 = [[1, 5], [2, 3]], x2 = 1;
    let grid3 = [[1, 2], [3, 4]], x3 = 2;
    pr(minOperations(grid, x))
    pr(minOperations(grid2, x2))
    pr(minOperations(grid3, x3))
};

main()