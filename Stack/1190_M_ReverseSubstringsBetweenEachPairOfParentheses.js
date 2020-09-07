/**
 * 9.6 night
 * https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/
 * 
 * similar to 856
 */

// Accepted --- 80ms 68.35%
const reverseParentheses = (s) => {
    let stack = [];
    for (const c of s) {
        if (stack.length != 0) {
            if (c == '(') {
                stack.push(c);
            } else if (c == ')') {
                let tmp = [];
                while (true) {
                    let end = stack[stack.length - 1];
                    if (end == '(') {
                        stack.pop();
                        stack = stack.concat(tmp);
                        break;
                    } else {
                        tmp.push(end);
                        stack.pop();
                    }
                }
            } else {
                stack.push(c);
            }
        } else {
            stack.push(c);
        }
    }
    return stack.join("");
};

const main = () => {
    let s = "(abcd)";
    let s2 = "(u(love)i)";
    let s3 = "(ed(et(oc))el)";
    let s4 = "a(bcdefghijkl(mno)p)q";
    console.log(reverseParentheses(s));
    console.log(reverseParentheses(s2));
    console.log(reverseParentheses(s3)); // etco -> octe -> edocteel
    console.log(reverseParentheses(s4));
};

main()