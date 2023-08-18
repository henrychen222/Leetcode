/*
 * 02/26/23 night
 * https://leetcode.com/contest/weekly-contest-334/problems/minimum-time-to-visit-a-cell-in-a-grid/
 */

const pr = console.log;
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

const initialize2DArray = (n, m) => [...Array(n)].map(() => Array(m).fill(Number.MAX_SAFE_INTEGER));
const dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];

// Accepted
// reference: qeetcode
const minimumTime = (g) => {
    if (g[0][1] > 1 && g[1][0] > 1) return -1;
    let pq = new MinPriorityQueue({
        compare: (x, y) => {
            if (x[0] != y[0]) return x[0] - y[0];
            if (x[1] != y[1]) return x[1] - y[1];
            return x[2] - y[2];
        }
    }), n = g.length, m = g[0].length, dis = initialize2DArray(n, m);
    pq.enqueue([0, 0, 0]);
    dis[0][0] = 0;
    while (pq.size()) {
        let [v, x, y] = pq.dequeue();
        // pr(v, x, y);
        if (x == n - 1 && y == m - 1) return v;
        for (let k = 0; k < 4; k++) {
            let nx = x + dx[k], ny = y + dy[k];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            let diff = g[nx][ny] - v;
            if (diff < 0) {
                diff = 0;
            } else if (diff & 1) {
                diff--;
            }
            let nv = v + 1 + diff;
            // pr(nx, ny, "diff", diff, "nv", nv);
            if (dis[nx][ny] > nv) {
                dis[nx][ny] = nv;
                pq.enqueue([nv, nx, ny]);
            }
        }
    }
    return -1;
};

const main = () => {
    let g = [[0, 1, 3, 2], [5, 1, 2, 5], [4, 3, 8, 6]]
    let g2 = [[0, 2, 4], [3, 2, 1], [1, 0, 4]];
    pr(minimumTime(g))
    pr(minimumTime(g2))
};

main()