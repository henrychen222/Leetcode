/**
 * 1.23 evening
 * https://leetcode.com/contest/weekly-contest-225/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/
 */

// Accepted --- 772ms
const mi = Math.min;
let res, an, bn, freqA, freqB;
const minCharacters = (a, b) => {
    an = a.length;
    bn = b.length;
    freqA = getRecord2(a);
    freqB = getRecord2(b);
    res = Number.MAX_SAFE_INTEGER;
    res = mi(res, three(a, b));
    operate(a, b);
    operate(b, a);
    return res;
};

const operate = (a, b) => {
    for (let k = 0; k < 25; k++) {
        let cnt = 0;
        for (const ac of a) if (ac.charCodeAt() - 'a'.charCodeAt() > k) cnt++;
        for (const bc of b) if (bc.charCodeAt() - 'a'.charCodeAt() <= k) cnt++;
        res = mi(res, cnt);
    }
};

// WA 60/67
// let an, bn, freqA, freqB;
// const minCharacters = (a, b) => {
//     an = a.length;
//     bn = b.length;
//     freqA = getRecord2(a);
//     freqB = getRecord2(b);
//     // console.log(freqA, freqB);
//     let step3 = three();
//     // return Math.min(oneTwo(), step3);
//     return Math.min(oneTwo(freqA, freqB), oneTwo(freqB, freqA), step3);
// };

// const oneTwo = (freqA, freqB) => {
//     let cnt = cnt2 = 0;
//     for (const [ak, av] of freqA) {
//         let achASCII = ak.charCodeAt();
//         for (const [bk, bv] of freqB) {
//             if (bk.charCodeAt() >= achASCII) { // change all a < b
//                 // console.log('a < b', ak, bk);
//                 cnt += av;
//                 break;
//             }
//         }
//     }
//     for (const [ak, av] of freqA) {
//         let achASCII = ak.charCodeAt();
//         for (const [bk, bv] of freqB) {
//             if (bk.charCodeAt() <= achASCII) {  // change all a > b
//                 // console.log('a > b', ak, bk);
//                 cnt2 += av;
//                 break;
//             }
//         }
//     }
//     // console.log(cnt, cnt2);
//     return Math.min(cnt, cnt2);
// };

const three = () => {
    let aop = freqA.values().next().value;
    let bop = freqB.values().next().value;
    return (an - aop) + (bn - bop);
};

const getRecord2 = (s) => {
    let map = new Map();
    for (const i of s) {
        map.set(i, (map.get(i) + 1) || 1);
    }
    map = sortMapByValue(map);
    return map;
};

const sortMapByValue = (map) => {
    return new Map([...map].sort((a, b) => b[1] - a[1]));
};

const main = () => {
    let a = "aba", b = "caa";
    let a2 = "dabadd", b2 = "cda";
    let a_debug1 = "da", b_debug1 = "cced";  // aa   cced
    let a_debug2 = "dcced", b_debug2 = "d";
    let a_debug3 = "acac", b_debug3 = "bd";
    let a_debug4 = "ba", b_debug4 = "ae";
    let a_debug5 = "ace", b_debug5 = "abe";
    console.log(minCharacters(a, b));
    console.log(minCharacters(a2, b2));
    console.log(minCharacters(a_debug1, b_debug1)); // 1
    console.log(minCharacters(a_debug2, b_debug2)); // 1
    console.log(minCharacters(a_debug3, b_debug3)); // 1
    console.log(minCharacters(a_debug4, b_debug4)); // 1
    console.log(minCharacters(a_debug5, b_debug5)); // 2
};

main()