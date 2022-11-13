/**
 * 10.10 evening
 * https://leetcode.com/contest/weekly-contest-210/problems/split-two-strings-to-make-palindrome/
 */

// Accepted --- 284ms 100.00%
const checkPalindromeFormation = (a, b) => {
    let ar = reverse2(a);
    let br = reverse2(b);
    return ok(a, b) || ok(b, a) || ok(ar, br) || ok(br, ar);
};

const ok = (a, b) => {
    console.log(a, b);
    let n = a.length;
    let i = 0;
    let j = n - 1;
    while (i < j) {
        if (a[i] != b[j]) break;
        i++;
        j--;
    }
    while (i < j) {
        if (a[i] != a[j]) break;
        i++;
        j--;
    }
    console.log(i, j);
    return i >= j;
};

const reverse2 = (s) => {
    let res = "";
    for (let i = s.length - 1; i >= 0; i--) {
        res += s[i];
    }
    return res;
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