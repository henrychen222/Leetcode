/*
* 09/10/22 evening
* https://leetcode.com/contest/weekly-contest-310/problems/divide-intervals-into-minimum-number-of-groups/
*/

const pr = console.log;

const minGroups = (a) => sweepLineIntervals(a)

// Accepted
// reference uwi hank55663
const sweepLineIntervals = (a) => {
    let d = [], h = 0, res = 0;
    for (const [l, r] of a) {
        d.push([l, 1]);
        d.push([r + 1, -1]);
    }
    d.sort((x, y) => {
        if (x[0] != y[0]) return x[0] - y[0];
        return x[1] - y[1];
    });
    // pr(d);
    for (const [, mark] of d) {
        h += mark;
        res = Math.max(res, h);
    }
    return res;
};

/////////////////////////////////////////////////////////////////
// WA
const minGroups1 = (g) => {
    let d = mergeIntervals(g);
    pr(d.length, g.length)
    return d.length == g.length ? 1 : g.length - d.length
};

const mergeIntervals = (a) => {
    a.sort((x, y) => x[0] - y[0]);
    let res = [[a[0][0], a[0][1]]];
    let preEnd = a[0][1];
    for (const [start, end] of a) {
        if (start > preEnd) {
            res.push([start, end]);
            preEnd = end;
        } else {
            let pre = res.pop();
            let left = Math.max(pre[0], start);
            let right = Math.min(pre[1], end);
            res.push([left, right]);
            preEnd = right;
        }
    }
    return res;
};

const main = () => {
    let intervals = [[5, 10], [6, 8], [1, 5], [2, 3], [1, 10]];
    let intervals2 = [[1, 3], [5, 6], [8, 10], [11, 13]];
    let debug1 = [[441459, 446342], [801308, 840640], [871890, 963447], [228525, 336985], [807945, 946787], [479815, 507766], [693292, 944029], [751962, 821744]]
    let debug0 = [[1, 1]]
    pr(minGroups(intervals))
    pr(minGroups(intervals2))
    pr(minGroups(debug1)) // 4
    pr(minGroups(debug0)) // 4
};

main()