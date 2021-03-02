/**
 * 03/01/21 evening
 * https://leetcode.com/problems/bulb-switcher/
 */

const pr = console.log;

// Accepted --- 72ms 100.00%
// reference: https://leetcode.com/problems/bulb-switcher-ii/discuss/107269/Java-O(1)
const flipLights = (n, m) => {
    if (m == 0) return 1;
    if (n == 1) return 2;
    if (n == 2 && m == 1) return 3;
    if (n == 2) return 4;
    if (m == 1) return 4;
    if (m == 2) return 7;
    if (m >= 3) return 8;
    return 8;
};

// WA 21/80
let se, total, N, record;
const flipLights1 = (n, m) => {
    record = [];
    total = 2 * n;
    N = n;
    se = new Set();
    let a = Array(n).fill(1);
    se.add(JSON.stringify(a));
    for (let i = 1; i <= m; i++) {
        dfs(a, 1);
        dfs(a, 2);
        dfs(a, 3);
        dfs(a, 4);
    }
    return se.size;
};

const dfs = (a, option) => {
    if (option == 1) {
        for (let e of a) e ^= 1;
    } else if (option == 2) {
        for (let i = 1; i < N; i += 2) a[i] ^= 1;
    } else if (option == 3) {
        for (let i = 0; i < N; i += 2) a[i] ^= 1;
    } else if (option == 4) {
        for (let i = 0; i < N; i += 3) a[i] ^= 1;
    }
    let tmp = JSON.stringify(a);
    // pr(tmp);
    se.add(tmp);
    // pr(se);
    if (se.size == total || se.size == record[0]) return;
    record.unshift(se.size);
};

const main = () => {
    let n = 1,
        m = 1;
    let n2 = 2,
        m2 = 1;
    let n3 = 3,
        m3 = 1;
    let n_debug1 = 3,
        m_debug1 = 3;
    pr(flipLights(n, m));
    pr(flipLights(n2, m2));
    pr(flipLights(n3, m3));
    pr(flipLights(n_debug1, m_debug1)); // 8
};

main()