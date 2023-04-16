/**
 * 06/11/22 evening
 * https://leetcode.com/contest/weekly-contest-297/problems/minimum-path-cost-in-a-grid/
 */

const pr = console.log;


const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(0); d.push(t); } return d; };

const minPathCost = (g, c) => pathDPMin(g, c);

/*
[5, 3]

min(5 + 14 + 4, 3 + 18 + 4) min(5 + 3 + 0, 3 + 6 + 0)
[23, 8]

min(23 + 2 + 2, 9 + 9 + 2) min(23 + 4 + 1, 8 + 8 + 1)
[20, 17]

*/
// Accepted
const pathDPMin = (g, c) => {
    let n = g.length, m = g[0].length;
    let dp = initialize2DArray(n, m);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i == 0) {
                dp[i][j] = g[i][j];
            } else {
                let min = Number.MAX_SAFE_INTEGER;
                for (let col = 0; col < m; col++) {
                    let preX = g[i - 1][col], curX = g[i][j], cost = c[preX][j];
                    let plus = dp[i - 1][col] + curX + cost;
                    // pr("preX", preX, "curX", curX, "cost", cost, "plus", plus)
                    min = Math.min(min, plus);
                }
                dp[i][j] += min;
                // pr(dp);
            }
        }
    }
    // pr(dp);
    return Math.min(...dp[n - 1]);
};

const main = () => {
    let grid = [[5, 3], [4, 0], [2, 1]], moveCost = [[9, 8], [1, 5], [10, 12], [18, 6], [2, 4], [14, 3]];
    let grid2 = [[5, 1, 2], [4, 0, 3]], moveCost2 = [[12, 10, 15], [20, 23, 8], [21, 7, 1], [8, 1, 13], [9, 10, 25], [5, 3, 2]];
    pr(minPathCost(grid, moveCost))
    pr(minPathCost(grid2, moveCost2))
};

main()


/*
5 1 2

4 0 3


5 -> 4  5
5 -> 0  3
5 -> 3  2

1 -> 4

*/

  // let n = g.length, m = g[0].length;
    // let q = [[0, 0], [0, 1]], dis = initialize2DArray(n, m);
    // dis[0][0] = 0;
    // dis[0][1] = 0;
    // pr("begin", dis, n, m)
    // while (q.length) {
    //     let [i, j] = q.shift(), x = g[i][j], next = [[i + 1, j], [i + 1, j + 1]];
    //     for (const [ni, nj] of next) {
    //         let add = x + c[x][nj];
    //         if (ni < 0 || ni >= n || nj < 0 || nj >= m) continue;
    //         pr("cur", i, j, "x", x, "next", ni, nj, "cost", c[x][nj], "add", add);
    //         if (dis[ni][nj] > dis[i][j] + add) {
    //             // pr("update", ni, nj);
    //             dis[ni][nj] = dis[i][j] + add;
    //             q.push([ni, nj]);
    //         }
    //     }
    // }
    // pr(dis);