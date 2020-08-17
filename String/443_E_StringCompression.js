/**
 * 6.2 evening  complete 8.15 night (8.16 morning)
 * https://leetcode.com/problems/string-compression/
 */

// Accepted --- opereate1(): 88ms 40MB 52.04%  operate() 80ms 40MB 77.70%
let res = [];
const compress = (chars) => {
    res = [];
    let stack = [chars[0]];
    for (let i = 1; i < chars.length; i++) {
        let end = stack[stack.length - 1];
        if (chars[i] == end) {
            stack.push(chars[i]);
            continue;
        } else {
            res.push(end);
            operate(stack);
            stack = [];
            stack.push(chars[i]);
            continue;
        }
    }
    res.push(stack[stack.length - 1]);
    operate(stack);
    // console.log(res);
    chars.splice(0, chars.length);
    for (const i of res) {
        chars.push(i);
    }
    console.log(chars);
};

const operate = (stack) => {
    let n;
    if (res.length == 1) { // first group
        n = stack.length + 1;
    } else {
        n = stack.length;
    }
    if (n == 1) return; // occurrence 1, not add
    if (n > 9) {
        if (res.length == 1) {
            res = res.concat((n - 1).toString().split(""));
        } else {
            res = res.concat(n.toString().split(""));
        }
    } else {
        if (res.length == 1) {
            if (n - 1 != 1) {
                res.push(n - 1 + '');
            }
        } else {
            res.push(n + '');
        }
    }
};

const operate1 = (stack) => {
    let n;
    if (res.length == 1) {
        n = stack.length + 1;
    } else {
        n = stack.length;
    }
    if (n == 1) return;
    if (n > 9) {
        if (res.length == 1) {
            res = res.concat((n - 1).toString().split(""));
        } else {
            res = res.concat(n.toString().split(""));
        }
    } else {
        if (res.length == 1) {
            if (n.toString() - 1 != 1) { // should not be toString() why still works?
                res.push(n.toString() - 1 + '');
            }
        } else {
            res.push(n.toString() + '');
        }
    }
};

// wrong
// const compress = (chars) => {
//     let element = [...new Set(chars)];
//     let map = new Map();
//     for (const e of element) {
//         map.set(e, getFrequency(chars, e) + '');
//     }
//     // console.log(map);
//     let res = [];
//     for (const k of map.keys()) {
//         res.push(k);
//         let v = map.get(k);
//         if (v != '1') {
//             if (v.length > 1) {
//                 res = res.concat(v.split(''));
//             } else {
//                 res.push(map.get(k) + '');
//             }
//         }
//     }
//     // console.log(res);
//     chars.splice(0, chars.length);
//     for (const i of res) {
//         chars.push(i);
//     }
//     console.log(chars);
// };

// const getFrequency = (arr, item) => {
//     return arr.filter(x => x === item).length;
// };

const main = () => {
    let chars = ["a", "a", "b", "b", "c", "c", "c"];
    let chars2 = ["a"];
    let chars3 = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];
    let chars4 = ["a", "b"];
    let debug1 = ["a", "a", "a", "b", "b", "a", "a"];
    console.log(compress(chars)); // ["a","2","b","2","c","3"]
    console.log(compress(chars2)); // ["a"]
    console.log(compress(chars3)); // ["a","b","1","2"]
    console.log(compress(chars4));
    console.log(compress(debug1)); // ["a","3","b","2","a","2"]
};

main()


// // need to fix, don't why lc is [] of res
// const compress = (chars) => {
//     let res = [];
//     let allChars = removeDuplicate(chars);
//     let map = new Map();
//     for (const i of allChars) {
//         map.set(i, count(chars, i));
//     }
//     // console.log(map);
//     for (const k of map.keys()) {
//         res.push(k);
//         if (map.get(k) != 1) {
//             res.push(map.get(k).toString());
//         }
//     }
//     // console.log(res);
//     for (let i = 0; i < res.length; i++) {
//         if (res[i].length > 1) {
//             for (const j of res[i].split('')) {
//                 res.push(j);
//             }
//             res.splice(i, 1);
//         }
//     }
//     return res;
// };

// const count = (arr, target) => {
//     let count = 0;
//     for (const i of arr) {
//         if (i == target) {
//             count++;
//         }
//     }
//     return count;
// };

// const removeDuplicate = (arr) => {
//     return [...new Set(arr)];
// };