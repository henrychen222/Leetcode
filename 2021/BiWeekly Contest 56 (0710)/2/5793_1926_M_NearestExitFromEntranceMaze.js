/**
 * 07/10/21 morning
 * https://leetcode.com/contest/biweekly-contest-56/problems/nearest-exit-from-entrance-in-maze/
 */

const pr = console.log;

// endless loop issue
let g, m, n, res, i, j, vis;
const nearestExit = (maze, entrance) => {
    g = maze;
    n = g.length;
    m = g[0].length;
    pr(n, m)
    res = Number.MAX_SAFE_INTEGER;
    i = entrance[0];
    j = entrance[1];
    dfs(i + 1, j, 1);
    dfs(i - 1, j, 1);
    dfs(i, j + 1, 1);
    dfs(i, j - 1, 1);
    return res == Number.MAX_SAFE_INTEGER ? -1 : res;
};

const dfs = (x, y, step) => {
    pr(x, y, step)
    if (x < 0 || x >= n || y < 0 || y >= m || g[x][y] == '+') {
        pr("stop")
        return;
    }
    if (x == 0 || x == n - 1 || y == 0 || y == m - 1) {
        pr("111111")
        if (g[x][y] == '.') {
            res = Math.min(res, step);
            // vis[x][y] = res;
        }
        return;
    }
    dfs(x + 1, y, step + 1);
    pr("x - 1", x, y, g[x][y])
    dfs(x - 1, y, step + 1);
    pr("y + 1", x, y, g[x][y])
    dfs(x, y + 1, step + 1);
    pr("y - 1", x, y, g[x][y])
    dfs(x, y - 1, step + 1);
};

const main = () => {
    let maze = [["+", "+", ".", "+"], [".", ".", ".", "+"], ["+", "+", "+", "."]], entrance = [1, 2];
    let maze2 = [["+", "+", "+"], [".", ".", "."], ["+", "+", "+"]], entrance2 = [1, 0];
    let maze3 = [[".", "+"]], entrance3 = [0, 0];
    let maze_debug1 = [["+", ".", "+", "+", "+", "+", "+"], ["+", ".", "+", ".", ".", ".", "+"], ["+", ".", "+", ".", "+", ".", "+"], ["+", ".", ".", ".", "+", ".", "+"], ["+", "+", "+", "+", "+", ".", "+"]],
        entrance_debug1 = [0, 1];
    pr(nearestExit(maze, entrance));
    pr(nearestExit(maze2, entrance2));
    pr(nearestExit(maze3, entrance3));
    pr(nearestExit(maze_debug1, entrance_debug1));
};

main()