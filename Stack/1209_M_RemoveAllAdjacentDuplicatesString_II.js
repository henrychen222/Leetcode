/**
 * 9.5 morning
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
 */

// time limit 17/18
const removeDuplicates = (s, k) => {
    let stack = [];
    for (const c of s) {
        if (stack.length != 0) {
            let end = stack[stack.length - 1];
            if (c == end) {
                stack.push(c);
                let len = stack.length;
                let tmp = stack.slice(len - k, len);
                if (tmp.length == k) {
                    if ([...new Set(tmp)].length == 1) {
                        let arr = stack.slice(0, len - k);
                        stack = [];
                        stack = arr;
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

// time limit 17/18
const removeDuplicates1 = (s, k) => {
    let stack = [];
    for (const c of s) {
        if (stack.length != 0) {
            let end = stack[stack.length - 1];
            if (c == end) {
                stack.push(c);
                let len = stack.length;
                let tmp = stack.slice(len - k, len);
                // console.log(tmp, stack);
                if (tmp.length == k) {
                    if ([...new Set(tmp)].length == 1) {
                        for (let i = 1; i <= k; i++) {
                            stack.pop();
                        }
                    }
                }
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

const main = () => {
    let s = "abcd",
        k = 2;
    let s2 = "deeedbbcccbdaa",
        k2 = 3;
    let s3 = "pbbcggttciiippooaais",
        k3 = 2;
    console.log(removeDuplicates(s, k));
    console.log(removeDuplicates(s2, k2));
    console.log(removeDuplicates(s3, k3));
};

main()