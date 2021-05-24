/**
 * 05/22/21 afternoon
 * https://leetcode.com/problems/spiral-matrix-ii/
 */

// Accepted --- 76ms 79.88%
const generateMatrix = (n) => {
    let g = initialize2DArrayNew(n, n);
    let i = j = 0;
    let move = 'r';
    for (let x = 1; x <= n * n; x++) {
        if (move == 'r') {
            g[i][j] = x;
            if (j + 1 < n && g[i][j + 1] == 0) {
                j++;
            } else {
                move = 'd';
                i++;
            }
        } else if (move == 'l') {
            g[i][j] = x;
            if (j - 1 >= 0 && g[i][j - 1] == 0) {
                j--;
            } else {
                move = 'u';
                i--;
            }
        } else if (move == 'd') {
            g[i][j] = x;
            if (i + 1 < n && g[i + 1][j] == 0) {
                i++;
            } else {
                move = 'l';
                j--;
            }
        } else if (move == 'u') {
            g[i][j] = x;
            if (i - 1 >= 0 && g[i - 1][j] == 0) {
                i--;
            } else {
                move = 'r';
                j++;
            }
        }
        // pr(g, x);
    }
    return g;
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};

const pr = console.log;
const main = () => {
    let n = 3;
    let n2 = 1;
    pr(generateMatrix(n));
    pr(generateMatrix(n2));
};

main()