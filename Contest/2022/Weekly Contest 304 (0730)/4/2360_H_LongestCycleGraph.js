/**
 * 07/30/22 evening
 * https://leetcode.com/contest/weekly-contest-304/problems/longest-cycle-in-a-graph/
 */

const pr = console.log;

// Accepted
// reference: skywalkert AntonRaichuk ljc00118
const longestCycle = (edges) => {
    let n = edges.length, g = Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
        if (edges[i] != -1) g[i] = edges[i];
    }
    // pr(g);
    return detectLongestCycleDG(g);
};

const detectLongestCycleDG = (g) => { // each node's child <= 1
    let n = g.length, cycleStart = Array(n).fill(-1), dis = Array(n).fill(Number.MAX_SAFE_INTEGER), res = -1;
    for (let i = 0; i < n; i++) {
        if (cycleStart[i] == -1) {
            let cur = i, step = 0
            // while (cur != -1)
            while (1) { // Accepted --- 228ms
                // pr(cur, dis);
                if (dis[cur] != Number.MAX_SAFE_INTEGER) {
                    if (cycleStart[cur] == i) { // cycle find
                        // pr(cur, step, dis[cur], dis)
                        res = Math.max(res, step - dis[cur]); // cycle length = current distance - distance to that node.
                    }
                    break;
                }
                dis[cur] = step;
                cycleStart[cur] = i;
                cur = g[cur];
                step++;
            }
        }
    }
    // pr(dis)
    return res;
};

const main = () => {
    let edges = [3, 3, 4, 2, 3];
    let edges2 = [2, -1, 3, 1]
    pr(longestCycle(edges))
    pr(longestCycle(edges2))
};

main()