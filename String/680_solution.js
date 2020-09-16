/**
 * 9.14 evening
 */

// Accepted --- 232ms 9.07%
const validPalindrome_refine = (s) => {
    let n = s.length;
    for (let i = 0, stop = n >> 1; i < stop; i++) {
        let j = n - i - 1;
        if (s[i] !== s[j]) {
            return isPalindrom2(erase(s, i)) || isPalindrom2(erase(s, j));
        }
    }
    return true;
};

// reference: https://leetcode.com/problems/valid-palindrome-ii/discuss/107743/Simple-JavaScript-O(n)-solution
// Accepted --- 628ms 5.07%
const validPalindrome = (s) => {
    let n = s.length;
    for (let i = 0, stop = n >> 1; i < stop; i++) {
        let j = n - i - 1;
        if (s[i] !== s[j]) {
            return isPalindrom(erase(s, i)) || isPalindrom(erase(s, j));
        }
    }
    return true;
};

const erase = (s, i) => {
    return s.slice(0, i) + s.slice(i + 1);
};

const isPalindrom = (str) => {
    return str == str.split('').reverse().join('');
};

const isPalindrom2 = (str) => {
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

    console.log("")
    console.log(validPalindrome_refine(s));
    console.log(validPalindrome_refine(s2));
    console.log(validPalindrome_refine(s_debu1));
    console.log(validPalindrome_refine(s_debug2));
    console.log(validPalindrome_refine(s_debug3));
    console.log(validPalindrome_refine(s_debug4));
    console.log(validPalindrome_refine(s_debug5));
};

main()