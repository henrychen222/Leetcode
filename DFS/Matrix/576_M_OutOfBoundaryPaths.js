/**
 * 12.23 night
 * https://leetcode.com/problems/out-of-boundary-paths/
 */

// Accepted --- 92ms 100%
/**
 * https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-576-out-of-boundary-paths/
 */
const mod = 1e9 + 7;
const MIN = Number.MIN_VALUE;
let _m, _n, memo;
const findPaths = (m, n, N, i, j) => {
    _m = m;
    _n = n;
    memo = [];
    for (let i = 0; i < N + 1; i++) {
        let data = [];
        for (let j = 0; j < m; j++) {
            let tmp = Array(n).fill(MIN);
            data.push(tmp);
        }
        memo.push(data);
    }
    return dfs(N, i, j);
};

const dfs = (N, x, y) => {
    if (x < 0 || x >= _m || y < 0 || y >= _n) return 1;
    if (N == 0) return 0;
    if (memo[N][x][y] != MIN) return memo[N][x][y];
    let res = 0;
    res += dfs(N - 1, x + 1, y);
    res += dfs(N - 1, x - 1, y);
    res += dfs(N - 1, x, y + 1);
    res += dfs(N - 1, x, y - 1);
    res %= mod;
    return memo[N][x][y] = res;
};

// Accepted --- 104ms 82.61%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/6927921.html
 * https://leetcode.com/problems/out-of-boundary-paths/discuss/102966/c-6-lines-dp-on-m-n-6-ms
 */
const MOD = 1e9 + 7;
const findPaths1 = (m, n, N, i, j) => {
    let dp = initialize3DArray(N + 1, m, n); // dp[move][x][y]: 总共走move步，从[i, j]到越界位置的路径数
    for (let move = 1; move <= N; move++) {
        for (let x = 0; x < m; x++) { // x: row, y: col
            for (let y = 0; y < n; y++) {
                // dp[move][x][y]: 走k步出边界的总路径数等于其周围四个位置的走k-1步出边界的总路径数之和
                // 如果周围某个位置已经出边界了，那么就直接加上1，否则就在dp数组中找出该值
                let upMove = x == 0 ? 1 : dp[move - 1][x - 1][y];
                let downMove = x == m - 1 ? 1 : dp[move - 1][x + 1][y];
                let leftMove = y == 0 ? 1 : dp[move - 1][x][y - 1];
                let rightMove = y == n - 1 ? 1 : dp[move - 1][x][y + 1];
                dp[move][x][y] = (upMove + downMove + leftMove + rightMove) % MOD;
            }
        }
    }
    // console.log(dp);
    return dp[N][i][j];
};


// Accepted --- 108ms 69.57%
const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
];
const findPaths2 = (m, n, N, i, j) => {
    let res = 0;
    let dp = initialize2DArrayNew(m, n);
    dp[i][j] = 1;
    for (let move = 1; move <= N; move++) {
        let tmp = initialize2DArrayNew(m, n);
        for (let x = 0; x < m; x++) { // dp[x][y]: 从[i, j]到越界位置的路径数
            for (let y = 0; y < n; y++) {
                for (const dir of dirs) { // 对于遍历到的每个位置，都遍历其四个相邻位置
                    let next_row = x + dir[0];
                    let next_col = y + dir[1];
                    if (next_row < 0 || next_row >= m || next_col < 0 || next_col >= n) {
                        res = (res + dp[x][y]) % MOD; // 相邻位置越界, 用当前位置的dp值更新结果res.
                    } else {
                        tmp[next_row][next_col] = (tmp[next_row][next_col] + dp[x][y]) % MOD; // 没有越界, 将当前位置的dp值赋给tmp数组的对应位置
                    }
                }
            }
        }
        dp = tmp; // 遍历完所有move时，将数组tmp整个赋值给dp
    }
    return res;
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};

const initialize3DArray = (m, n, p) => {
    let res = [];
    for (let i = 0; i < m; i++) {
        let data = [];
        for (let j = 0; j < n; j++) {
            let tmp = new Array(p).fill(0);
            data.push(tmp);
        }
        res.push(data);
    }
    return res;
};

const main = () => {
    let m = 2,
        n = 2,
        N = 2,
        i = 0,
        j = 0;
    let m2 = 1,
        n2 = 3,
        N2 = 3,
        i2 = 0,
        j2 = 1;
    let m_debug1 = 45,
        n_debug1 = 35,
        N_debug1 = 47,
        i_debug1 = 20,
        j_debug1 = 31;
    console.log(findPaths(m, n, N, i, j));
    console.log(findPaths(m2, n2, N2, i2, j2));
    console.log(findPaths(m_debug1, n_debug1, N_debug1, i_debug1, j_debug1));
};

main()


// https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-576-out-of-boundary-paths/
// TLE
// const mod = 1e9 + 7;
// let _m, _n, memo;
// const findPaths = (m, n, N, i, j) => {
//     _m = m;
//     _n = n;
//     memo = initialize3DArray(N + 1, m, n); // issue should fill Number.MIN_VALUE, not 0
//     return dfs(N, i, j);
// };

// const dfs = (N, x, y) => { // x: row, y: col
//     if (x < 0 || x >= _m || y < 0 || y >= _n) return 1;
//     if (N == 0) return 0;
//     if (memo[N][x][y] != 0) return memo[N][x][y]; // here also Number.MIN_VALUE
//     let res = 0;
//     res += dfs(N - 1, x + 1, y);
//     res += dfs(N - 1, x - 1, y);
//     res += dfs(N - 1, x, y + 1);
//     res += dfs(N - 1, x, y - 1);
//     res %= mod;
//     return memo[N][x][y] = res;
// };