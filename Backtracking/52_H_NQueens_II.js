/*
 * 12/09/22 night
 * https://leetcode.com/problems/n-queens-ii/
 */

const pr = console.log;

// Accepted
// reference: https://www.cnblogs.com/grandyang/p/4380706.html
let res, n;
const totalNQueens = (N) => {
    res = 0, n = N;
    let pos = Array(n).fill(-1);
    dfs(pos, 0);
    return res;
};

const dfs = (pos, row) => {
    // pr(pos, row)
    if (row == n) res++;
    for (let col = 0; col < n; col++) {
        if (ok(pos, row, col)) {
            pos[row] = col;
            dfs(pos, row + 1);
            pos[row] = -1;
        }
    }
};

const ok = (pos, row, col) => {
    for (let i = 0; i < row; i++) {
        if (col == pos[i] || Math.abs(row - i) == Math.abs(col - pos[i])) return false;
    }
    return true;
};

const main = () => {
    let n = 4;
    let n2 = 1;
    let n3 = 9;
    pr(totalNQueens(n))
    pr(totalNQueens(n2))
    pr(totalNQueens(n3))
};

main()