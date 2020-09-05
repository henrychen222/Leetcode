/**
 * 9.3 evening
 * https://leetcode.com/problems/decode-string/
 */

// Accepted --- 56ms 99.48%
const decodeString = (s) => {
    let stack = [];
    for (const c of s) {
        if (stack.length != 0) {
            if (c == '[') {
                stack.push(c);
            } else if (c == ']') {
                let tmp = '';
                while (true) {
                    let end = stack[stack.length - 1];
                    if (end == '[') {
                        stack.pop();
                        break;
                    }
                    tmp += reverse2(end);
                    stack.pop();
                }
                // console.log(stack)
                let t = '';
                while (true) {
                    if (stack.length == 0) break;
                    let end = stack[stack.length - 1];
                    if (!isDigit(Number(end))) break;
                    t += end;
                    // console.log(t);
                    stack.pop();
                }
                t = reverse2(t);
                // console.log(t, tmp, stack);
                tmp = reverse2(tmp).repeat(Number(t));
                // console.log(tmp, stack);
                stack.push(tmp);
            } else {
                stack.push(c);
            }
        } else {
            stack.push(c);
        }
        // console.log(stack);
    }
    return stack.join("");
};

const reverse2 = (s) => {
    let res = "";
    for (let i = s.length - 1; i >= 0; i--) {
        res += s[i];
    }
    return res;
};

const isDigit = (n) => {
    if (n == 0 || n == 1 || n == 2 || n == 3 || n == 4 || n == 5 || n == 6 || n == 7 || n == 8 || n == 9) return true;
    return false;
};

const main = () => {
    let s = "3[a]2[bc]";
    let s2 = "3[a2[c]]";
    let s3 = "2[abc]3[cd]ef";
    let s4 = "abc3[cd]xyz";
    let s5 = "100[leetcode]";
    console.log(decodeString(s));
    console.log(decodeString(s2));
    console.log(decodeString(s3));
    console.log(decodeString(s4));
    console.log(decodeString(s5));
};

main()