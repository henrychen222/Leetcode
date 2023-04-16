// 06/11/22 night

const pr = console.log;

const initializeGraphSet = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push(new Set()); } return g; };

// Accepted
let a, n, k, res;
const distributeCookies = (cookies, K) => {
    a = cookies, k = K, n = a.length, res = Number.MAX_SAFE_INTEGER;
    dfs(0, initializeGraphSet(k));
    return res;
};

const dfs = (pos, cur) => {
    if (pos == n) {
        let v = unfairness(cur);
        // pr(cur, debug(cur), v);
        res = Math.min(res, v);
        return;
    }
    for (let i = 0; i < k; i++) {
        cur[i].add(pos);
        dfs(pos + 1, cur);
        cur[i].delete(pos);
        if (cur[i].size == 0) break;
    }
};

const debug = (g) => {
    let d = [];
    g.map(se => {
        let t = [];
        for (const idx of se) t.push(a[idx]);
        d.push(t);
    });
    return d;
};

const unfairness = (g) => Math.max(...g.map(se => sm(se)));
const sm = (se) => { let sum = 0; for (const idx of se) sum += a[idx]; return sum; };

const main = () => {
    let cookies = [8, 15, 10, 20, 8], k = 2;
    let cookies2 = [6, 1, 3, 2, 2, 4, 1, 2], k2 = 3;
    let cookie_debug1 = [76265,7826,16834,63341,68901,58882,50651,75609], k_debug1 = 8;
    pr(distributeCookies(cookies, k))
    pr(distributeCookies(cookies2, k2))
    pr(distributeCookies(cookie_debug1, k_debug1)) // 76265
};

main()