/**
 * 09/25/21 evening
 * https://leetcode.com/contest/weekly-contest-260/problems/grid-game/
 */

const pr = console.log;

// don't know
const sm = (a, g) => a.reduce(((x, y) => x + g[y[0]][y[1]]), 0);
const gridGame = (g) => {
    let p = getAllPathsMatrix(g);
    p = p.map(x => [...x, sm(x, g)]);
    p.sort((x, y) => y[y.length - 1] - x[x.length - 1]);
    pr("length", p.length, p)
    let remove = p[7];
    remove.pop();
    // pr(remove)
    let gc = g;
    for (const [x, y] of remove) gc[x][y] = 0;
    pr("removed grid: ", gc);
    let p2 = getAllPathsMatrix(gc);
    p2 = p2.map(x => [...x, sm(x, gc)]);
    p2.sort((x, y) => y[y.length - 1] - x[x.length - 1]);
    // pr(p2);
    let res = p2[0].pop();
    return res;
};

const getAllPathsMatrix = (g) => {
    let res = [];
    dfs(g, [], 0, 0, res);
    return res;
};


const dfs = (g, path, i, j, res) => {
    if (g.length == 0) return;
    let n = g.length, m = g[0].length;
    if (i == n - 1 && j == m - 1) {
        res.push([...path].concat([[i, j]]));
        // pr(path, res);
        return;
    }
    path.push([i, j]);
    if (isValid(i, j + 1, n, m)) dfs(g, path, i, j + 1, res);
    if (isValid(i + 1, j, n, m)) dfs(g, path, i + 1, j, res);
    path.pop();
};

const isValid = (i, j, m, n) => i >= 0 && i < m && j >= 0 && j < n;

const main = () => {
    let grid = [[2, 5, 4], [1, 5, 1]];
    let grid2 = [[3, 3, 1], [8, 5, 2]];
    let grid3 = [[1, 3, 1, 15], [1, 3, 3, 1]];
    let debug1 = [[20, 3, 20, 17, 2, 12, 15, 17, 4, 15], [20, 10, 13, 14, 15, 5, 2, 3, 14, 3]]; // 63

    let test = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    // pr(gridGame(grid))
    // pr(gridGame(grid2))
    // pr(gridGame(grid3))
    pr(gridGame(debug1))

    // pr(gridGame(test))
};

main()


// const dfs = (g, path, i, j, res) => {
//     if (g.length == 0) return;
//     let n = g.length, m = g[0].length;
//     if (i == n - 1 && j == m - 1) {
//         res.push([...path].concat(g[i][j]));
//         // pr(path, res);
//         return;
//     }
//     path.push(g[i][j]);
//     if (isValid(i, j + 1, n, m)) dfs(g, path, i, j + 1, res);
//     if (isValid(i + 1, j, n, m)) dfs(g, path, i + 1, j, res);
//     path.pop();
// };