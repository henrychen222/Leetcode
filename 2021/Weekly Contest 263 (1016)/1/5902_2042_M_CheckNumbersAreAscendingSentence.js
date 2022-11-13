/**
 * 10/16/21 evening
 * https://leetcode.com/contest/weekly-contest-263/problems/check-if-numbers-are-ascending-in-a-sentence/
 */

const pr = console.log;

const isNumber = (v) => typeof v === 'number' && isFinite(v);

// Accepted
const areNumbersAscending = (s) => {
   let a = s.split(" ").filter(x => isNumber(x - '0')).map(Number);
   return isAscending(a);
};

const isAscending = (arr) => {
    return arr.every((x, i) => {
        return i === 0 || x > arr[i - 1];
    });
};

const main = () => {
    let s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles";
    pr(areNumbersAscending(s))
};

main()