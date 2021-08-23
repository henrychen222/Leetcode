// 08/21/21 afternoon


const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

const pr = console.log;

// Accepted --- 132ms
const mod = 1e9 + 7;
const countPaths = (n, road) => {
    let adj = initializeGraph(n);
    for (const [u, v, cost] of road) {
        adj[u].push([v, cost]);
        adj[v].push([u, cost]);
    }
    // pr(adj);
    return dijkstra(n, adj, 0);
};

const dijkstra = (n, g, source) => { // g: adjacent graph list, n: total vertices
    let dist = Array(n).fill(Number.MAX_SAFE_INTEGER);
    let ways = Array(n).fill(0);
    // const pq = new MinPriorityQueue({ priority: x => x[0] * 200 + x[1] });
    const pq = new MinPriorityQueue({ priority: x => x[0]});
    // const pq = new MinPriorityQueue({
    //     compare: (x, y) => {
    //         if (x[0] == y[0]) return x[1] - y[1];
    //         return x[0] - y[0];
    //     }
    // });
    dist[0] = 0;
    ways[0] = 1;
    pq.enqueue([0, source]);
    while (pq.size()) {
        let cur = pq.dequeue().element;
        let [curCost, curNode] = cur; // v: neighbour
        // pr(curCost, curNode);
        if (dist[curNode] != curCost) continue;
        for (const [node, cost] of g[curNode]) {
            // pr("parse", node, cost)
            let newDis = curCost + cost;
            if (newDis == dist[node]) {
                ways[node] += ways[curNode];
                ways[node] %= mod;
            } else if (newDis < dist[node]) {
                dist[node] = newDis;
                ways[node] = ways[curNode];
                pq.enqueue([dist[node], node]);
            }
        }
    }
    return ways[n - 1];
};

const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };

const main = () => {
    let n = 7, roads = [[0, 6, 7], [0, 1, 2], [1, 2, 3], [1, 3, 3], [6, 3, 3], [3, 5, 1], [6, 5, 1], [2, 5, 1], [0, 4, 5], [4, 6, 2]];
    let n2 = 2, roads2 = [[1, 0, 10]];
    pr(countPaths(n, roads))
    pr(countPaths(n2, roads2))
};

main()