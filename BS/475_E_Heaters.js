/**
 * 6.23 evening  8.25 evening complete
 * https://leetcode.com/problems/heaters/
 */

// Accepted --- 1700ms 23.75%
const findRadius_modify = (houses, heaters) => {
    let data = [...houses];
    let houseMap = new Map();
    let heaterMap = new Map();
    for (const h of houses) {
        houseMap.set(h, '');
    }
    for (const h of heaters) {
        heaterMap.set(h, '*');
    }
    for (const heater of heaters) {
        if (!houseMap.has(heater)) {
            data.push(heater);
        }
    }
    data.sort((a, b) => a - b);
    let max = 0;
    for (let i = 0; i < data.length; i++) {
        let tmp;
        if (houseMap.has(data[i]) && !heaterMap.has(data[i])) {
            let a;
            let b;
            for (let r = i + 1; r < data.length; r++) {
                if (heaterMap.has(data[r])) {
                    a = data[r] - data[i];
                    break;
                }
            }
            for (let l = i - 1; l >= 0; l--) {
                if (heaterMap.has(data[l])) {
                    b = data[i] - data[l];
                    break;
                }
            }
            if (a == undefined) {
                tmp = b;
            } else if (b == undefined) {
                tmp = a;
            } else {
                tmp = Math.min(a, b);
            }
        }
        if (tmp != undefined) max = Math.max(max, tmp);
    }
    return max;
};

// Accepted --- 1668ms 23.75%
const findRadius = (houses, heaters) => {
    let data = [...houses];
    let houseMap = new Map();
    let heaterMap = new Map();
    for (const h of houses) {
        houseMap.set(h, '');
    }
    for (const h of heaters) {
        heaterMap.set(h, '*');
    }
    // console.log(houseMap, heaterMap);
    for (const heater of heaters) {
        if (!houseMap.has(heater)) {
            data.push(heater);
        }
    }
    data.sort((a, b) => a - b);
    // console.log(data);
    let res = [];
    /**
     *  our goal is to get each house min radius (only compared with closest left and right heaters) and return the max radius of all houses
     */
    for (let i = 0; i < data.length; i++) {
        let tmp;
        if (houseMap.has(data[i]) && !heaterMap.has(data[i])) {
            let a;
            let b;
            for (let r = i + 1; r < data.length; r++) {
                if (heaterMap.has(data[r])) {
                    a = data[r] - data[i];
                    break;
                }
            }
            for (let l = i - 1; l >= 0; l--) {
                if (heaterMap.has(data[l])) {
                    b = data[i] - data[l];
                    break;
                }
            }
            // console.log(a, b);
            if (a == undefined) {
                tmp = b;
            } else if (b == undefined) {
                tmp = a;
            } else {
                tmp = Math.min(a, b);
            }
        }
        if (tmp != undefined) res.push(tmp);
    }
    // console.log(res);
    res.sort((a, b) => b - a);
    if (res.length == 0) return 0;
    return res[0];
};

// Time Limit 26/30, because indexOf() is too slow for large datasets
// const findRadius2 = (houses, heaters) => {
//     let data = [...houses];
//     for (const heater of heaters) {
//         if (houses.indexOf(heater) == -1) {
//             data.push(heater);
//         }
//     }
//     data.sort((a, b) => a - b);
//     let res = [];
//     for (let i = 0; i < data.length; i++) {
//         let tmp;
//         if (houses.indexOf(data[i]) != -1 && heaters.indexOf(data[i]) == -1) {
//             let a;
//             let b;
//             for (let r = i + 1; r < data.length; r++) {
//                 if (heaters.indexOf(data[r]) != -1) {
//                     a = data[r] - data[i];
//                     break;
//                 }
//             }
//             for (let l = i - 1; l >= 0; l--) {
//                 if (heaters.indexOf(data[l]) != -1) {
//                     b = data[i] - data[l];
//                     break;
//                 }
//             }
//             if (a == undefined) {
//                 tmp = b;
//             } else if (b == undefined) {
//                 tmp = a;
//             } else {
//                 tmp = Math.min(a, b);
//             }
//         }
//         if (tmp != undefined) res.push(tmp);
//     }
//     res.sort((a, b) => b - a);
//     if (res.length == 0) return 0;
//     return res[0];
// };

const main = () => {
    let houses = [1, 2, 3],
        heaters = [2];
    let houses2 = [1, 2, 3, 4],
        heaters2 = [1, 4];
    let houses_debug1 = [1, 5],
        heaters_debug1 = [2];
    let houses_debug2 = [1, 5],
        heaters_debug2 = [10];
    let houses_debug3 = [1],
        heaters_debug3 = [1, 2, 3, 4];
    let houses_debug4 = [1, 2, 3, 5, 15],
        heaters_debug4 = [2, 30];
    console.log(findRadius(houses, heaters)); // 1
    console.log(findRadius(houses2, heaters2)); // 1
    console.log(findRadius(houses_debug1, heaters_debug1)); // 3
    console.log(findRadius(houses_debug2, heaters_debug2)); // 9
    console.log(findRadius(houses_debug3, heaters_debug3)); // 0
    console.log(findRadius(houses_debug4, heaters_debug4)); // 13

    console.log("");
    console.log(findRadius_modify(houses, heaters));
    console.log(findRadius_modify(houses2, heaters2));
    console.log(findRadius_modify(houses_debug1, heaters_debug1));
    console.log(findRadius_modify(houses_debug2, heaters_debug2));
    console.log(findRadius_modify(houses_debug3, heaters_debug3));
    console.log(findRadius_modify(houses_debug4, heaters_debug4));
};

main()


// // need to fix
// const findRadius = (houses, heaters) => {
//     // let merge = [...new Set(houses.concat(heaters))];
//     // merge.sort((a, b) => a - b);
//     // console.log(merge);

//     let nonHeaters = [];
//     for (const i of houses) {
//         if (!heaters.includes(i)) {
//             nonHeaters.push(i);
//         }
//     }
//     console.log(nonHeaters);
//     console.log(heaters);
//     if (nonHeaters.length == 0) return 0;

//     let max = Number.MIN_VALUE;
//     if (heaters.length == 1) {
//         for (const nh of nonHeaters) {
//             max = Math.max(max, Math.abs(heaters[0] - nh));
//         }
//         return max;
//     }

//     let each = [];
//     for (const he of heaters) {
//         let min = Number.MAX_VALUE;
//         for (const nh of nonHeaters) {
//             min = Math.min(min, Math.abs(he - nh));
//         }
//         each.push(min);
//     }
//     console.log(each)
//     each.sort((a, b) => b - a);
//     return each[0];
// };