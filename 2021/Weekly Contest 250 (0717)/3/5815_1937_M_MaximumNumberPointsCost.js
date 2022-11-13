/**
 * 07/17/21 evening
 * https://leetcode.com/contest/weekly-contest-250/problems/maximum-number-of-points-with-cost/
 */

const pr = console.log;

// Accepted
const abs = Math.abs;
const maxPoints = (g) => {
    let n = g.length;
    let m = g[0].length;
    let dp = initialize2DArrayNew(n, m);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i == 0) {
                dp[i][j] = g[i][j];
            } else {
                let max = 0;
                for (let col = 0; col < m; col++) {
                    // pr()
                    // pr("row", i);
                    let rowDiff = abs(j - col);
                    let plus = g[i][j] + dp[i - 1][col] - rowDiff; // wrong here first: second should be dp[i - 1][col] not g[i-1][col]
                    // pr(g[i][j], dp[i - 1][col], rowDiff);
                    max = Math.max(max, plus)
                }
                // pr("max", max);
                dp[i][j] += max;
            }
        }
    }
    // pr(dp);
    return Math.max.apply(Math, dp[n - 1]);
};

const initialize2DArrayNew = (n, m) => { let data = []; for (let i = 0; i < n; i++) { let tmp = Array(m).fill(0); data.push(tmp); } return data; };

const main = () => {
    let points = [[1, 2, 3], [1, 5, 1], [3, 1, 1]];
    let points2 = [[1, 5], [2, 3], [4, 2]];
    pr(maxPoints(points))
    pr(maxPoints(points2))
};

main()


/*
[1,2,3]

max(1+1,1+2-1,1+3-2) max(5+1-1, 5+2, 5+3-1)  max(1+1 -2, 1+2-1, 1+3)
[2,7,4]

max(3+2, 3+7-1, 3+4-2)  max(1+2-1, 1+7, 1+1-1)
[9,8,1]
*/