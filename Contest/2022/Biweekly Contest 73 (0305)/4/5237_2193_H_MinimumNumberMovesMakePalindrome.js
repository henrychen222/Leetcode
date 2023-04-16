/**
 * 03/05/22 afternoon
 * https://leetcode.com/contest/biweekly-contest-73/problems/minimum-number-of-moves-to-make-palindrome/
 */

const pr = console.log;

const minMovesToMakePalindrome = (s) => minSwapMakePalindrome(s);

// WA
// reference: https://www.geeksforgeeks.org/count-minimum-swap-to-make-string-palindrome/
const minSwapMakePalindrome = (s) => {
   let a = s.split("");
   let res1 = cal(a), res2 = cal(a.reverse());
   pr(res1, res2);
   return Math.max(res1, res2);
};

const swap = (a, i, j) => [a[i], a[j]] = [a[j], a[i]];
const cal = (a) => {
    let n = a.length, cnt = 0, h = n >> 1;
    for (let i = 0; i < h; i++) {
        let r = n - i - 1;
        while (i < r) {
            if (a[i] == a[r]) {
                break;
            } else {
                r--;
            }
        }
        // if (i == r) return -1;
        for (let j = r; j < n - i - 1; j++) {
            swap(a, j, j + 1);
            cnt++;
        }
    }
    return cnt;
};

const main = () => {
    let s = "aabb";
    let s2 = "letelt";
    let s3 = "geeksfgeeks";
    let debug1 = "skwhhaaunskegmdtutlgtteunmuuludii"
    pr(minMovesToMakePalindrome(s))
    pr(minMovesToMakePalindrome(s2))
    pr(minMovesToMakePalindrome(s3))
    pr(minMovesToMakePalindrome(debug1)) // 163

};

main()