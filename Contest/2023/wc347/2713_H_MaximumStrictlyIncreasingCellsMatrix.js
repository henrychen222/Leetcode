/*
 * 05/27/23 evening
 * https://leetcode.com/contest/weekly-contest-347/problems/maximum-strictly-increasing-cells-in-a-matrix/
 */

const pr = console.log;

const initialize2DArray = (n, m) => [...Array(n)].map(() => Array(m).fill(0));

const stmkey_in = (m) => new Map([...m].sort((x, y) => x[0] - y[0]));


// https://leetcode.cn/circle/discuss/5eR2p8/  TsReaper
const maxIncreasingCells = (g) => {
    let n = g.length, m = g[0].length, ma = new Map(),
        row = new Int32Array(n).fill(0), col = new Int32Array(m).fill(0), res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!ma.has(g[i][j])) ma.set(g[i][j], []);
            ma.get(g[i][j]).push([i, j]);
        }
    }
    ma = stmkey_in(ma);
    // pr(ma)
    for (const [x, d] of ma) {
        let trow = [], tcol = [];
        for (const [i, j] of d) {
            let t = Math.max(1, row[i] + 1, col[j] + 1);
            // pr(i, j, row,  col)
            res = Math.max(res, t);
            trow.push([i, t]);
            tcol.push([j, t]);
        }
        for (const [i, j] of trow) row[i] = Math.max(row[i], j);
        for (const [i, j] of tcol) col[i] = Math.max(col[i], j);
    }
    return res;
};

// WA
const maxIncreasingCells1 = (g) => {
    let n = g.length, m = g[0].length, f = initialize2DArray(n, m), res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            for (let v = 1; i + v < n; v++) { // down
                if (g[i + v][j] > g[i][j]) {
                    f[i + v][j] = Math.max(f[i + v][j], f[i][j] + 1);
                } else if (g[i][j] > g[i + v][j]) {
                    f[i][j] = Math.max(f[i][j], f[i + v][j] + 1);
                }
            }
            for (let v = 1; i - v >= 0; v++) { // up
                if (g[i - v][j] > g[i][j]) {
                    f[i - v][j] = Math.max(f[i - v][j], f[i][j] + 1);
                } else if (g[i][j] > g[i - v][j]) {
                    f[i][j] = Math.max(f[i][j], f[i - v][j] + 1);
                }
            }
            for (let v = 1; j + v < m; v++) { // right
                if (g[i][j + v] > g[i][j]) {
                    f[i][j + v] = Math.max(f[i][j + v], f[i][j] + 1);
                } else if (g[i][j] > g[i][j + v]) {
                    f[i][j] = Math.max(f[i][j], f[i][j + v] + 1);
                }
            }
            for (let v = 1; j - v >= 0; v++) { // left
                if (g[i][j - v] > g[i][j]) {
                    f[i][j - v] = Math.max(f[i][j - v], f[i][j] + 1);
                } else if (g[i][j] > g[i][j - v]) {
                    f[i][j] = Math.max(f[i][j], f[i][j - v] + 1);
                }
            }
        }
        pr(f);
    }
    pr(f);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) res = Math.max(res, f[i][j]);
    }
    return res + 1;
};

const main = () => {
    let g = [[3, 1], [3, 4]]
    let g2 = [[1, 1], [1, 1]]
    let g3 = [[3, 1, 6], [-9, 5, 7]]
    let g_debug1 = [[5, 8, -3, 4]];
    pr(maxIncreasingCells(g))
    pr(maxIncreasingCells(g2))
    pr(maxIncreasingCells(g3))
    pr(maxIncreasingCells(g_debug1))
}

main()

/*
5 8 -3 4
*/