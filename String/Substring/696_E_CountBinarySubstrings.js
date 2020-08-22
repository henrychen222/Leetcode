/**
 * 6.3 evening  8.18 evening still not solved
 * https://leetcode.com/problems/count-binary-substrings/
 */

// Time Limit 76/90
const countBinarySubstrings = (s) => {
    let target = '01';
    let target2 = '10';
    return expand(target, s) + expand(target2, s);
};

const expand = (target, s) => {
    let cnt = 0;
    while (true) {
        if (s.indexOf(target) != -1) {
            let re = new RegExp(target, "g");
            let idx = findAllSubstrIndices(s, re);
            // console.log(idx);
            cnt += idx.length;
        }
        if (target.length >= s.length) {
            break;
        } else {
            target += target[target.length - 1];
            target = target[0] + target;
        }
    }
    return cnt;
};

const findAllSubstrIndices = (str, regex) => {
    let res, indices = [];
    while ((res = regex.exec(str))) {
        indices.push(res.index);
    }
    return indices;
};

const main = () => {
    let s = "00110011";
    let s2 = "10101";
    console.log(countBinarySubstrings(s)); // ["0011", "01", "1100", "10", "0011", "01"
    console.log(countBinarySubstrings(s2));

    // console.log(findAllSubstrIndices("I learned to play the Ukulele in Lebanon.", /le/gi));
};

main()



///////////////////////////////////// 8.18 evening //////////////////////////////////////
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