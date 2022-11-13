/**
 * 08/13/22 night
 * https://leetcode.com/problems/numbers-with-repeated-digits/
 * 
 * reference:
 * https://leetcode.com/contest/weekly-contest-306/problems/count-special-integers/
 * https://leetcode.com/contest/weekly-contest-306/ranking/
 */

const numDupDigitsAtMostN = (N) => countNumberWithoutRepeatedDigit(N);

// Accepted --- 2833ms 100%
let res, n;
const countNumberWithoutRepeatedDigit = (N) => {
    n = N;
    res = 0;
    dfs(0, 1023);
    return N - (res - 1);
};

const checkIthBit = (x, i) => x & (1 << i);

const dfs = (cur, rem) => {
    if (cur > n) return;
    res++;
    for (let i = cur == 0 ? 1 : 0; i < 10; i++) {
        if (checkIthBit(rem, i)) {
            dfs(cur * 10 + i, rem ^ (1 << i))
        }
    }
};