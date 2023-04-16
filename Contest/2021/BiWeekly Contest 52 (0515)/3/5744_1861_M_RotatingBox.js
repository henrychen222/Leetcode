/**
 * 05/15/21 morning
 * https://leetcode.com/contest/biweekly-contest-52/problems/rotating-the-box/
 */

const pr = console.log;

// Accepted
// reference: scut_dell 
const rotateTheBox = (b) => {
    b = rotate90Clock(b);
    let n = b.length;
    let m = b[0].length;
    for (let i = n - 1; ~i; i--) {
        for (let j = 0; j < m; j++) {
            for (let d = i; d + 1 < n && b[d][j] == '#' && b[d + 1][j] == '.'; d++) {
                // b[d][j] = '.';
                // b[d + 1][j] = '#';
                [b[d][j], b[d + 1][j]] = [b[d + 1][j], b[d][j]];
            }
        }
    }
    return b;
};

// WA
const rotateTheBox1 = (b) => {
    b = rotate90Clock(b);
    pr(b);
    let n = b.length;
    let m = b[0].length;
    for (let i = n - 1; ~i; i--) {
        for (let j = 0; j < m; j++) {
            if (b[i][j] == '#' && i != n - 1) {
                pr("row", i, "col", j, b[i][j])
                for (d = i; d < n; d++) {
                    if (d - 1 >= 0) {
                        if (b[d][j] != '.' || d == n - 1) {
                            if (b[d - 1][j] == '.') {
                                pr("swap with", "row", d - 1, "col", j, b[d - 1][j]);
                                [b[i][j], b[d - 1][j]] = [b[d - 1][j], b[i][j]];
                                break;
                            }
                        }
                    }
                }
            }
        }
        pr(b);
    }
    return b;
};

const rotate90Clock = (matrix) => {
    let n = matrix.length;
    let m = matrix[0].length;
    let res = initialize2DArrayNew(m, n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            res[j][n - i - 1] = matrix[i][j];
        }
    }
    return res;
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};

const main = () => {
    let box = [["#", ".", "#"]];
    let box2 = [["#", ".", "*", "."], ["#", "#", "*", "."]];
    let box3 = [["#", "#", "*", ".", "*", "."], ["#", "#", "#", "*", ".", "."], ["#", "#", "#", ".", "#", "."]]
    // pr(rotateTheBox(box));
    // pr(rotateTheBox(box2));
    pr(rotateTheBox(box3));
};

main()