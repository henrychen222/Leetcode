/**
 * 07/30/22 evening
 * https://leetcode.com/contest/weekly-contest-304/problems/find-closest-node-to-given-two-nodes/
 */

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };

// Accepted
const closestMeetingNode = (edges, node1, node2) => {
    let n = edges.length, g = initializeGraph(n);
    for (let i = 0; i < n; i++) {
        if (edges[i] != -1) g[i].push(edges[i]);
    }
    // pr(g);
    let dis = bfs(g, node1), dis2 = bfs(g, node2), d = [];
    // pr(dis);
    // pr(dis2)
    for (let i = 0; i < n; i++) {
        if (dis[i] != Number.MAX_SAFE_INTEGER & dis2[i] != Number.MAX_SAFE_INTEGER) {
            d.push([Math.max(dis[i], dis2[i]), i]);
        }
    }
    d.sort((x, y) => {
        if (x[0] != y[0]) return x[0] - y[0];
        return x[1] - y[1];
    })
    return d.length ? d[0][1] : -1;
};

const bfs = (g, start) => {
    let n = g.length, dis = Array(n).fill(Number.MAX_SAFE_INTEGER), q = [start];
    dis[start] = 0;
    while (q.length) {
        let cur = q.shift();
        for (const child of g[cur]) {
            if (dis[child] > dis[cur] + 1) {
                dis[child] = dis[cur] + 1;
                q.push(child);
            }
        }
    }
    return dis;
};

const main = () => {
    let edges = [2, 2, 3, -1], node1 = 0, node2 = 1;
    let edges2 = [1, 2, -1], node1_2 = 0, node2_2 = 2
    pr(closestMeetingNode(edges, node1, node2))
    pr(closestMeetingNode(edges2, node1_2, node2_2))
};

main()