/**
 * 01/31/22 evening
 * https://leetcode.com/problems/random-pick-with-blacklist/
 */

// Accepted --- 270ms 89.47%
// reference: https://www.cnblogs.com/grandyang/p/10029772.html
function Solution(N, blacklist) {
    let a = [], se = new Set(blacklist), n = N - se.size, m = new Map();
    for (let i = n; i < N; i++) {
        if (se.has(i)) continue;
        a.push(i);
    }
    // pr(a);
    let it = 0;
    for (const x of se) {
        if (x < n) {
            m.set(x, a[it]);
            it++;
        }
    }
    // pr(m);
    return { pick }
    function pick() {
        let i = randN(n) - 1;
        // pr("i", i);
        return m.has(i) ? m.get(i) : i;
    }
    function randN(n) {
        return parseInt(Math.random() * n) + 1;
    }
}


////////////////////////////////////////////////////////////////////////
// Memory out 66/68
function Solution2(N, blacklist) {
    let a = [], b = [], se = new Set(blacklist);
    for (let i = 0; i < N; i++) {
        if (se.has(i)) continue;
        a.length <= 1e8 ? a.push(i) : b.push(i);
    }
    let n = N - se.size, an = a.length, bn = b.length;
    // pr(n, an, bn);
    return { pick }
    function pick() {
        let i = randN(n);
        if (i - 1 < an) {
            return a[i - 1];
        } else {
            return b[i - an - 1];
        }
    }
    function randN(n) {
        return parseInt(Math.random() * n) + 1;
    }
}

// Memory out 66/68
function Solution1(N, blacklist) {
    let a = [], se = new Set(blacklist);
    for (let i = 0; i < N; i++) {
        if (se.has(i)) continue;
        a.push(i);
    }
    let n = a.length;
    return { pick }
    function pick() {
        let i = randN(n);
        return a[i - 1];
    }
    function randN(n) {
        return parseInt(Math.random() * n) + 1;
    }
}

const pr = console.log;
const main = () => {
    let solution = new Solution(7, [2, 3, 5]);
    pr(solution.pick()); // 0
    pr(solution.pick()); // 4
    pr(solution.pick()); // 1
    pr(solution.pick()); // 6
    pr(solution.pick()); // 1
    pr(solution.pick()); // 0
    pr(solution.pick()); // 4
};

main()