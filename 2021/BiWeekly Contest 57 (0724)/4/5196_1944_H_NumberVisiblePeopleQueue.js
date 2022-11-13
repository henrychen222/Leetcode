/**
 * 07/24/21 morning
 * https://leetcode.com/contest/biweekly-contest-57/problems/check-if-all-characters-have-equal-number-of-occurrences/
 */

const pr = console.log;

// Accepted after contest redo
const canSeePersonsCount = (a) => {
    let n = a.length;
    let res = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let cnt = 0;
        let max = 0;
        for (let j = i + 1; j < n; j++) {
            if (a[j] < a[i]) {
                if (a[j] > max) cnt++;
                max = Math.max(max, a[j]);
            } else {
                cnt++;
                break;
            }
        }
        res[i] = cnt;
    }
    return res;
};

// const canSeePersonsCount2 = (a) => {
//     let n = a.length;
//     let res = Array(n).fill(0);
//     for (let i = 0; i < n; i++) {
//         let min = a[i];
//         let cnt = 0;
//         for (let j = i + 1; j < n; j++) {
//             if (a[j] < min) min = a[j];
//             let tmp = a.slice(i + 1, j);
//             let max = Math.max.apply(Math, tmp);
//             if (min > max) {
//                 cnt++;
//             } else {
//                 break;
//             }
//         }
//         res[i] = cnt;
//     }
//     return res;
// };

// const canSeePersonsCount1 = (a) => {
//     let n = a.length;
//     let res = Array(n).fill(0)
//     for (let i = 0; i < n; i++) {
//         if (i + 1 < n) {
//             if (a[i + 1] > a[i]) {
//                 res[i] = 1;
//             } else {
//                 pr('start', a[i])
//                 let cnt = 0;
//                 for (let j = i + 1; j < n; j++) {
//                     if (a[j] > a[j - 1]) break;
//                     pr(a[j])
//                     cnt++;
//                 }
//                 res[i] = cnt;
//             }
//         }
//     }
//     return res;
// };

const main = () => {
    let heights = [10, 6, 8, 5, 11, 9];
    let heights2 = [5, 1, 2, 3, 10];
    pr(canSeePersonsCount(heights))
    pr(canSeePersonsCount(heights2))
};

main()