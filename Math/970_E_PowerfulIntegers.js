/**
 * 6.12 night  8.25 evening complete
 * https://leetcode.com/problems/powerful-integers/
 */

// Accepted --- 64ms 100.00%
const powerfulIntegers = (x, y, bound) => {
    let res = [];
    let Xmax = Math.ceil(Math.log10(bound) / Math.log10(x));
    let Ymax = Math.ceil(Math.log10(bound) / Math.log10(y));
    // console.log(Xmax, Ymax);
    let max = 0;
    if (Xmax == Infinity) {
        if (Ymax == Infinity) {
            max = 1;
        } else {
            max = Ymax;
        }
    } else if (Ymax == Infinity) {
        max = Xmax;
    } else {
        max = Math.max(Xmax, Ymax);
    }
    for (let i = 0; i <= max; i++) {
        for (let j = 0; j <= max; j++) {
            let tmp = x ** i + y ** j;
            if (tmp <= bound) {
                res.push(tmp);
            }
        }
    }
    return [...new Set(res)];
};

const main = () => {
    let x = 2,
        y = 3,
        bound = 10;
    let x2 = 3,
        y2 = 5,
        bound2 = 15;
    let x_debug1 = 40,
        y_debug1 = 40,
        bound_debug1 = 10000;
    let x_debug2 = 2,
        y_debug2 = 1,
        bound_debug2 = 10;
    let x_debug3 = 1,
        y_debug3 = 1,
        bound_debug3 = 2;
    console.log(powerfulIntegers(x, y, bound));
    console.log(powerfulIntegers(x2, y2, bound2));
    console.log(powerfulIntegers(x_debug1, y_debug1, bound_debug1));
    console.log(powerfulIntegers(x_debug2, y_debug2, bound_debug2));
    console.log(powerfulIntegers(x_debug3, y_debug3, bound_debug3));
};

main()


/////////////////////// 6.12 night ////////////////////////////
// // need to fix
// const powerfulIntegers = (x, y, bound) => {
//     let res = [];
//     for (let num = 0; num <= bound; num++) {
//         let i, j = 0;
//         while (x <= num && y <= num) {
//             if (x ** i + y ** j == num) {
//                 res.push(item);
//             }
//             i++;
//             j++;
//         }
//     }
//     return res;
// };


/////////////////////// 6.18 night ////////////////////////////
// const powerfulIntegers = (x, y, bound) => {
//     let res = [];
//     let map = new Map();
//     for (let item = 0; item <= bound; item++) {
//         for (let i = 0; i < bound; i++) {
//             map.set(x ** i, bound - x ** i);
//         }
//     }
//     return res;
// };

// // Time limit
// const powerfulIntegers1 = (x, y, bound) => {
//     let res = [];
//     for (let item = 0; item <= bound; item++) {
//         for (let i = 0; i < bound; i++) {
//             for (let j = 0; j < bound - x ** i; j++) {
//                 if (x ** i + y ** j == item && !res.includes(item)) {
//                     res.push(item);
//                 }
//             }
//         }
//     }
//     return res;
// };