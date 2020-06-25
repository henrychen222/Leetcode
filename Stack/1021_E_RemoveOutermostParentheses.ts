/**
 * 6.24 night
 * https://leetcode.com/problems/remove-outermost-parentheses/
 */

// don't know
const removeOuterParentheses = (S: string): string => {
    for (let i = 0; i < S.length; i++) {

    }
    return null;
};

const operate = () => {
    let S = "(()())(())";
    let S2 = "(()())(())(()(()))";
    let S3 = "()()";
    console.log(removeOuterParentheses(S));
    console.log(removeOuterParentheses(S2));
    console.log(removeOuterParentheses(S3));
};

operate()