/*
 * 03/11/23 evening
 * https://leetcode.com/contest/weekly-contest-336/problems/count-the-number-of-vowel-strings-in-range/
 */

const pr = console.log;

const isVowel = (c) => 'aeiou'.indexOf(c) != -1;

// Accepted
const vowelStrings = (a, l, r) => {
    let res = 0;
    for (let i = l; i <= r; i++) {
        let s = a[i];
        if (isVowel(s[0]) && isVowel(s[s.length - 1])) res++;
    }
    return res;
};

const main = () => {
    let a = ["are", "amy", "u"], l = 0, r = 2;
    let a2 = ["hey", "aeo", "mu", "ooo", "artro"], l2 = 1, r2 = 4;
    let a_debug1 = ["ce", "ai"], l_debug1 = 1, r_debug1 = 1;
    let a_debug2 = ["vo", "j", "i", "s", "i"], l_debug2 = 0, r_debug2 = 3;
    let a_debug3 = ["m", "qi", "ae"], l_debug3 = 1, r_debug3 = 1;
    pr(vowelStrings(a, l, r))
    pr(vowelStrings(a2, l2, r2))
    pr(vowelStrings(a_debug1, l_debug1, r_debug1)) // 1
    pr(vowelStrings(a_debug2, l_debug2, r_debug2)) // 1
    pr(vowelStrings(a_debug3, l_debug3, r_debug3)) // 0
};

main()