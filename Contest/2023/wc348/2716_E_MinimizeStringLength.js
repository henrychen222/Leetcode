/*
 * 06/03/23 evening
 * https://leetcode.com/contest/weekly-contest-348/problems/minimize-string-length/
 */

const pr = console.log;

const minimizedStringLength = (s) => new Set(s).size

const main = () => {
    let s = "aaabc";
    let s2 = "cbbd";
    let s3 = "dddaaa";
    pr(minimizedStringLength(s))
    pr(minimizedStringLength(s2))
    pr(minimizedStringLength(s3))
};

main()