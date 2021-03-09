/**
 * 03/06/21 evening
 * https://leetcode.com/contest/weekly-contest-231/problems/check-if-binary-string-has-at-most-one-segment-of-ones/
 */

const pr = console.log;

// Accepted
const checkOnesSegment = (s) => {
    let a = s.split("0");
    // pr(a);
    let res = 0;
    for (const e of a) {
        if (e.length != 0) res++;
    }
    return res == 1;
};

const main = () => {
    let s = "1001";
    let s2 = "110";
    pr(checkOnesSegment(s));
    pr(checkOnesSegment(s2));
};

main()