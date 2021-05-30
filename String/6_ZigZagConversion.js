/**
 * 05/26/21 morning
 * https://leetcode.com/problems/zigzag-conversion/
 */

// Accepted --- 132ms 22.07%
const convert = (s, row) => {
    if (row == 1) return s;
    let g = initialize2DArrayNew(row, 0); // difference
    let i = j = 0;
    let move = 'd';
    for (const c of s) {
        if (move == 'd') {
            g[i][j] = c;
            if (i + 1 < row) {
                i++;
            } else {
                move = 'ur';
                i--;
                j++;
            }
        } else if (move == 'ur') {
            g[i][j] = c;
            if (i - 1 >= 0) {
                i--;
                j++;
            } else {
                move = 'd';
                i++;
            }
        }
    }
    let res = '';
    for (const a of g) {
        for (const e of a) {
            if (e && e != -1) { // difference
                res += e;
            }
        }
    }
    return res;
};

// Accepted --- 388ms 5.06%
const convert1 = (s, row) => {
    if (row == 1) return s;
    let col = s.length;
    let g = initialize2DArrayNew(row, col);
    // let g = initialize2DArrayNew(row, 8);
    // pr(g);
    let i = j = 0;
    let move = 'd';
    for (const c of s) {
        if (move == 'd') {
            // pr(i, j)
            g[i][j] = c;
            if (i + 1 < row) {
                i++;
            } else {
                move = 'ur';
                // pr("i", i)
                i--;
                j++;
            }
        } else if (move == 'ur') {
            // pr(i, j)
            g[i][j] = c;
            if (i - 1 >= 0) {
                i--;
                j++;
            } else {
                move = 'd';
                i++;
            }
        }
        // pr(g, i, j);
    }
    let res = '';
    for (const a of g) {
        for (const e of a) {
            if (e != -1) {
                res += e;
            }
        }
    }
    return res;
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = Array(n).fill(-1);
        data.push(tmp);
    }
    return data;
};

const pr = console.log;
const main = () => {
    let s = "PAYPALISHIRING",
        numRows = 3;
    let s2 = "PAYPALISHIRING",
        numRows2 = 4;
    let s3 = "A",
        numRows3 = 1;
    let s_debug1 = "AB",
        numRow_debug1 = 1;
    let s_debug2 = "ABC",
        numRow_debug2 = 1;
    let s_debug3 = "ABCD",
        numRow_debug3 = 1;
    pr(convert(s, numRows));
    pr(convert(s2, numRows2));
    pr(convert(s3, numRows3));
    pr(convert(s_debug1, numRow_debug1));
    pr(convert(s_debug2, numRow_debug2));
    pr(convert(s_debug3, numRow_debug3));
    let s_debug4 = "PAYPALISHIRING",
        numRow_debug4 = 7;
    pr(convert(s_debug4, numRow_debug4));
};

main()