/**
 * 6.2 evening
 * https://leetcode.com/problems/valid-palindrome-ii/
 */

// time limit exceed, need to fix
const validPalindrome = (s) => {
    let sCopy = s;
    for (let i = 0; i < sCopy.length; i++) {
        if (isPalindrom(sCopy)) return true;
        // sCopy = sCopy.split("").splice(i, 1).join("");
        // sCopy = sCopy.replace(sCopy[i], "");
        sCopy = sCopy.slice(0, i) + sCopy.slice(i + 1, s.length);
        // console.log(sCopy);
        if (isPalindrom(sCopy)) {
            return true;
        } else {
            sCopy = s;
            // console.log(sCopy);
        }
    }
    return false;
};

const isPalindrom = (str) => {
    return str == str.split('').reverse().join('');
}

const main = () => {
    let s = "aba";
    let s2 = "abca";
    let s_debu1 = "cbbcc"; // bbcc cbcc cbcc cbbc cbbc
    let s_debug2 = "abc";
    console.log(validPalindrome(s));
    console.log(validPalindrome(s2));
    console.log(validPalindrome(s_debu1));
    console.log(validPalindrome(s_debug2));
};

main()