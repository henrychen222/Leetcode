/*
 * 04/01/23 afternoon
 * https://leetcode.com/contest/biweekly-contest-101/problems/shortest-cycle-in-a-graph/
 */

const shortestCycleUG = (g, start) => {
    let n = g.length, dis = Array(n).fill(Number.MAX_SAFE_INTEGER), q = [[start, -1]], res = Number.MAX_SAFE_INTEGER;
    dis[start] = 0;
    while (q.length) {
        let [cur, par] = q.shift();
        for (const child of g[cur]) {
            if (dis[child] > dis[cur] + 1) {
                dis[child] = dis[cur] + 1;
                q.push([child, cur]);
            } else if (child != par) {
                let cycle = dis[cur] + dis[child] + 1;
                res = Math.min(res, cycle);
            }
        }
    }
    return res;
};

