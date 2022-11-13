/**
 * 07/23/22 evening
 * https://leetcode.com/contest/weekly-contest-303/problems/first-letter-to-appear-twice/
 */

const pr = console.log;

// Accepted
const repeatedCharacter = (s) => {
    let cur = '';
    for (const c of s) {
        cur += c;
        if (cur.length != new Set(cur).size) return c;
    }
};

const main = () => {
    let s = "abccbaacz";
    let s2 = "abcdd";
    pr(repeatedCharacter(s))
    pr(repeatedCharacter(s2))
};

main()