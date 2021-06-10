/**
 * 9.24 evening  06/07/21 night fix failed copy
 * https://leetcode.com/problems/broken-calculator/
 */

// Accepted --- 136ms 10.81%
// Accepted --- 72ms 72.97% run again
// https://leetcode.com/problems/broken-calculator/discuss/236565/Detailed-Proof-Of-Correctness-Greedy-Algorithm
const brokenCalc = (X, Y) => {
    let step = 0;
    while (X < Y) {
        Y & 1 ? Y++ : Y /= 2;
        step++;
        // pr(X, Y);
    }
    return step + X - Y;
};

// WA 78/84 don't know
const brokenCalc2 = (X, Y) => {
    if (X >= Y) return X - Y;
    let step = 0;
    if (X & 1) {
        (X + 1) * 2 > Y ? X-- : X++;
        step++;
    }
    if (Y & 1) {
        Y++;
        step++;
    }
    // pr(step, X, Y);
    while (Y / 2 >= X) {
        if (Y & 1) {
            Y++;
        } else {
            Y /= 2;
        }
        step++;
    }
    // pr(step, X, Y);
    if (X == Y) return step;
    let rest1 = Math.abs(X * 2 - Y);
    pr(step, X, Y);
    let rest2 = Math.abs(X - (Y & 1 ? (Y + 1) / 2 + 1 : Y / 2));
    pr(rest1, rest2)
    return step + Math.min(rest1, rest2) + 1;
};

// Wrong, Too much conditions wrong
let res, step, y;
const brokenCalc1 = (X, Y) => {
    y = Y;
    res = Number.MAX_SAFE_INTEGER;
    step = 0;
    dfs(X);
    return res;
};

const dfs = (cur) => {
    // pr(step, "cur", cur, cur > y);
    // if (step > 100) return;
    if (cur == y) {
        res = Math.min(res, step);
        step--;
        return;
    }
    step++;
    if (cur < y) {
        if ((cur - 1) * 2 >= y) {
            dfs(cur - 1);
            // dfs(cur * 2);
        } else {
            dfs(cur * 2);
        }
    } else {
        dfs(cur - 1);
    }
};

const pr = console.log;
const main = () => {
    let X = 2,
        Y = 3;
    let X2 = 5,
        Y2 = 8;
    let X3 = 3,
        Y3 = 10;
    let X4 = 1024,
        Y4 = 1;
    let X5 = 4,
        Y5 = 6;
    let X_debug1 = 1,
        Y_debug1 = 1000000000;
    let X_debug2 = 68,
        Y_debug2 = 71;
    let X_debug3 = 363,
        Y_debug3 = 811;
    pr(brokenCalc(X, Y)); // 2
    pr(brokenCalc(X2, Y2)); // 2
    pr(brokenCalc(X3, Y3)); // 3
    pr(brokenCalc(X4, Y4)); // 1023
    pr(brokenCalc(X5, Y5)); // 2
    pr(brokenCalc(X_debug1, Y_debug1)); // 39
    pr(brokenCalc(X_debug2, Y_debug2)); // 34
    pr(brokenCalc(X_debug3, Y_debug3)); // 163
};

main()


/////////////////////////// 09/24/20 evening ///////////////////
// Time limit
// const brokenCalc = (X, Y) => {
//     if (X < Y) {
//         let cnt = 0;
//         while (X < Y) {
//             let one = X * 2;
//             let two = X - 1;
//             if (Y % 2 == 0) {
//                 X = check(one, Y) < check(two, Y) ? one : two;
//                 // console.log(X);
//                 cnt++;
//             } else {
//                 X = check(one, Y + 1) < check(two, Y + 1) ? one : two;
//                 cnt++;
//             }
//         }
//         return Y % 2 == 0 ? cnt : cnt + 1;

//     } else if (X > Y) {
//         return X - Y;
//     } else {
//         return 0;
//     }
// };

// const check = (X, Y) => {
//     let tmp = X;
//     let cnt = 0;
//     while (tmp < Y) {
//         tmp *= 2;
//         cnt++;
//     }
//     if (tmp == Y) return cnt;
//     let rCnt = tmp - Y + cnt;
//     let tmp2 = X;
//     let cnt2 = 0;
//     while (true) {
//         tmp2--;
//         cnt2++;
//         let re = (Y / tmp2) % 2;
//         if (re == 0) {
//             // console.log(tmp2);
//             cnt2 += Y / tmp2 / 2;
//             break;
//         }
//     }
//     // console.log(rCnt, cnt2);
//     return Math.min(rCnt, cnt2);
// };