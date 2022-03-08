/**
 * 12/25/21 morning
 * https://leetcode.com/contest/biweekly-contest-68/problems/check-if-a-parentheses-string-can-be-valid/
 */

const pr = console.log;

// Accepted
const canBeValid = (s, locked) => {
    let a = s.split(""), n = s.length; left = 0, right = 0, immutable = '1';
    if (n & 1) return false;
    let half = n / 2;
    for (let i = 0; i < n; i++) {
        if (locked[i] == immutable) {
            a[i] == '(' ? left++ : right++;
        }
    }
    // pr(s, left, right);
    if (left > half || right > half) return false;
    for (let i = 0; i < n; i++) {
        if (locked[i] != immutable) {
            if (left < half) { // modify string to valid until left, right is equal
                a[i] = '(';
                left++;
            } else {
                a[i] = ')';
            }
        }
    }
    // pr(a.join(""), left, right)
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        a[i] == '(' ? cnt++ : cnt--;
        if (cnt < 0) return false;
    }
    return true;
};

const main = () => {
    let s = "))()))", locked = "010100";
    let s2 = "()()", locked2 = "0000";
    let s3 = ")", locked3 = "0";
    let s_debug1 = "())(()(()(())()())(())((())(()())((())))))(((((((())(()))))(",
        locked_debug1 = "100011110110011011010111100111011101111110000101001101001111";
    let s_debug2 = "(()())",
        locked_debug2 = "111111";
    pr(canBeValid(s, locked))
    pr(canBeValid(s2, locked2))
    pr(canBeValid(s3, locked3))
    pr(canBeValid(s_debug1, locked_debug1))  // false
    pr(canBeValid(s_debug2, locked_debug2))  // true
};

main()