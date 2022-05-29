/**
 * 05/02/22 afternoon
 * https://leetcode.com/problems/game-of-life/
 */

const pr = console.log;

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(0); d.push(t); } return d; };

// Accepted --- 86ms 41.81%
const gameOfLife = (g) => {
    let n = g.length, m = g[0].length, res = initialize2DArray(n, m);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let one = 0;
            if (i + 1 < n && g[i + 1][j]) one++;
            if (i - 1 >= 0 && g[i - 1][j]) one++;
            if (j + 1 < m && g[i][j + 1])  one++;
            if (j - 1 >= 0 && g[i][j - 1]) one++;
            if (i + 1 < n && j + 1 < m && g[i + 1][j + 1]) one++;
            if (i - 1 >= 0 && j + 1 < m && g[i - 1][j + 1]) one++;
            if (i + 1 < n && j - 1 >= 0 && g[i + 1][j - 1])  one++;
            if (i - 1 >= 0 && j - 1 >= 0 && g[i - 1][j - 1] ) one++;
            if (g[i][j]) {
                res[i][j] = one == 2 || one == 3 ? 1 : 0;
            } else {
                res[i][j] = one == 3 ? 1 : 0;
            }
        }
    }
    for (let i = 0; i < n; i++) 
        for (let j = 0; j < m; j++) g[i][j] = res[i][j];
    pr(g);
};

const main = () => {
    let board = [
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
    ];
    let board2 = [
        [1, 1],
        [1, 0]
    ];
    gameOfLife(board);
    gameOfLife(board2);
};

main()