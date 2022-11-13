/**
 * 03/20/21 morning
 * https://leetcode.com/contest/biweekly-contest-48/problems/second-largest-digit-in-a-string/
 */

const pr = console.log;

// WA
// const secondHighest = (s) => {
//     let a = [];
//     for (const c of s) {
//         if (isDigit(c)) a.push(Number(c));
//     }
//     a.sort((x, y) => x - y); // wrote wrong here, shit
//     let se = new Set(a);
//     pr(se);
//     let i = 0;
//     for (const e of se) {
//         if (i == 1) return e;
//         i++;
//     }
//     return -1;
// };

// const secondHighest = (s) => {
//     let a = [];
//     for (const c of s) {
//         if (isDigit(c)) a.push(Number(c));
//     }
//     a.sort((x, y) => x - y);
//     let m = new Map();
//     for (const e of a) {
//         m.set(e, m.get(e) + 1 || 1);
//     }
//     let i = 1;
//     pr(m);
//     for (const [k, v] of m) {
//         if (v == 2) {
//             if (i == 2) return k;
//             i++;
//         }
//     }
//     return -1;
// };


// const secondHighest = (s) => {
//     let ss = ''
//     for (const c of s) {
//         if (isDigit(c)) {
//             ss += c;
//         } else {
//             let t = c.charCodeAt();
//             ss += t;
//         }
//     }
//     pr(ss);
// };

// Accepted
const secondHighest = (s) => {
    let a = [];
    for (const c of s) {
        if (isDigit(c)) a.push(Number(c));
    }
    a.sort((x, y) => y - x);
    let se = new Set(a);
    // pr(se);
    let i = 0;
    for (const e of se) {
        if (i == 1) return e;
        i++;
    }
    return -1;
};

const isDigit = (c) => {
    let s = '0123456789';
    if (s.indexOf(c) == -1) return 0;
    return 1;
};

const main = () => {
    let s = "dfa12321afd";
    let s2 = "abc1111";
    let debug1 = "ck077";
    let debug2 = "url15";
    let debug3 = "vwkxfq9791769";
    pr(secondHighest(s));
    pr(secondHighest(s2));
    pr(secondHighest(debug1)); // 0
    pr(secondHighest(debug2)); // 1
    pr(secondHighest(debug3)); // 7
};

main()