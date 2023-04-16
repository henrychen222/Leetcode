/**
 * 10/30/21 morning
 * https://leetcode.com/contest/biweekly-contest-64/problems/two-best-non-overlapping-events/
 */

const pr = console.log;

// https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/discuss/1445290/javascript-greedy-467ms
const maxTwoEvents1 = (a) => {
    let res = 0, maxEnd = 0, maxV = 0;
    a.sort((x, y) => x[0] == y[0] ? x[1] - y[1] : y[0] - x[0]);
    // a.sort((x, y) => {
    //    if (x[2] != y[2]) return y[2] - x[2];
    //    if (x[0] != y[0]) return y[0] - x[0];
    //    return x[1] - y[1];
    // });
    pr(a);
    for (let i = 0; i < a.length; i++) {
        let [start, end, v] = a[i];
        if (end < maxEnd) {
            let sum = maxV + v;
            pr([start, end, v], sum, "maxV", maxV);
            res = Math.max(res, sum);
        }
        maxEnd = Math.max(maxEnd, end);
        maxV = Math.max(maxV, v);
    }
    return res;
};

// WA
const maxTwoEvents2 = (a) => {
    let n = a.length, res = 0;
    a.sort((x, y) => {
        if (x[1] != y[1]) return x[1] - y[1];
        return x[0] - y[0];
    });
    pr(a);
    let preEnd = a[0][1], preSum = a[0][2];
    res = preSum;
    // let d = [a[0]];
    for (let i = 1; i < n; i++) {
        let [curStart, curEnd, curSum] = a[i];
        res = Math.max(res, curSum);
        if (preEnd < curStart) {
            // d.push(a[i]);
            let tmp = preSum + curSum;
            pr(preSum, curSum, tmp);
            res = Math.max(res, tmp);
            preSum = Math.max(preSum, curSum);
        }
    }
    return res;
};

const main = () => {
    let events = [[1,3,2],[4,5,2],[2,4,3]];
    let events2 = [[1,3,2],[4,5,2],[1,5,5]];
    let events3 = [[1,5,3],[1,5,1],[6,6,5]];
    let debug1 = [[10,83,53],[63,87,45],[97,100,32],[51,61,16]];
    pr(maxTwoEvents(events))
    pr(maxTwoEvents(events2))
    pr(maxTwoEvents(events3))
    pr(maxTwoEvents(debug1)) // 85
};

main()