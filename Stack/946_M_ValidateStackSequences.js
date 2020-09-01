/**
 * 8.31 night
 * https://leetcode.com/problems/validate-stack-sequences/
 */


// Accepted --- 88ms 52.21%
const validateStackSequences = (pushed, popped) => {
    let stack = [pushed[0]];
    pushed.shift();
    for (;;) {
        let end = stack[stack.length - 1];
        if (end == popped[0]) {
            stack.pop();
            popped.shift();
        } else {
            if (pushed.length == 0) break;
            stack.push(pushed[0]);
            pushed.shift();
        }
        // console.log(pushed, popped, stack, popped.length);
        if (popped.length == 0) return true;
    }
    return false;
};

// Accepted --- 108ms 22.06%
const validateStackSequences2 = (pushed, popped) => {
    let stack = [pushed[0]];
    pushed.shift();
    for (;;) {
        let end = stack[stack.length - 1];
        if (end == popped[0]) {
            stack.pop();
            popped.shift();
        } else {
            if (pushed.length == 0) return false;
            stack.push(pushed[0]);
            pushed.shift();
        }
        if (popped.length == 0) return true;
    }
};

// Accepted --- 132ms 10.54%
const validateStackSequences3 = (pushed, popped) => {
    let stack = [pushed[0]];
    pushed.shift();
    for (;;) {
        let end = stack[stack.length - 1];
        if (end == popped[0]) {
            stack.pop();
            popped.shift();
        } else {
            if (pushed.length == 0) break;
            stack.push(pushed[0]);
            pushed.shift();
        }
        if (popped.length == 0) break;
    }
    if (popped.length == 0) return true;
    return false;
};

// Accepted --- 132ms 10.54%
const validateStackSequences4 = (pushed, popped) => {
    let stack = [pushed[0]];
    pushed.shift();
    while (true) {
        let end = stack[stack.length - 1];
        if (end == popped[0]) {
            stack.pop();
            popped.shift();
        } else {
            if (pushed.length == 0) break;
            stack.push(pushed[0]);
            pushed.shift();
        }
        if (popped.length == 0) return true;
    }
    return false;
};

const main = () => {
    let pushed = [1, 2, 3, 4, 5],
        popped = [4, 5, 3, 2, 1];
    let pushed2 = [1, 2, 3, 4, 5],
        popped2 = [4, 3, 5, 1, 2];
    console.log(validateStackSequences(pushed, popped));
    console.log(validateStackSequences(pushed2, popped2));
};

main()