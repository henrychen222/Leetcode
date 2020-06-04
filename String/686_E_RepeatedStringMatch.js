/**
 * 6.2 evening
 * https://leetcode.com/problems/repeated-string-match/
 */

// Time Limit Exceeded need to fix
const repeatedStringMatch = (A, B) => {
    let count = 0;
    let repeatStr = "";
    while (!repeatStr.includes(B)) {
        repeatStr += A;
        console.log(repeatStr);
        count++;
    }
    return count;
};

const main = () => {
    let A = "abcd",
        B = "cdabcdab";
    let A_debug1 = "a",
        B_debug1 = "aa";
    let A_debug2 = "a",
        B_debug2 = "a";
    let A_debug3 = "aa",
        B_debug3 = "a";

    console.log(repeatedStringMatch(A, B)); // 3
    console.log("");
    console.log(repeatedStringMatch(A_debug1, B_debug1)); // 2
    console.log("");
    console.log(repeatedStringMatch(A_debug2, B_debug2)); // 1
    console.log("");
    console.log(repeatedStringMatch(A_debug3, B_debug3)); // 1
};

main()