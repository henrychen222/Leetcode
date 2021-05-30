/**
 * 7.17 evening  05/29/21 evening fix
 * https://leetcode.com/problems/teemo-attacking/
 */

// Accepted --- 72ms 100%
const findPoisonedDuration = (t, duration) => {
    let preEnd;
    let res = 0;
    for (const start of t) {
        let end = start + duration - 1;
        if (preEnd) {
            let add;
            start > preEnd ? add = end - start + 1 : add = end - preEnd;
            res += add;
            preEnd = end;
        } else {
            res += end - start + 1;
            preEnd = end;
        }
    }
    return res;
};

// Accepted --- 100ms 12.12%
const findPoisonedDuration2 = (t, duration) => {
    let block = [];
    for (const start of t) block.push([start, start + duration - 1]);
    // pr(block);
    let res = 0;
    let preEnd;
    for (const [start, end] of block) {
        if (preEnd) {
            let add;
            if (start > preEnd) {
                add = end - start + 1;
            } else {
                add = end - preEnd;
            }
            res += add;
            preEnd = end;
            // pr("process", res, add);
        } else {
            res += end - start + 1;
            preEnd = end;
            // pr(res)
        }
    }
    return res;
};

// TLE
const findPoisonedDuration1 = (t, duration) => {
    const n = t.length;
    let end = t[n - 1] + duration - 1;
    let a = Array(end + 1).fill(0);
    for (const start of t) {
        for (let i = start; i <= start + duration - 1; i++) a[i] = 1;
    }
    // pr(a);
    return a.filter(x => x == 1).length;
};

const pr = console.log;
const main = () => {
    let timeSeries = [1, 4],
        duration = 2;
    let timeSeries2 = [1, 2],
        duration2 = 2;
    let timeSeries_debug1 = [1, 2, 3, 4, 5],
        duration_debug1 = 5;
    let timeSeries_debug2 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        duration_debug2 = 10;
    let timeSeries_debug3 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        duration_debug3 = 5
    pr(findPoisonedDuration(timeSeries, duration)); // 4 
    pr(findPoisonedDuration(timeSeries2, duration2)); // 3
    pr(findPoisonedDuration(timeSeries_debug1, duration_debug1)); // 9
    pr(findPoisonedDuration(timeSeries_debug2, duration_debug2)); // 18
    pr(findPoisonedDuration(timeSeries_debug3, duration_debug3)); // 13
};

main()


// need to fix
// const findPoisonedDuration = (timeSeries, duration) => {
//     const n = timeSeries.length;
//     let sum = 0;
//     let i = 1;
//     while (i < n) {
//         let tmp = timeSeries[i - 1] + duration - 1;
//         if (tmp < timeSeries[i]) {
//             sum += duration;
//             i++;
//         } else if (tmp > timeSeries[i]) {
//             sum += duration - 1;
//             let v = timeSeries.find(x => x > tmp);
//             // console.log(v);
//             let idx = timeSeries.indexOf(v);
//             if (idx == -1) {
//                 i = n - 1;
//                 // sum -= duration - timeSeries[n - 1];
//             } else {
//                 i = idx;
//             }
//             // console.log(idx, sum);
//             i++;
//         } else {
//             sum += duration - 1;
//             i++;
//         }
//     }
//     return sum + duration;
// };