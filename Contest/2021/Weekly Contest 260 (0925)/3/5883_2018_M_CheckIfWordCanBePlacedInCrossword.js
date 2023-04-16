/**
 * 09/25/21 evening
 * https://leetcode.com/contest/weekly-contest-260/problems/check-if-word-can-be-placed-in-crossword/
 */

const pr = console.log;

// Accepted
// reference: https://leetcode.com/contest/weekly-contest-260/ranking uwi
const placeWordInCrossword = (g, s) => {
    if (checkHorizontal(g, s) || checkHorizontal(rotate_reverse(g), s)) return true;
    return false;
};

const checkHorizontal = (g, s) => {
    let n = g.length, m = g[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m;) {
            let col = j;
            while (col < m && g[i][col] != '#') col++;
            if (s.length == col - j) { // match
                let ok = true;
                for (let idx = 0; idx < s.length; idx++) {
                    if (g[i][j + idx] != ' ' && g[i][j + idx] != s[idx]) ok = false;
                }
                if (ok) return true;
                ok = true;
                for (let idx = 0; idx < s.length; idx++) {
                    if (g[i][j + idx] != ' ' && g[i][j + idx] != s[s.length - 1 - idx]) ok = false;
                }
                if (ok) return true;
            }
            if (col == j) col++;
            j = col;
        }
    }
    // pr(g)
    return false;
};

const rotate_reverse = (g) => {
    let n = g.length, m = g[0].length;
    let res = initialize2DArrayNew(m, n);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res[i][j] = g[j][i];
        }
    }
    return res;
};

const initialize2DArrayNew = (n, m) => { let data = []; for (let i = 0; i < n; i++) { let tmp = Array(m).fill(0); data.push(tmp); } return data; };

const main = () => {
    let board = [["#", " ", "#"], [" ", " ", "#"], ["#", "c", " "]], word = "abc";
    let board2 = [[" ", "#", "a"], [" ", "#", "c"], [" ", "#", "a"]], word2 = "ac";
    let board3 = [["#", " ", "#"], [" ", " ", "#"], ["#", " ", "c"]], word3 = "ca";
    pr(placeWordInCrossword(board, word))
    pr(placeWordInCrossword(board2, word2))
    pr(placeWordInCrossword(board3, word3))
};

main()