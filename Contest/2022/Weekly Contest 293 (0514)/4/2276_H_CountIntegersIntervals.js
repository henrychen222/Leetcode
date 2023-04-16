/**
 * 05/14/22 evening
 * https://leetcode.com/contest/weekly-contest-293/problems/count-integers-in-intervals/
 */

const pr = console.log;

// TLE
function CountIntervals() {
    let a = [];
    return { add, count }
    function add(left, right) {
        a.push([left, right]);
        a = mergeIntervalUnion(a);
    }
    function count() {
        // pr("a", a);
        let res = intervalCounter(a);
        return res;
    }
}

const mergeIntervalUnion = (a) => {
    a.sort((x, y) => x[0] - y[0]);
    let res = [[a[0][0], a[0][1]]], preEnd = a[0][1];
    for (const [start, end] of a) {
        if (start > preEnd) {
            res.push([start, end]);
            preEnd = end;
        } else {
            let pre = res.pop();
            let left = Math.min(pre[0], start);
            let right = Math.max(pre[1], end);
            res.push([left, right]);
            preEnd = right;
        }
    }
    return res;
};

const intervalCounter = (a) => {
    let res = 0;
    for (const [l, r] of a) {
        let cnt = r - l + 1;
        res += cnt;
    }
    return res;
};

const main = () => {
    let countIntervals = new CountIntervals();
    countIntervals.add(2, 3);
    countIntervals.add(7, 10);
    pr(countIntervals.count()); // 6
    countIntervals.add(5, 8);
    pr(countIntervals.count()); // 8
};

main()