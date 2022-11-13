/*
 * 10/22/22 night  11/02/22 night complete
 * https://leetcode.com/problems/shortest-path-visiting-all-nodes/
 */

const pr = console.log;

const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(0); d.push(t); } return d; };

// Accepted
// reference: https://leetcode.com/contest/weekly-contest-87/ranking cuiaoxiang
const shortestPathLength = (g) => {
    let n = g.length, dis = initialize2DArray(1 << n, n), q = [], res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) q.push([1 << i, i]);
    while (q.length) {
        let [mask, cur] = q.shift();
        for (const child of g[cur]) {
            let childMask = mask | (1 << child);
            if (dis[childMask][child] == 0) {
                q.push([childMask, child]);
                dis[childMask][child] = dis[mask][cur] + 1;
            }
        }
    }
    for (let i = 0; i < n; i++) res = Math.min(res, dis[(1 << n) - 1][i]);
    return res;
};

///////////////////////////////////////////////////////////////////////
// TLE 37/51
let g, n, res;
const shortestPathLength1 = (G) => {
    g = G;
    n = g.length;
    res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) dfs(i, [i]);
    return res;
};

const dfs = (cur, path, state, vis) => {
    // pr("cur", cur, path);
    if (allVisit(path)) {
        // pr("ok", path)
        res = Math.min(res, path.length - 1);
        return;
    }
    if (detectCycleArray(path)) return;
    if (path.length > n * 3 / 2) return;
    if (multipleVisit(path)) return;
    for (const child of g[cur]) {
        path.push(child);
        dfs(child, path);
        path.pop()
    }
};

const allVisit = (p) => {
    let vis = Array(n).fill(false);
    for (const x of p) vis[x] = true;
    // pr("path", p, "vis", vis);
    return vis.every(x => x);
};

const multipleVisit = (p) => {
    let f = Array(n).fill(0);
    for (const x of p) f[x]++;
    return f.some(x => x >= 5);
};

const detectCycleArray = (a) => {
    if (a.length >= 4) {
        let ma = new Map(), cycle = -1;
        for (let i = 0; i < a.length; i++) {
            let next = a[i];
            if (ma.has(next)) {
                let pre = ma.get(next);
                cycle = i - pre;
                let match = true;
                // pr(pre, i);
                for (let j = pre; j < i; j++) {
                    if (j + cycle < a.length) {
                        // pr("j", j, a[j], "j+cycle", j + cycle, a[j + cycle])
                        if (a[j] != a[j + cycle]) {
                            match = false;
                            break;
                        }
                    } else {
                        match = false;
                        break;
                    }
                }
                // pr("match", match)
                if (match) {
                    break;
                } else {
                    cycle = -1;
                }
            }
            ma.set(next, i);
        }
        // pr("cycle", cycle)
        return cycle != -1;
    }
    return false;
};

const main = () => {
    let g = [[1, 2, 3], [0], [0], [0]];
    let g2 = [[1], [0, 2, 4], [1, 3, 4], [2], [1, 2]]
    let debug1 = [[2, 3, 7], [3, 6], [0, 4], [0, 1, 4, 5], [3, 7, 2, 6], [3], [4, 1], [4, 0]];
    let debug2 = [[1], [0, 2, 6], [1, 3], [2], [5], [4, 6], [1, 5, 7], [6]];
    let debug3 = [[1, 4], [0, 3, 4, 7, 9], [6, 10], [1, 10], [1, 0], [6], [7, 2, 5], [6, 1, 8], [7], [1], [2, 3]]
    let debug4 = [[3], [3], [3, 5], [0, 1, 2, 6], [6], [2], [3, 4]];
    let debug5 = [[6, 7], [6], [6], [5, 6], [6], [3], [2, 0, 3, 4, 1], [0]];
    pr(shortestPathLength(g))
    pr(shortestPathLength(g2))
    pr(shortestPathLength(debug1)) // 7
    pr(shortestPathLength(debug2)) // 9
    pr(shortestPathLength(debug3)) // 12
    pr(shortestPathLength(debug4)) // 8
    pr(shortestPathLength(debug5)) // 10
};

main()

// let a = [0, 1, 0, 2, 0, 1, 0, 2, 0, -1]
// let a2 = [1, 0, 1, 0]
// let a3 = [1, 0, 1]
// let a4 = [1, 0, 2, 0];

// pr(detectCycleArray(a));
// pr(detectCycleArray(a2));
// pr(detectCycleArray(a3));

// pr(detectCycleArray(a4));