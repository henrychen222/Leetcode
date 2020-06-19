/**
 * 6.18 night
 * https://leetcode.com/problems/powerful-integers/
 */


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

// Time limit
const powerfulIntegers1 = (x, y, bound) => {
    let res = [];
    for (let item = 0; item <= bound; item++) {
        for (let i = 0; i < bound; i++) {
            for (let j = 0; j < bound - x ** i; j++) {
                if (x ** i + y ** j == item && !res.includes(item)) {
                    res.push(item);
                }
            }
        }
    }
    return res;
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
    console.log(powerfulIntegers(x, y, bound));
    console.log(powerfulIntegers(x2, y2, bound2));
    console.log(powerfulIntegers(x_debug1, y_debug1, bound_debug1));
};

main()