/*
08/03/23 night

reference:
https://en.wikipedia.org/wiki/Hungarian_algorithm
https://yasenh.github.io/post/hungarian-algorithm-1/
https://yasenh.github.io/post/hungarian-algorithm-2/
https://www.geeksforgeeks.org/hungarian-algorithm-for-assignment-problem-set-2-implementation/

https://www.renfei.org/blog/bipartite-matching.html
https://liam.page/2016/04/03/Hungarian-algorithm-in-the-maximum-matching-problem-of-bigraph/
https://blog.csdn.net/dark_scope/article/details/8880547

Example problem:
https://leetcode.com/problems/maximum-students-taking-exam/
*/

function HungarianBipartiteGraph(g) {
    let vis = new Set(), n = g.length, match = Array(n).fill(-1);
    return { maxMatch }
    function maxMatch() {
        let res = 0;
        for (let i = 0; i < n; i++) {
            vis.clear();
            res += dfs(i);
        }
        return res;
    }
    function dfs(cur) {
        for (const child of g[cur]) {
            if (vis.has(child)) continue;
            vis.add(child);
            if (match[child] < 0 || dfs(match[child])) {
                match[child] = cur;
                return true;
            }
        }
        return false;
    }
}




/*
12/05/22 evening
https://www.geeksforgeeks.org/hungarian-algorithm-assignment-problem-set-1-introduction/
*/

const pr = console.log;

function Hungarian(a) {
    const N = 31;
    let max_match, n = Math.sqrt(a.length), cost = [...Array(n)].map(() => Array(n).fill(0)), pre = Array(N).fill(0);
    let lx = Array(N).fill(0), ly = Array(N).fill(0), xy = Array(N).fill(0), yx = Array(N).fill(0);
    let S = Array(N).fill(false), T = Array(N).fill(false), slack = Array(N).fill(0), slackx = Array(N).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) cost[i][j] = -1 * a[i * n + j];
    }
    return { solve }
    function update() {
        let delta = Number.MAX_SAFE_INTEGER;
        for (let y = 0; y < n; y++) {
            if (!T[y]) delta = Math.min(delta, slack[y]);
        }
        for (let x = 0; x < n; x++) {
            if (S[x]) lx[x] -= delta;
        }
        for (let y = 0; y < n; y++) {
            if (T[y]) ly[y] += delta;
        }
        for (let y = 0; y < n; y++) {
            if (!T[y]) slack[y] -= delta;
        }
    }
    function add(x, preX) {
        S[x] = true;
        pre[x] = preX;
        for (let y = 0; y < n; y++) {
            if (lx[x] + ly[y] - cost[x][y] < slack[y]) {
                slack[y] = lx[x] + ly[y] - cost[x][y];
                slackx[y] = x;
            }
        }
    }
    function augment() {
        if (max_match == n) return;
        let x, y, root, q = Array(N).fill(0), wr = 0, rd = 0;
        S.fill(false);
        T.fill(false);
        pre.fill(-1);
        for (x = 0; x < n; x++) {
            if (xy[x] == -1) {
                q[wr++] = root = x;
                pre[x] = -2;
                S[x] = true;
                break;
            }
        }
        for (y = 0; y < n; y++) {
            slack[y] = lx[root] + ly[y] - cost[root][y];
            slackx[y] = root;
        }
        while (1) {
            while (rd < wr) {
                x = q[rd++];
                for (y = 0; y < n; y++) {
                    if (cost[x][y] == lx[x] + ly[y] && !T[y]) {
                        if (yx[y] == -1) break;
                        T[y] = true;
                        q[wr++] = yx[y];
                        add(yx[y], x);
                    }
                }
                if (y < n) break;
            }
            if (y < n) break;
            update();
            wr = 0;
            rd = 0;
            for (y = 0; y < n; y++) {
                if (!T[y] && slack[y] == 0) {
                    if (yx[y] == -1) {
                        x = slackx[y];
                        break;
                    } else {
                        T[y] = true;
                        if (!S[yx[y]]) {
                            q[wr++] = yx[y];
                            add(yx[y], slackx[y]);
                        }
                    }
                }
            }
            if (y < n) break;
        }
        if (y < n) {
            max_match++;
            for (let cx = x, cy = y, ty; cx != -2; cx = pre[cx], cy = ty) {
                ty = xy[cx];
                yx[cy] = cx;
                xy[cx] = cy;
            }
            augment();
        }
    }
    function reset() {
        lx.fill(0);
        ly.fill(0);
        for (let x = 0; x < n; x++) {
            for (let y = 0; y < n; y++) lx[x] = Math.max(lx[x], cost[x][y]);
        }
    }
    function solve() {
        max_match = 0;
        let res = 0;
        xy.fill(-1);
        yx.fill(-1);
        reset();
        augment();
        for (let x = 0; x < n; x++) res += cost[x][xy[x]];
        return -1 * res;
    }
}


const main = () => {
    let a = [1500, 4000, 4500, 2000, 6000, 3500, 2000, 4000, 2500];
    let hun = new Hungarian(a);
    pr(hun.solve()) // 8500
}

main()