/**
 * 11/06/21 evening
 * https://leetcode.com/contest/weekly-contest-266/problems/count-vowel-substrings-of-a-string/
 */

const pr = console.log;

const isVowel = (c) => { let s = 'aeiou'; return s.indexOf(c) != -1; };

// Accepted
const countVowels = (s) => {
    let n = s.length, res = 0;
    // pr(n)
    for (let i = 0; i < n; i++) {
        if (isVowel(s[i])) {
            // pr(i + 1, n - i, (i + 1) * (n - i));
            res += (i + 1) * (n - i);
        }
    }
    return res;
};

const main = () => {
    let word = "aba";
    let word2 = "abc";
    let word3 = "ltcd";
    let word4 = "noosabasboosa";
    pr(countVowels(word))
    // pr(countVowels(word2))
    // pr(countVowels(word3))
    pr(countVowels(word4))
};

main()