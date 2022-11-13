/**
 * 10.10 evening
 * https://leetcode.com/contest/weekly-contest-210/problems/split-two-strings-to-make-palindrome/
 */

// Accepted --- 92ms 100.00%
const checkPalindromeFormation = (a, b) => {
    return ok(a, b) || ok(b, a);
};

const ok = (a, b) => {
    let n = a.length;
    let i = 0;
    let j = n >> 1;
    while (i < j) {
        if (a[i] != b[n - 1 - i]) break;
        i++;
    }
    return isPalindrom(a, i) || isPalindrom(b, i);
};

const isPalindrom = (s, i) => {
    let n = s.length;
    let j = n >> 1;
    while (i < j) {
        if (s[i] != s[n - 1 - i]) return false;
        i++;
    }
    return true;
};

const main = () => {
    let a = "x", b = "y";
    let a2 = "abdef", b2 = "fecab";
    let a3 = "ulacfd", b3 = "jizalu";
    let a4 = "xbdef", b4 = "xecab";
    let a_debug1 = "cdeoo", b_debug1 = "oooab";
    console.log(checkPalindromeFormation(a, b));  // true
    console.log("");
    console.log(checkPalindromeFormation(a2, b2)); // true
    console.log("");
    console.log(checkPalindromeFormation(a3, b3)); // true
    console.log("");
    console.log(checkPalindromeFormation(a4, b4)); // true
    console.log("");
    console.log(checkPalindromeFormation(a_debug1, b_debug1)); // true;
};

main()