/**
 * 10.6 evening
 * https://leetcode.com/problems/non-overlapping-intervals/
 */

/**
 * https://leetcode.com/problems/non-overlapping-intervals/discuss/91713/Java%3A-Least-is-Most
 * https://leetcode.com/problems/non-overlapping-intervals/discuss/282743/Java-updated-solution-based-on-the-top-voted-post
 */

// Accepted --- 84ms 40.97%
const eraseOverlapIntervals = (intervals) => {
    let n = intervals.length;
    if (n == 0) return 0;
    intervals.sort((a, b) => a[1] - b[1]);
    // console.log(intervals);
    let set = new Set();
    let end = intervals[0][1];
    set.add(0);
    for (let i = 1; i < n; i++) { // add to find the maximum number of intervals that are non-overlapping.
        if (set.has(i)) continue;
        let curL = intervals[i][0];
        let curR = intervals[i][1];
        if (curL >= end) {
            end = curR;
            set.add(i);
            // console.log(intervals[i]);
        }
    }
    // let res = intervals.filter((x, i) => set.has(i));
    // console.log(res, set, set.size)
    return n - set.size;
};

// Accepted --- 84ms 40.97%
const eraseOverlapIntervals_origin = (intervals) => {
    let n = intervals.length;
    if (n == 0) return 0;
    intervals.sort((a, b) => a[1] - b[1]);
    let end = intervals[0][1];
    let cnt = 1;
    for (let i = 1; i < n; i++) {
        let curL = intervals[i][0];
        let curR = intervals[i][1];
        if (curL >= end) {
            end = curR;
            cnt++;
        }
    }
    return n - cnt;
};

// remove wrong 12/18
// const eraseOverlapIntervals1 = (intervals) => {
//     let set = new Set();
//     let n = intervals.length;
//     for (let i = 0; i < n; i++) {
//         if (set.has(i)) continue;
//         let curL = intervals[i][0];
//         for (let j = 0; j < n; j++) {
//             if (set.has(j) || j == i) continue;
//             let l = intervals[j][0];
//             let r = intervals[j][1];
//             if (curL >= l && curL < r) {
//                 console.log(curL, l, r, intervals[i]);
//                 set.add(i);
//             }
//         }
//     }
//     let res = intervals.filter((x, i) => !set.has(i));
//     console.log(res, set, set.size)
//     return set.size;
// };

// add wrong 13/18
// const eraseOverlapIntervals2 = (intervals) => {
//     let n = intervals.length;
//     if (n == 0) return 0;
//     let set = new Set();
//     for (let i = 0; i < n; i++) {
//         if (set.has(i)) continue;
//         let curL = intervals[i][0];
//         let curR = intervals[i][1];
//         for (let j = 0; j < n; j++) {
//             if (set.has(j) || j == i) continue;
//             let l = intervals[j][0];
//             let r = intervals[j][1];
//             if (l >= curR || r <= curL) {
//                 console.log(intervals[i], intervals[j])
//                 set.add(i);
//                 set.add(j);
//             }
//         }
//     }
//     let res = intervals.filter((x, i) => set.has(i));
//     console.log(res, set, set.size)
//     if (set.size == 0) return n - 1;
//     return n - set.size;
// };

// try to sort and remove
// const eraseOverlapIntervals = (intervals) => {
//     let n = intervals.length;
//     intervals.sort((a, b) => {
//         if (a[0] == b[0]) return a[1] - b[1];
//         return a[0] - b[0];
//     });
//     let set = new Set();
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if (intervals[i][0] == intervals[j][0]) {
//                 set.add(j);
//             } else {
//                 break;
//             }
//         }
//     }
//     let tmp = intervals.filter((x, i) => !set.has(i));
//     console.log(tmp);
// };

const main = () => {
    let intervals = [
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3]
    ];
    let intervals2 = [
        [1, 2],
        [1, 2],
        [1, 2]
    ];
    let intervals3 = [
        [1, 2],
        [2, 3]
    ];
    let intervals_debug1 = [
        [1, 100],
        [11, 22],
        [1, 11],
        [2, 12]
    ];
    let intervals_debug2 = [];
    let intervals_debug3 = [
        [0, 2],
        [1, 3],
        [2, 4],
        [3, 5],
        [4, 6]
    ];
    console.log(eraseOverlapIntervals(intervals)); // 1
    console.log(eraseOverlapIntervals(intervals2)); // 2
    console.log(eraseOverlapIntervals(intervals3)); // 0
    console.log(eraseOverlapIntervals(intervals_debug1)); // 2
    console.log(eraseOverlapIntervals(intervals_debug2)); // 0
    console.log(eraseOverlapIntervals(intervals_debug3)); // 2
};

main()