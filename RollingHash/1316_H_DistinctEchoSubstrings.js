/**
 * 01/15/21 morning
 * https://leetcode.com/problems/distinct-echo-substrings/
 * 
 * reference:
 * https://zxi.mytechroad.com/blog/string/leetcode-1316-distinct-echo-substrings/
 * https://leetcode.com/contest/biweekly-contest-17/ranking/1/
 */

const pr = console.log;

// Accepted ---  1332ms 100%
const distinctEchoSubstrings = (s) => {
    let n = s.length, res = new Set();
    for (let len = 1; len <= n >> 1; len++) {
        for (let i = 0; i + len <= n; i++) {
           let left = s.substr(i, len), right = s.substr(i + len, len);
           if (left == right) res.add(s.substr(i, 2 * len));
        }
    }
    return res.size;
};

// TLE
const distinctEchoSubstrings1 = (s) => {
    let n = s.length, res = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let len = j - i + 1, sub = s.slice(i, j + 1);
            if (canRepeat(sub, len)) res.add(sub);
        }
    }
    return res.size;
};

const canRepeat = (s, n) => {
    // pr("\nsub", s);
    for (let r = 0; r <= n >> 1; r++) {
        let ancestor = s.slice(0, r + 1), t = ancestor + ancestor;
        if (t == s) return true;
    }
    return false;
};


const main = () => {
    let text = "abcabcabc";
    let text2 = "leetcodeleetcode";
    pr(distinctEchoSubstrings(text))
    pr(distinctEchoSubstrings(text2))
};

main()