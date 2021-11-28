/**
 * 11/27/21 evening
 * https://leetcode.com/problems/cracking-the-safe/
 */

// Accepted --- 95ms 43.75%
let total, k, n, res;
const crackSafe1 = (N, K) => {
    n = N, k = K, total = k ** n;
    res = '0'.repeat(n), visit = new Set([res]);
    dfs(visit, res);
    return res;
};

const dfs = (visit) => {
    // pr(visit, res);
    if (visit.size == total) return;
    let pre = res.slice(res.length - n + 1); // last n-1 digits
    for (let i = k - 1; ~i; i--) { // appending new digit from k-1 to 0
        let c = i + "", cur = pre + c;
        if (visit.has(cur)) continue;
        visit.add(cur);
        res += c;
        dfs(visit);
    }
};

// Accepted --- 90ms 50%
const crackSafe = (N, K) => {
    let res = '0'.repeat(N), visit = new Set([res]), tot = K ** N;
    while (tot--) {
        let pre = res.slice(res.length - N + 1);
        for (let i = K - 1; ~i; i--) {
            let c = i + "", cur = pre + c;
            if (visit.has(cur)) continue;
            visit.add(cur);
            res += c;
            break;
        }
        // pr(res);
    }
    return res;
};

const pr = console.log;
const main = () => {
    let n = 1,
        k = 2;
    let n2 = 2,
        k2 = 2;
    pr(crackSafe(n, k))
    pr(crackSafe(n2, k2))
};

main()