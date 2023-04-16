/**
 * 03/06/21 morning
 * https://leetcode.com/contest/biweekly-contest-47/problems/sum-of-beauty-of-all-substrings/
 */

const pr = console.log;

// Accepted
const AASCII = 'a'.charCodeAt();
const beautySum = (s) => {
    let n = s.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let f = Array(26).fill(0);
        for (let j = i; j < n; j++) {
            // if (s[j] == s[i]) {
            //     f[s[j].charCodeAt() - AASCII]++;
            //     continue;
            // }
            f[s[j].charCodeAt() - AASCII]++;
            let max = 0;
            let min = Number.MAX_SAFE_INTEGER;
            for (const occ of f) {
                if (occ == 0) continue;
                max = Math.max(max, occ);
                min = Math.min(min, occ);
            }
            let diff = max - min;
            if (diff == 0) continue;
            res += diff;
            // pr(s.slice(i, j + 1), max, min, diff, f)
        }
    }
    return res;
};

const main = () => {
    let s = "aabcb";
    let s2 = "aabcbaa";
    pr(beautySum(s));
    pr(beautySum(s2));
}

main()