/**
 * 06/16/21 night
 * https://leetcode.com/problems/generate-parentheses/
 * 
 * reference:
 * https://www.cnblogs.com/grandyang/p/4444160.html
 */

let res;
const generateParenthesis = (n) => {
    res = [];
    // dfs(n, n, "");
    helper(n, n, "");
    return res;
};

// Accepted --- 80ms 69.34%
// Accepted --- 68ms 99.01%
const dfs = (left, right, cur) => {
    if (left > right) return; // left > right means cur has more ")" than "(", invalid “)(” will generate
    if (left == 0 && right == 0) return res.push(cur);
    if (left > 0) dfs(left - 1, right, cur + '(');
    if (right > 0) dfs(left, right - 1, cur + ')');
};

// Accepted --- 72ms 95.87%
const helper = (left, right, cur) => {
    if (left < 0 || right < 0 || left > right) return;
    if (left == 0 && right == 0) return res.push(cur);
    helper(left - 1, right, cur + '(');
    helper(left, right - 1, cur + ')');
};

const pr = console.log;
const main = () => {
    let n = 1;
    let n2 = 2;
    let n3 = 3;
    pr(generateParenthesis(n))
    pr(generateParenthesis(n2))
    pr(generateParenthesis(n3))
};

main()