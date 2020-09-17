/**
 * 9.16 evening
 * https://leetcode.com/problems/string-without-aaa-or-bbb/
 */


// Accepted --- 80ms 62.00%
let a = [];
let b = [];
let res = '';
const strWithout3a3b_refine2 = (A, B) => {
    res = '';
    a = new Array(A).fill('a');
    b = new Array(B).fill('b');
    let n = A + B;
    for (let i = 1; i <= n; i++) {
        if (res.length == 0) {
            if (A >= B) {
                res += 'a';
                a.pop();
            } else {
                res += 'b';
                b.pop();
            }
        } else if (res.length == 1) {
            operate();
        } else {
            let l = res[res.length - 1];
            let sl = res[res.length - 2];
            if (l == 'a') {
                if (sl == 'a') {
                    res += 'b';
                    b.pop();
                } else {
                    operate();
                }
            } else {
                if (sl == 'a') {
                    operate();
                } else {
                    res += 'a';
                    a.pop();
                }
            }
        }
    }
    return res;
};

// Accepted --- 116ms 15.00%
// let a = [];
// let b = [];
// let res = '';
// const strWithout3a3b_refine = (A, B) => {
//     res = '';
//     a = new Array(A).fill('a');
//     b = new Array(B).fill('b');
//     let n = A + B;
//     for (let i = 1; i <= n; i++) {
//         if (res.length == 0) {
//             operate();
//         } else if (res.length == 1) {
//             operate();
//         } else {
//             let l = res[res.length - 1];
//             let sl = res[res.length - 2];
//             if (l == 'a') {
//                 if (sl == 'a') {
//                     res += 'b';
//                     b.pop();
//                 } else {
//                     operate();
//                 }
//             } else {
//                 if (sl == 'a') {
//                     operate();
//                 } else {
//                     res += 'a';
//                     a.pop();
//                 }
//             }
//         }
//     }
//     return res;
// };

const operate = () => {
    if (a.length >= b.length) {
        res += 'a';
        a.pop();
    } else {
        res += 'b';
        b.pop();
    }
};

// Accepted --- 84ms 43.00%
const strWithout3a3b = (A, B) => {
    let n = A + B;
    let a = new Array(A).fill('a');
    let b = new Array(B).fill('b');
    // console.log(a, b);
    let res = '';
    for (let i = 1; i <= n; i++) {
        if (res.length == 0) {
            if (A >= B) {
                res += 'a';
                a.pop();
            } else {
                res += 'b';
                b.pop();
            }
        } else if (res.length == 1) {
            if (a.length >= b.length) {
                res += 'a';
                a.pop();
            } else {
                res += 'b';
                b.pop();
            }
        } else {
            // console.log(a, b, res);
            let l = res[res.length - 1];
            let sl = res[res.length - 2];
            if (l == 'a') {
                if (sl == 'a') {
                    res += 'b';
                    b.pop();
                } else {
                    if (a.length >= b.length) {
                        res += 'a';
                        a.pop();
                    } else {
                        res += 'b';
                        b.pop();
                    }
                }
            } else {
                if (sl == 'a') {
                    if (a.length >= b.length) {
                        res += 'a';
                        a.pop();
                    } else {
                        res += 'b';
                        b.pop();
                    }
                } else {
                    res += 'a';
                    a.pop();
                }
            }
        }
    }
    // console.log(a, b);
    return res;
};

const main = () => {
    let A = 1,
        B = 2;
    let A2 = 4,
        B2 = 1;
    let A_debug1 = 1,
        B_debug1 = 4;
    console.log(strWithout3a3b(A, B));
    console.log(strWithout3a3b(A2, B2));
    console.log(strWithout3a3b(A_debug1, B_debug1)); // "bbabb"

    console.log("");
    console.log(strWithout3a3b_refine2(A, B));
    console.log(strWithout3a3b_refine2(A2, B2));
    console.log(strWithout3a3b_refine2(A_debug1, B_debug1)); // "bbabb"
};

main()