/**
 * 7.21 night
 * https://leetcode.com/problems/break-a-palindrome/
 */

// Accepted --- 888ms 43.4MB 6.49%
const breakPalindrome = (palindrome) => {
    let res = '';
    if (palindrome.length == 1) return '';
    for (const p of palindrome) {
        for (let i = 97; i <= 122; i++) {
            let c = String.fromCharCode(i);
            if (c != p && i < p.charCodeAt()) {
                let tmp = palindrome.replace(p, c);
                if (!isPalindrome(tmp)) {
                    res = tmp;
                    break;
                }
            }
        }
    }
    if (res.length == 0) { // if cannot find lexicographically smaller one, find the next larger one
        res += palindrome.slice(0, palindrome.length - 1) + String.fromCharCode(palindrome[palindrome.length - 1].charCodeAt() + 1);
    }
    return res;
};

// Accepted --- 72ms 36.7MB 44.16%
const breakPalindrome_refine = (palindrome) => {
    if (palindrome.length == 1) return '';
    for (const p of palindrome) {
        for (let i = 97; i <= 122; i++) {
            let c = String.fromCharCode(i);
            if (c != p && i < p.charCodeAt()) {
                let tmp = palindrome.replace(p, c);
                if (!isPalindrome(tmp)) {
                    return tmp;
                }
            }
        }
    }
    return palindrome.slice(0, palindrome.length - 1) + String.fromCharCode(palindrome[palindrome.length - 1].charCodeAt() + 1);
};

const isPalindrome = (str) => {
    return str == str.split("").reverse().join("");
};

// Accepted --- 108ms 36.4MB 6.49%
const breakPalindrome_modify2 = (palindrome) => {
    if (palindrome.length == 1) return '';
    for (const p of palindrome) {
        for (let i = 97; i <= 122; i++) {
            let c = String.fromCharCode(i);
            if (c != p && i < p.charCodeAt()) {
                let tmp = palindrome.replace(p, c);
                if (tmp.split("").reverse().join("") != tmp) {
                    return tmp;
                }
            }
        }
    }
    return palindrome.slice(0, palindrome.length - 1) + String.fromCharCode(palindrome[palindrome.length - 1].charCodeAt() + 1);
};

const main = () => {
    let palindrome = "abccba";
    let palindrome2 = "a";
    let debug1 = "aa";
    let debug2 = "aba";
    console.log(breakPalindrome(palindrome));
    console.log(breakPalindrome(palindrome2));
    console.log(breakPalindrome(debug1));
    console.log(breakPalindrome(debug2));

    console.log("\n");
    console.log(breakPalindrome_refine(palindrome));
    console.log(breakPalindrome_refine(palindrome2));
    console.log(breakPalindrome_refine(debug1));
    console.log(breakPalindrome_refine(debug2));

    console.log("\n");
    console.log(breakPalindrome_modify2(palindrome));
    console.log(breakPalindrome_modify2(palindrome2));
    console.log(breakPalindrome_modify2(debug1));
    console.log(breakPalindrome_modify2(debug2));
};

main()