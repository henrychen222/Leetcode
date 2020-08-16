/**
 * 6.2 evening still not solve 8.14 night
 * https://leetcode.com/problems/valid-palindrome-ii/
 */

const validPalindrome = (s) => {
    let n = s.length;
    let data = s.split("");
    console.log(data);
    for (let i = 0; i < n; i++) {
        [...data].splice(i, 1);
        console.log(data);
        // let tmp = data.join("")
        // console.log(tmp);
        // if (isPalindrom(tmp)) return true;
    }
    // return false;
};


// // wrong 
// const validPalindrome = (s) => {
//     let stack = [];
//     let data = s.split("");
//     let n = s.length;
//     for (let i = 0; i < n; i++) {
//         let tmp = data.concat(stack);
//         // console.log(data, stack);
//         if (isPalindrom(tmp.join(""))) return true;
//         let end = data[data.length - 1];
//         stack.push(end);
//         // console.log(data, stack);
//         data.pop();
//         data.pop();
//         console.log(data, stack);
//     }
//     return false;
// };

// // Time limit 370/460
// const validPalindrome = (s) => {
//     let n = s.length;
//     for (let i = 0; i < n; i++) {
//         let tmp = '';
//         for (let j = 0; j < n; j++) {
//             if (i == j) continue;
//             tmp += s[j];
//         }
//         // console.log(tmp)
//         if (isPalindrom(tmp)) return true;
//     }
//     return false;
// };


// // Time limit 370/460
// const validPalindrome = (s) => {
//     let n = s.length;
//     for (let i = 0; i < n; i++) {
//         let tmp = s.slice(0, i).concat(s.slice(i + 1, n));
//         if (isPalindrom(tmp)) return true;
//     }
//     return false;
// };

const isPalindrom = (str) => {
    return str == str.split('').reverse().join('');
};

const main = () => {
    let s = "aba";
    let s2 = "abca";
    let s_debu1 = "cbbcc"; // bbcc cbcc cbcc cbbc cbbc
    let s_debug2 = "abc";
    let s_debug3 = "deeee";
    console.log(validPalindrome(s)); // true
    console.log(validPalindrome(s2)); // true
    console.log(validPalindrome(s_debu1)); // true
    console.log(validPalindrome(s_debug2)); // false
    console.log(validPalindrome(s_debug3)); // true

};

main()


// // time limit exceed, need to fix
// const validPalindrome = (s) => {
//     let sCopy = s;
//     for (let i = 0; i < sCopy.length; i++) {
//         if (isPalindrom(sCopy)) return true;
//         // sCopy = sCopy.split("").splice(i, 1).join("");
//         // sCopy = sCopy.replace(sCopy[i], "");
//         sCopy = sCopy.slice(0, i) + sCopy.slice(i + 1, s.length);
//         // console.log(sCopy);
//         if (isPalindrom(sCopy)) {
//             return true;
//         } else {
//             sCopy = s;
//             // console.log(sCopy);
//         }
//     }
//     return false;
// };