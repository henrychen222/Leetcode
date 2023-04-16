/**
 * 07/10/21 evening
 * https://leetcode.com/contest/weekly-contest-249/problems/unique-length-3-palindromic-subsequences/
 */

const pr = console.log;

// TLE
const counter_value_in_indexA_in = (a_or_s) => { let m = new Map(); let n = a_or_s.length; for (let i = 0; i < n; i++) { if (!m.has(a_or_s[i])) m.set(a_or_s[i], []); m.get(a_or_s[i]).push(i); } return m; };
const countPalindromicSubsequence = (s) => {
    let n = s.length;
    let m = counter_value_in_indexA_in(s);
    // pr(m);
    // let res = 0;
    let se = new Set();
    for (let i = 0; i < n; i++) {
        let a = m.get(s[i]);
        // pr(a);
        if (a.length == 1) continue;
        for (const end of a) {
            if (end > i) {
                // let tmp = idx - i - 1;
                // res += tmp;
                for (let k = i + 1; k < end; k++) {
                    let nextTwo = s[k] + s[end];
                    se.add(s[i] + nextTwo);
                }
            }
        }
    }
    // pr(se);
    return se.size;
};

/*
  https://stackoverflow.com/questions/38552528/number-of-palindromic-subsequences-of-length-four
  https://www.geeksforgeeks.org/number-of-palindromic-subsequences-of-length-k-where-k/
  https://www.geeksforgeeks.org/count-palindromic-subsequence-given-string/
*/

// const initialize2DArrayNew = (n, m) => { let data = []; for (let i = 0; i < n; i++) { let tmp = Array(m).fill(0); data.push(tmp); } return data; };

// const MAX = 1e5 + 1;
// let n, l, r, s;
// const countPalindromicSubsequence = (ss) => {
//     s = ss;
//     n = s.length;
//     l = initialize2DArrayNew(26, n + 1);
//     r = initialize2DArrayNew(26, n + 1);
//     prepare(s);
//     // pr(l, r)
//     return countPalindromes(l, r);
// };

// const countPalindromes = (l, r) => {
//     let ans = 0;
//     for (let i = 1; i < n - 1; i++)
//         for (let j = 0; j < 26; j++)
//             ans += l[j][i - 1] * r[j][i + 1];
//     return ans;
// };

// const prepare = () => {
//     l[s[0].charCodeAt(0) - 97][0] = 1;
//     for (let i = 1; i < n; i++) {
//         for (let j = 0; j < 26; j++)
//             l[j][i] += l[j][i - 1];
//         l[s[i].charCodeAt(0) - 97][i]++;
//     }
//     r[s[n - 1].charCodeAt(0) - 97][n - 1] = 1;
//     for (let i = n - 2; i >= 0; i--) {
//         for (let j = 0; j < 26; j++)
//             r[j][i] += r[j][i + 1];
//         r[s[i].charCodeAt(0) - 97][i]++;
//     }
// };

const main = () => {
    let s = "aabca";
    let s2 = "adc";
    let s3 = "bbcbaba";
    let test1 = 'aaa';
    pr(countPalindromicSubsequence(s))
    pr(countPalindromicSubsequence(s2))
    pr(countPalindromicSubsequence(s3))
    // pr(countPalindromicSubsequence(test1))
};

main()