/**
 * 03/04/21 night
 * https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
 */

const pr = console.log;

// Accepted --- 120ms 31.76%
const AASCII = 'a'.charCodeAt();
const longestSubstring = (s, k) => {
    let m = Array(26).fill(0);
    for (const c of s) {
        m[c.charCodeAt() - AASCII]++;
    }
    // pr(m);
    let n = s.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (m[s[i].charCodeAt() - AASCII] < k) continue;
        let len = 0;
        let f = Array(26).fill(0);
        for (let j = i; j < n; j++) {
            let jascii = s[j].charCodeAt();
            f[jascii - AASCII]++;
            if (ok(f, k)) {
                // pr(s.slice(i, j + 1), f);
                len = j - i + 1;
                res = Math.max(res, len);
            }
        }
    }
    return res;
};

const ok = (a, k) => {
    for (const e of a) {
        if (e == 0) continue;
        if (e < k) return false;
    }
    return true;
};

const main = () => {
    let s = "aaabb",
        k = 3;
    let s2 = "ababbc",
        k2 = 2;
    let s_debug1 = "ababacb",
        k_debug1 = 3;
    pr(longestSubstring(s, k));
    pr(longestSubstring(s2, k2));
    pr(longestSubstring(s_debug1, k_debug1)); // 0
}

main()