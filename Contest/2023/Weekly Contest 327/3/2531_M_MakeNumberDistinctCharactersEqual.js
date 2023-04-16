/*
 * 01/07/22 evening
 * https://leetcode.com/contest/weekly-contest-327/problems/make-number-of-distinct-characters-equal/
 */

const pr = console.log;

const ord = (c) => c.charCodeAt();

// Accepted
const isItPossible = (s, t) => {
    let a = Array(26).fill(0), b = Array(26).fill(0);
    for (const c of s) a[ord(c) - 97]++;
    for (const c of t) b[ord(c) - 97]++;
    // pr("begin", a);
    // pr("begin", b);
    for (let i = 0; i < 26; i++) {
        if (a[i] > 0) {
            for (let j = 0; j < 26; j++) {
                if (b[j] > 0) {
                   a[i]--;
                   b[i]++;
                   b[j]--;
                   a[j]++;
                   if (equalDistinct(a, b)) return true;
                   a[i]++;
                   b[i]--;
                   b[j]++;
                   a[j]--;
                }
            }
        }
    }
    return false;
};

const equalDistinct = (a, b) => {
    // pr('a', a);
    // pr('b', b)
    let cntA = 0, cntB = 0;
    for (let i = 0; i < 26; i++) {
        if (a[i] > 0) cntA++;
        if (b[i] > 0) cntB++;
    }
    return cntA == cntB;
};

const main = () => {
    let s = "ac", t = "b";
    let s2 = "abcc", t2 = "aab"
    let s3 = "abcde", t3 = "fghij"
    pr(isItPossible(s, t))
    pr(isItPossible(s2, t2))
    pr(isItPossible(s3, t3))
};

main()