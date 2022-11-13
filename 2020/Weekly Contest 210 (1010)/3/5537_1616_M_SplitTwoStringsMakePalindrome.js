/**
 * 10.10 evening
 * https://leetcode.com/contest/weekly-contest-210/problems/split-two-strings-to-make-palindrome/
 * 
 * read:
 * https://leetcode.com/problems/split-two-strings-to-make-palindrome/discuss/888885/C%2B%2BJava-Greedy-O(n)-or-O(1)
 */

// time limit 63/100
const checkPalindromeFormation = (a, b) => {
    let n = a.length;
    for (let i = 0; i < n; i++) {
        let ap = a.slice(0, i);
        let as = a.slice(i);
        let bp = b.slice(0, i);
        let bs = b.slice(i);
        let tmp = ap + bs;
        let tmp2 = bp + as;
        // console.log(ap, as, bp, bs, tmp);
        if (isPalindrom(tmp) || isPalindrom(tmp2)) {
            return true;
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
    let a = "x", b = "y";
    let a2 = "abdef", b2 = "fecab";
    let a3 = "ulacfd", b3 = "jizalu";
    let a4 = "xbdef", b4 = "xecab";
    let a_debug1 = "cdeoo", b_debug1 = "oooab";
    console.log(checkPalindromeFormation(a, b));  // true
    console.log(checkPalindromeFormation(a2, b2)); // true
    console.log(checkPalindromeFormation(a3, b3)); // true
    console.log(checkPalindromeFormation(a4, b4)); // false
    console.log(checkPalindromeFormation(a_debug1, b_debug1)); // true;
};

main()