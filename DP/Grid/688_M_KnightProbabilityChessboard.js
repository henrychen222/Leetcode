/**
 * 12.1 evening
 * https://leetcode.com/problems/knight-probability-in-chessboard/
 */

// Accepted --- 80ms 99.04%
// reference: https://www.cnblogs.com/grandyang/p/7639153.html
const dirs = [
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2]
];
let memo;
const knightProbability = (N, K, r, c) => {
    memo = initialize3DArray(K + 1, N, N);
    return dfs(N, K, r, c) / 8 ** K;
};

const dfs = (N, k, r, c) => {
    if (k == 0) return 1;
    if (memo[k][r][c] != 0) return memo[k][r][c];
    for (const dir of dirs) {
        let x = r + dir[0];
        let y = c + dir[1];
        if (x < 0 || x >= N || y < 0 || y >= N) continue;
        memo[k][r][c] += dfs(N, k - 1, x, y);
    }
    return memo[k][r][c];
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

// Accepted --- 88ms 93.27%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/7639153.html
 * https://leetcode.com/problems/knight-probability-in-chessboard/discuss/108181/my-accepted-dp-solution
 */
const knightProbability_DP = (N, K, r, c) => {
    if (K == 0) return 1;
    let dp = initialize2DArrayLen(N, N);
    for (let move = 1; move <= K; move++) {
        let tmp = initialize2DArrayNew(N, N);
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                for (const dir of dirs) {
                    let x = i + dir[0];
                    let y = j + dir[1];
                    if (x < 0 || x >= N || y < 0 || y >= N) continue;
                    tmp[i][j] += dp[x][y];
                }
            }
        }
        dp = tmp;
    }
    return dp[r][c] / 8 ** K;
};

const initialize2DArrayLen = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(1);
        data.push(tmp);
    }
    return data;
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
    let N = 3,
        K = 2,
        r = 0,
        c = 0;
    let N_debug1 = 10,
        K_debug1 = 13,
        r_debug1 = 5,
        c_debug1 = 3;
    console.log(knightProbability(N, K, r, c));
    console.log(knightProbability(N_debug1, K_debug1, r_debug1, c_debug1)); // 0.11734
};

main()