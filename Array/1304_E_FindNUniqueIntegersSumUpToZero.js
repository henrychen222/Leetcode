/**
 * 6.10 evening
 * https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
 */

// Accepted --- 88ms 36.5MB 11.43%
const sumZero = (n) => {
    let res = [];
    if (n == 1) return [0];
    if (n % 2 == 0) {
        for (let i = 1; i <= n >> 1; i++) {
            res.push(i);
            res.push(-i);
        }
    } else {
        for (let i = 1; i <= n >> 1; i++) {
            res.push(i);
            res.push(-i);
        }
        res.push(0);
    }
    return res;
};

const main = () => {
    let n = 5;
    let n2 = 3;
    let n3 = 1;
    let n4 = 4;
    console.log(sumZero(n));
    console.log(sumZero(n2));
    console.log(sumZero(n3));
    console.log(sumZero(n4));
};

main()