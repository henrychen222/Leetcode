/**
 * 6.14 night
 * https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/
 */

// Accepted --- 1648ms 43.9MB 5.22%
const getNoZeroIntegers = (n) => {
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            if (!containZero(i) && !containZero(j) && i + j == n) {
                return [i, j];
            }
        }
    }
};

const containZero = (n) => {
    return n.toString().split("").includes('0');
};

const main = () => {
    let n = 2;
    let n2 = 11;
    let n3 = 10000;
    let n4 = 69;
    let n5 = 1010;
    console.log(getNoZeroIntegers(n));
    console.log(getNoZeroIntegers(n2));
    console.log(getNoZeroIntegers(n3));
    console.log(getNoZeroIntegers(n4));
    console.log(getNoZeroIntegers(n5));
};

main()