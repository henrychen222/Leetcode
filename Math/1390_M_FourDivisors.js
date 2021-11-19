/**
 * 11/14/21 evening
 * https://leetcode.com/problems/four-divisors/
 */

// Accepted --- 128ms 74.29%
const sumFourDivisors = (a) => {
    let res = 0;
    for (const x of a) {
        let f = findAllFactors(x);
        if (f.length == 4) {
            for (const e of f) res += e;
        }
    }
    return res;
};

const findAllFactors = (n) => {
    let res = [];
    for (let i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            if (i == n / i) {
                res.push(i);
            } else {
                res.push(i);
                res.push(n / i);
            }
        }
    }
    return res;
};

const pr = console.log;
const main = () => {
    let nums = [21, 4, 7];
    let nums2 = [21, 21];
    let nums3 = [1, 2, 3, 4, 5];
    pr(sumFourDivisors(nums))
    pr(sumFourDivisors(nums2))
    pr(sumFourDivisors(nums3))
};

main()