/**
 * 09/22/20 evening  08/11/21 night complete
 * https://leetcode.com/problems/monotone-increasing-digits/
 */

// Accepted --- 84ms 18.52%
// reference: https://www.cnblogs.com/grandyang/p/8068326.html
const monotoneIncreasingDigits = (N) => {
    let a = (N + '').split("");
    // console.log(a);
    let n = a.length;
    let j = n;
    for (let i = n - 1; i > 0; i--) {
        if (a[i - 1] <= a[i]) continue;
        a[i - 1]--;
        j = i;
    }
    // console.log(a);
    for (let i = j; i < n; i++) a[i] = 9;
    return a.join("") - '0';
};


/////////////////////////// 09/22/20 evening ///////////////////////////
// Time limit 212/302
const monotoneIncreasingDigits1 = (N) => {
    for (let item = N;; item--) {
        let s = item + '';
        if (check(s)) return item;
    }
};

const check = (s) => {
    let n = s.length;
    for (let i = 0; i + 1 < n; i++) {
        if (s[i] > s[i + 1]) return false;
    }
    return true;
};

const main = () => {
    let N = 10;
    let N2 = 1234;
    let N3 = 332;
    let debug1 = 777616726;
    console.log(monotoneIncreasingDigits(N));
    console.log(monotoneIncreasingDigits(N2));
    console.log(monotoneIncreasingDigits(N3));
    console.log(monotoneIncreasingDigits(debug1));
};

main()