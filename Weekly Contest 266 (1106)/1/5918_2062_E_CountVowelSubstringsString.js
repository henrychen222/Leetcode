/**
 * 11/06/21 evening
 * https://leetcode.com/contest/weekly-contest-266/problems/count-vowel-substrings-of-a-string/
 */

const pr = console.log;

// Accepted
const countVowelSubstrings = (s) => {
    let n = s.length, res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let ss = s.slice(i, j + 1);
            // pr(ss, ok(ss))
            if (ok(ss)) res++;
        }
    }
    return res;
};


const ok = (s) => {
    let a = 0, e = 0, i = 0, o = 0, u = 0;
    for (const c of s) {
        if (c == 'a') {
            a++;
        } else if (c == 'e') {
            e++;
        } else if (c == 'i') {
            i++;
        } else if (c == 'o') {
            o++;
        } else if (c == 'u') {
            u++;
        } else {
            return false;
        }
    }
    return a > 0 && e > 0 && i > 0 && o > 0 && u > 0;
};

const main = () => {
    let word = "aeiouu";
    let word2 = "unicornarihan";
    let word3 = "cuaieuouac";
    let word4 = "bbaeixoubb";
    pr(countVowelSubstrings(word))
    pr(countVowelSubstrings(word2))
    pr(countVowelSubstrings(word3))
    pr(countVowelSubstrings(word4))
};

main()