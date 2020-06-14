/**
 * 6.13 evening
 * https://leetcode.com/problems/palindrome-number/
 */

// Accepted --- 192ms 46.8MB 76.5%
const isPalindrome = (x) => {
    if (x == x.toString().split("").reverse().join("")) {
        return true;
    }
    return false;
};

// Accepted --- 264ms 47.4MB 20.20%
const isPalindrome_modify = (x) => {
    return x == x.toString().split("").reverse().join("") ? true : false;
};

const main = () => {
    let x = 121;
    let x2 = -121;
    let x3 = 10;
    console.log(isPalindrome(x));
    console.log(isPalindrome(x2));
    console.log(isPalindrome(x3));

    console.log(isPalindrome_modify(x));
    console.log(isPalindrome_modify(x2));
    console.log(isPalindrome_modify(x3));
};

main()