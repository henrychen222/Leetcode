/**
 * 7.21 night  2/2/21 fixed
 * https://leetcode.com/problems/shifting-letters/
 */

// Accepted --- 7668ms 5.55%
const shiftingLetters = (S, shifts) => {
    let n = S.length;
    let res = S.split("");
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            res[j] = shift(res[j], shifts[i]);
        }
        // console.log(res);
    }
    return res.join("");
};

const shift = (c, move) => {
    move %= 26;
    let next = c.charCodeAt() + move;
    let res = next % 123;
    // console.log(c, c.charCodeAt(), next, res);
    return String.fromCharCode(res < 97 ? 97 + res : res);
};

// TLE
// const shift = (c, move) => {
//     move %= 26;
//     let next = c.charCodeAt() + move;
//     if (next == 122) return 'z';
//     let res = next % 122;
//     return String.fromCharCode(res < 97 ? 96 + res : res);
// };

const main = () => {
    let S = "abc",
        shifts = [3, 5, 9];
    let S_debug1 = "bad",
        shifts_debug1 = [10, 20, 30];
    let S_debug2 = "z",
        shifts_debug2 = [52];
    let S_debug3 = "qoqpvw",
        shifts_debug3 = [95, 7, 67, 21, 33, 23];
    console.log(shiftingLetters(S, shifts));
    console.log(shiftingLetters(S_debug1, shifts_debug1)); // "lad" -> "gud" -> "jyh"
    console.log(shiftingLetters(S_debug2, shifts_debug2)); // "z"
    console.log(shiftingLetters(S_debug3, shifts_debug3)); // "cjeozt"
};

main()

// console.log(String.fromCharCode('a'.charCodeAt() + 1));
// console.log(String.fromCharCode('a'.charCodeAt() + 27 % 26));

// console.log(shift('b', 10)) // l;
// console.log(shift('l', 20)) // g;
// console.log(shift('l', 46)) // g;


///////////////////////////  7.21 night ////////////////////
// // need to fix
// const shiftingLetters = (S, shifts) => {
//     // let operation = [];
//     // for (let i = 0; i < shifts.length; i++) {
//     //     operation.push([shifts[i], i]);
//     // }
//     // console.log(operation);

//     // let s = S;
//     // for (const o of operation) {
//     //     let t = o[0];
//     //     let idx = o[1];
//     //     for (let i = 1; i <= t; i++) {
//     //         s.slice(0, idx);
//     //         console.log(s);
//     //     }
//     // }

//     let s = S;
//     for (let i = 0; i < shifts.length; i++) {
//         for (let t = 1; t <= shifts[i]; t++) {
//             let tmp = s.slice(0, i + 1);
//             console.log(tmp);
//             // for (let j = 0; j < i; j++) {
//             //     let tmp = s.replace(S[j], shift(S[j]))
//             //     console.log(tmp);
//             //     // break;
//             // }
//         }
//     }
// };