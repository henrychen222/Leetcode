/**
 * 05/29/21 morning
 * https://leetcode.com/contest/biweekly-contest-53/problems/substrings-of-size-three-with-distinct-characters/
 */

const pr = console.log;

// Accepted
const countGoodSubstrings = (s) => {
    let res = 0;
    let n = s.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let len = j - i + 1;
            if (len == 3) {
                let sub = s.slice(i, j + 1);
                let a = sub.split("");
                let u = new Set(a);
                // pr(u);
                if (u.size == 3) res++;
            }
        }
    }
    return res;
};

const main = () => {
    let s = "xyzzaz";
    let s2 = "aababcabc";
    pr(countGoodSubstrings(s))
    pr(countGoodSubstrings(s2))
};

main()