/**
 * 04/09/22 evening
 * https://leetcode.com/contest/weekly-contest-288/problems/largest-number-after-digit-swaps-by-parity/
 */

const pr = console.log;

// Accepted
const largestInteger = (x) => {
    let s = x + '', n = s.length, a = [], b = [], ia = [], ib = [], res = Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
        if ((s[i] - '0') % 2 == 0) {
            a.push(s[i]);
            ia.push(i);
        } else {
            b.push(s[i]);
            ib.push(i);
        }
    }
    a.sort((x, y) => y - x);
    b.sort((x, y) => y - x);
    // pr(a, b);
    for (let i = 0; i < ia.length; i++) res[ia[i]] = a[i];
    for (let i = 0; i < ib.length; i++) res[ib[i]] = b[i];
    // while (a.length || b.length) {
    //     res += a.shift() || '';
    //     res += b.shift() || '';
    // }
    return res.join("");
};


// const largestInteger = (x) => {
//     let a = (x + '').split("").map(Number);
//     pr(a)
//     a.sort((x, y) => {
//         if ((x % 2 == 0 && y % 2 == 0) || (x % 2 != 0 && y % 2 != 0)) return y - x;
//         return 0;
//     });
//     pr(a);
// };

const main = () => {
    let num = 1234;
    let num2 = 65875;
    let debug1 = 247;
    pr(largestInteger(num))
    pr(largestInteger(num2))
    pr(largestInteger(debug1)) // 472
};

main()