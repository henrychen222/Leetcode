// 07/02/22 night
// https://leetcode.com/contest/weekly-contest-300/problems/number-of-increasing-paths-in-a-grid/

const pr = console.log;

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(0); d.push(t); } return d; };

const mod = 1e9 + 7, dx = [0, 0, -1, 1], dy = [-1, 1, 0, 0];

// WA
const countPaths2 = (g) => {
    // dp[i][j]: the number of increasing paths that start from a cell (i, j)
    let n = g.length, m = g[0].length, dp = initialize2DArray(n, m), res = 0;
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < m; y++) {
            dp[x][y]++;
            res += dp[x][y];
            res %= mod;
            for (let k = 0; k < 4; k++) {
                let nx = x + dx[k], ny = y + dy[k];
                if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
                if (g[nx][ny] > g[x][y]) {
                    dp[nx][ny] += dp[x][y];
                    dp[nx][ny] %= mod;
                }
            }
        }
    }
    return res;
};

// Accepted
// reference: uwi
const countPaths = (g) => {
    // dp[i][j]: the number of increasing paths that start from a cell (i, j)
    let n = g.length, m = g[0].length, d = [], dp = initialize2DArray(n, m), res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) d.push([i, j, g[i][j]]);
    }
    d.sort((x, y) => x[2] - y[2]);
    // pr(d);
    for (const [x, y] of d) {
        dp[x][y]++;
        res += dp[x][y];
        res %= mod;
        // pr(res, dp[x][y]);
        for (let k = 0; k < 4; k++) {
            let nx = x + dx[k], ny = y + dy[k];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (g[nx][ny] > g[x][y]) {
                dp[nx][ny] += dp[x][y];
                dp[nx][ny] %= mod;
            }
        }
    }
    return res;
};

const main = () => {
    let g = [[1, 1], [3, 4]];
    let g2 = [[1], [2]];
    let debug1 = [[12469,18741,68716,30594,65029,44019,92944,84784,92781,5655,43120,81333,54113,88220,23446,6129,2904,48677,20506,79604,82841,3938,46511,60870,10825,31759,78612,19776,43160,86915,74498,38366,28228,23687,40729,42613,61154,22726,51028,45603,53586,44657,97573,61067,27187,4619,6135,24668,69634,24564,30255,51939,67573,87012,4106,76312,28737,7704,35798]];
    pr(countPaths(g))
    pr(countPaths(g2))
    pr(countPaths(debug1)) // 148
};

main()