/**
 * 04/17/21 morning
 * https://leetcode.com/contest/biweekly-contest-50/problems/queries-on-number-of-points-inside-a-circle/
 */

const pr = console.log;

// Accepted
const sq = Math.sqrt;
const countPoints = (points, queries) => {
    let res = [];
    for (const q of queries) {
        let cnt = 0;
        for (const p of points) {
            if (ok(p, q)) cnt++;
        }
        res.push(cnt);
    }
    return res;
};

const ok = (p, q) => {
    let r = q[2];
    let cx = q[0];
    let cy = q[1];
    let px = p[0];
    let py = p[1];
    let dis = sq((px - cx) ** 2 + (py - cy) ** 2);
    return dis <= r;
};

const main = () => {
    let points = [[1, 3], [3, 3], [5, 3], [2, 2]], queries = [[2, 3, 1], [4, 3, 1], [1, 1, 2]];
    let points2 = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]], queries2 = [[1, 2, 2], [2, 2, 2], [4, 3, 2], [4, 3, 3]]
    pr(countPoints(points, queries));
    pr(countPoints(points2, queries2));
};

main()