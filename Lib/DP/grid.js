/*
06/11/22 night

min max Path DP
https://leetcode.com/problems/maximum-number-of-points-with-cost/
https://leetcode.com/problems/minimum-path-cost-in-a-grid/
https://www.codechef.com/problems/SUMTRIAN
   https://www.codechef.com/viewsolution/56194183
*/
const pathDPMax = (g) => {
      let n = g.length, m = g[0].length, dp = initialize2DArray(n, m);
      for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                  if (i == 0) {
                        dp[i][j] = g[i][j];
                  } else {
                        let maxCur = 0;
                        for (let col = 0; col < m; col++) {
                              let cost = Math.abs(j - col);
                              let cur = dp[i - 1][col] + g[i][j] - cost;
                              maxCur = Math.max(maxCur, cur);
                        }
                        dp[i][j] = maxCur;
                  }
            }
      }
      return Math.max(...dp[n - 1]);
};


const pathDPMin = (g, c) => {
      let n = g.length, m = g[0].length, dp = initialize2DArray(n, m);
      for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                  if (i == 0) {
                        dp[i][j] = g[i][j];
                  } else {
                        let minCur = Number.MAX_SAFE_INTEGER;
                        for (let col = 0; col < m; col++) {
                              let preX = g[i - 1][col], curX = g[i][j], cost = c[preX][j];
                              let cur = dp[i - 1][col] + curX + cost;
                              minCur = Math.min(minCur, cur);
                        }
                        dp[i][j] = minCur;
                  }
            }
      }
      return Math.min(...dp[n - 1]);
};