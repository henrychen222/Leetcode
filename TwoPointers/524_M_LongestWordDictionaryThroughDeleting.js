/**
 * 9.10 morning 02/23/21 noon fixed
 * https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/
 */

// Accepted --- 116ms 54.78%
let m;
const findLongestWord = (s, d) => {
    m = new Map();
    let n = s.length;
    for (let i = 0; i < n; i++) {
        if (!m.has(s[i])) m.set(s[i], []);
        m.get(s[i]).push(i);
    }
    // console.log(m);
    let res = [];
    for (const ss of d) {
        if (ok(ss)) res.push(ss);
    }
    res.sort((a, b) => {
        if (a.length == b.length) return a.localeCompare(b);
        return b.length - a.length;
    });
    // console.log(res);
    return res.length == 0 ? '' : res[0];
};

// improved: Accepted --- 104ms 69.57%
const ok = (s) => {
    let compareIdx;
    for (const c of s) {
        if (m.has(c)) {
            let a = m.get(c);
            if (compareIdx == undefined) {
                compareIdx = a[0];
            } else {
                let idx = firstLarge(compareIdx, a);
                if (idx == undefined) {
                    return false;
                } else {
                    compareIdx = idx;
                }
            }
        } else {
            return false;
        }
    }
    return true;
};

// const ok = (s) => {
//     // console.log(s);
//     let path = [];
//     for (const c of s) {
//         if (m.has(c)) {
//             let a = m.get(c);
//             // console.log(c, a, path);
//             if (path.length == 0) {
//                 path.unshift(a[0]);
//             } else {
//                 let idx = firstLarge(path[0], a);
//                 if (idx == undefined) {
//                     return false;
//                 } else {
//                     path.unshift(idx);
//                 }
//             }
//         } else {
//             return false;
//         }
//     }
//     return true;
// };

const firstLarge = (compare, a) => {
    return a.find(x => x > compare);
};

const main = () => {
    let s = "abpcplea",
        d = ["ale", "apple", "monkey", "plea"];
    let s2 = "abpcplea",
        d2 = ["a", "b", "c"];
    let s_debug1 = "aewfafwafjlwajflwajflwafj",
        d_debug1 = ["apple", "ewaf", "awefawfwaf", "awef", "awefe", "ewafeffewafewf"];
    let s_debug2 = "apple",
        d_debug2 = ["zxc", "vbn"];
    console.log(findLongestWord(s, d));
    console.log(findLongestWord(s2, d2));
    console.log(findLongestWord(s_debug1, d_debug1)); // "ewaf"  "awefawfwaf" don't meet requirment "we" cannot find
    console.log(findLongestWord(s_debug2, d_debug2));
};

main()



// issue need to to fix
// let map = new Map();
// const findLongestWord = (s, d) => {
//     let sArr = s.split("");
//     let uniqueS = [...new Set(sArr)];
//     for (const e of uniqueS) {
//         map.set(e, getFrequency(sArr, e));
//     }
//     let res = [];
//     for (const w of d) {
//         let arrW = w.split("");
//         let uniqueW = [...new Set(arrW)];
//         if (checkElements(uniqueS, uniqueW)) {
//             if (checkFreq(uniqueW, arrW)) {
//                 res.push(w);
//             }
//         }
//     }
//     console.log(res);
//     res.sort((a, b) => {
//         if (a.length == b.length) return a.localeCompare(b);
//         return b.length - a.length;
//     })
//     console.log(res);
//     return res[0];
// };

// const checkElements = (store, target) => {
//     for (const c of target) {
//         if (store.indexOf(c) == -1) return false;
//     }
//     return true;
// };

// const checkFreq = (unique, arr) => {
//     for (const c of unique) {
//         if (getFrequency(arr, c) > map.get(c)) return false;
//     }
//     return true;
// };

// const getFrequency = (arr, item) => {
//     return arr.filter(x => x === item).length;
// };

// console.log(checkIndex(s_debug1, 'ewaf'));
// console.log(checkIndex(s_debug1, 'awefawfwaf'));