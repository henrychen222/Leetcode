/**
 * 08/13/21 evening
 * https://leetcode.com/problems/detect-cycles-in-2d-grid/
 */

const dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];

// Accepted --- 180ms 85.00%
// reference: https://leetcode.com/contest/biweekly-contest-33/ranking 	ji-gong
const containsCycle = (g) => {
    let n = g.length, m = g[0].length;
    let visit = initialize2DArrayNew(n, m);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (visit[i][j] == -1) {
                visit[i][j] = 0;
                let q = [[i, j]];
                while (q.length) {
                    let cur = q.shift();
                    let [x, y] = cur;
                    // pr(x, y)
                    for (let k = 0; k < 4; k++) {
                        let nx = x + dx[k], ny = y + dy[k];
                        // pr("next", nx, ny)
                        if (nx < 0 || nx >= n || ny < 0 || ny >= m || g[nx][ny] != g[i][j]) continue;
                        if (visit[nx][ny] == -1) { // not visit
                            visit[nx][ny] = visit[x][y] + 1;
                            q.push([nx, ny]);
                        } else {
                            // pr(visit[nx][ny], visit[x][y]);
                            if (visit[nx][ny] - visit[x][y] != -1) return true;
                        }
                        // pr(q);
                    }
                }
            }
        }
    }
    return false;
};

const initialize2DArrayNew = (n, m) => { let data = []; for (let i = 0; i < n; i++) { let tmp = Array(m).fill(-1); data.push(tmp); } return data; };

const pr = console.log;
const main = () => {
   let grid = [["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]];
   let grid2 = [["c","c","c","a"],["c","d","c","c"],["c","c","e","c"],["f","c","c","c"]];
   let grid3 = [["a","b","b"],["b","z","b"],["b","b","a"]]
   pr(containsCycle(grid))
   pr(containsCycle(grid2))
   pr(containsCycle(grid3))
};

main()