/*
 * 08/07/23 night
 * https://leetcode.com/contest/weekly-contest-357/problems/find-the-safest-path-in-a-grid/
 * 
 * similar problem:
 * https://leetcode.com/contest/weekly-contest-212/problems/path-with-minimum-effort/
 */

const pr = console.log;

function DJSet(n) {
    let parent = Array(n).fill(-1);
    return { find, union, count, equiv, par, grp }
    function find(x) {
        return parent[x] < 0 ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x == y) return false;
        if (parent[x] < parent[y]) [x, y] = [y, x];
        parent[x] += parent[y];
        parent[y] = x;
        return true;
    }
    function count() { // total groups
        return parent.filter(v => v < 0).length;
    }
    function equiv(x, y) { // isConnected
        return find(x) == find(y);
    }
    function par() {
        return parent;
    }
    function grp() { // generate all groups (nlogn)
        let groups = [];
        for (let i = 0; i < n; i++) groups.push([]);
        for (let i = 0; i < n; i++) groups[find(i)].push(i); // sorted and unique
        return groups;
    }
}

const initialize2DArray = (n, m) => [...Array(n)].map(() => Array(m).fill(Number.MAX_SAFE_INTEGER));

// Accepted --- 2837ms
const maximumSafenessFactor = (g) => {
    let n = g.length, m = g[0].length, dis = minDisGlobal(g), ds = new DJSet(n * m), es = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) es.push([i, j, dis[i][j]]);
    }
    es.sort((x, y) => y[2] - x[2]);
    // pr(es);
    let path = initialize2DArray(n, m);
    for (let i = 0; i < n; i++) path[i].fill(false);
    for (const [x, y, d] of es) {
        // pr([x, y, d])
        path[x][y] = true;
        for (let k = 0; k < 4; k++) {
            let nx = x + dx[k], ny = y + dy[k];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (path[nx][ny]) ds.union(x * m + y, nx * m + ny);
            if (ds.equiv(0, (n - 1) * m + (m - 1))) return d;
        }
    }
    return 0;
}

const dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];
const minDisGlobal = (g) => {
    let n = g.length, m = g[0].length, dis = initialize2DArray(n, m), q = [], thief = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j] == thief) {
                dis[i][j] = 0;
                q.push([i, j]);
            }
        }
    }
    while (q.length) {
        let [x, y] = q.shift();
        for (let k = 0; k < 4; k++) {
            let nx = x + dx[k], ny = y + dy[k];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (dis[nx][ny] > dis[x][y] + 1) {
                dis[nx][ny] = dis[x][y] + 1;
                q.push([nx, ny]);
            }
        }
    }
    return dis;
};

const main = () => {
    let g = [[1, 0, 0], [0, 0, 0], [0, 0, 1]];
    let g2 = grid = [[0, 0, 1], [0, 0, 0], [0, 0, 0]];
    let g3 = [[0, 0, 0, 1], [0, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 0]]
    pr(maximumSafenessFactor(g))
    pr(maximumSafenessFactor(g2))
    pr(maximumSafenessFactor(g3))
};

main()