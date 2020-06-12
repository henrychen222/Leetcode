/**
 * 6.11 evening
 * https://leetcode.com/problems/count-primes/
 */

// Need to fix Time limit exceed  17/20
const countPrimes = (n) => {
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        if (isPrime(i)) {
            cnt++;
        }
    }
    return cnt;
};

const isPrime = (num) => {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
};

const main = () => {
    let n = 10;
    let debug1 = 0;
    let debug2 = 2;
    let debug3 = 499979;
    console.log(countPrimes(n));
    console.log(countPrimes(debug1));
    console.log(countPrimes(debug2)); // 0
    console.log(countPrimes(debug3));
};

main()