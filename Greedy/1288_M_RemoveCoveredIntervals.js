/**
 * 10.1 night
 * https://leetcode.com/problems/remove-covered-intervals/
 */

// Accepted --- 96ms 44.00%
const removeCoveredIntervals3 = (intervals) => {
    let n = intervals.length;
    intervals.sort((a, b) => a[1] - b[1]);
    let set = new Set();
    for (let i = n - 1; i >= 0; i--) {
        if (!set.has(i)) {
            let curLeftP = intervals[i][0];
            let curRightP = intervals[i][1];
            for (let l = i - 1; l >= 0; l--) {
                if (!set.has(l)) {
                    let leftP = intervals[l][0];
                    let RightP = intervals[l][1];
                    if (leftP >= curLeftP) {
                        set.add(l);
                    } else {
                        if (RightP >= curRightP) {
                            set.add(i);
                        }
                    }
                }
            }
        }
    }
    return n - set.size;
};

// Accepted --- 92ms 44.00%
const removeCoveredIntervals2 = (intervals) => {
    let n = intervals.length;
    intervals.sort((a, b) => a[1] - b[1]);
    let set = new Set();
    for (let i = n - 1; ~i; i--) {
        if (!set.has(i)) {
            let curLeftP = intervals[i][0];
            let curRightP = intervals[i][1];
            for (let l = i - 1; ~l; l--) {
                if (!set.has(l)) {
                    let leftP = intervals[l][0];
                    let RightP = intervals[l][1];
                    if (leftP >= curLeftP) {
                        set.add(l);
                    } else {
                        if (RightP >= curRightP) {
                            set.add(i);
                        }
                    }
                }
            }
        }
    }
    return n - set.size;
};

// Accepted --- 100ms 44.00%
const removeCoveredIntervals = (intervals) => {
    let n = intervals.length;
    intervals.sort((a, b) => a[1] - b[1]);
    let set = new Set();
    for (let i = n - 1; ~i; i--) {
        if (set.has(i)) continue;
        let curLeftP = intervals[i][0];
        let curRightP = intervals[i][1];
        for (let l = i - 1; ~l; l--) {
            if (set.has(l)) continue;
            let leftP = intervals[l][0];
            let RightP = intervals[l][1];
            if (leftP >= curLeftP) {
                // console.log(curLeftP, leftP)
                set.add(l);
            } else {
                if (RightP >= curRightP) {
                    set.add(i);
                }
            }
        }
        // console.log(set);
    }
    // let res = intervals.filter((x, i) => !set.has(i));
    // console.log(res, res.length);
    return n - set.size;
};

const main = () => {
    let intervals = [
        [1, 4],
        [3, 6],
        [2, 8]
    ];
    let intervals2 = [
        [1, 4],
        [2, 3]
    ];
    let intervals3 = [
        [0, 10],
        [5, 12]
    ];
    let intervals4 = [
        [3, 10],
        [4, 10],
        [5, 11]
    ];
    let intervals5 = [
        [1, 2],
        [1, 4],
        [3, 4]
    ];
    console.log(removeCoveredIntervals(intervals));
    console.log(removeCoveredIntervals(intervals2));
    console.log(removeCoveredIntervals(intervals3));
    console.log(removeCoveredIntervals(intervals4));
    console.log(removeCoveredIntervals(intervals5));
};

main()