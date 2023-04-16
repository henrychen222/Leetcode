/**
 * 11/06/21 evening
 * https://leetcode.com/contest/weekly-contest-266/problems/count-vowel-substrings-of-a-string/
 */

const pr = console.log;

const isVowel = (c) => { let s = 'aeiou'; return s.indexOf(c) != -1; };
const totsub = (n) => { return n * (n + 1) / 2; };

/*
    noosabasboosa

    aba     2 + 1 + 1
    ab      1 + 0
    a       1
    a       1
 */
// Wrong
const countVowels = (s) => {
    let n = s.length, res = 0, a = []
    for (let i = 0; i < n; i++) {
        if (isVowel(s[i])) a.push(i);
    }
    // pr(a);
    let vowel = a.length;
    let se = new Set();
    for (let left of a) {
        let cur = vowel;
        for (let i = n - 1; i >= left; i--) {
            let len = i - left + 1;
            let sub = s.slice(left, i + 1);
            if (se.has(sub)) continue;
            pr(sub, "len", len, "vowel", cur)
            res += vowel;
            se.add(sub);
            if (isVowel(s[i])) cur--;
        }
        vowel--;
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
    // pr(countVowels(word4))
};

main()