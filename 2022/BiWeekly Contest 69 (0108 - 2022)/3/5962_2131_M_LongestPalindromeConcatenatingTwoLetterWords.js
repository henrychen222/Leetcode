/**
 * 01/08/21 morning
 * https://leetcode.com/contest/biweekly-contest-69/problems/longest-palindrome-by-concatenating-two-letter-words/
 */

const pr = console.log;

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };
const reverse = (s) => { let res = ""; for (let i = s.length - 1; i >= 0; i--) { res += s[i]; } return res; };

// Accepted
const longestPalindrome = (a) => {
    let m = counter(a), res = 0;
    // pr(m);
    for (const [s, occ] of m) {
        let rs = reverse(s), n = s.length;
        // pr("\n", s, rs, res);
        if (m.has(rs)) {
            let rsocc = m.get(rs);
            if (s == rs) {
                if (occ % 2 == 0) {
                    res += occ * n;
                    m.delete(s);
                } else {
                    let remove = occ - 1;
                    res += remove * n;
                    m.set(s, 1);
                }
            } else {
                if (occ < rsocc) {
                    m.delete(s);
                    m.set(rs, rsocc - occ);
                    res += occ * n * 2;
                } else if (occ > rsocc) {
                    m.delete(rs);
                    m.set(s, occ - rsocc);
                    res += rsocc * n * 2;
                } else {
                   m.delete(s);
                   m.delete(rs);
                   res += occ * n * 2;
                }
            }
        }
        // pr("step2", res, m);
    }
    let middle = 0;
    for (const [s, ] of m) {
        if (counter(s).size == 1) {
            middle = Math.max(middle, s.length);
        }
    }
    return res + middle;
};

const main = () => {
    let words = ["lc", "cl", "gg"];
    let words2 = ["ab", "ty", "yt", "lc", "cl", "ab"];
    let words3 = ["cc", "ll", "xx"];
    let debug1 = ["dd","aa","bb","dd","aa","dd","bb","dd","aa","cc","bb","cc","dd","cc"];
    pr(longestPalindrome(words))
    pr(longestPalindrome(words2))
    pr(longestPalindrome(words3))
    pr(longestPalindrome(debug1)) // 22
};

main()