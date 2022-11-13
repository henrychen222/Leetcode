/*
* 09/17/22 evening
* https://leetcode.com/contest/weekly-contest-311/problems/length-of-the-longest-alphabetical-continuous-substring/
*/

const pr = console.log;

const ord = (c) => c.charCodeAt();
const char = (ascii) => String.fromCharCode(ascii);

const cutMaxConsecutive = (s) => {
    let d = [], l = 0, n = s.length;
    for (let i = 0; i + 1 < n; i++) {
        let next = char(ord(s[i]) + 1)
        if (s[i + 1] != next || s[i] == 'z') {
            d.push(s.slice(l, i + 1));
            l = i + 1;
        }
    }
    d.push(s.slice(l));
    return d;
};

// Accepted
const longestContinuousSubstring = (s) => {
    let d = cutMaxConsecutive(s), res = 0;
    // pr(d);
    for (const e of d) res = Math.max(res, e.length)
    return res;
};

const main = () => {
    let s = "abacaba";
    let s2 = "abcde";
    let s3 = "aabcdefghijklmnopqrstuvwxyzzz"
    pr(longestContinuousSubstring(s))
    pr(longestContinuousSubstring(s2))
    pr(longestContinuousSubstring(s3))
};

main()