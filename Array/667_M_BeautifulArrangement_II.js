/**
 * 7.18 afternoon  04/12/21 evening copy
 * https://leetcode.com/problems/beautiful-arrangement-ii/
 */

// Accepted --- 88ms 86.36%
const constructArray = (n, k) => {
    let res = [];
    let i = 1,
        j = n;
    while (i <= j) res.push(k > 1 ? (k-- & 1 ? i++ : j--) : i++);
    return res;
};

const main = () => {
    let n = 3,
        k = 1;
    let n2 = 3,
        k2 = 2;
    let n_debug1 = 5,
        k_debug1 = 2;
    console.log(constructArray(n, k));
    console.log(constructArray(n2, k2));
    console.log(constructArray(n_debug1, k_debug1));
};

main()


// need to fix
// const constructArray = (n, k) => {
//     let diff = [];
//     let res = [];
//     if (k != 1) {
//         for (let i = 1; i <= k; i++) {
//             diff.push(i);
//         }
//         diff.sort((a, b) => b - a);
//         console.log("diff", diff)
//         for (let x = 1; x <= n; x++) {
//             for (let y = x + 1; y <= n; y++) {
//                 if (Math.abs(x - y) == diff[x - 1] && res.indexOf(x) == -1 && res.indexOf(y) == -1) {
//                     res.push(x);
//                     res.push(y);
//                 }
//             }
//         }
//         for (let i = 1; i <= n; i++) { // last one
//             if (Math.abs(i - res[res.length - 1]) == diff[diff.length - 1]) {
//                 res.push(i);
//                 break;
//             }
//         }
//     } else {
//         for (let num = 1; num <= n; num++) {
//             res.push(num);
//         }
//     }
//     return res;
// };