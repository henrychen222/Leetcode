/**
 * 02/21/21 afternoon
 * https://leetcode.com/problems/longest-nice-substring/
 */

const pr = console.log;

// Accepted --- 200ms 100.00%
const mx = Math.max;
const longestNiceSubstring = (s) => {
    let n = s.length;
    let res = [];
    let max = 0;
    let se = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sub = s.slice(i, j + 1);
            if (isNice(sub)) {
                se.add(sub);
                max = mx(max, j - i + 1);
            }
        }
    }
    // pr(se, max);
    for (const e of se) {
        if (e.length == max) return e;
    }
    return '';
};

const isNice = (s) => {
    let lower = new Set();
    let upper = new Set();
    for (const c of s) {
        isLowerCaseLetter(c) ? lower.add(c) : upper.add(c);
    }
    // pr(lower, upper)
    for (const lo of lower) {
        if (!upper.has(lo.toUpperCase())) return false;
    }
    for (const up of upper) {
        if (!lower.has(up.toLowerCase())) return false;
    }
    return true;
};

const isLowerCaseLetter = (c) => {
    return c.charCodeAt() >= 97 && c.charCodeAt() <= 122;
};

/**
 *  Be careful: this is only works for string only contains (uppercase and lowercase English letters)
 *  if '#' will hack it, should be false, but will be true
 *  get stuck of this issue in this question: https://www.codechef.com/problems/PASSWD
 */
// Accepted --- 220ms
// const isLowerCaseLetter = (c) => {
//     return c == c.toLowerCase();
// };

const main = () => {
    let s = "YazaAay";
    let s2 = "Bb";
    let s3 = "c";
    let s4 = "dDzeE";
    pr(longestNiceSubstring(s));
    pr(longestNiceSubstring(s2));
    pr(longestNiceSubstring(s3));
    pr(longestNiceSubstring(s4));
};

main()