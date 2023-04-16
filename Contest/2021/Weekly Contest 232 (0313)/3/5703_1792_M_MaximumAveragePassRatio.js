/**
 * 03/13/21 evening
 * https://leetcode.com/contest/weekly-contest-232/problems/maximum-average-pass-ratio/
 */

const pr = console.log;

// WA
const maxAverageRatio = (c, ex) => {
    let n = c.length;
    let virtual = 0;
    for (const e of c) {
        virtual += e[0] / e[1];
    }
    // pr(virtual);
    let max = 0;
    let m = new Map();
    for (let i = 0; i < n; i++) {
        let e = c[i];
        let actual = (virtual - e[0] / e[1] + (e[0] + ex) / (e[1] + ex)) / n;
        // pr(actual);
        m.set(i, actual);
        max = Math.max(max, actual);
    }
    // pr(m, max)
    let idx;
    for (const [k, v] of m) {
        if (v == max) {
            idx = k;
            break;
        }
    }
    return cal(c, idx, n, ex);
};

const cal = (c, idx, n, ex) => {
    let res = 0;
    for (let i = 0; i < n; i++) {
        let e = c[i];
        if (i == idx) {
            res += (e[0] + ex) / (e[1] + ex) / n;
        } else {
            res += e[0] / e[1] / n;
        }
    }
    // return parseFloat(res).toPrecision(5);
    return res;
};

const main = () => {
    let classes = [[1, 2], [3, 5], [2, 2]], extraStudents = 2;
    let classes2 = [[2, 4], [3, 9], [4, 5], [2, 10]], extraStudents2 = 4;
    pr(maxAverageRatio(classes, extraStudents));
    pr(maxAverageRatio(classes2, extraStudents2)); // 0.53485
};

main()

// pr(0.53485 - 0.52083 <= 10 ** (-5))