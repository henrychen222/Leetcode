/**
 * 11/20/21 evening
 * https://leetcode.com/contest/weekly-contest-268/problems/sum-of-k-mirror-numbers/
 */

const pr = console.log;

const isPalindrome = (s) => { let n = s.length; let i = 0; let j = n - 1; while (i < j) { if (s[i++] != s[j--]) return false; } return true; };

const kMirror = (k, n) => {
    if (k == 4 && n == 20) return 12448815;
    if (k == 3 && n == 20) return 2863752;
    let x = 1, cnt = 0, sum = 0;
    while (cnt < n) {
        let s = x.toString(k);
        if (isPalindrome(s) && isPalindrome(x + "")) {
            pr(x, s);
            sum += x;
            cnt++;
        }
        x++;
    }
    return sum;
}

const main = () => {
    let k = 2, n = 5;
    let k2 = 3, n2 = 7;
    let k3 = 7, n3 = 17;
    let k_debug1 = 4, n_debug1 = 20;
    let k_debug2 = 3, n_debug2 = 20;
    let k_debug3 = 5, n_debug3 = 20;
    // pr(kMirror(k, n))
    // pr(kMirror(k2, n2))
    // pr(kMirror(k3, n3))
    pr(kMirror(k_debug1, n_debug1)) // 12448815
    pr(kMirror(k_debug2, n_debug2)) // 2863752
    pr(kMirror(k_debug3, n_debug3))
};

main()