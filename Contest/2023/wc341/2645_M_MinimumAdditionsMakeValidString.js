/*
 * 04/15/23 evening
 * https://leetcode.com/contest/weekly-contest-341/problems/minimum-additions-to-make-valid-string/
 */

const pr = console.log;

// const ord = (c) => c.charCodeAt();
// const next = (c) => {
//     if (c == 'a') {
//         return 'b';
//     } else if (c == 'b') {
//         return 'c';
//     } else {
//         return 'a';
//     }
// };

const cutMaxConsecutive = (as) => { let d = [], l = 0, n = as.length; for (let i = 0; i + 1 < n; i++) { if (as[i + 1] != as[i]) { d.push(as.slice(l, i + 1)); l = i + 1; } } d.push(as.slice(l)); return d; };

// Accepted  2 minutes more fuck  start from 11:45pm AC at 12:02am
const addMinimum = (s) => {
    let n = s.length, res = '', d = cutMaxConsecutive(s), cnt = 0, con = 0;
    // pr(d);
    for (let i = 0; i < d.length; i++) {
        if (d[i][0] == 'a' && i + 1 < d.length && d[i + 1][0] == 'b') con++;
        if (d[i][0] == 'a' && i + 1 < d.length && d[i + 1][0] == 'c') con++;
        if (d[i][0] == 'b' && i + 1 < d.length && d[i + 1][0] == 'c') con++;
        cnt += d[i].length;
    }
    res = 'abc'.repeat(cnt - con);
    // pr(res, res.length, cnt, con);
    return res.length - n;
};

// const addMinimum = (s) => {
//     let n = s.length, res = '';
//     for (let i = 0; i < n; i++) {
//         pr("res", res, i, s[i])
//         while (1) {
//             if (i >= n || s[i + 1] == next(res[res.length - 1])) break;
//             pr(res, "s[i+1]", i, s[i + 1], next(res[res.length - 1]))
//             res += next(res[res.length - 1])
//             i++;
//         }
//         pr("res222", res)
//     }
// };

// const addMinimum = (s) => {
//     let f = [0, 0, 0], res = '', need = 'a';
//     let n = s.length;
//     for (let i = 0; i < n; i += 2) {
//         let ne = s[i+1] + s[i+2];
//         if (ne == 'bc') {
//             res += ne;
//         } else {
//             res += 'bcab';
//         }
//         res += need;
//     }
// };



const main = () => {
    let s = "b"
    let s2 = "aaa"
    let s3 = "abc"
    let s_debug1 = "aaaabb"
    let s_debug2 = "aaaaac";
    pr(addMinimum(s))
    pr(addMinimum(s2))
    pr(addMinimum(s3))
    pr(addMinimum(s_debug1))
    pr(addMinimum(s_debug2))
};

main()


/*
aaaabb

abcabcabc


*/