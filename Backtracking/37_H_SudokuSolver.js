/**
 * 08/21/21 evening
 * https://leetcode.com/problems/sudoku-solver/
 */

const pr = console.log;

// Accepted --- 228ms 14.88%
// reference: https://www.cnblogs.com/grandyang/p/4421852.html
const solveSudoku = (g) => {
    dfs(g);
    pr(g)
};

const dfs = (g) => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (g[i][j] != '.') continue;
            for (let c = 1; c <= 9; c++) {
                if (isValid(g, i, j, c + '')) {
                    g[i][j] = c + '';
                    if (dfs(g)) return true;
                    g[i][j] = '.';
                }
            }
            return false;
        }
    }
    return true;
};

const int = parseInt;
const isValid = (g, i, j, val) => {
    for (let k = 0; k < 9; k++) {
        if (g[k][j] != '.' && g[k][j] == val) return false;
        if (g[i][k] != '.' && g[i][k] == val) return false;
        let row = int(i / 3) * 3 + int(k / 3);
        let col = int(j / 3) * 3 + k % 3;
        // pr(row, col)
        if (g[row][col] != '.' && g[row][col] == val) return false;
    }
    return true;
};

const main = () => {
    let board = [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ];
    solveSudoku(board);
};

main()

// for (let i = '1'; i < '9'; i++) pr(i);