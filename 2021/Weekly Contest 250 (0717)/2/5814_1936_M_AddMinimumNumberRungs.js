/**
 * 07/17/21 evening
 * https://leetcode.com/contest/weekly-contest-250/problems/add-minimum-number-of-rungs/
 */

const pr = console.log;

// Accepted
const addRungs = (a, dist) => {
    let n = a.length;
    let res = 0;
    if (a[0] > dist) res += a[0] % dist == 0 ? a[0] / dist - 1 : a[0] / dist >> 0;
    // pr(res);
    for (let i = 1; i < n; i++) {
        let diff = a[i] - a[i - 1];
        if (diff <= dist) continue;
        // pr(diff, dist)
        let t = diff % dist == 0 ? diff / dist - 1 : diff / dist >> 0;
        // pr("t", t);
        res += t;
    }
    return res;
};

const main = () => {
    let rungs = [1, 3, 5, 10], dist = 2;
    let rungs2 = [3, 6, 8, 10], dist2 = 3;
    let rungs3 = [3, 4, 6, 7], dist3 = 2;
    let rungs4 = [5], dist4 = 10;
    let rungs_debug1 = [4, 6], dist_debug1 = 1;
    let rungs_debug2 = [13], dist_debug2 = 4;
    let rung_test1 = [12], dist_test2 = 4;
    pr(addRungs(rungs, dist))
    pr(addRungs(rungs2, dist2))
    pr(addRungs(rungs3, dist3))
    pr(addRungs(rungs4, dist4))
    pr(addRungs(rungs_debug1, dist_debug1)) // 4
    pr(addRungs(rungs_debug2, dist_debug2)) // 3
    pr(addRungs(rung_test1, dist_test2)) // 2
};

main()