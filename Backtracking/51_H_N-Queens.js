/**
 * 05/22/21 evening
 * https://leetcode.com/problems/n-queens/
 */

// Accepted --- 108ms 28.28%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/4377782.html
 * https://www.cnblogs.com/TenosDoIt/p/3801621.html
 */
let res;
const solveNQueens = (n) => {
    res = [];
    // let content = '.'.repeat(n);
    // let cur = Array(n).fill(content);
    let cur = initialize2DArrayNew(n, n);
    // pr(cur);
    dfs(cur, 0);
    // pr(res);
    return res;
};

const dfs = (cur, row) => {
    // pr(res);
    if (row == cur.length) {
        res.push(cur.map(x => x.join("")));
        return;
    }
    for (let col = 0; col < cur.length; col++) {
        if (ok(cur, row, col)) {
            cur[row][col] = 'Q';
            dfs(cur, row + 1);
            cur[row][col] = '.';
        }
    }
};

const ok = (cur, row, col) => {
    for (let i = 0; i < row; i++) { // check if current column valid by comparing other rows
        if (cur[i][col] == 'Q') return 0;
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) { // check right diagonal
        if (cur[i][j] == 'Q') return 0;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < cur.length; i--, j++) { // check left diagonal
        if (cur[i][j] == 'Q') return 0;
    }
    return 1;
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = Array(n).fill('.');
        data.push(tmp);
    }
    return data;
};

const pr = console.log;
const main = () => {
    let n = 4;
    let n2 = 1;
    pr(solveNQueens(n));
    pr(solveNQueens(n2));
}

main()