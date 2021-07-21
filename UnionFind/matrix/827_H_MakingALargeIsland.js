/**
 * 07/20/21 night
 * https://leetcode.com/problems/making-a-large-island/
 */

/**
 * Accepted --- 208ms 99.42%
 * reference:
 * https://leetcode.com/problems/making-a-large-island/discuss/1351798/javascript-dfs-(paint-grid)-208ms-99.42
 * https://zxi.mytechroad.com/blog/graph/leetcode-827-making-a-large-island/
 */
let n, m, g, color;
const largestIsland = (grid) => {
    g = grid;
    n = g.length;
    m = g[0].length;
    let res = 0;
    let sizes = [0, 0];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j] == 1) {
                let size = paint(i, j, sizes.length);
                // pr("size", size);
                sizes.push(size);
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j] == 0) {
                let se = new Set([getColor(i + 1, j), getColor(i - 1, j), getColor(i, j + 1), getColor(i, j - 1)]);
                let newSize = 1;
                for (const color of se) {
                    newSize += sizes[color];
                }
                res = Math.max(res, newSize);
            }
        }
    }
    return res == 0 ? n * m : res;
};

const paint = (i, j, color) => {
    // pr(i, j, color, g);
    if (getColor(i, j) != 1) return 0;
    g[i][j] = color;
    return 1 + paint(i + 1, j, color) + paint(i - 1, j, color) + paint(i, j + 1, color) + paint(i, j - 1, color);
};

const getColor = (i, j) => {
    return (i < 0 || j < 0 || i >= n || j >= m) ? 0 : g[i][j];
};

///////////////////////////////////////////////////////////////////////////////// 
// TLE 69/75 https://leetcode.com/contest/weekly-contest-82/ranking uwi
const largestIsland1 = (g) => {
    let n = g.length;
    let m = g[0].length;
    let res = cal(g);
    // pr(res);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j] == 0) {
                g[i][j] = 1;
                res = Math.max(res, cal(g))
                g[i][j] = 0;
            }
        }
    }
    return res;
};

function DJSet(n) {
    let parent = Array(n).fill(-1);
    return { find, union, getParent }
    function find(x) {
        return parent[x] < 0 ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x != y) {
            if (parent[x] < parent[y])[x, y] = [y, x];
            parent[x] += parent[y];
            parent[y] = x;
        }
        return x == y;
    }
    function getParent() {
        return parent;
    }
}

const cal = (g) => {
    let n = g.length;
    let m = g[0].length;
    let ds = new DJSet(n * m);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (j + 1 < m && g[i][j] + g[i][j + 1] == 2) ds.union(i * m + j, i * m + j + 1);
            if (i + 1 < n && g[i][j] + g[i + 1][j] == 2) ds.union(i * m + j, (i + 1) * m + j);
        }
    }
    let res = 0;
    let p = ds.getParent();
    // pr(p);
    for (const group of p) res = Math.max(res, -group);
    return res;
};

const pr = console.log;
const main = () => {
    let grid = [
        [1, 0],
        [0, 1]
    ];
    let grid2 = [
        [1, 1],
        [1, 0]
    ];
    let grid3 = [
        [1, 1],
        [1, 1]
    ];
    pr(largestIsland(grid))
    pr(largestIsland(grid2))
    pr(largestIsland(grid3))
};

main()