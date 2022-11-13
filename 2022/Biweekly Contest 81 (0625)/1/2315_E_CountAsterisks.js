/**
 * 06/25/22 morning
 * https://leetcode.com/contest/biweekly-contest-81/problems/count-asterisks/
 */

const pr = console.log;

// Accepted
const countAsterisks = (s) => {
    let a = s.split("|"), res = 0;
    for (let i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
            for (const c of a[i]) {
                if (c == '*') res++;
            }
        }
    }
    return res;
};

const main = () => {
    let s = "l|*e*et|c**o|*de|";
    let s2 = "iamprogrammer";
    let s3 = "yo|uar|e**|b|e***au|tifu|l";
    pr(countAsterisks(s))
    pr(countAsterisks(s2))
    pr(countAsterisks(s3))
};

main()