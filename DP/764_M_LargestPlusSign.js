/**
 * 11.22 night
 * https://leetcode.com/problems/largest-plus-sign/
 * 
 * reference:
 * https://www.cnblogs.com/grandyang/p/8679286.html
 * https://leetcode.com/problems/largest-plus-sign/discuss/113314/JavaC++Python-O(N2)-solution-using-only-one-grid-matrix
 */

// Accepted --- 180ms 100.00%
const orderOfLargestPlusSign_DP = (N, mines) => {
    let res = 0;
    let dp = [];
    for (let i = 0; i < N; i++) {
        dp.push(new Array(N).fill(N));
    }
    // console.log(dp);
    for (const m of mines) {
        dp[m[0]][m[1]] = 0;
    }
    // console.log(dp);
    for (let i = 0; i < N; i++) {
        let l = r = u = d = 0;
        for (let j = 0, k = N - 1; j < N; j++, k--) {
            dp[i][j] = Math.min(dp[i][j], l = (dp[i][j] == 0 ? 0 : l + 1));
            dp[j][i] = Math.min(dp[j][i], u = (dp[j][i] == 0 ? 0 : u + 1));
            dp[i][k] = Math.min(dp[i][k], r = (dp[i][k] == 0 ? 0 : r + 1));
            dp[k][i] = Math.min(dp[k][i], d = (dp[k][i] == 0 ? 0 : d + 1));
        }
    }
    // for (let k = 0; k < N * N; ++k) res = Math.max(res, dp[Math.floor(k / N)][k % N]); // Accepted --- 188ms 100%
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            res = Math.max(res, dp[i][j]);
        }
    }
    return res;
};

// Accepted --- 492ms 50.00%
const orderOfLargestPlusSign = (N, mines) => {
    let res = 0;
    let data = initialize2DArrayNew(N, N);
    for (const m of mines) {
        data[m[0]][m[1]] = 0;
    }
    // console.log(data);
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            let step = 0;
            while (ok(data, N, i, j, step)) {
                step++;
            }
            res = Math.max(res, step);
        }
    }
    return res;
};

const ok = (data, N, x, y, step) => {
    if (x - step < 0 || y - step < 0 || x + step >= N || y + step >= N) return false;
    return data[x - step][y] && data[x + step][y] && data[x][y - step] && data[x][y + step];
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(1);
        data.push(tmp);
    }
    return data;
};

const main = () => {
    let N = 5,
        mines = [
            [4, 2]
        ];
    let N2 = 2,
        mines2 = [];
    let N3 = 1,
        mines3 = [
            [0, 0]
        ];
    console.log(orderOfLargestPlusSign(N, mines));
    console.log(orderOfLargestPlusSign(N2, mines2));
    console.log(orderOfLargestPlusSign(N3, mines3));
};

main()