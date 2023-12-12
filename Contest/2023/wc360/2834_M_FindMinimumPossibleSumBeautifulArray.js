/*
 * 08/26/23 evening  10:59PM start
 * https://leetcode.com/contest/weekly-contest-360/problems/find-the-minimum-possible-sum-of-a-beautiful-array/
 */

const pr = console.log;

// Accepted
const minimumPossibleSum = (n, t) => {
    let use = new Set(), v = t + 1, res = 0;
    for (let x = 1; x <= t; x++) {
        if (use.has(t - x)) continue;
        use.add(x);
    }
    // pr(use.size, use, v)
    if (use.size >= n) use = new Set([...use].slice(0, n));
    while (use.size < n) use.add(v++);
    // pr(use)
    for (const x of use) res += x;
    return res;
};

const main = () => {
    let n = 2, t = 3;
    let n2 = 3, t2 = 3;
    let n3 = 1, t3 = 1;
    let n4 = 15, t4 = 10;
    let n_debug1 = 16, t_debug1 = 32;
    pr(minimumPossibleSum(n, t))
    pr(minimumPossibleSum(n2, t2))
    pr(minimumPossibleSum(n3, t3))
    pr(minimumPossibleSum(n4, t4))
    pr(minimumPossibleSum(n_debug1, t_debug1)) // 136
};

main()