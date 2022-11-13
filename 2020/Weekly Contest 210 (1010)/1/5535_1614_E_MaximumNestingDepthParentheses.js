/**
 * 10.10 evening
 * https://leetcode.com/contest/weekly-contest-210/problems/maximum-nesting-depth-of-the-parentheses/
 */

// // wrong
// const maxDepth1 = (s) => {
//     let n = s.length;
//     let res = -1;
//     for (let i = 0; i < n; i++) {
//         if (s[i] = '(') {
//             let left = 1;
//             let depth = 1;
//             for (let j = i + 1; j < n; j++) {
//                 if (left == 0) break;
//                 if (s[j] == '(') {
//                     left++;
//                 } else if (s[j] == ')') {
//                     left--;
//                     depth++;
//                 }
//             }
//             console.log(depth);
//             res = Math.max(res, depth);
//         }
//     }
//     return res;
// };

// Accepted 104ms
const maxDepth = (s) => {
    let current_max = 0;
    let max = 0;
    let n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] == '(') {
            current_max++;
            if (current_max > max) {
                max = current_max;
            }
        }
        else if (s[i] == ')') {
            if (current_max > 0) {
                current_max--;
            } else {
                return -1;
            }
        }
    }
    if (current_max != 0) {
        return -1;
    }
    return max;
};

// 76ms
const maxDepth_uwi = (s) => {
    let h = 0;
    let res = 0;
    for (const c of s) {
        if (c == '(') {
            h++;
        } else if (c == ')') {
            h--;
        }
        res = Math.max(res, h);
    }
    return res;
};

const main = () => {
    let s = "(1+(2*3)+((8)/4))+1";
    let s2 = "(1)+((2))+(((3)))";
    let s3 = "1+(2*3)/(2-1)";
    let s4 = "1";
    console.log(maxDepth(s));
    console.log(maxDepth(s2));
    console.log(maxDepth(s3));
    console.log(maxDepth(s4));

    console.log("");
    console.log(maxDepth_uwi(s));
    console.log(maxDepth_uwi(s2));
    console.log(maxDepth_uwi(s3));
    console.log(maxDepth_uwi(s4));
};

main()

