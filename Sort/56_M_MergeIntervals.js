/**
 * 05/29/21 evening
 * https://leetcode.com/problems/merge-intervals/
 */

const pr = console.log;

// Accepted --- 92ms 70.21%
const merge = (a) => {
    let res = [];
    a.sort((x, y) => x[0] - y[0]);
    let preEnd;
    for (const [start, end] of a) {
        if (preEnd != undefined) {
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
            // pr("preEnd has", res);
        } else {
            res.push([start, end]);
            preEnd = end;
            // pr("preEnd no", res);
        }
       
    }
    return res;
};

// Accepted --- 156ms 5.44%
const merge2 = (a) => {
    a.sort((x, y) => x[0] - y[0]);
    let res = [
        [a[0][0], a[0][1]]
    ];
    let preEnd = a[0][1];
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
        // pr(res);
    }
    return res;
};

const main = () => {
    let intervals = [
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18]
    ];
    let intervals2 = [
        [1, 4],
        [4, 5]
    ];
    let debug1 = [
        [1, 4],
        [0, 5]
    ];
    let debug2 = [
        [4, 5],
        [1, 4],
        [0, 1]
    ];
    let debug3 = [
        [1, 4],
        [2, 3]
    ];
    let debug4 = [
        [2, 3],
        [4, 5],
        [6, 7],
        [8, 9],
        [1, 10]
    ];
    let debug5 = [
        [0, 0],
        [1, 2],
        [5, 5],
        [2, 4],
        [3, 3],
        [5, 6],
        [5, 6],
        [4, 6],
        [0, 0],
        [1, 2],
        [0, 2],
        [4, 5]
    ];
    let debug6 = [
        [2, 3],
        [2, 2],
        [3, 3],
        [1, 3],
        [5, 7],
        [2, 2],
        [4, 6]
    ];
    pr(merge(intervals)) // [[1,6],[8,10],[15,18]]
    pr(merge(intervals2)) // [[1,5]]
    pr(merge(debug1)) // [[0,5]]
    pr(merge(debug2)) // [[0,5]]
    pr(merge(debug3)) // [[1,4]]
    pr(merge(debug4)) // [[1,10]]
    pr(merge(debug5)) // [[0,6]]
    pr(merge(debug6)) // [[1,3],[4,7]]
};

main()