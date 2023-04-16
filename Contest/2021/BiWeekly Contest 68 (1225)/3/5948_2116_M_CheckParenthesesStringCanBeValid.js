/**
 * 12/25/21 morning
 * https://leetcode.com/contest/biweekly-contest-68/problems/check-if-a-parentheses-string-can-be-valid/
 */

const pr = console.log;

// WA
const canBeValid = (s, locked) => {
    if (validParentheses(s)) return true;
    let n = s.length, lmin, lmax, rmin, rmax;
    if (n % 2 != 0) return false;
    let half = n / 2;
    let a = s.split("");
    for (let i = 0; i < n; i++) {
        if (locked[i] == '0') a[i] = '(';
    }
    [lmax, rmin] = calLR(a);
    for (let i = 0; i < n; i++) {
        if (locked[i] == '0') a[i] = ')';
    }
    [lmin, rmax] = calLR(a);
    calLR(a, lmin, rmax);
    pr("max left", lmax, rmin, "max right", lmin, rmax, 'half', half);
    // for (let l = lmin; l <= lmax; l++) {
    //     let r = n - l;
    // }
    if (lmax > half || rmax > half || rmin < half || lmin < half) return false;
    return true;
};

const calLR = (a_or_s) => {
    let left = 0, right = 0;
    for (const c of a_or_s) c == '(' ? left++ : right++;
    return [left, right];
};

const validParentheses = (s) => { // only covers '(' ')'
    let left = 0;
    for (const c of s) {
        if (c == '(') {
            left++;
        } else {
            if (left > 0) {
                left--;
            } else {
                return false;
            }
        }
    }
    return left == 0;
};

const main = () => {
    let s = "))()))", locked = "010100";
    let s2 = "()()", locked2 = "0000";
    let s3 = ")", locked3 = "0";
    let s_debug1 = "())(()(()(())()())(())((())(()())((())))))(((((((())(()))))(",
        locked_debug1 = "100011110110011011010111100111011101111110000101001101001111";
    pr(canBeValid(s, locked))
    pr(canBeValid(s2, locked2))
    pr(canBeValid(s3, locked3))
    pr(canBeValid(s_debug1, locked_debug1))  // false
};

main()

// let sl = new Set(), sr =  new Set();
// for (let i = 0; i < n; i++) s[i] == '0' ? sl.add(i) :  sr.add(i);
// let diff = Math.abs(sl.size - sr.size);