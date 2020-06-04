/**
 * 6.3 evening
 * https://leetcode.com/problems/remove-palindromic-subsequences/
 */
const removePalindromeSub = (s) => {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        let longest = longestPalindrome(s);
        s = s.replace(longest, '');
        count++;
        // if (!isPalindrom(s)) {
        //     break;
        // }
    }
    console.log(s);
    return count;
};

var longestPalindrome = function (string) {
    var length = string.length;
    var result = "";
    var centeredPalindrome = function (left, right) {
        while (left >= 0 && right < length && string[left] === string[right]) {
            left--;
            right++;
        }
        return string.slice(left + 1, right);
    };
    for (var i = 0; i < length - 1; i++) {
        var oddPal = centeredPalindrome(i, i + 1);
        var evenPal = centeredPalindrome(i, i);
        if (oddPal.length > 1)
            if (evenPal.length > 1)
                if (oddPal.length > result.length)
                    result = oddPal;
        if (evenPal.length > result.length)
            result = evenPal;
    }
    return result;
};

const isPalindrom = (str) => {
    return str == str.split('').reverse().join('');
}

const main = () => {
    let s = "ababa";
    let s2 = "abb";
    let s3 = "baabb";
    let s4 = "";
    console.log(removePalindromeSub(s));
    console.log(removePalindromeSub(s2));
    console.log(removePalindromeSub(s3));
    console.log(removePalindromeSub(s4));
};

main()