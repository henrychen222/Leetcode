/**
 * 07/17/21 evening
 * https://leetcode.com/contest/weekly-contest-250/problems/maximum-number-of-words-you-can-type/
 */

const pr = console.log;

// Accepted
const canBeTypedWords = (text, brokenLetters) => {
    let a = text.split(" ");
    let se = new Set();
    for (const c of brokenLetters) se.add(c);
    let res = 0;
    for (const s of a) {
        let broken = false;
        for (const c of s) {
            if (se.has(c)) {
                broken = true;
                break;
            }
        }
        if (!broken) res++;
    }
    return res;
};

const main = () => {
    let text = "hello world", brokenLetters = "ad";
    let text2 = "leet code", brokenLetters2 = "lt";
    let text3 = "leet code", brokenLetters3 = "e"
    pr(canBeTypedWords(text, brokenLetters))
    pr(canBeTypedWords(text2, brokenLetters2))
    pr(canBeTypedWords(text3, brokenLetters3))
};

main()