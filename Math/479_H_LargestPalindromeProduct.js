/**
 * 02/19/22 afternoon
 * https://leetcode.com/problems/largest-palindrome-product/
 */

const ll = BigInt;

const reverse = (s) => { let res = ""; for (let i = s.length - 1; i >= 0; i--) { res += s[i]; } return res; };

// Accepted --- 7351ms 50%
/**
 * reference:
 * https://leetcode.com/problems/largest-palindrome-product/discuss/96331/Trickiness-depending-on-language-you-use
 * https://leetcode.com/problems/largest-palindrome-product/discuss/1562857/My-solution-using-pure-JS
 */
const largestPalindrome = (n) => {
    let max = ('9'.repeat(n)), lmax = ll(max);
    for (let i = max;; i--) {
        let pal = (i + '') + reverse((i + '')), x = ll(pal);
        for (let j = lmax; j >= 2; j-= 2n) {
            if (x / j > max) break;
            if (x % j == 0) return max == 9 ? 9 : x % 1337n;
        }
    }
};


const isPalindrome = (s) => { let n = s.length; let i = 0; let j = n - 1; while (i < j) { if (s[i++] != s[j--]) return false; } return true; };

// TLE
const largestPalindrome2 = (n) => {
    let max = ('9'.repeat(n)) - '0', min = ('1' + '0'.repeat(n - 1)) - '0', res = 0;
    for (let i = max; i >= min; i--) {
        for (let j = max; j >= min; j--) {
            let x = ll(i) * ll(j), s = x.toString();
            if (isPalindrome(s)) {
                if (x > res) res = x;
            }
        }
    }
    return res % 1337n;
};

// WA
const largestPalindrome1 = (n) => {
    let max = ('9'.repeat(n)) - 0, min = ('1' + '0'.repeat(n - 1)) - '0';
    for (let i = max; i >= min; i--) {
        for (let j = max; j >= min; j--) {
            let x = ll(i) * ll(j), s = x.toString();
            if (isPalindrome(s)) return x % 1337n;
        }
    }
};

const pr = console.log;
const main = () => {
    pr(largestPalindrome(1))
    pr(largestPalindrome(2))
    pr(largestPalindrome(3))
    pr(largestPalindrome(4))
    pr(largestPalindrome(5))
    pr(largestPalindrome(6))
    pr(largestPalindrome(7))
    pr(largestPalindrome(8)) // 475
};

main()