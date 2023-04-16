/**
 * 08/13/22 evening
 * https://leetcode.com/contest/weekly-contest-306/problems/largest-local-values-in-a-matrix/
 */

const pr = console.log;

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(0); d.push(t); } return d; };

// Accepted
const largestLocal = (g) => {
    let n = g.length, res = initialize2DArray(n - 2, n - 2);
    for (let i = 0; i < n - 2; i++) {
        for (let j = 0; j < n - 2; j++) {
            let d = [g[i][j], g[i][j + 1], g[i][j + 2], g[i + 1][j], g[i + 1][j + 1], g[i + 1][j + 2], g[i + 2][j], g[i + 2][j + 1], g[i + 2][j + 2]];
            // pr(i, j, 'center', g[i][j], d)
            res[i][j] = Math.max(...d);
        }
    }
    return res;
};


const main = () => {
    let g = [[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]];
    let g2 = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 2, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]
    pr(largestLocal(g))
    pr(largestLocal(g2))
};

main()