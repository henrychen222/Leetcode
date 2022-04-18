/**
 * 06/23/21 morning
 * https://leetcode.com/problems/count-sub-islands/
 */

// Accepted --- 200ms 63.64%
const dx = [-1, 0, 1, 0], dy = [0, 1, 0, -1];
const countSubIslands2 = (g1, g2) => {
    let [n, m, res] = [g1.length, g1[0].length, 0];
    let visit = initialize2DArrayNew(n, m);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (visit[i][j] || !g2[i][j]) continue;
            let q = [[i, j]];
            visit[i][j] = 1;
            let cnt = 1;
            while (q.length) {
                // pr(q);
                let cur = q.shift();
                let [x, y] = [cur[0], cur[1]];
                if (!g1[x][y]) cnt = 0;
                for (let k = 0; k < 4; k++) {
                    let [xx, yy] = [x + dx[k], y + dy[k]];
                    if (xx < 0 || yy < 0 || xx >= n || yy >= m || visit[xx][yy] || !g2[xx][yy]) continue;
                    visit[xx][yy] = 1;
                    q.push([xx, yy]);
                }
            }
            res += cnt;
        }
    }
    return res;
};

const initialize2DArrayNew = (n, m) => {
    let data = [];
    for (let i = 0; i < n; i++) {
        let tmp = Array(m).fill(0);
        data.push(tmp);
    }
    return data;
};

////////////////////////////////////////////////////////////////////////////////
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

// Accepted --- 280ms 50.00%
// reference: https://leetcode.com/contest/weekly-contest-246/ranking uwi
const countSubIslands1 = (g1, g2) => {
    let n = g1.length;
    let m = g1[0].length;
    let ds1 = new DJSet(n * m);
    let ds2 = new DJSet(n * m);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i + 1 < n && g1[i][j] == 1 && g1[i + 1][j] == 1) {
                ds1.union(i * m + j, (i + 1) * m + j);
            }
            if (j + 1 < m && g1[i][j] == 1 && g1[i][j + 1] == 1) {
                ds1.union(i * m + j, i * m + j + 1);
            }
            if (i + 1 < n && g2[i][j] == 1 && g2[i + 1][j] == 1) {
                ds2.union(i * m + j, (i + 1) * m + j);
            }
            if (j + 1 < m && g2[i][j] == 1 && g2[i][j + 1] == 1) {
                ds2.union(i * m + j, i * m + j + 1);
            }
        }
    }
    // pr(ds1.getParent(), ds2.getParent())
    let d = Array(n * m).fill(-1);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g2[i][j] == 0) continue;
            let parent2 = ds2.find(i * m + j);
            if (g1[i][j] == 0 || d[parent2] == -2) {
                d[parent2] = -2;
                continue;
            }
            let parent1 = ds1.find(i * m + j);
            if (d[parent2] == -1) {
                d[parent2] = parent1;
            } else if (d[parent2] != parent1) {
                d[parent2] = -2;
            }
        }
    }
    // pr(d);
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (d[i * m + j] >= 0) res++;
        }
    }
    return res;
};

//////////////////////////////////////////////////////////////////////////////////
// Accepted --- 152ms 89.32%  06/23/21 evening
let n, m, a, b;
const countSubIslands = (g1, g2) => {
    [n, m, a, b] = [g1.length, g1[0].length, g1, g2];
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (b[i][j]) {
                if (dfs(i, j)) res++;
            }
        }
    }
    return res;
};

const dfs = (x, y) => {
    let res = true;
    if (!a[x][y]) res = false;
    b[x][y] = 0;
    for (let k = 0; k < 4; k++) {
        let [xx, yy] = [x + dx[k], y + dy[k]];
        if (xx >= 0 && xx < n && yy >= 0 && yy < m && b[xx][yy]) {
            if (!dfs(xx, yy)) res = false;
        }
    }
    return res;
};

const pr = console.log;
const main = () => {
    let grid1 = [
            [1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [1, 1, 0, 1, 1]
        ],
        grid2 = [
            [1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1],
            [0, 1, 0, 0, 0],
            [1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0]
        ];
    let grid1_2 = [
            [1, 0, 1, 0, 1],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [1, 0, 1, 0, 1]
        ],
        grid2_2 = [
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0],
            [1, 0, 0, 0, 1]
        ];
    pr(countSubIslands(grid1, grid2));
    pr(countSubIslands(grid1_2, grid2_2))
};

main()