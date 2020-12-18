/**
 * 12.17 evening
 * https://leetcode.com/problems/largest-1-bordered-square/
 * 
 * read:
 * https://leetcode.com/contest/weekly-contest-147/ranking/1/
 * https://leetcode.com/problems/largest-1-bordered-square/discuss/345265/c%2B%2B-beats-100-(both-time-and-memory)-concise-with-algorithm-and-image
 */

// Accepted --- 100ms 82.61%
// reference: https://leetcode.com/problems/largest-1-bordered-square/discuss/345233/JavaC%2B%2BPython-Straight-Forward
const largest1BorderedSquare = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    let top = initialize2DArrayNew(m, n);
    let left = initialize2DArrayNew(m, n);;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                left[i][j] = j > 0 ? left[i][j - 1] + 1 : 1;
                top[i][j] = i > 0 ? top[i - 1][j] + 1 : 1;
            }
        }
    }
    // console.log(left);
    // console.log(top);
    for (let l = Math.min(m, n); l > 0; l--) {
        for (let i = 0; i < m - l + 1; i++) {
            for (let j = 0; j < n - l + 1; j++) {
                if (top[i + l - 1][j] >= l && top[i + l - 1][j + l - 1] >= l &&
                    left[i][j + l - 1] >= l && left[i + l - 1][j + l - 1] >= l) {
                    return l * l;
                }
            }
        }
    }
    return 0;
};

// Accepted --- 124ms 34.78%
const largest1BorderedSquare_modify = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    let top = initialize2DArrayNew(m, n);
    let left = initialize2DArrayNew(m, n);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) {
                left[i][j] = j ? left[i][j - 1] + 1 : 1;
                top[i][j] = i ? top[i - 1][j] + 1 : 1;
            }
        }
    }
    for (let l = Math.min(m, n); l > 0; l--) {
        for (let i = 0; i < m - l + 1; i++) {
            for (let j = 0; j < n - l + 1; j++) {
                if (Math.min(top[i + l - 1][j], top[i + l - 1][j + l - 1],
                        left[i][j + l - 1], left[i + l - 1][j + l - 1]) >= l) {
                    return l * l;
                }
            }
        }
    }
    return 0;
};

// Accepted --- 96ms 86.96%
// reference: https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-1139-largest-1-bordered-square/
const largest1BorderedSquare_huahua = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    let dp = initialize2DArrayNew(m + 1, n + 1);
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + grid[i - 1][j - 1];
        }
    }
    for (let l = Math.min(m, n); l > 0; l--) {
        for (let x1 = 1, x2 = x1 + l - 1; x2 <= n; x1++, x2++) {
            for (let y1 = 1, y2 = y1 + l - 1; y2 <= m; y1++, y2++) {
                if (getArea(x1, y1, x2, y1, dp) == l && getArea(x1, y1, x1, y2, dp) == l &&
                    getArea(x1, y2, x2, y2, dp) == l && getArea(x2, y1, x2, y2, dp) == l) {
                    return l * l;
                }
            }
        }
    }
    return 0;
};

const getArea = (x1, y1, x2, y2, dp) => {
    return dp[y2][x2] - dp[y2][x1 - 1] - dp[y1 - 1][x2] + dp[y1 - 1][x1 - 1];
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
    let grid = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ];
    let grid2 = [
        [1, 1, 0, 0]
    ];
    console.log(largest1BorderedSquare(grid));
    console.log(largest1BorderedSquare(grid2));
};

main()