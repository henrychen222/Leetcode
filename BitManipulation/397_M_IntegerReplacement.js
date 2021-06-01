/**
 * 7.10 afternoon  05/30/21 evening fix
 * https://leetcode.com/problems/integer-replacement/
 */

// Accepted --- 80ms 69.49%
let res;
const integerReplacement = (n) => {
    res = Number.MAX_SAFE_INTEGER;
    dfs(0, n);
    return res;
};

const dfs = (step, x) => {
    // pr(step, x);
    if (x == 1) {
        res = Math.min(res, step);
        return;
    }
    if (x & 1) {
        dfs(step + 1, x + 1);
        dfs(step + 1, x - 1);
    } else {
        x /= 2;
        // pr(x);
        step++;
        dfs(step, x);
    }
};

const pr = console.log;
const main = () => {
    let n = 8;
    let n2 = 7;
    let debug1 = 65535;
    let debug2 = 1234;
    let debug3 = 10000;
    pr(integerReplacement(n)); // 3
    pr(integerReplacement(n2)); // 4
    pr(integerReplacement(debug1)); // 17
    pr(integerReplacement(debug2)); // 14
    pr(integerReplacement(debug3)); // 16
};

main()


//////////////////////////////////// 07/10/20 afternoon //////////////////////////
// don't know, how to decide when to n+1 or n-1
// const integerReplacement = (n) => {
//     console.log(one(n), two(n))
//     return Math.min(one(n), two(n));
// };

// const one = (n) => {
//     let tmp = n;
//     let cnt = 0;
//     while (tmp != 1) {
//         if (tmp % 2 == 0) {
//             tmp = tmp >> 1;
//         } else {
//             tmp--;
//         }
//         cnt++;
//     }
//     return cnt;
// };

// const two = (n) => {
//     let tmp = n;
//     let cnt = 0;
//     while (tmp != 1) {
//         if (tmp % 2 == 0) {
//             tmp = tmp >> 1;
//         } else {
//             tmp++;
//         }
//         cnt++;
//     }
//     return cnt;
// };