/**
 * 05/22/21 afternoon
 * https://leetcode.com/problems/spiral-matrix/
 */

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};

// Accepted --- 76ms 72.64%
const spiralOrder = (g) => {
    let n = g.length;
    let m = g[0].length;
    let tot = n * m;
    let res = [];
    let i = j = 0;
    let move = 'r';
    let visit = initialize2DArrayNew(n, m);
    while (tot--) {
        if (move == 'r') {
            // pr("r", i, j, g[i][j])
            res.push(g[i][j]);
            visit[i][j] = 1;
            if (j + 1 < m && visit[i][j + 1] == 0) {
                j++;
            } else {
                move = 'd';
                i++;
            }
        } else if (move == 'l') {
            // pr("l", i, j, g[i][j])
            res.push(g[i][j]);
            visit[i][j] = 1;
            if (j - 1 >= 0 && visit[i][j - 1] == 0) {
                j--;
            } else {
                move = 'u';
                i--;
            }
        } else if (move == 'd') {
            // pr("d", i, j, g[i][j])
            res.push(g[i][j]);
            visit[i][j] = 1;
            if (i + 1 < n && visit[i + 1][j] == 0) {
                i++;
            } else {
                move = 'l';
                j--;
            }
        } else if (move == 'u') {
            // pr("d", i, j, g[i][j])
            res.push(g[i][j]);
            visit[i][j] = 1;
            if (i - 1 >= 0 && visit[i - 1][j] == 0) {
                i--;
            } else {
                move = 'r';
                j++;
            }
        }
        // pr(res, visit, move);
    }
    return res;
};

// Accepted --- 76ms 72.64%
const spiralOrder1 = (g) => {
    let n = g.length;
    let m = g[0].length;
    let tot = n * m;
    let res = [];
    let i = j = 0;
    let move = 'r';
    let round = 1;
    let decide = 'r';
    while (tot--) {
        if (move == 'r') {
            // pr("r", i, j, g[i][j])
            res.push(g[i][j]);
            // j++;
            // if (j == m - round) move = 'd';
            if (j < m - round) {
                j++;
            } else {
                move = 'd';
                decide += 'd';
                i++;
            }
        } else if (move == 'l') {
            // pr("l", i, j, g[i][j])
            res.push(g[i][j]);
            // j--;
            // if (j == round - 1) move = 'u';
            if (j >= round) {
                j--;
            } else {
                move = 'u';
                decide += 'u';
                i--;
            }
        } else if (move == 'd') {
            // pr("d", i, j, g[i][j])
            res.push(g[i][j]);
            // i++;
            // if (i == n - round) move = 'l';
            if (i < n - round) {
                i++;
            } else {
                move = 'l';
                decide += 'l';
                j--;
            }
        } else if (move == 'u') {
            // pr("u", i, j, g[i][j])
            res.push(g[i][j]);
            // i--;
            // if (i == round - 1) {
            //     move == 'r';
            //     round++;
            // }
            if (i >= round) {
                i--;
            } else {
                move = 'r';
                decide += 'r';
                j++;
            }
        }
        if (decide == 'rdlu') {
            round++;
            decide = '';
        }
        // pr(res);
    }
    return res;
};

const pr = console.log;
const main = () => {
    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let matrix2 = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ];
    pr(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]
    pr(spiralOrder(matrix2)); // [1,2,3,4,8,12,11,10,9,5,6,7]
};

main()