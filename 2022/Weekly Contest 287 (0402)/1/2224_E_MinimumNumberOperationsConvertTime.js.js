/**
 * 04/02/22 evening
 * https://leetcode.com/contest/weekly-contest-287/problems/minimum-number-of-operations-to-convert-time/
 */

const pr = console.log;

// Accepted
const convertTime = (s, t) => {
    let [hs, ms] = op(s), [ht, mt] = op(t);
    let diff = Math.abs(hs * 60 + ms - (ht * 60 + mt));
    // pr(hs, ms, ht, mt, diff);
    let res = 0;
    res += parseInt(diff / 60);
    diff %= 60;
    res += parseInt(diff / 15);
    diff %= 15;
    res += parseInt(diff / 5);
    diff %= 5;
    // pr(res, diff);
    return res + diff;
};

const op = (s) => {
    let a = s.split(":").map(Number);
    return a;
};

const main = () => {
    let current = "02:30", correct = "04:35";
    let current2 = "11:00", correct2 = "11:01";
    pr(convertTime(current, correct))
    pr(convertTime(current2, correct2))
};

main()