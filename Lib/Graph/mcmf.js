/*
02/12/21 night

Read:
https://en.wikipedia.org/wiki/Minimum-cost_flow_problem
https://cp-algorithms.com/graph/min_cost_flow.html
https://www.geeksforgeeks.org/minimum-cost-maximum-flow-from-a-graph-using-bellman-ford-algorithm/
https://www.programmersought.com/article/69371888737/
https://www.hackerearth.com/practice/algorithms/graphs/minimum-cost-maximum-flow/tutorial/

Example Questions:
https://leetcode.com/problems/maximum-and-sum-of-array/
https://codeforces.com/contest/1525/problem/D
https://leetcode.com/problems/minimum-total-distance-traveled (11/05/22)

*/
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