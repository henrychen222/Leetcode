/**
 * 05/31/21 night
 * https://leetcode.com/problems/insert-interval/
 */

// Accepted --- 104ms 17.86%
const mi = Math.min;
const mx = Math.max;
const insert = (a, t) => {
    let n = a.length;
    let startIdx;
    for (let i = 0; i < n; i++) {
        if (t[0] <= a[i][1]) {
            startIdx = i;
            break;
        }
    }
    let left = a.slice(0, startIdx);
    let endIdx = n;
    let [ll, rr] = [t[0], t[1]];
    for (let i = startIdx; i < n; i++) {
        let [el, er] = [a[i][0], a[i][1]];
        // pr(ll, rr, [el, er]);
        if (t[1] < el) {
            endIdx = i;
            break;
        }
        ll = mi(ll, el);
        rr = mx(rr, er);
        // pr("merge", [ll, rr]);
    }
    let right = a.slice(endIdx);
    // pr(startIdx, endIdx, left, [ll, rr], right);
    return [...left, ...[[ll, rr]], ...right];
};

const pr = console.log;
const main = () => {
    let intervals = [
            [1, 3],
            [6, 9]
        ],
        newInterval = [2, 5];
    let intervals2 = [
            [1, 2],
            [3, 5],
            [6, 7],
            [8, 10],
            [12, 16]
        ],
        newInterval2 = [4, 8];
    let intervals3 = [],
        newInterval3 = [5, 7];
    let intervals4 = [
            [1, 5]
        ],
        newInterval4 = [2, 3];
    let intervals5 = [
            [1, 5]
        ],
        newInterval5 = [2, 7];
    pr(insert(intervals, newInterval));
    pr(insert(intervals2, newInterval2));
    pr(insert(intervals3, newInterval3));
    pr(insert(intervals4, newInterval4));
    pr(insert(intervals5, newInterval5));
};

main()