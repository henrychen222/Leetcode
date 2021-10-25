/**
 * 10/14/21 evening
 * https://leetcode.com/problems/unique-paths-iii/
 */

// Accepted --- 95ms 63.46%
// reference: https://leetcode.com/problems/unique-paths-iii/discuss/221946/JavaPython-Brute-Force-Backtracking
const dir = [[0, 1],[0, -1],[1, 0],[-1, 0]];
let res, empty, n, m, g;
const uniquePathsIII = (grid) => {
    res = 0, empty = 1, g = grid; // empty: number of empty cells to traverse
    n = g.length, m = g[0].length;
    let x = 0, y = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j] == 1) {
                x = i; y = j; // starting point
            } else if (g[i][j] == 0) {
                empty++;
            }
        }
    }
    dfs(x, y);
    return res;
};

const dfs = (x, y) => {
    // pr(x, y);
    if (x < 0 || x >= n || y < 0 || y >= m || g[x][y] < 0) return; // g[x][y] < 0: visited (-2)  block(-1) stop
    if (g[x][y] == 2) {
        if (empty == 0) res++; // reach destination and use out all empty cells
        return;
    }
    g[x][y] = -2; // visited
    empty--;
    for (let k = 0; k < 4; k++) dfs(x + dir[k][0], y + dir[k][1]);
    g[x][y] = 0; // backtrack reset for next empty cell traverse
    empty++;
};

const pr = console.log;
const main = () => {
    let grid = [
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 2, -1]
    ];
    let grid2 = [
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 2]
    ];
    let grid3 = [
        [0, 1],
        [2, 0]
    ];
    pr(uniquePathsIII(grid))
    pr(uniquePathsIII(grid2))
    pr(uniquePathsIII(grid3))
};

main()