/**
 * 10/16/21 evening
 * https://leetcode.com/contest/weekly-contest-263/problems/second-minimum-time-to-reach-destination/
 * 
 * tried
 * https://www.geeksforgeeks.org/find-paths-given-source-destination/
 */

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
const pr = console.log;

const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };
const addEdgeToG = (G, Edges) => { for (const [u, v] of Edges) { G[u].push(v); G[v].push(u); } };

// Accepted
// reference: wiji
const secondMinimum = (n, edges, time, change) => {
    let adj = initializeGraph(n + 1);
    addEdgeToG(adj, edges);
    // pr(adj)
    let cost = initializeGraph(n + 1);
    let pq = new MinPriorityQueue({ priority: x => x[0] });
    pq.enqueue([0, 1]);
    let green = 2 * change;
    while (pq.size()) {
        let cur = pq.dequeue().element;
        let [t, node] = cur;
        // pr('node', node, 't', t);
        if (cost[node].length == 2) continue;
        let nextT = t % green < change ? t : ((t + green - 1) / green >> 0) * green;
        // pr('nextT', nextT);
        let cn = cost[node].length;
        if (node == n) {
            if (cn == 0 || cost[node][cn - 1] != t) {
                cost[node].push(t);
            } else {
                continue;
            }
        } else {
            if (cn == 0 || cost[node][cn - 1] != nextT) {
                cost[node].push(nextT);
            } else {
                continue;
            }
        }
        for (const next_node of adj[node]) pq.enqueue([nextT + time, next_node]);
    }
    // pr(cost);
    return cost[n][1];
};

const main = () => {
    let n = 5, edges = [[1, 2], [1, 3], [1, 4], [3, 4], [4, 5]], time = 3, change = 5;
    let n2 = 2, edges2 = [[1, 2]], time2 = 3, change2 = 2;
    pr(secondMinimum(n, edges, time, change))
    pr(secondMinimum(n2, edges2, time2, change2))
};

main()