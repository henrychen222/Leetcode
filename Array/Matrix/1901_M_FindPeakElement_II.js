/**
 * 03/31/22 evening
 * https://leetcode.com/problems/find-a-peak-element-ii/
 */


// Accepted --- 96ms 79.83%
const findPeakGrid = (g) => {
    let n = g.length, m = g[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let cur = g[i][j];
            if (i - 1 >= 0 && cur <= g[i - 1][j]) continue;
            if (i + 1 < n && cur <= g[i + 1][j]) continue;
            if (j - 1 >= 0 && cur <= g[i][j - 1]) continue;
            if (j + 1 < m && cur <= g[i][j + 1]) continue;
            return [i, j];
        }
    }
};