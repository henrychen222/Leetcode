/**
 * 6.11 evening 8.3 night
 * https://leetcode.com/problems/count-primes/
 */

// don't know
const countPrimes = (n) => {
    if (n <= 2) return 0;
    let cnt = 0;
    // for (let item = 2;
    //     (item < n) && (item % 2 != 0) && (Math.sqrt(item) != Math.floor(Math.sqrt(item))); item++) {
    //     console.log(item);
    //     for (let i = 2; i < item; i++) {
    //         if (item % i === 0) {
    //             cnt++;
    //             break;
    //         }
    //     }
    // }
    for (let item = 2; item < n; item++) {
        for (let i = 2; i < item; i++) {
            if (item % i === 0) {
                cnt++;
                break;
            }
        }
    }
    return cnt;
};

// Need to fix Time limit exceed  17/20
const countPrimes1 = (n) => {
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
    console.log(countPrimes(n)); // 4
    console.log(countPrimes(debug1)); // 0
    console.log(countPrimes(debug2)); // 0
    console.log(countPrimes(debug3));
};

main()