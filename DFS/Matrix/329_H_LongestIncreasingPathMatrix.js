/**
 * 04/09/21 night
 * https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
 */

const pr = console.log;

/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/5148030.html
 * https://leetcode.com/problems/longest-increasing-path-in-a-matrix/discuss/78308/15ms-concise-java-solution
 */

// Accepted --- 104ms 87.16%
const mx = Math.max;
const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
];
let g, memo, n, m;
const longestIncreasingPath = (matrix) => {
    g = matrix;
    n = g.length;
    m = g[0].length;
    if (n == 0) return 0;
    memo = initialize2DArrayNew(n, m);
    let res = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            res = mx(res, dfs(i, j));
        }
    }
    return res;
};

const dfs = (i, j) => {
    // pr("cur", g[i][j]);
    if (memo[i][j]) return memo[i][j];
    let max = 1;
    // let cur = g[i][j];
    for (const dir of dirs) {
        let x = i + dir[0];
        let y = j + dir[1];
        // let next = g[x][y]; // x, y will out-of-bound
        // pr("next", next)
        // if (x < 0 || x >= n || y < 0 || y >= m || next <= cur) continue;
        if (x < 0 || x >= n || y < 0 || y >= m || g[x][y] <= g[i][j]) continue; // won't out-of-bound cuz x, y check first
        let plen = 1 + dfs(x, y);
        max = mx(max, plen);
    }
    return memo[i][j] = max;
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};

const main = () => {
    let matrix = [
        [9, 9, 4],
        [6, 6, 8],
        [2, 1, 1]
    ];
    let matrix2 = [
        [3, 4, 5],
        [3, 2, 6],
        [2, 2, 1]
    ];
    let matrix3 = [
        [1]
    ];
    pr(longestIncreasingPath(matrix));
    pr(longestIncreasingPath(matrix2));
    pr(longestIncreasingPath(matrix3));
};

main()