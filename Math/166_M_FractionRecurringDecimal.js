/**
 * 02/17/22 evening
 * https://leetcode.com/problems/fraction-to-recurring-decimal/
 */

const pr = console.log;

// Accepted --- 76ms 68.24%
const fractionToDecimal = (x, d) => {
    let m = new Map(), repeat = '', dir = 1, res = '';
    if (x < 0) {
        x = -x;
        dir ^= 1;
    }
    if (d < 0) {
        d = -d;
        dir ^= 1;
    }
    let rem = x % d;
    res += dir ? '' : '-';
    // reference: https://www.geeksforgeeks.org/find-recurring-sequence-fraction/
    while (rem != 0 && !m.has(rem)) { // keep finding remainder until either remainder becomes 0 or repeats
        m.set(rem, repeat.length);
        rem *= 10;
        repeat += Math.floor(rem / d);
        rem %= d;
    }
    // pr(rem, repeat, x / d, Math.floor(x / d), parseInt(x / d));
    if (m.has(rem)) {
        let idx = m.get(rem);
        res += `${Math.floor(x / d)}.${repeat.slice(0, idx)}(${repeat.slice(idx)})`;
    } else {
        res += divideToDoubleRemoveE(x, d);
        if (Number(res) == 0) res = '0';
    }
    return res;
};

const divideToDoubleRemoveE = (x, d) => {
    let v = x / d, s = v + '', cut = s.indexOf('e'), len = s.slice(0, cut).length - 1 + Number(s.slice(cut + 2));
    if (cut == -1) {
        return s;
    } else {
        for (let i = len;; i++) {
            let t = v.toFixed(i);
            if (t[t.length - 1] == 0) return v.toFixed(i - 1);
        }
    }
};

const main = () => {
    let numerator = 1,
        denominator = 2;
    let numerator2 = 2,
        denominator2 = 1;
    let numerator3 = 4,
        denominator3 = 333;
    let numerator_debug1 = 1,
        denominator_debug1 = 6;
    let numerator_debug2 = 7
    denominator_debug2 = -12;
    let numerator_debug3 = 0,
        denominator_debug3 = -5;
    let numerator_debug4 = 1,
        denominator_debug4 = 214748364;
    let numerator_debug5 = -1,
        denominator_debug5 = -2147483648;
    let numerator_debug6= -2147483648,
        denominator_debug6 = -1999;
    pr(fractionToDecimal(numerator, denominator)) // 0.5
    pr(fractionToDecimal(numerator2, denominator2)) // 2
    pr(fractionToDecimal(numerator3, denominator3)) // 0.(012)
    pr(fractionToDecimal(numerator_debug1, denominator_debug1)) // 0.1(6)
    pr(fractionToDecimal(numerator_debug2, denominator_debug2)) // -0.58(3)
    pr(fractionToDecimal(numerator_debug3, denominator_debug3)) // 0
    pr(fractionToDecimal(numerator_debug4, denominator_debug4)) // 0.00(...)
    pr(fractionToDecimal(numerator_debug5, denominator_debug5)) // 0.0000000004656612873077392578125
    pr(fractionToDecimal(numerator_debug6, denominator_debug6))
};

main()