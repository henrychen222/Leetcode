/**
 * 07/24/21 evening
 * https://leetcode.com/contest/weekly-contest-251/problems/largest-number-after-mutating-substring/
 */

const pr = console.log;

// Accepted
const maximumNumber = (s, change) => {
    let n = s.length;
    let a = s.split("");
    let ch = false;
    for (let i = 0; i < n;) {
        let v = a[i] - '0';
        let rep = change[v];
        // pr(rep, v)
        if (rep < v) {
            if (a.join("") != s) break;
            i++;
        } else {
            a[i] = rep + '';
            ch = true;
            i++;
        }
        pr(a);
    }
    return a.join("");
};

// const ups = (s, i, c) => s.slice(0, i) + c + s.slice(i + 1);

// // TLE
// const maximumNumber = (s, a) => {
//     let origin = s;
//     let n = s.length;
//     // let res = [];
//     for (let i = 0; i < n; ) {
//         let v = s[i] - '0';
//         let rep = a[v];
//         // pr("rep", rep, "current", v)
//         // pr(s);
//         if (rep < v) {
//             if (s != origin) break;
//             i++;
//         } else {
//             s = ups(s, i, rep + '');
//             i++;
//         }
//     }
//     // pr(res);
//     return s;
// };

const main = () => {
    let num = "132", change = [9, 8, 5, 0, 3, 6, 4, 2, 6, 8];
    let num2 = "021", change2 = [9, 4, 3, 5, 7, 2, 1, 9, 0, 6];
    let num3 = "5", change3 = [1, 4, 7, 5, 3, 2, 5, 6, 9, 4];
    let num_debug1 = "334111", change_debug1 = [0, 9, 2, 3, 3, 2, 5, 5, 5, 5];
    let num_debug2 = "303", change_debug2 = [8, 1, 6, 1, 8, 4, 9, 5, 9, 3];
    pr(maximumNumber(num, change))
    pr(maximumNumber(num2, change2))
    pr(maximumNumber(num3, change3))
    pr(maximumNumber(num_debug1, change_debug1)) // "334999"
    pr(maximumNumber(num_debug2, change_debug2)) // "383"
};

main()


// pr('9' > '8', '7' > '8', '0' < '1')

// pr(s[end])
// let left = s.slice(0, end);
// let right = s.slice(end);
// pr(left, right)
// let lres = '';
// for (const c of left) {
//     lres += a[c - '0'];
// }
// return lres + right;


// const maximumNumber = (s, a) => {
//     let n = s.length;
//     let pre = s;
//     outer:
//     for (let t = 1; t <= 10; t++) {
//     // while (1) {
//         pr(s);
//         for (let i = 0; i < n; i++) {
//             let idx = s[i] - '0';
//             let next = ups(s, i, a[idx].toString());
//             if (next == s) break outer;
//             pr("next", next)
//             if (large(next, s)) {
//                pre = s;
//                s = next;
//                break;
//             }
//         }
//         if (s == pre) break;
//     }
//     return s;
// };

// const large = (s, t) => {
//     let n = s.length;
//     for (let i = 0; i < n; i++) {
//         if (s[i] > t[i]) {
//             return true;
//         } else if (s[i] < t[i]) {
//             return false;
//         }
//     }
//     return false;
// };