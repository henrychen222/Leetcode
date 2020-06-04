/**
 * 6.2 evening
 * https://leetcode.com/problems/buddy-strings/
 */

// need to fix: Time Limit Exceeded 21/23 passed
const buddyStrings = (A, B) => {
    let AOrigin = A;
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            A = swapStr(A, i, j);
            // console.log(A);
            if (A == B) {
                return true;
            }
            A = AOrigin;
        }
    }
    return false;
};

const swapStr = (str, first, last) => {
    return str.slice(0, first) + str[last] + str.slice(first + 1, last) + str[first] + str.slice(last + 1);
}

// const buddyStrings1 = (A, B) => {
//     A = A.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("");
//     B = B.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("");
//     if (A == B) {
//         return true;
//     }
//     return false;
// };

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

    console.log(buddyStrings(A, B)); // true
    console.log(buddyStrings(A2, B2)); // false
    console.log(buddyStrings(A3, B3)); // true
    console.log(buddyStrings(A4, B4)); // true
    console.log(buddyStrings(A5, B5)); // falses

    console.log("")
    // console.log(buddyStrings1(A, B));
    // console.log(buddyStrings1(A2, B2));
    // console.log(buddyStrings1(A3, B3));
    // console.log(buddyStrings1(A4, B4));
    // console.log(buddyStrings1(A5, B5));

};

main()