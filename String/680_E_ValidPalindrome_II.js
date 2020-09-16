/**
 * 6.2 evening still not solve 8.14 night  9.14 night copy
 * https://leetcode.com/problems/valid-palindrome-ii/
 */

// Time limit 421/460
const validPalindrome2 = (s) => {
    if (isPalindrom(s)) return true;
    let n = s.length;
    let soppo = reverse2(s);
    for (let i = 0, stop = n >> 1; i < stop; i++) {
        let j = n - i - 1;
        if (s[i] !== s[j]) { // have to use recursion review solution
            let tmp = s.slice(0, i) + s.slice(i + 1, n);
            let tmp2 = s.slice(0, j) + s.slice(j + 1, n);
            if (isPalindrom(tmp)) return true;
            if (isPalindrom(tmp2)) return true;
        }
    }
    return false;
};

// time limit 393/460
const validPalindrome = (s) => {
    if (isPalindrom(s)) return true;
    let n = s.length;
    let soppo = reverse2(s);
    for (let i = 0; i < n; i++) {
        if (s[i] != soppo[i]) {
            let tmp = s.slice(0, i) + s.slice(i + 1, n);
            if (isPalindrom(tmp)) return true;
        }
    }
    return false;
};

const isPalindrom = (str) => {
    return str == reverse2(str);
};

const reverse2 = (s) => {
    let res = "";
    for (let i = s.length - 1; i >= 0; i--) {
        res += s[i];
    }
    return res;
};

const main = () => {
    let s = "aba";
    let s2 = "abca";
    let s_debu1 = "cbbcc"; // bbcc cbcc cbcc cbbc cbbc
    let s_debug2 = "abc";
    let s_debug3 = "deeee";
    let s_debug4 = "eccer";
    let s_debug5 = "cdbeeeabddddbaeedebdc";
    console.log(validPalindrome(s)); // true
    console.log(validPalindrome(s2)); // true
    console.log(validPalindrome(s_debu1)); // true
    console.log(validPalindrome(s_debug2)); // false
    console.log(validPalindrome(s_debug3)); // true
    console.log(validPalindrome(s_debug4)); // true
    console.log(validPalindrome(s_debug5)); // true

};

main()


///////////////// 8.14 night ///////////////
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
//         let tmp = s.slice(0, i).concat(s.slice(i + 1, n));
//         if (isPalindrom(tmp)) return true;
//     }
//     return false;
// };

// const isPalindrom = (str) => {
//     return str == str.split('').reverse().join('');
// };



///////////////// 6.2 night //////////////////////////////
// // time limit exceed, need to fix 375/460
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

// const validPalindrome = (s) => {
//     let n = s.length;
//     let data = s.split("");
//     console.log(data);
//     for (let i = 0; i < n; i++) {
//         [...data].splice(i, 1);
//         console.log(data);
//         // let tmp = data.join("")
//         // console.log(tmp);
//         // if (isPalindrom(tmp)) return true;
//     }
//     // return false;
// };