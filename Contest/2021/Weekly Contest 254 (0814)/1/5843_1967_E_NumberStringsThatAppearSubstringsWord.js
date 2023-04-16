/**
 * 08/14/21 evening
 * https://leetcode.com/contest/weekly-contest-254/problems/number-of-strings-that-appear-as-substrings-in-word/
 */

const pr = console.log;

// Accepted
const numOfStrings = (patterns, word) => {
    let cnt = 0
    for (const p of patterns) {
        if (word.indexOf(p) != -1) cnt++;
    }
    return cnt;
};

const main = () => {
    let patterns = ["a", "abc", "bc", "d"], word = "abc";
    let patterns2 = ["a", "b", "c"], word2 = "aaaaabbbbb"
    let patterns3 = ["a", "a", "a"], word3 = "ab";
    pr(numOfStrings(patterns, word))
    pr(numOfStrings(patterns2, word2))
    pr(numOfStrings(patterns3, word3))
};

main()