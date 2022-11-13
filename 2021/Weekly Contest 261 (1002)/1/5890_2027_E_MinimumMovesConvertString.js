/**
 * 10/02/21 evening
 * https://leetcode.com/contest/weekly-contest-261/problems/minimum-moves-to-convert-string/
 */

const pr = console.log;

// Accepted
const minimumMoves = (s) => {
    let res = 0, n = s.length;
    for (let i = 0; i < n;) {
        if (s[i] == 'X') {
            i += 3;
            res++;
        } else {
            i++;
        }
    }
    return res;
};

// const minimumMoves1 = (ss) => {
//     let res = 0;
//     let a = cuts(ss);
//     pr(a);
//     for (const s of a) {
//         if (s[0] == 'O') continue;
//         res += Math.ceil(s.length / 3);
//     }
//     return res;
// };

// const cuts = (s) => {
//     let n = s.length
//     let a = [];
//     let start = 0;
//     for (let i = 0; i + 1 < n; i++) {
//         if (s[i + 1] != s[i]) {
//             a.push(s.slice(start, i + 1));
//             start = i + 1;
//         }
//     }
//     a.push(s.slice(start));
//     return a;
// };

const main = () => {
    let s = "XXX";
    let s2 = "XXOX";
    let s3 = "OOOO";
    let debug1 = "OXOX";
    pr(minimumMoves(s))
    pr(minimumMoves(s2))
    pr(minimumMoves(s3))
    pr(minimumMoves(debug1)) // 1
};

main()