/*
 * 04/29/23 evening
 * https://leetcode.com/contest/weekly-contest-343/problems/minimum-cost-of-a-path-with-special-roads/
 */

const pr = console.log;

const { MinPriorityQueue } = require('@datastructures-js/priority-queue')

////////////////////////////////////////////////////////////////////////////
// Accepted  05/06/23 night complete
// reference: fmota
const minimumCost = (a, b, c) => {
    let m = new Map(), g = [];
    let A = build(m, g, a[0], a[1]), B = build(m, g, b[0], b[1]);
    g[A].push([B, cal(a[0], a[1], b[0], b[1])])
    for (const [x1, y1, x2, y2, cost] of c) {
        let u = build(m, g, x1, y1), v = build(m, g, x2, y2);
        g[A].push([u, cal(x1, y1, a[0], a[1])]);
        g[v].push([B, cal(x2, y2, b[0], b[1])]);
        g[u].push([v, cost]);
        for (const [xx, yy,] of c) {
            let xxyy = build(m, g, xx, yy);
            g[v].push([xxyy, cal(x2, y2, xx, yy)]);
        }
    }
    let d = dijkstra(g, A);
    // pr(d);
    return d[B];
}

const build = (m, g, x, y) => {
    let ke = x + " " + y;
    if (m.has(ke)) return m.get(ke);
    m.set(ke, g.length);
    g.push([]);
    return m.get(ke);
};

const cal = (x1, y1, x2, y2) => Math.abs(x1 - x2) + Math.abs(y1 - y2);

const dijkstra = (g, start) => {
    let n = g.length, dis = Array(n).fill(Number.MAX_SAFE_INTEGER);
    let pq = new MinPriorityQueue({
        compare: (x, y) => {
            if (x[0] != y[0]) return x[0] - y[0];
            return x[1] - y[1];
        }
    });
    dis[start] = 0;
    pq.enqueue([0, start]);
    while (pq.size()) {
        let [d, cur] = pq.dequeue();
        if (d > dis[cur]) continue;
        for (const [child, cost] of g[cur]) {
            let toChildCost = d + cost;
            if (toChildCost < dis[child]) {
                dis[child] = toChildCost;
                pq.enqueue([toChildCost, child]);
            }
        }
    }
    return dis;
};


//////////////////////////////////////////////////////////////////////////////
const initialize2DArray = (n, m) => [...Array(n)].map(() => Array(m).fill(Number.MAX_SAFE_INTEGER));

let sm, n, m;
const minimumCost1 = (a, b, c) => {
    sm = new Map(), n = Math.max(a[0], b[0]), m = Math.max(a[1], b[1]);
    a[0]--;
    a[1]--;
    b[0]--;
    b[1]--;
    pr(n, m)
    for (const [x1, y1, x2, y2, cost] of c) {
        let ke = (x1 - 1) + " " + (y1 - 1);
        n = Math.max(n, x1);
        n = Math.max(n, x2);
        m = Math.max(m, y1);
        m = Math.max(m, y2);
        sm.set(ke, [x2, y2, cost])
    }
    pr(n, m)
    return minDis(a, b);
}

const dx = [-1, 1, 0, 0], dy = [0, 0, -1, 1];
const minDis = (a, b) => {
    let [sx, sy] = a, [ex, ey] = b, q = [[0, 0]], dis = initialize2DArray(n + 1, m + 1);
    dis[sx][sy] = 0;
    while (q.length) {
        let [x, y] = q.shift(), ke = x + " " + y;
        pr([x, y]);
        if (sm.has(ke)) {
            let [nxx, nyy, specialCost] = sm.get(ke);
            if (dis[nxx][nyy] > dis[x][y] + specialCost) {
                dis[nxx][nyy] = dis[x][y] + specialCost;
                q.push([nxx, nyy]);
            }
        }
        for (let k = 0; k < 4; k++) {
            let nx = x + dx[k], ny = y + dy[k], cost = Math.abs(nx - x) + Math.abs(ny - y);
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (dis[nx][ny] > dis[x][y] + cost) {
                dis[nx][ny] = dis[x][y] + cost;
                q.push([nx, ny]);
            }
        }
    }
    // pr(dis)
    return dis[ex][ey];
};

const main = () => {
    let a = [1, 1], b = [4, 5], c = [[1, 2, 3, 3, 2], [3, 4, 4, 5, 1]];
    let a2 = [3, 2], b2 = [5, 7], c2 = [[3, 2, 3, 4, 4], [3, 3, 5, 5, 5], [3, 4, 5, 6, 6]]
    pr(minimumCost(a, b, c))
    pr(minimumCost(a2, b2, c2))
};

main()


/*
4 3 5
1 2 6

*/