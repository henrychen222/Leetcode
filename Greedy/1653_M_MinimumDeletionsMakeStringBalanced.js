/**
 * 11.14 morning
 * https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/
 */


// Accepted --- 132ms
const minimumDeletions = (s) => {
    let res = 0;
    let stack = [];
    for (const c of s) {
        if (stack.length != 0 && stack[stack.length - 1] == 'b' && c == 'a') { // 'ba exist'
            res++;
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    // console.log(stack);
    return res;
};

// Accepted --- 124ms
const minimumDeletions_stack_modify = (s) => {
    let res = 0;
    let stack = [];
    for (const c of s) {
        if (stack.length != 0 && stack[stack.length - 1].charCodeAt() > c.charCodeAt()) { // 'ba exist'
            res++;
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return res;
};

// Accepted --- 120ms  Stack
// reference: https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/discuss/935373/C%2B%2B-Stack-O(n)-solution
const minimumDeletions_stack = (s) => {
    let n = s.length;
    let res = 0;
    let stack = [];
    for (let i = n - 1; ~i; i--) {
        if (stack.length != 0 && stack[stack.length - 1].charCodeAt() < s[i].charCodeAt()) { // a < b
            res++;
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return res;
};

// Accepted --- 164ms  (idea: Find the split point)
/**
 * reference:
 * https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/discuss/935399/C%2B%2B-Minimalism-O(n)
 * https://leetcode.com/contest/biweekly-contest-39/ranking/1/   jonathanirvings qwnjc
 */
const minimumDeletions1 = (s) => {
    let a = 0;
    let b = 0;
    for (const c of s) {
        if (c == 'a') a++;
    }
    let res = a;
    for (const c of s) {
        if (c == 'b') {
            // console.log(c == 'b', b, b + (c == 'b'), b + 1);
            b++;
        } else {
            a--;
        }
        res = Math.min(res, a + b);
    }
    return res;
};

// Accepted --- 172ms
const minimumDeletions1_modify = (s) => {
    let a = 0;
    let b = 0;
    for (const c of s) {
        if (c == 'a') a++;
    }
    let res = a;
    for (const c of s) {
        c == 'b' ? b++ : a--;
        res = Math.min(res, a + b);
    }
    return res;
};

// wrong
// const minimumDeletions = (s) => {
//     let temp = [...new Set(s.split(""))];
//     if (temp == 'b') return 0;
//     let d1 = deleteCount(s, 'a');
//     let d2 = deleteCount(s, 'b');
//     // console.log(d1, d2);
//     return Math.min(d1, d2);
// };

// const deleteCount = (s, c) => {
//     let keep = c == 'a' ? 'b' : 'a';
//     let start = s.indexOf(keep);
//     let end = s.lastIndexOf(keep);
//     // console.log(c, start, end);
//     let de = 0;
//     for (let i = start; i <= end; i++) {
//         if (s[i] == c) {
//             de++;
//         }
//     }
//     if (de == 0) {
//         if (keep == 'a') {
//             de += start;
//         } else {
//             de += s.length - end - 1;
//         }
//     }
//     return de;
// };

const main = () => {
    let s = "aababbab"; // 2
    let s2 = "bbaaaaabb"; // 2
    let s3 = "aabbbbbaaa" // 3
    let s_debug1 = "b";
    let s_debug2 = "baababbaabbaaabaabbabbbabaaaaaabaabababaaababbb";
    console.log(minimumDeletions(s));
    console.log(minimumDeletions(s2));
    console.log(minimumDeletions(s3));
    console.log(minimumDeletions(s_debug1));
    console.log(minimumDeletions(s_debug2));
};

main()