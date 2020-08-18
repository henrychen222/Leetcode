/**
 * 6.2 evening 8.17 evening complete
 * https://leetcode.com/problems/repeated-string-match/
 */

// Accepted --- 248ms 42.6MB 23.46%
const repeatedStringMatch = (A, B) => {
    let cnt = 0;
    let tmp = '';
    while (true) {
        if (tmp.indexOf(B) == -1) {
            tmp += A;
            cnt++;
        } else {
            break;
        }
        if ((tmp.length > 10000) && tmp.indexOf(B) == -1) return -1;
    }
    return cnt;
};

// Accepted --- 884ms 42.7MB 6.79%
const repeatedStringMatch1 = (A, B) => {
    let cnt = 0;
    let tmp = '';
    while (true) {
        if (tmp.indexOf(B) == -1) {
            tmp += A;
            cnt++;
        } else {
            break;
        }
        if ((tmp.length > 20000) && tmp.indexOf(B) == -1) return -1;
    }
    return cnt;
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
    let A_debug4 = "abc",
        B_debug4 = "cabcabca";
    let A_debug5 = "aaaaaaaaaaaaaaaaaaaaaab",
        B_debug5 = "ba";
    let A_debug6 = "abcabcabcabc",
        B_debug6 = "abac";
    console.log(repeatedStringMatch(A, B)); // 3
    console.log(repeatedStringMatch(A_debug1, B_debug1)); // 2
    console.log(repeatedStringMatch(A_debug2, B_debug2)); // 1
    console.log(repeatedStringMatch(A_debug3, B_debug3)); // 1
    console.log(repeatedStringMatch(A_debug4, B_debug4)); // 4
    console.log(repeatedStringMatch(A_debug5, B_debug5)); // 2
    console.log(repeatedStringMatch(A_debug6, B_debug6));
};

main()


// // Time Limit Exceeded need to fix
// const repeatedStringMatch = (A, B) => {
//     let count = 0;
//     let repeatStr = "";
//     while (!repeatStr.includes(B)) {
//         repeatStr += A;
//         console.log(repeatStr);
//         count++;
//     }
//     return count;
// };