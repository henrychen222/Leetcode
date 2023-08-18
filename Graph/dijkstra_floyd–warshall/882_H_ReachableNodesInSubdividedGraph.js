/**
 * 09/11/21 night
 * https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/
 */

const { MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');


const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };
const addEdgeWithCostToG = (G, Edges) => { for (const [u, v, cost] of Edges) { G[u].push([v, cost]); G[v].push([u, cost]); } };

// Accepted --- 266ms 100%
// reference: https://zxi.mytechroad.com/blog/graph/leetcode-882-reachable-nodes-in-subdivided-graph/
// https://leetcode.com/contest/weekly-contest-96/ranking/
const reachableNodes = (edges, maxMoves, n) => {
    let g = initializeGraph(n);
    addEdgeWithCostToG(g, edges);
    // pr(g);
    return dijkstra(g, n, edges, maxMoves);
};

const MIN = Number.MIN_SAFE_INTEGER;
const dijkstra = (g, n, edges, maxMoves) => {
    let pq = new MaxPriorityQueue({ priority: x => x[0]});
    let blood = Array(n).fill(MIN); // for each node, save maximum moves left to reach each node
    pq.enqueue([maxMoves, 0]);
    let res = 0;
    while (pq.size()) {
        let [hp, cur] = pq.dequeue().element;
        // pr(hp, cur);
        if (blood[cur] != MIN) continue;
        blood[cur] = hp;
        res++;
        for (const [next_node, cost] of g[cur]) {
            let next_hp = hp - cost - 1;
            // pr('in', next_node, next_hp)
            if (next_hp < 0 || blood[next_node] != MIN) continue;
            pq.enqueue([next_hp, next_node]);
        }
    }
    for (const [u, v, cost] of edges) {
        let uv = blood[u] == MIN ? 0 : blood[u];
        let vu = blood[v] == MIN ? 0 : blood[v];
        res += Math.min(cost, uv + vu);
    }
    return res;
};

const pr = console.log;
const main = () => {
    let edges = [
            [0, 1, 10],
            [0, 2, 1],
            [1, 2, 2]
        ],
        maxMoves = 6,
        n = 3;
    let edges2 = [
            [0, 1, 4],
            [1, 2, 6],
            [0, 2, 8],
            [1, 3, 1]
        ],
        maxMoves2 = 10,
        n2 = 4;
    let edges3 = [
            [1, 2, 4],
            [1, 4, 5],
            [1, 3, 1],
            [2, 3, 4],
            [3, 4, 5]
        ],
        maxMoves3 = 17,
        n3 = 5;
    let edges_debug1 = [[0,3,8],[0,1,4],[2,4,3],[1,2,0],[1,3,9],[0,4,7],[3,4,9],[1,4,4],[0,2,7],[2,3,1]],
    maxMoves_debug1 = 8,
    n_debug1 = 5
    
    pr(reachableNodes(edges, maxMoves, n))
    pr(reachableNodes(edges2, maxMoves2, n2))
    pr(reachableNodes(edges3, maxMoves3, n3))
    pr(reachableNodes(edges_debug1, maxMoves_debug1, n_debug1)) // 40
};

main()