/**
 * 6.3 evening 8.22 night 11.6 night complete
 * https://leetcode.com/problems/remove-palindromic-subsequences/
 */

// reference: https://leetcode.com/problems/remove-palindromic-subsequences/discuss/490303/JavaC%2B%2BPython-Maximum-2-Operations
const removePalindromeSub = (s) => {
    let n = s.length;
    if (n == 0) {
        return 0;
    } else {
        if (isPalindrome2(s)) {
            return 1;
        }
    }
    return 2;
};

// Accepted --- 68ms 95.05%
const isPalindrome2 = (str) => {
    return str == reverse2(str);
};

const reverse2 = (s) => {
    let res = "";
    for (let i = s.length - 1; i >= 0; i--) {
        res += s[i];
    }
    return res;
};

// Accepted --- 72ms 87.13%
const isPalindrome2 = (s) => {
    let reverse = "";
    for (let i = s.length - 1; i >= 0; i--) {
        reverse += s[i];
    }
    return reverse == s;
};

// Accepted --- 72ms 87.13%
const isPalindrome = (str) => {
    return str == str.split('').reverse().join('');
};

// // Accepted --- 84ms 13.86%
// const isPalindrome2 = (s) => {
//     let reverse = '';
//     for (let i = s.length - 1; i >= 0; i--) {
//         reverse += s[i];
//     }
//     if (reverse == s) return true;
//     return false;
// };

const main = () => {
    let s = "ababa";
    let s2 = "abb";
    let s3 = "baabb";
    let s4 = "";
    let debug1 = "bbaabaaa";
    console.log(removePalindromeSub(s));
    console.log(removePalindromeSub(s2));
    console.log(removePalindromeSub(s3));
    console.log(removePalindromeSub(s4));
    console.log(removePalindromeSub(debug1)); // 2
};

main();


////////////////////////////////// 8.22 night ///////////////////////////////
// wrong
// const removePalindromeSub = (s) => {
//     let cnt = 0;
//     // while (s.length > 0) {
//         let data = getAllPalindromeSubsequences(s.split(""));
//         data.sort((a, b) => b.length - a.length);
//         console.log(s, data[0])  // issue not must data[0], need to think about minimum split of PalindromeSub can be
//         console.log(data)
//         s = updateS(s, data[0]);
//         cnt++;
//     // }
//     return cnt;
// };

// const getAllPalindromeSubsequences = (arr) => {
//     let res = [];
//     let n = arr.length;
//     let N = 2 ** n;
//     for (let i = 0; i < N; i++) {
//         let data = [];
//         for (let j = 0; j < n; j++) {
//             if (i & (1 << j)) {
//                 data.push(arr[j]);
//             }
//         }
//         let tmp = data.join("");
//         if (isPalindrome(tmp)) {
//             res.push(tmp);
//         }
//     }
//     return res;
// };

// const isPalindrome = (s) => {
//     let reverse = '';
//     for (let i = s.length - 1; i >= 0; i--) {
//         reverse += s[i];
//     }
//     if (reverse == s) return true;
//     return false;
// };

// const updateS = (s, itemUsed) => {
//     for (const i of itemUsed) {
//         s = s.replace(i, "");
//     }
//     return s;
// };


////////////////////////////////// 6.3 evening ///////////////////////////////
// const removePalindromeSub = (s) => {
//     let count = 0
//     for (let i = 0; i < s.length; i++) {
//         let longest = longestPalindrome(s);
//         s = s.replace(longest, '');
//         count++;
//         // if (!isPalindrom(s)) {
//         //     break;
//         // }
//     }
//     console.log(s);
//     return count;
// };

// var longestPalindrome = function (string) {
//     var length = string.length;
//     var result = "";
//     var centeredPalindrome = function (left, right) {
//         while (left >= 0 && right < length && string[left] === string[right]) {
//             left--;
//             right++;
//         }
//         return string.slice(left + 1, right);
//     };
//     for (var i = 0; i < length - 1; i++) {
//         var oddPal = centeredPalindrome(i, i + 1);
//         var evenPal = centeredPalindrome(i, i);
//         if (oddPal.length > 1)
//             if (evenPal.length > 1)
//                 if (oddPal.length > result.length)
//                     result = oddPal;
//         if (evenPal.length > result.length)
//             result = evenPal;
//     }
//     return result;
// };

// const isPalindrom = (str) => {
//     return str == str.split('').reverse().join('');
// }