/*
 * 12/10/22 night
 * https://leetcode.com/contest/weekly-contest-323/problems/maximum-number-of-points-from-grid-queries/
 */

const pr = console.log;

const { MinPriorityQueue } = require('@datastructures-js/priority-queue')

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(false); d.push(t); } return d; };

// Accepted
// reference: https://leetcode.cn/circle/discuss/DAnksx/
const dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];
const maxPoints = (g, queries) => {
    let n = g.length, m = g[0].length, cnt = 0, res = Array(queries.length), vis = initialize2DArray(n, m), pq = new MinPriorityQueue({
        compare: (x, y) => {
            if (x[0] != y[0]) return x[0] - y[0];
            if (x[1] != y[1]) return x[1] - y[1];
            return x[2] - y[2];
        }
    });
    queries = queries.map((x, i) => [x, i]).sort((x, y) => {
        if (x[0] != y[0]) return x[0] - y[0];
        return x[1] - y[1];
    });
    // pr(queries)
    pq.enqueue([g[0][0], 0, 0]);
    vis[0][0] = true;
    for (const [q, i] of queries) {
        while (pq.size() && q > pq.front()[0]) {
            let [, x, y] = pq.dequeue();
            // pr(x, y);
            cnt++;
            for (let k = 0; k < 4; k++) {
                let nx = x + dx[k], ny = y + dy[k];
                if (nx < 0 || nx >= n || ny < 0 || ny >= m || vis[nx][ny]) continue;
                pq.enqueue([g[nx][ny], nx, ny]);
                vis[nx][ny] = true;
            }
        }
        res[i] = cnt;
    }
    return res;
};

const main = () => {
    let g = [[1, 2, 3], [2, 5, 7], [3, 5, 1]], queries = [5, 6, 2];
    let g2 = [[5, 2, 1], [1, 1, 2]], queries2 = [3]
    pr(maxPoints(g, queries))
    pr(maxPoints(g2, queries2))
};

main()