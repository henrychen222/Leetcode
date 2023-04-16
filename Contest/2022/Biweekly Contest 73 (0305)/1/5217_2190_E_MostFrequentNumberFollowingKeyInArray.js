/**
 * 03/05/22 morning
 * https://leetcode.com/contest/biweekly-contest-73/problems/most-frequent-number-following-key-in-an-array/
 */

const pr = console.log;

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };

// Accepted
const mostFrequent = (a, key) => {
    let m = counter(a);
    let n = a.length, d = [];
    for (let i = 0; i + 1 < n; i++) {
        if (a[i] == key) d.push([a[i + 1], m.get(a[i + 1])]);
    }
    d.sort((x, y) => y[1] - x[1]);
    // console.log(d);
    return d[0][0];
};

const main = () => {
    let a = [1, 100, 200, 1, 100], key = 1;
    let a2 = [2, 2, 2, 2, 3], key2 = 2;
    let a_debug1 = [1, 1000, 2], key_debug1 = 1000;
    pr(mostFrequent(a, key))
    pr(mostFrequent(a2, key2))
    pr(mostFrequent(a_debug1, key_debug1)) // 2
};

main()