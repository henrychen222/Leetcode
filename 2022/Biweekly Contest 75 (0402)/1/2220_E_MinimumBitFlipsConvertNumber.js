/**
 * 04/02/22 morning
 * https://leetcode.com/contest/biweekly-contest-75/problems/minimum-bit-flips-to-convert-number/
 */

const pr = console.log;

// Accepted
const minBitFlips = (start, goal) => {
    let s = start.toString(2), t = goal.toString(2), res = 0;
    s = '0'.repeat(32 - s.length) + s;
    t = '0'.repeat(32 - t.length) + t;
    // pr(s, t);
    for (let i = 0; i < 32; i++) {
        if (s[i] != t[i]) res++;
    }
    return res;
};

const main = () => {
    let start = 10, goal = 7;
    let start2 = 3, goal2 = 4;
    pr(minBitFlips(start, goal));
    pr(minBitFlips(start2, goal2));
};

main()