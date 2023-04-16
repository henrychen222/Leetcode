/*
 * 11/05/22 night
 * https://leetcode.com/contest/weekly-contest-318/problems/minimum-total-distance-traveled/
 */

const pr = console.log;

const { MinPriorityQueue } = require('@datastructures-js/priority-queue')

function edge(from, to, cost, cap) {
    this.from = from;
    this.to = to;
    this.cost = cost;
    this.cap = cap;
}

function MCMF(n) {
    const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
    let g = initializeGraph(n), h = Array(n).fill(0), dis = Array(n).fill(0), prev_v = Array(n).fill(0), prev_e = Array(n).fill(0);
    return { addEdge, minCostFlow }
    function addEdge(from, to, cost, cap) {
        g[from].push(new edge(g[to].length, to, cost, cap));
        g[to].push(new edge(g[from].length - 1, from, -cost, 0));
    }
    function minCostFlow(from, to, flow) {
        let res = 0;
        while (flow > 0) {
            let pq = new MinPriorityQueue({
                compare: (x, y) => {
                    if (x[0] != y[0]) return x[0] - y[0];
                    return x[1] - y[1];
                }
            });
            dis.fill(Number.MAX_SAFE_INTEGER);
            dis[from] = 0;
            pq.enqueue([0, from]);
            while (pq.size()) {
                let [curDis, cur] = pq.dequeue();
                if (dis[cur] < curDis) continue;
                for (let i = 0; i < g[cur].length; i++) {
                    let child = g[cur][i];
                    if (child.cap > 0 && dis[child.to] > dis[cur] + child.cost + h[cur] - h[child.to]) {
                        dis[child.to] = dis[cur] + child.cost + h[cur] - h[child.to];
                        prev_v[child.to] = cur;
                        prev_e[child.to] = i;
                        pq.enqueue([dis[child.to], child.to]);
                    }
                }
            }
            if (dis[to] == Number.MAX_SAFE_INTEGER) return -1;
            for (let i = 0; i < n; i++) h[i] += dis[i];
            let d = flow;
            for (let i = to; i != from; i = prev_v[i]) {
                d = Math.min(d, g[prev_v[i]][prev_e[i]].cap);
            }
            flow -= d;
            res += d * h[to];
            for (let i = to; i != from; i = prev_v[i]) {
                let edge = g[prev_v[i]][prev_e[i]];
                edge.cap -= d;
                g[i][edge.from].cap += d;
            }
        }
        return res;
    }
}

// Accepted 
// reference: kmjp
const minimumTotalDistance = (a, b) => {
    let n = a.length, m = b.length, mcmf = new MCMF(n + m + 2), from = n + m, to = from + 1;
    for (let i = 0; i < n; i++) mcmf.addEdge(from, i, 0, 1);
    for (let i = 0; i < m; i++) mcmf.addEdge(n + i, to, 0, b[i][1]);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            mcmf.addEdge(i, n + j, Math.abs(a[i] - b[j][0]), 1);
        }
    }
    return mcmf.minCostFlow(from, to, n);
};

const main = () => {
    let a = [0, 4, 6], b = [[2, 2], [6, 2]];
    let a2 = [1, -1], b2 = [[-2, 1], [2, 1]]
    let a_debug1 = [9, 11, 99, 101], b_debug1 = [[10, 1], [7, 1], [14, 1], [100, 1], [96, 1], [103, 1]];

    let a_debug2 = [789300819, -600989788, 529140594, -592135328, -840831288, 209726656, -671200998],
        b_debug2 = [[-865262624, 6], [-717666169, 0], [725929046, 2], [449443632, 3], [-912630111, 0], [270903707, 3], [-769206598, 2], [-299780916, 4], [-159433745, 5], [-467185764, 3], [849991650, 7], [-292158515, 6], [940410553, 6], [258278787, 0], [83034539, 2], [54441577, 3], [-235385712, 2], [75791769, 3]]
    pr(minimumTotalDistance(a, b))
    pr(minimumTotalDistance(a2, b2))
    pr(minimumTotalDistance(a_debug1, b_debug1)) // 6
    pr(minimumTotalDistance(a_debug2, b_debug2)) // 582755368
};

main()