/*
 * 03/18/23 evening
 * https://leetcode.com/contest/weekly-contest-337/problems/smallest-missing-non-negative-integer-after-operations/
 */

const pr = console.log;

// Accepted
// reference: goodstudyqaq 
const findSmallestInteger = (a, v) => {
    let mods = Array(v).fill(0), cur = 0;
    for (const x of a) mods[(x % v + v) % v]++;
    while (mods[cur % v] > 0) {
        mods[cur % v]--;
        cur++;
    }
    return cur;
};

// WA
const findSmallestInteger1 = (a, v) => {
    a.sort((x, y) => x - y);
    pr(a)
    let n = a.length
    for (let i = 0; i < n; i++) {
        if (a[i] < 0) {
            let cnt = Math.ceil(-a[i] / v);
            a[i] += cnt * v;
        } else if (a[i] > 0) {
            let cnt = Math.floor(a[i] / v);
            a[i] -= cnt * v;
        }
    }
    pr(a)
    a.sort((x, y) => x - y);
    if (a[0] > 0) return 0;
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i + 1] - a[i] > 1) {
            return a[i] + 1;
        }
    }
    return a[a.length - 1] + 1;
};

const main = () => {
    let a = [1, -10, 7, 13, 6, 8], v = 5
    let a2 = [1, -10, 7, 13, 6, 8], v2 = 7
    let a_debug1 = [3, 0, 3, 2, 4, 2, 1, 1, 0, 4], v_debug1 = 5;
    let a_debug2 = [1, 3, 5, 7], v_debug2 = 2;
    pr(findSmallestInteger(a, v))
    pr(findSmallestInteger(a2, v2))
    pr(findSmallestInteger(a_debug1, v_debug1)) // 10
    pr(findSmallestInteger(a_debug2, v_debug2)) // 0
};

main()