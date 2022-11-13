/**
 * 07/10/21 evening
 * https://leetcode.com/contest/weekly-contest-249/problems/concatenation-of-array/
 */

const pr = console.log;

// Accepted
const getConcatenation = (a) => [...a, ...a];

const main = () => {
    let nums = [1, 2, 1];
    let nums2 = [1, 3, 2, 1];
    pr(getConcatenation(nums))
    pr(getConcatenation(nums2))
};

main()