/**
 * 10/23/21 evening
 * https://leetcode.com/contest/weekly-contest-264/problems/number-of-valid-words-in-a-sentence/
 */

const pr = console.log;

// Accepted
const countValidWords = (ss) => {
    let a = ss.split(" "), res = 0;
    // pr(a);
    for (const s of a) {
        if (s.length > 0) {
            // pr(s, ok(s))
            if (ok(s)) res++;
        }
    }
    return res;
};

const ok = (s) => {
    let punctuation = 0, hyphen = 0, digit = 0;
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let c = s[i];
        if (c == '!' || c == '.' || c == ',') {
            if (i != n - 1) return false;
            punctuation++;
        } else if (c == '-') {
            if (i == 0 || i == n - 1) return false;
            if (!isLowerCaseLetter(s[i - 1]) || !(isLowerCaseLetter(s[i + 1]))) return false;
            hyphen++;
        } else if (isDigit(c)) {
            digit++;
        }
    }
    return digit == 0 && punctuation <= 1 && hyphen <= 1;
};

const isDigit = (c) => {
    let s = '0123456789';
    return s.indexOf(c) != -1;
};

const isLowerCaseLetter = (c) => {
    let ascii = c.charCodeAt();
    return ascii >= 97 && ascii <= 122;
};

const main = () => {
    let sentence = "cat and  dog";
    let sentence2 = "!this  1-s b8d!";
    let sentence3 = "alice and  bob are playing stone-game10";
    let sentence4 = "he bought 2 pencils, 3 erasers, and 1  pencil-sharpener.";
    pr(countValidWords(sentence))
    pr(countValidWords(sentence2))
    pr(countValidWords(sentence3))
    pr(countValidWords(sentence4))
};

main()