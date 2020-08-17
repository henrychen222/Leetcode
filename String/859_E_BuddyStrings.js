/**
 * 6.2 evening  8.16 night complete
 * https://leetcode.com/problems/buddy-strings/
 */

// Accepted --- 88ms 40.1MB 53.07%
const buddyStrings_refine = (A, B) => {
    if (A.length != B.length) return false;
    if (ASCIISum(A) != ASCIISum(B)) return false;
    if (A != B) {
        let idx = [];
        for (let i = 0; i < A.length; i++) {
            if (A[i] != B[i]) idx.push(i);
        }
        if (idx.length != 2) return false;
    } else {
        let arr = A.split("");
        let element = [...new Set(arr)];
        for (const e of element) {
            if (getFrequency(arr, e) >= 2) return true;
        }
        return false;
    }
    return true;
};

// Accepted --- 92ms 40.4MB 41.90%
const buddyStrings = (A, B) => {
    if (A.length != B.length) return false;
    if (ASCIISum(A) != ASCIISum(B)) return false;
    if (A != B) { // A != B, can only two chars be different
        let idx = [];
        for (let i = 0; i < A.length; i++) {
            if (A[i] != B[i]) idx.push(i);
        }
        if (idx.length != 2) return false;
    } else { // A == B, if one element in A occur more than twice, which means we can swap these two, make it equal to B
        let element = [...new Set(A.split(""))];
        for (const e of element) {
            if (getFrequency(A.split(""), e) >= 2) return true;
        }
        return false;
    }
    return true;
};

const ASCIISum = (s) => {
    let sum = 0;
    for (const c of s) {
        sum += c.charCodeAt();
    }
    return sum;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let A = "ab",
        B = "ba";
    let A2 = "ab",
        B2 = "ab";
    let A3 = "aa",
        B3 = "aa";
    let A4 = "aaaaaaabc",
        B4 = "aaaaaaacb";
    let A5 = "",
        B5 = "aa";
    let A_debug1 = "abab",
        B_debug1 = "abab";
    console.log(buddyStrings(A, B)); // true
    console.log(buddyStrings(A2, B2)); // false
    console.log(buddyStrings(A3, B3)); // true
    console.log(buddyStrings(A4, B4)); // true
    console.log(buddyStrings(A5, B5)); // false
    console.log(buddyStrings(A_debug1, B_debug1)); // true

    console.log("");
    console.log(buddyStrings_refine(A, B));
    console.log(buddyStrings_refine(A2, B2));
    console.log(buddyStrings_refine(A3, B3));
    console.log(buddyStrings_refine(A4, B4));
    console.log(buddyStrings_refine(A5, B5));
    console.log(buddyStrings_refine(A_debug1, B_debug1));
};

main()



// // need to fix: Time Limit Exceeded 21/23 passed
// const buddyStrings = (A, B) => {
//     let AOrigin = A;
//     for (let i = 0; i < A.length; i++) {
//         for (let j = i + 1; j < A.length; j++) {
//             A = swapStr(A, i, j);
//             // console.log(A);
//             if (A == B) {
//                 return true;
//             }
//             A = AOrigin;
//         }
//     }
//     return false;
// };

// const swapStr = (str, first, last) => {
//     return str.slice(0, first) + str[last] + str.slice(first + 1, last) + str[first] + str.slice(last + 1);
// }

// const buddyStrings1 = (A, B) => {
//     A = A.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("");
//     B = B.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("");
//     if (A == B) {
//         return true;
//     }
//     return false;
// };