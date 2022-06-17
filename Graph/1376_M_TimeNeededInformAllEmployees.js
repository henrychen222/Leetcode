/**
 * 06/13/22 morning
 * https://leetcode.com/problems/time-needed-to-inform-all-employees/
 */

const pr = console.log;

const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };

// Accepted --- 453ms 55.53%
const numOfMinutes = (n, headID, manager, informTime) => minDisGlobal(n, headID, manager, informTime);

const minDisGlobal = (n, headID, manager, informTime) => {
    let g = initializeGraph(n), time = Array(n).fill(Number.MAX_SAFE_INTEGER), q = [], res = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) manager[i] == -1 ? q.push(i) : g[manager[i]].push(i);
    // pr(g);
    time[headID] = 0;
    while (q.length) {
        let cur = q.shift(), moveTime = informTime[cur];
        for (const child of g[cur]) {
            if (time[child] > time[cur] + moveTime) {
                time[child] = time[cur] + moveTime;
                q.push(child);
            }
        }
    }
    // pr(time);
    for (const t of time) {
        if (t != Number.MAX_SAFE_INTEGER) res = Math.max(res, t);
    }
    return res;
};

const main = () => {
    let n = 1,
        headID = 0,
        manager = [-1],
        informTime = [0];
    let n2 = 6,
        headID2 = 2,
        manager2 = [2, 2, -1, 2, 2, 2],
        informTime2 = [0, 0, 1, 0, 0, 0];
    pr(numOfMinutes(n, headID, manager, informTime))
    pr(numOfMinutes(n2, headID2, manager2, informTime2))
};

main()