/**
 * 7.5 night
 * https://leetcode.com/problems/merge-intervals/
 */

// need to fix
const merge = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals);
    for (let i = 1; i < intervals.length; i++) {
        let x1 = intervals[i - 1][0];
        let x2 = intervals[i - 1][1];
        let y1 = intervals[i][0];
        let y2 = intervals[i][1];
        if (x2 >= y1 && x2 < y2) {
            let tmp = [x1, y2];
            // console.log(tmp);
            intervals.splice(i - 1, 2, tmp)
        }
        if (x2 >= y2) {
            intervals.splice(i, 1);
        }
    }

    // for (let i = 0; i < intervals.length; i++) {
    //    let x1 = intervals[i][0];
    //    let x2 = intervals[i][1];
    //    for (let j = i + 1; j < intervals.length; j++) {
    //        let y1 = intervals[j][0];
    //        let y2 = intervals[j][1];
    //        if (x2 <= y1) {
    //            let tmp = [x1, y2];
    //            intervals = eraseTwo(intervals, i, j);
    //        }
    //    }
    // }

    return intervals;
};

const eraseTwo = (arr, i, j) => {
    return arr.slice(0, i).concat(arr.slice(i + 1, j)).concat(arr.slice(j + 1, arr.length));
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
        [2, 3]
    ];
    let debug2 = [
        [1, 4],
        [0, 2],
        [3, 5]
    ];
    console.log(merge(intervals)); // [[1,6],[8,10],[15,18]]
    console.log(merge(intervals2)); // [[1,5]]
    console.log(merge(debug1)); // [[1,4]]
    console.log(merge(debug2)); // [[0,5]]

};

main()