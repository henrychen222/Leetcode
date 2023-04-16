/**
 * 08/13/22 evening
 * https://leetcode.com/contest/weekly-contest-306/problems/count-special-integers/
 */

const pr = console.log;

let res, n;
const countSpecialNumbers = (N) => {
   n = N;
   // pr(test(n));
   res = new Set();
   dfs([]);
   // pr(res);
   return res.size;
};

const dfs = (cur) => {
    if (Number(cur.join('')) > n) return;
    let t = cur.join('')
    if (isSpecial(t)) {
        // pr('cur', t)
        res.add(t)
    }
    for (let i = 0; i <= 9; i++) {
        cur.push(i);
        if (ok(cur)) dfs(cur);
        cur.pop();
    }
};

const ok = (a) => {
    if (a[0] == 0 && a.length > 1) return false;
    if (Number(a.join('')) > n) return false;
    let u = new Set(a);
    if (u.size != a.length) return false;
    return true;
};

const isSpecial = (s) => {
    if (s.length == 0 || s == '0') return false;
    return new Set(s).size == s.length;
};

// const test = (n) => {
//     let res = 0, d = [];
//     for (let x = 1; x <= n; x++) {
//         if (isSpecial(x + '')) {
//             res++;
//             d.push(x);
//         }
//     }
//     // pr('d', d)
//     return res;
// };

const main = () => {
    let n = 20;
    let n2 = 5;
    let n3 = 135;
    let large = 2e5;
    let large2 = 2e6;
    let large3 = 2e9;
    let debug1 = 5853623;
    pr(countSpecialNumbers(n))
    pr(countSpecialNumbers(n2))
    pr(countSpecialNumbers(n3))
    pr(countSpecialNumbers(large)) // 47610
    pr(countSpecialNumbers(large2)) // 229050
    // pr(countSpecialNumbers(large3)) // 5974650
    pr(countSpecialNumbers(debug1)) // 461730
};

main()