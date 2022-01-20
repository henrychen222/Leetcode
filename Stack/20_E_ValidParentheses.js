/**
 * 12/25/21 afternoon
 * https://leetcode.com/problems/different-ways-to-add-parentheses/
 */

const isValid = (s) => validParentheses(s);

// Accepted --- 76ms 64.06%
const m = new Map([['(', ')'], ['{', '}'], ['[', ']']])
const validParentheses = (s) => {
    let st = [];
    for (const c of s) {
        if (m.has(c)) {
            st.push(c);
        } else {
            let preL = st.pop();
            if (m.get(preL) != c) {
                return false;
            }
        }
    }
    return st.length == 0;
};

const pr = console.log;
let s = "()";
let s2 = "()[]{}";
let s3 = "(]"
let s4 = "([)]";
let s5 = "{[]}";
let s6 = "[({])}";
pr(isValid(s))
pr(isValid(s2))
pr(isValid(s3))
pr(isValid(s4)) // false
pr(isValid(s5)) // true
pr(isValid(s6)) // false