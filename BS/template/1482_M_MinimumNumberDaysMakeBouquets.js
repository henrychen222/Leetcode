/**
 * 03/27/22 evening
 * https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/
 */

const cutMaxConsecutive = (a_or_s) => { let d = [], start = 0, n = a_or_s.length; for (let i = 0; i + 1 < n; i++) { if (a_or_s[i + 1] != a_or_s[i]) { d.push(a_or_s.slice(start, i + 1)); start = i + 1; } } d.push(a_or_s.slice(start)); return d; };

// Accepted --- 797ms 5.13%
let a, m, k;
const minDays = (bloomDay, M, K) => {
    a = bloomDay, m = M, k = K;
    let maxM = parseInt(a.length / k);
    return m > maxM ? -1 : BinarySearch(0, Number.MAX_SAFE_INTEGER)
};

const BinarySearch = (low, high) => {
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        if (possible(mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
};

const possible = (day) => {
    let b = [];
    for (const x of a) b.push(x <= day ? 'x' : '-');
    // pr(b);
    let tot = 0;
    let d = cutMaxConsecutive(b);
    for (const e of d) {
        if (e[0] == 'x') tot += parseInt(e.length / k);
    }
    // pr('day', day, "tot", tot, 'm', m);
    return tot < m;
};

const pr = console.log;
const main = () => {
    let bloomDay = [1, 10, 3, 10, 2],
        m = 3,
        k = 1;
    let bloomDay2 = [1, 10, 3, 10, 2],
        m2 = 3,
        k2 = 2;
    let bloomDay3 = [7, 7, 7, 7, 12, 7, 7],
        m3 = 2,
        k3 = 3;
    pr(minDays(bloomDay, m, k))
    pr(minDays(bloomDay2, m2, k2))
    pr(minDays(bloomDay3, m3, k3))
};

main()