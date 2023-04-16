/**
 * 06/25/22 evening
 * https://leetcode.com/contest/weekly-contest-299/problems/check-if-matrix-is-x-matrix/
 */

const pr = console.log;

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(0); d.push(t); } return d; };

// Accepted
const checkXMatrix = (g) => {
    let n = g.length, m = g[0].length, ok = true, visit = initialize2DArray(n, m);
    for (let i = 0, j = 0; i < n; i++, j++) {
        if (g[i][j] == 0) ok = false;
        visit[i][j] = 1;
    }
    for (let i = n - 1, j = 0; ~i; i--, j++) {
        if (g[i][j] == 0) ok = false;
        visit[i][j] = 1;
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (visit[i][j]) continue;
            if (g[i][j] != 0) return false;
        }
    }
    return ok;
};

const main = () => {
    let g = [[2, 0, 0, 1], [0, 3, 1, 0], [0, 5, 2, 0], [4, 0, 0, 2]];
    let g2 = [[5, 7, 0], [0, 3, 1], [0, 5, 0]];
    pr(checkXMatrix(g))
    pr(checkXMatrix(g2))
};

main()