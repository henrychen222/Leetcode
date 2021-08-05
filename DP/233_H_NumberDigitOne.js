/**
 * 08/03/21 night
 * https://leetcode.com/problems/number-of-digit-one/
 */

// Accepted --- 72ms 50.00%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/4629032.html
 * https://leetcode.com/problems/number-of-digit-one/discuss/64390/AC-short-Java-solution
 */
const int = parseInt;
const countDigitOne = (n) => {
    let res = 0;
    for (let x = 1; x <= n; x *= 10) {
        let t = int(n / x), rem = n % x;
        // pr(t, rem);
        res += int((t + 8) / 10) * x;
        if (t % 10 == 1) res += rem + 1;
        // pr(res);
    }
    return res;
};

const pr = console.log;
const main = () => {
    let n = 13;
    let n2 = 0;
    let n3 = 10 ** 9;
    pr(countDigitOne(n))
    pr(countDigitOne(n2))
    pr(countDigitOne(n3))
};

main()