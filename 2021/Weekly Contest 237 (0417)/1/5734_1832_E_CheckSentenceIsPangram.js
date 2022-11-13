/**
 * 04/17/21 evening
 * https://leetcode.com/contest/weekly-contest-237/problems/check-if-the-sentence-is-pangram/
 */

const pr = console.log;

// Accepted
const checkIfPangram = (sentence) => {
    let f = Array(26).fill(0);
    for (const c of sentence) {
        f[c.charCodeAt() - 97]++;
    }
    for (const e of f) {
        if (e == 0) return 0;
    }
    return 1;
};

const main = () => {
    let sentence = "thequickbrownfoxjumpsoverthelazydog";
    let sentence2 = "leetcode";
    pr(checkIfPangram(sentence));
    pr(checkIfPangram(sentence2));
};

main()
