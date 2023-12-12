/*
 * 11/25/23 evening   10:26 started   10:57 finished
 * https://leetcode.com/contest/weekly-contest-373/problems/count-beautiful-substrings-i/
 */

const pr = console.log;

const isVowel = (c) => 'aeiou'.indexOf(c) != -1;

// Accepted
const beautifulSubstrings = (s, k) => {
    let n = s.length, a = 0, b = 0, res = 0;
    for (let i = 0; i < n; i++) {
        let a = 0, b = 0;
        for (let j = i; j < n; j++) {
            isVowel(s[j]) ? a++ : b++;
            if (a == b && (a * b % k == 0)) {
                // pr(a, b, s.slice(i, j + 1))
                res++;
            }
        }
    }
    return res;
}

const main = () => {
    let s = "baeyh", k = 2;
    let s2 = "abba", k2 = 1;
    let s3 = "bcdf", k3 = 1;
    pr(beautifulSubstrings(s, k))
    pr(beautifulSubstrings(s2, k2))
    pr(beautifulSubstrings(s3, k3))
};

main()