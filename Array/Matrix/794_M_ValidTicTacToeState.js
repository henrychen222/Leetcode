/**
 * 06/03/22 night
 * https://leetcode.com/problems/valid-tic-tac-toe-state/
 */

const pr = console.log;

// Accepted --- 90ms 34.12%
const validTicTacToe = (g) => {
    let o = 0, x = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (g[i][j] == 'O') {
                o++;
            } else if (g[i][j] == 'X') {
                x++;
            }
        }
    }
    if (win(g, 'OOO')) {
        if (win(g, 'XXX')) {
            // pr("both win")
            return false;
        } else {
            // pr("o win")
            return o == x;
        }
    } else {
        if (win(g, 'XXX')) {
            // pr("x win")
            return x - o == 1;
        } else {
            // pr("no win")
            return o == x || x - o == 1;
        }
    }
};

const win = (g, pattern) => {
    for (const s of g) {
        if (s == pattern) return true;
    }
    for (let i = 0; i < 3; i++) {
        let colPattern = '';
        for (let j = 0; j < 3; j++) colPattern += g[j][i];
        if (colPattern == pattern) return true;
    }
    let diagonal = '', diagonal2 = '';
    for (let i = 0, j = 0; i < 3; i++, j++) diagonal += g[i][j];
    for (let i = 2, j = 0; j < 3; i--, j++) diagonal2 += g[i][j];
    return diagonal == pattern || diagonal2 == pattern;
};

const main = () => {
    let board = ["O  ", "   ", "   "];
    let board2 = ["XOX", " X ", "   "];
    let board3 = ["XOX", "O O", "XOX"];
    let debug1 = ["   ", "   ", "   "];
    let debug2 = ["XXX","   ","OOO"];
    pr(validTicTacToe(board));
    pr(validTicTacToe(board2));
    pr(validTicTacToe(board3));
    pr(validTicTacToe(debug1));
    pr(validTicTacToe(debug2)); // false
};

main()