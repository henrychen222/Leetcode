/**
 * 6.17 evening
 * https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/
 */

// Accepted --- 400ms 42.3MB 43.24%
const countPrimeSetBits = (L, R) => {
    let cnt = 0;
    for (let i = L; i <= R; i++) {
        let bin = i.toString(2);
        let cntBit = 0;
        for (const j of bin) {
            if (j == '1') cntBit++;
        }
        if (isPrime(cntBit)) cnt++;
    }
    return cnt;
};

const isPrime = (num) => {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
};

const main = () => {
    let L = 6,
        R = 10;
    let L2 = 10,
        R2 = 15;
    console.log(countPrimeSetBits(L, R));
    console.log(countPrimeSetBits(L2, R2));
};

main()