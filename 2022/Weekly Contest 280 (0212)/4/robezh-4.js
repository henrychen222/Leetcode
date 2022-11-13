//


const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

const pr = console.log;

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
                // pr("cur", curDis, cur);
                for (let i = 0; i < g[cur].length; i++) {
                    let child = g[cur][i];
                    // pr(child, child.cap, child.to)
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
const maximumANDSum = (a, m) => {
    let n = a.length, mcmf = new MCMF(n + m + 2), from = n + m, to = from + 1;
    for (let i = 0; i < n; i++) {
        mcmf.addEdge(from, i, 0, 1);
        for (let j = 0; j < m; j++) {
            mcmf.addEdge(i, j + n, -(a[i] & (j + 1)), 1);
        }
    }
    for (let i = 0; i < m; i++) mcmf.addEdge(i + n, to, 0, 2);
    return -mcmf.minCostFlow(from, to, n);
};

const main = () => {
    let nums = [1, 2, 3, 4, 5, 6], numSlots = 3;
    let nums2 = [1, 3, 10, 4, 7, 1], numSlots2 = 9;
    pr(maximumANDSum(nums, numSlots))
    pr(maximumANDSum(nums2, numSlots2))
};

main()