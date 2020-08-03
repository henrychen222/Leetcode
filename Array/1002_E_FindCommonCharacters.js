/**
 * 6.3 night  8.2 night complete
 * https://leetcode.com/problems/find-common-characters/
 */

// Accepted --- 84ms 43.3MB 79.22%
const commonChars = (A) => {
    let element = [];
    let tmp = [];
    for (let i = 1; i < A.length; i++) {
        for (const c of A[0]) {
            if (A[i].indexOf(c) == -1) {
                tmp.push(c);
            }
        }
    }
    for (const c of A[0]) {
        if (tmp.indexOf(c) == -1 && element.indexOf(c) == -1) {
            element.push(c);
        }
    }
    let res = [];
    for (const e of element) {
        let tmp = [];
        for (const c of A) {
            tmp.push(c.split("").filter(x => x === e));
        }
        tmp.sort((a, b) => a.length - b.length);
        res = res.concat(tmp[0]);
    }
    return res;
};

// Accepted --- 96ms 42.2MB 64.16%
const commonChars1 = (A) => {
    let element = [];
    let tmp = [];
    for (let i = 1; i < A.length; i++) {
        for (const c of A[0]) {
            if (A[i].indexOf(c) == -1) {
                tmp.push(c);
            }
        }
    }
    // console.log(tmp);
    for (const c of A[0]) {
        if (tmp.indexOf(c) == -1 && element.indexOf(c) == -1) {
            element.push(c);
        }
    }
    // console.log(element);
    let map = new Map();
    for (const e of element) {
        let common = Number.MAX_VALUE;
        for (const c of A) {
            common = Math.min(common, getFrequency(c.split(""), e));
        }
        map.set(e, common);
    }
    // console.log(map);
    let res = [];
    for (const k of map.keys()) {
        for (let i = 1; i <= map.get(k); i++) {
            res.push(k);
        }
    }
    return res;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let A = ["bella", "label", "roller"];
    let A2 = ["cool", "lock", "cook"];
    console.log(commonChars(A));
    console.log(commonChars(A2)); // fix
};

main()



// // need to fix
// const commonChars = (A) => {
//     let res = [];
//     let ans = "";
//     let wholeStr = "";
//     for (const item of A) {
//         wholeStr += item;
//     }
//     let eachChar = [...new Set(wholeStr.split(""))];
//     let map = new Map();
//     for (const i of eachChar) {
//         map.set(i, countOccurrence(wholeStr.split(""), i))
//     }
//     console.log(map);
//     console.log(A.length);
//     for (const k of map.keys()) {
//         if (map.get(k) % A.length == 0) {
//             let times = map.get(k) / A.length;
//             while (times != 0) {
//                 res.push(k);
//                 times--;
//             }
//         }
//     }
//     return res;
// };

// const countOccurrence = (arr, target) => {
//     let cnt = 0;
//     arr.forEach(x => {
//         if (x == target) {
//             cnt++;
//         }
//     });
//     return cnt;
// };