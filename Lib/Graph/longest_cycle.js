/*
07/30/22 night
https://leetcode.com/problems/longest-cycle-in-a-graph/
*/

// direct parent -> child, no queue
const detectLongestCycleDG = (g) => { // each node's child <= 1
    let n = g.length, cycleStart = Array(n).fill(-1), dis = Array(n).fill(Number.MAX_SAFE_INTEGER), res = -1;
    for (let i = 0; i < n; i++) {
        if (cycleStart[i] == -1) { // current node should not under any other cycle, can be as a cycle start node
            let cur = i, step = 0
            while (1) {
                if (dis[cur] != Number.MAX_SAFE_INTEGER) {
                    if (cycleStart[cur] == i) { // cycle find
                        res = Math.max(res, step - dis[cur]);
                    }
                    break;
                }
                dis[cur] = step;
                cycleStart[cur] = i; // set cycle start node to current node
                cur = g[cur];
                step++;
            }
        }
    }
    return res;
};