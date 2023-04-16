/**
 * 09/04/21 morning
 */

const pr = console.log;

const dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];

// Accepted
let n, m;
const findFarmland = (g) => {
    n = g.length, m = g[0].length;
    let se = new Set();
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            if (g[i][j] != 1) continue;
            let path = [];
            dfs(g, i, j, path);
            se.add(path);
        }
    }
    // pr(se);
    let res = [];
    for (let group of se) {
        group.sort((x, y) => (x[0] + x[1]) - (y[0] + y[1]));
        // pr(group);
        let topLeft = group[0];
        let bottomRight = group[group.length - 1];
        res.push(topLeft.concat(bottomRight));
    }
    return res;
};

const dfs = (g, i, j, path) => {
    if (i < 0 || i >= n || j < 0 || j >= m || g[i][j] <= 0) return;
    g[i][j] *= -1;
    path.push([i, j]);
    for (let dir of dirs) {
        dfs(g, i + dir[0], j + dir[1], path);
    }
};

const main = () => {
    let land = [[1, 0, 0], [0, 1, 1], [0, 1, 1]];
    let land2 = [[1, 1], [1, 1]];
    let land3 = [[0]];
    pr(findFarmland(land))
    pr(findFarmland(land2))
    pr(findFarmland(land3))
};

main()