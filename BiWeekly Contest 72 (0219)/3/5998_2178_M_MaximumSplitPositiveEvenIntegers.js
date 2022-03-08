/**
 * 02/19/22 morning
 * https://leetcode.com/contest/biweekly-contest-72/problems/maximum-split-of-positive-even-integers/
 */

const pr = console.log;

/*
 2 + 4 + 6 = 12
 2 + 4 + 6 + 8 = 20
 2 + 4 + 6 + 8 + 10 = 30
 2 + 4 + 6 + 8 + 10 + 12 = 42

 28 
 2 + 6 + 8 + 12
 */
// Accepted
const maximumEvenSplit = (x) => {
    if (x & 1) return [];
    if (x == 2) return [2];
    let se = new Set(), sum;
    for (let i = 2; i < x; i += 2) {
        sum = sumOfRange(2, i);
        se.add(i);
        if (sum == x) {
            return [...se];
        } else if (sum > x) {
            se.delete(i);
            sum -= i;
            break;
        }
    }
    let rest = x - sum;
    // pr(se, sum, rest)
    for (const e of se) {
        let expect = e + rest;
        if (!se.has(expect)) {
            se.add(expect)
            se.delete(e);
            return [...se];
        }
    }
    return [];
};

const sumOfRange = (l, r) => {
    let cnt = (r - l) / 2 + 1;
    return (l + r) * cnt / 2;
};


const main = () => {
    let finalSum = 12;
    let finalSum2 = 7;
    let finalSum3 = 28;
    let test = 1e10;
    let debug1 = 2;
    pr(maximumEvenSplit(finalSum))
    pr(maximumEvenSplit(finalSum2))
    pr(maximumEvenSplit(finalSum3))
    pr(maximumEvenSplit(test))
    pr(maximumEvenSplit(debug1)) // [2]
};

main()