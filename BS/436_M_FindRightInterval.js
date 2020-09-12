/**
 * 9.11 evening
 * https://leetcode.com/problems/find-right-interval/
 */

// Accepted --- 1120ms 21.79%
const findRightInterval_refine = (intervals) => {
    let res = [];
    let n = intervals.length;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        map.set(intervals[i][0], i);
    }
    for (let i = 0; i < n; i++) {
        let tmp = Number.MAX_VALUE;
        let endI = intervals[i][1];
        for (let j = 0; j < n; j++) {
            if (i == j) continue;
            let startJ = intervals[j][0];
            if (startJ >= endI) {
                tmp = Math.min(tmp, startJ);
            }
        }
        if (tmp == Number.MAX_VALUE) {
            res.push(-1);
        } else {
            res.push(map.get(tmp));
        }
    }
    return res;
};

// Accepted --- 2484ms 6.76%
const findRightInterval = (intervals) => {
    let res = [];
    let n = intervals.length;
    for (let i = 0; i < n; i++) {
        let tmp = Number.MAX_VALUE;
        let endI = intervals[i][1];
        for (let j = 0; j < n; j++) {
            if (i == j) continue;
            let startJ = intervals[j][0];
            if (startJ >= endI) {
                tmp = Math.min(tmp, startJ);
            }
        }
        if (tmp == Number.MAX_VALUE) {
            res.push(-1);
        } else {
            res.push(intervals.map(x => x[0]).indexOf(tmp));
        }
    }
    return res;
};

const main = () => {
    let intervals = [
        [1, 2]
    ];
    let intervals2 = [
        [3, 4],
        [2, 3],
        [1, 2]
    ];
    let intervals3 = [
        [1, 4],
        [2, 3],
        [3, 4]
    ];
    console.log(findRightInterval(intervals));
    console.log(findRightInterval(intervals2));
    console.log(findRightInterval(intervals3));

    console.log("");
    console.log(findRightInterval_refine(intervals));
    console.log(findRightInterval_refine(intervals2));
    console.log(findRightInterval_refine(intervals3));
};

main()