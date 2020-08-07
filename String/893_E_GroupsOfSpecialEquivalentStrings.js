/**
 * 6.1 night  complete 8.5 night
 * https://leetcode.com/problems/groups-of-special-equivalent-strings/
 */

// Accepted --- 152ms 45.9MB 15.69%
const numSpecialEquivGroups = (A) => {
    let data = [];
    for (const a of A) {
        let odd = [];
        let even = [];
        for (let j = 0; j < a.length; j++) {
            if (j % 2 == 0) {
                even.push(a[j]);
            } else {
                odd.push(a[j]);
            }
        }
        let oddS = odd.sort((a, b) => a.localeCompare(b)).join('');
        let evenS = even.sort((a, b) => a.localeCompare(b)).join('');
        data.push([oddS, evenS]);
    }
    // console.log(data);
    let kinds = new Set();
    for (const d of data) {
        kinds.add(d[0] + d[1]);
    }
    // console.log(kinds);
    return kinds.size;
};

const main = () => {
    let A = ["abcd", "cdab", "cbad", "xyzz", "zzxy", "zzyx"];
    let A2 = ["abc", "acb", "bac", "bca", "cab", "cba"];
    console.log(numSpecialEquivGroups(A));
    console.log(numSpecialEquivGroups(A2));
};

main()


// // need to fix
// const numSpecialEquivGroups = (A) => {
//     let res = []
//     for (let i = 0; i < A.length; i++) {
//         if (check(A[i], A[i + 1])) {
//             res.push(A[i]);
//             res.push(A[i + 1]);
//         }
//     }
//     console.log(res);
// };

// const check = (s, t) => {
//     for (let i = 0; i < s.length; i = i + 2) { // Even
//         for (let j = 2; j < j.length; j = j + 2) {
//             let temp = s[i];
//             s = s.replace(s[i], s[j]);
//             s = s.replace(s[j], temp);
//         }
//     }
//     for (let i = 1; i < s.length; i = i + 2) { // Odd
//         for (let j = 3; j < j.length; j = j + 2) {
//             let temp = s[i];
//             s = s.replace(s[i], s[j]);
//             s = s.replace(s[j], temp);
//         }
//     }
//     if (s == t) {
//         return true;
//     }
//     return false;
// };