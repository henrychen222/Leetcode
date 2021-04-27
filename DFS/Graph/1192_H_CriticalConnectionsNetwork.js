/**
 * 04/24/21 evening
 * https://leetcode.com/problems/critical-connections-in-a-network/
 * 
 * reference:
 * https://leetcode.com/contest/weekly-contest-154/ranking liouzhou_101
 * https://zxi.mytechroad.com/blog/graph/leetcode-1192-critical-connections-in-a-network/
 */

const pr = console.log;

// Accepted --- 728ms 73.55%
let g, dfn, low, timestamp, res;
const criticalConnections = (n, connections) => {
    g = initializeGraph(n);
    // pr(g);
    // dfn = low = Array(n).fill(0); // issue, WA in test 12
    dfn = Array(n).fill(0);
    low = Array(n).fill(0);
    // pr(dfn, low)
    timestamp = 0;
    res = [];
    for (const e of connections) {
        g[e[0]].push(e[1]);
        g[e[1]].push(e[0]);
    }
    // pr(g);
    for (let i = 0; i < n; i++) {
        if (!dfn[i]) tarjan(i, -1);
    }
    return res;
};

const mi = Math.min;
const tarjan = (i, p) => { // i: current idx, p: previous index pointing from i
    // pr(dfn, low);
    // pr("idx", i, "p", p);
    timestamp++;
    dfn[i] = low[i] = timestamp;
    for (const cur of g[i]) { // consider successors of g. g[i]: Edge, cur: vertice
        // pr(cur, p)
        if (cur == p) continue;
        if (!dfn[cur]) { // successor has not yet been visited, recursion
            // pr("cur", cur, "idx", i);
            tarjan(cur, i); // i ---> cur
            low[i] = mi(low[i], low[cur]);
            if (low[cur] > dfn[i]) res.push([i, cur]) // strong connected
        } else {
            low[i] = mi(low[i], dfn[cur]);
        }
    }
};

const initializeGraph = (n) => {
    let G = [];
    for (let i = 0; i < n; i++) G.push([]);
    return G;
};

const main = () => {
    let n = 4,
        connections = [
            [0, 1],
            [1, 2],
            [2, 0],
            [1, 3]
        ];
    pr(criticalConnections(n, connections));
};

main()