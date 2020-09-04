/**
 * 9.2 morning evening
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 */

// Accepted --- 104ms 40.25%
const evalRPN1 = (tokens) => {
    let stack = [];
    for (const t of tokens) {
        // console.log(stack);
        if (stack.length != 0) {
            if (t == '+') {
                let l = stack[stack.length - 1];
                let sl = stack[stack.length - 2];
                stack.pop();
                stack.pop();
                stack.push(Number(sl) + Number(l) + '');
            } else if (t == '-') {
                let l = stack[stack.length - 1];
                let sl = stack[stack.length - 2];
                stack.pop();
                stack.pop();
                stack.push(Number(sl) - Number(l) + '');
            } else if (t == '*') {
                let l = stack[stack.length - 1];
                let sl = stack[stack.length - 2];
                stack.pop();
                stack.pop();
                stack.push(Number(sl) * Number(l) + '');
            } else if (t == '/') {
                let l = stack[stack.length - 1];
                let sl = stack[stack.length - 2];
                stack.pop();
                stack.pop();
                stack.push(parseInt(Number(sl) / Number(l)) + '');
            } else {
                stack.push(t);
            }
        } else {
            stack.push(t);
        }
    }
    // console.log(stack);
    return Number(stack[0]);
};

// Accepted --- 136ms 15.77%
const evalRPN2 = (tokens) => {
    let stack = [];
    let data = [];
    for (const t of tokens) {
        if (t == '+') {
            data.push(t);
        } else if (t == '-') {
            data.push(t);
        } else if (t == '*') {
            data.push(t);
        } else if (t == '/') {
            data.push(t);
        } else {
            data.push(Number(t));
        }
    }
    for (const t of data) {
        if (stack.length != 0) {
            if (t == '+') {
                let l = stack[stack.length - 1];
                let sl = stack[stack.length - 2];
                stack.pop();
                stack.pop();
                stack.push(sl + l);
            } else if (t == '-') {
                let l = stack[stack.length - 1];
                let sl = stack[stack.length - 2];
                stack.pop();
                stack.pop();
                stack.push(sl - l);
            } else if (t == '*') {
                let l = stack[stack.length - 1];
                let sl = stack[stack.length - 2];
                stack.pop();
                stack.pop();
                stack.push(sl * l);
            } else if (t == '/') {
                let l = stack[stack.length - 1];
                let sl = stack[stack.length - 2];
                stack.pop();
                stack.pop();
                stack.push(parseInt(sl / l));
            } else {
                stack.push(t);
            }
        } else {
            stack.push(t);
        }
    }
    return Number(stack[0]);
};

const main = () => {
    let tokens = ["2", "1", "+", "3", "*"];
    let tokens2 = ["4", "13", "5", "/", "+"];
    let tokens3 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
    console.log(evalRPN(tokens));
    console.log(evalRPN(tokens2));
    console.log(evalRPN(tokens3));

    // console.log(parseInt(6 / -132));
};

main()