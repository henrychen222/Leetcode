/**
 * 05/22/21 evening
 * https://leetcode.com/problems/nth-digit/
 */

/**
 * reference: https://leetcode.com/problems/nth-digit/discuss/88363/Java-solution
 */
// Accepted --- 72ms 95.74%
const findNthDigit = (n) => {
    let len = cur = 1; // len: length of 0 ~ 9, 10 ~ 99, 100 ~ 999 ... 
    let cnt = 9; // how many numbers between 0 ~ 9, 10 ~ 99, 100 ~ 999 ...
    while (n > len * cnt) {
        n -= len * cnt;
        len++;
        cnt *= 10;
        cur *= 10;
        // pr(len, cur, cnt, n)
    }
    cur += (n - 1) / len >> 0; // current number
    let s = cur + '';
    // pr(cur, s);
    let idx = (n - 1) % len;
    return s[idx];
};


// MLE
const findNthDigit1 = (n) => {
    let s = '';
    let i = 1;
    while (s.length < n) {
        let tmp = i + '';
        s += tmp;
        i++;
    }
    // pr(s);
    return s[n - 1];
};

const pr = console.log;
const main = () => {
    let n = 3;
    let n2 = 11;
    let n3 = 2147483647;
    let debug1 = 100000000;
    pr(findNthDigit(n));
    pr(findNthDigit(n2));
    pr(findNthDigit(n3));
    pr(findNthDigit(debug1));
};

main()