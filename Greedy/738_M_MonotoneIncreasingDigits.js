/**
 * 9.22 evening
 * https://leetcode.com/problems/monotone-increasing-digits/
 */

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