/**
 * 05/22/21 evening
 * https://leetcode.com/contest/weekly-contest-242/problems/longer-contiguous-segments-of-ones-than-zeros/
 */

const pr = console.log;

// Accepted
const mx = Math.max;
const checkZeroOnes = (s) => {
    let one = zero = 0;
    let n = s.length;
    let a = s.split("");
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let len = j - i + 1;
            let sub = a.slice(i, j + 1);
            if (new Set(sub).size == 1) {
                if (a[i] == '0') zero = mx(zero, len);
                if (a[i] == '1') one = mx(one, len);
            }
        }
    }
    // pr(zero, one);
    return one > zero;
};

const main = () => {
    let s = "1101";
    let s2 = "111000";
    let s3 = "110100010";
    pr(checkZeroOnes(s))
    pr(checkZeroOnes(s2))
    pr(checkZeroOnes(s3))
};

main()