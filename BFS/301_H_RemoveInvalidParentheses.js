/**
 * 10/01/21 evening
 * https://leetcode.com/problems/remove-invalid-parentheses/
 */

// Accepted --- 140ms 86.58%
// reference: https://www.cnblogs.com/grandyang/p/4944875.html
const removeInvalidParentheses = (s) => {
    let res = [], visit = new Set([s]), q = [s], found = false;
    // pr(visit)
    while (q.length) {
        let cur = q.shift();
        // pr(isValid(cur));
        if (isValid(cur)) {
            res.push(cur);
            found = true;
        }
        if (found) continue;
        for (let i = 0; i < cur.length; i++) {
            if (cur[i] != '(' && cur[i] != ')') continue;
            let ss = cur.slice(0, i) + cur.slice(i + 1); // each string, removed one char all conditions
            // pr(ss, visit)
            if (!visit.has(ss)) {
                q.push(ss);
                visit.add(ss);
            }
        }
    }
    return res;
};

const isValid = (s) => {
    let cnt = 0;
    for (const c of s) {
        if (c == '(') {
            cnt++;
        } else if (c == ')') {
            if (--cnt < 0) return false;
        }
    }
    return cnt == 0;
};

const pr = console.log;
const main = () => {
    let s = "()())()";
    let s2 = "(a)())()";
    let s3 = ")(";
    pr(removeInvalidParentheses(s))
    pr(removeInvalidParentheses(s2))
    pr(removeInvalidParentheses(s3))
};

main()