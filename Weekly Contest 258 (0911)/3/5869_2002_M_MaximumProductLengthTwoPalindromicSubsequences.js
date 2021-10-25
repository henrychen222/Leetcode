/**
 * 09/11/21 evening
 * https://leetcode.com/contest/weekly-contest-258/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/
 */

const pr = console.log;

const isPalindrome = (s) => { let n = s.length; let i = 0; let j = n - 1; while (i < j) { if (s[i++] != s[j--]) return false; } return true; };
const counter = (a_or_s) => { let map = new Map(); for (const i of a_or_s) map.set(i, map.get(i) + 1 || 1); return map; };

// Accepted
const maxProduct = (s) => {
    let cnt = counter(s);
    // let se = new Set();
    let a = [];
    let n = s.length;
    let N = 2 ** n;
    // pr(n, N)
    for (let i = 0; i < N; i++) {
        let sub = '';
        let idx = new Set();
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                sub += s[j];
                idx.add(j);
            }
        }
        // pr(sub)
        if (isPalindrome(sub)) {
            a.push([sub, idx]);
        }
    }
    // pr(se, cnt);
    // let a = [...se];
    // a.sort((x, y) => y - x);
    // pr(a);
    let an = a.length;
    let res = 0;
    for (let i = 0; i < an; i++) {
        for (let j = i + 1; j < an; j++) {
            if (isDisjoint(a[i][0], a[j][0], a[i][1], a[j][1])) {
                // pr(a[i][0], a[j][0], a[i][0].length, a[j][0].length)
                let len = a[i][0].length * a[j][0].length;
                res = Math.max(res, len);
            }
        }
    }
    return res;
};

const isDisjoint = (s, t, is, it) => {
    for(const i of is) {
        if (it.has(i)) return false;
    }
    return true;
};

// const isDisjoint1 = (s, t, m) => {
//     let ms = counter(s), mt = counter(t);
//     for (const [c, occ] of ms) {
//         let tot = m.get(c);
//         if (mt.has(c)) {
//             if (mt.get(c) + occ > tot) return false;
//         }
//     }
//     return true;
// };

const main = () => {
    let s = "leetcodecom";
    let s2 = "bb";
    let s3 = "accbcaxxcxx"
    let debug1 = "nphnphmpm";
    pr(maxProduct(s))
    pr(maxProduct(s2))
    pr(maxProduct(s3))
    pr(maxProduct(debug1)) // 10
};

main()