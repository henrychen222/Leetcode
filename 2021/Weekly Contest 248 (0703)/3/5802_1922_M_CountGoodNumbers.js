/**
 * 07/03/21 evening
 * https://leetcode.com/contest/weekly-contest-248/problems/count-good-numbers/
 */

const pr = console.log;

const ll = BigInt;
const int = parseInt;
const mod = ll(1e9 + 7);
const powmod = (a, b, mod) => { let r = 1n; while (b > 0n) { if (b % 2n == 1) r = r * a % mod; b >>= 1n; a = a * a % mod; } return r; };

// Accepted
const countGoodNumbers = (n) => {
    let cntEven = cntOdd = int(n / 2);
    if (n % 2 == 1) cntEven++;
    // pr(cntEven, cntOdd);
    // let a = 5n ** ll(cntEven);
    // let b = 4n ** ll(cntOdd);
    let res = powmod(5n, ll(cntEven), mod) * powmod(4n, ll(cntOdd), mod);
    return Number(res % mod);
};

// TLE
const countGoodNumbers1 = (n) => {
    let res = 1n;
    for (let i = 0; i < n; i++) {
        pr(res);
        if (i % 2 == 0) {
            res *= 5n;
        } else {
            res *= 4n;
        }
    }
    return Number(res % mod);
};

const main = () => {
    let n = 1;
    let n2 = 4;
    let n3 = 50;
    let n4 = 5;
    let debug1 = 452418;
    let debug2 = 806166225460393;
    pr(countGoodNumbers(n))
    pr(countGoodNumbers(n2))
    pr(countGoodNumbers(n3))
    pr(countGoodNumbers(n4))
    pr(countGoodNumbers(debug1)) // 516626249
    pr(countGoodNumbers(debug2))
};

main()