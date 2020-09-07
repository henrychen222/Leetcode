/**
 * 6.24 night  9.6 night complete
 * https://leetcode.com/problems/remove-outermost-parentheses/
 */


// Accepted --- 84ms 52.45%
const removeOuterParentheses_refine = (S) => {
    let res = '';
    let stack = [];
    let left = 0;
    let right = 0;
    for (const c of S) {
        if (stack.length != 0) {
            if (c == '(') {
                stack.push(c);
                left++;
            } else {
                stack.push(c);
                right++;
                if (left == right) {
                    stack.pop();
                    stack.shift();
                    left--;
                    right--;
                    res += stack.join("");
                    stack = [];
                }
            }
        } else {
            stack.push(c);
            if (c == '(') {
                left++;
            } else {
                right++;
            }
        }
    }
    return res;
};

// Accepted --- 104ms 21.92%
const removeOuterParentheses = (S) => {
    let res = [];
    let stack = [];
    let left = 0;
    let right = 0;
    for (const c of S) {
        if (stack.length != 0) {
            if (c == '(') {
                stack.push(c);
                left++;
            } else {
                stack.push(c);
                right++;
                if (left == right) {
                    stack.pop();
                    stack.shift();
                    left--;
                    right--;
                    res = res.concat(stack);
                    stack = [];
                }
            }
        } else {
            stack.push(c);
            if (c == '(') {
                left++;
            } else {
                right++;
            }
        }
    }
    return res.join("");
};

const main = () => {
    let S = "(()())(())";
    let S2 = "(()())(())(()(()))";
    let S3 = "()()";
    console.log(removeOuterParentheses(S));
    console.log(removeOuterParentheses(S2));
    console.log(removeOuterParentheses(S3));

    console.log("");
    console.log(removeOuterParentheses_refine(S));
    console.log(removeOuterParentheses_refine(S2));
    console.log(removeOuterParentheses_refine(S3));
};

main()