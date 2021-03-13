/**
 * 9.5 morning  03/12/21 fixed
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
 */

// Accepted --- 192ms 14.37%
const removeDuplicates = (s, k) => {
    let pre = s.length;
    while (1) {
        for (let i = 97; i <= 122; i++) {
            let c = String.fromCharCode(i);
            let tmp = c.repeat(k);
            s = s.split(tmp).join("");
        }
        if (pre == s.length) break;
        pre = s.length;
    }
    return s;
};

// TLE
const removeDuplicates1 = (s, k) => {
    let rel = [];
    while (1) {
        let n = s.length;
        for (let i = 0; i < n; i++) {
            if (i + 1 < n) {
                if (s[i] == s[i + 1]) {
                    if (i + k > n) continue;
                    let tmp = s.slice(i, i + k);
                    if ([...new Set(tmp)].length == 1) {
                        s = s.replace(tmp, "");
                        break;
                    }
                }
            }
        }
        if (s.length == rel[0]) break;
        rel.unshift(s.length);
    }
    return s;
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

///////////////////////////////// 9.5 morning /////////////////////////////////////
// // time limit 17/18
// const removeDuplicates = (s, k) => {
//     let stack = [];
//     for (const c of s) {
//         if (stack.length != 0) {
//             let end = stack[stack.length - 1];
//             if (c == end) {
//                 stack.push(c);
//                 let len = stack.length;
//                 let tmp = stack.slice(len - k, len);
//                 if (tmp.length == k) {
//                     if ([...new Set(tmp)].length == 1) {
//                         let arr = stack.slice(0, len - k);
//                         stack = [];
//                         stack = arr;
//                     }
//                 }
//             } else {
//                 stack.push(c);
//             }
//         } else {
//             stack.push(c);
//         }
//     }
//     return stack.join("");
// };

// // time limit 17/18
// const removeDuplicates1 = (s, k) => {
//     let stack = [];
//     for (const c of s) {
//         if (stack.length != 0) {
//             let end = stack[stack.length - 1];
//             if (c == end) {
//                 stack.push(c);
//                 let len = stack.length;
//                 let tmp = stack.slice(len - k, len);
//                 // console.log(tmp, stack);
//                 if (tmp.length == k) {
//                     if ([...new Set(tmp)].length == 1) {
//                         for (let i = 1; i <= k; i++) {
//                             stack.pop();
//                         }
//                     }
//                 }
//             } else {
//                 stack.push(c);
//             }
//         } else {
//             stack.push(c);
//         }
//         // console.log(stack);
//     }
//     return stack.join("");
// };