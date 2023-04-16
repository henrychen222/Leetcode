/**
 * 03/27/21 evening
 * https://leetcode.com/contest/weekly-contest-234/problems/number-of-different-integers-in-a-string/
 */

const pr = console.log;

// Accepted
const numDifferentIntegers = (word) => {
    let s = ''
    for (const e of word) {
        if (isDigit(e)) {
            s += e;
        } else {
            s += ' ';
        }
    }
    // pr(s);
    let a = s.split(" ");
    // pr(a);
    let res = a.filter(x => x.length != 0).map(Number);
    return new Set(res).size;
};

const isDigit = (n) => {
    if (n == 0 || n == 1 || n == 2 || n == 3 || n == 4 || n == 5 || n == 6 || n == 7 || n == 8 || n == 9) return true;
    return false;
};

const main = () => {
    let word = "a123bc34d8ef34";
    let word2 = "leet1234code234";
    let word3 = "a1b01c001";
    pr(numDifferentIntegers(word));
    pr(numDifferentIntegers(word2));
    pr(numDifferentIntegers(word3));
};

main()