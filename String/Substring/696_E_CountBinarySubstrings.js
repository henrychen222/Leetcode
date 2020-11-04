/**
 * 6.3 evening  8.18 evening still not solved   11.3 complete
 * https://leetcode.com/problems/count-binary-substrings/
 */

// Accepted --- 8068ms 5.32%
const countBinarySubstrings2 = (s) => {
    let n = s.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let leftCnt = 0;
        let idx;
        for (let j = i + 1; j < n; j++) {
            if (s[j] != s[i]) {
                leftCnt = j - i;
                idx = j;
                break;
            }
        }
        if (idx == undefined) continue;
        let rightCnt = 0;
        let endIdx;
        if (leftCnt != 0) {
            for (let k = idx; k < n; k++) {
                if (s[k] != s[i]) {
                    rightCnt++;
                } else {
                    break;
                }
                if (rightCnt == leftCnt) {
                    endIdx = k;
                    break;
                }
            }
            if (endIdx != undefined) {
                res++;
            }
        }
    }
    return res;
};

// Accepted --- 8176ms 5.32%
const countBinarySubstrings = (s) => {
    let n = s.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let leftCnt = 0;
        let idx = n - 1;
        for (let j = i + 1; j < n; j++) {
            if (s[j] != s[i]) {
                leftCnt = j - i;
                idx = j;
                break;
            }
        }
        let rightCnt = 0;
        let endIdx;
        if (leftCnt != 0) {
            for (let k = idx; k < n; k++) {
                if (s[k] != s[i]) {
                    rightCnt++;
                } else {
                    break;
                }
                if (rightCnt == leftCnt) {
                    endIdx = k;
                    break;
                }
            }
            if (endIdx != undefined) {
                // console.log(leftCnt, rightCnt);
                // let tmp = s.slice(i, endIdx + 1);
                // console.log(i, idx, endIdx, tmp, endIdx - i + 1);
                res++;
            }
        }
    }
    return res;
};

const main = () => {
    let s = "00110011";
    let s2 = "10101";
    let s3 = "00110";
    let debug1 = "1011001001";
    console.log(countBinarySubstrings(s)); // ["0011", "01", "1100", "10", "0011", "01"
    console.log(countBinarySubstrings(s2));
    console.log(countBinarySubstrings(s3)); // 3
    console.log(countBinarySubstrings(debug1)); // 7

    // console.log(findAllSubstrIndices("I learned to play the Ukulele in Lebanon.", /le/gi));
};

main()


///////////////////////////////////// 8.18 evening //////////////////////////////////////
// Time Limit 76/90
// const countBinarySubstrings = (s) => {
//     let target = '01';
//     let target2 = '10';
//     return expand(target, s) + expand(target2, s);
// };

// const expand = (target, s) => {
//     let cnt = 0;
//     while (true) {
//         if (s.indexOf(target) != -1) {
//             let re = new RegExp(target, "g");
//             let idx = findAllSubstrIndices(s, re);
//             // console.log(idx);
//             cnt += idx.length;
//         }
//         if (target.length >= s.length) {
//             break;
//         } else {
//             target += target[target.length - 1];
//             target = target[0] + target;
//         }
//     }
//     return cnt;
// };

// const findAllSubstrIndices = (str, regex) => {
//     let res, indices = [];
//     while ((res = regex.exec(str))) {
//         indices.push(res.index);
//     }
//     return indices;
// };


// const countBinarySubstrings = (s) => {
//     let set = new Set();
//     let memo = new Map();
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i + 1; j < s.length; j++) {
//             let sub = s.slice(i, j + 1);
//             if (memo.has(sub)) continue;
//             memo.set(sub, '');
//             let unique = [...new Set(sub)].join("");
//             console.log(sub, unique)
//             if (unique == '01' || unique == '10') {
//                 set.add(sub);
//             }
//         }
//     }
//     console.log(set);
//     return set.size;
// };


///////////////////////////////////// 6.3 evening //////////////////////////////////////
// // need to fix  Time Limit exceed
// const countBinarySubstrings = (s) => {
//     let res = [];
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i + 1; j < s.length; j++) {
//             let sub = s.slice(i, j + 1);
//             if (check(sub)) {
//                 res.push(sub);
//             }
//         }
//     }
//     console.log(res);
//     return res.length;
// };

// const check = (s) => {
//     let zeros = [];
//     let ones = [];
//     for (const i of s) {
//         if (i == '0') {
//             zeros.push(i);
//         } else {
//             ones.push(i);
//         }
//     }
//     return zeros.length == ones.length && (isAscending(s) || isDescending(s));
// };

// const isAscending = (str) => {
//     let arr = str.split("");
//     return arr.every((x, i) => {
//         return i === 0 || x >= arr[i - 1];
//     });
// };

// const isDescending = (str) => {
//     let arr = str.split("");
//     return arr.every((x, i) => {
//         return i === 0 || x <= arr[i - 1];
//     });
// };