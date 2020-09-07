/**
 * 9.6 evening
 * https://leetcode.com/problems/score-of-parentheses/
 */

// Accepted --- 72ms 84.96%
const scoreOfParentheses = (S) => {
    let stack = [];
    for (let i = 0; i < S.length; i++) {
        if (stack.length != 0) {
            if (S[i] == '(') {
                stack.push(S[i]);
            } else {
                let l = stack[stack.length - 1];
                if (l == '(') {
                    stack.pop();
                    stack.push(1);
                } else {
                    let tmp = 0;
                    while (true) {
                        let end = stack[stack.length - 1];
                        if (end == '(') {
                            stack.pop();
                            stack.push(2 * tmp);
                            break;
                        } else {
                            tmp += end;
                            stack.pop();
                        }
                    }
                }
            }
        } else {
            stack.push(S[i]);
        }
    }
    console.log(stack);
    return stack.reduce((acc, cur) => acc + cur);
};

const main = () => {
    let S = "()";
    let S2 = "(())";
    let S3 = "()()";
    let S4 = "(()(()))";
    console.log(scoreOfParentheses(S));
    console.log(scoreOfParentheses(S2));
    console.log(scoreOfParentheses(S3));
    console.log(scoreOfParentheses(S4));
};

main()