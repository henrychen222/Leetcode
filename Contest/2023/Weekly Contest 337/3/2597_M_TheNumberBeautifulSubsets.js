/*
 * 03/18/23 evening
 * https://leetcode.com/contest/weekly-contest-337/problems/the-number-of-beautiful-subsets/
 */

const pr = console.log;

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };

// Accepted
const beautifulSubsets = (a, k) => {
    let n = a.length, res = 0;
    for (let i = 0; i < 1 << n; i++) {
        let sub = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                sub.push(a[j]);
            }
        }
        if (sub.length > 0 && ok(sub, k)) res++;
    }
    return res;
};

const ok = (a, k) => {
    let m = counter(a);
    for (const x of a) {
        if (m.has(x + k) || m.has(x - k)) return false;
    }
    return true;
};

const main = () => {
    let a = [2, 4, 6], k = 2;
    let a2 = [1], k2 = 1;
    pr(beautifulSubsets(a, k))
    pr(beautifulSubsets(a2, k2))
};

main()