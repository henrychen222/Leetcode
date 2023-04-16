/**
 * 06/05/21 evening
 * https://leetcode.com/contest/weekly-contest-244/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/
 */

const pr = console.log;
const mi = Math.min;
const mx = Math.max;

const minFlips = (s) => {
    let n = s.length;
    let r1 = create(n, '0');
    let r2 = create(n, '1');
    // pr(s);
    // pr(r1, r2);
    let fliptor1 = cal(s, r1);
    let fliptor2 = cal(s, r2);
    let min = Math.min(fliptor1, fliptor2);
    let res = min;
    for (let i = 1; i <= min; i++) {
        s = s.slice(1) + s[0];
        res = Math.min(res, cal(s, r1), cal(s, r2));
    }
    return Math.min(min, res);
};

const cal = (s, r) => {
    let n = s.length;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] != r[i]) cnt++;
    }
    return cnt;
};

const create = (n, start) => {
    let res = start;
    for (let i = 1; i < n; i++) {
        res += (start ^= 1)
    }
    return res;
};

const main = () => {
    let s = "111000";
    let s2 = "010";
    let s3 = "1110";
    let debug1 = "01001001101";
    let debug2 = "10001100101000000";
    pr(minFlips(s))
    pr(minFlips(s2))
    pr(minFlips(s3))
    pr(minFlips(debug1)) // 2
    pr(minFlips(debug2)) // 5
};

main()