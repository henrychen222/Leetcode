/**
 * 6.11 evening 8.3 night 10.28 complete
 * https://leetcode.com/problems/count-primes/
 */

// Accepted --- 148ms 72.96%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/4462810.html
 * https://leetcode.com/problems/count-primes/discuss/57588/My-simple-Java-solution
 * 
 * https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 * https://baike.baidu.com/item/%E5%9F%83%E6%8B%89%E6%89%98%E8%89%B2%E5%B0%BC%E7%AD%9B%E9%80%89%E6%B3%95/4524938?fr=aladdin
 */
const countPrimes = (n) => {
    let notPrime = new Array(n).fill(false);
    let cnt = 0;
    for (let i = 2; i < n; i++) {
        if (!notPrime[i]) {
            cnt++;
            for (let j = 2; i * j < n; j++) {
                notPrime[i * j] = true;
            }
        }
    }
    return cnt;
};

// Accepted --- 140ms 78.57%
const countPrimes2 = (n) => {
    let prime = new Array(n).fill(true);
    let cnt = 0;
    for (let i = 2; i < n; i++) {
        if (prime[i]) {
            cnt++;
            for (let j = 2; i * j < n; j++) {
                prime[i * j] = false;
            }
        }
    }
    return cnt;
};

// Accepted --- 136ms 81.04%
const countPrimes3 = (n) => {
    let prime = new Array(n).fill(true);
    let cnt = 0;
    for (let i = 2; i < n; i++) {
        if (!prime[i]) continue;
        cnt++;
        for (let j = 2; i * j < n; j++) {
            prime[i * j] = false;
        }
    }
    return cnt;
};

// Time limit 17/20
// const countPrimes = (n) => {
//     if (n == 0 || n == 1 || n == 2) return 0;
//     let map = new Map();
//     let cnt = 1;
//     for (let i = 3; i < n; i += 2) {
//         if ((i % 3 == 0 && i != 3) || (i % 5 == 0 && i != 5) || (i % 7 == 0 && i != 7) || (i % 9 == 0 && i != 9)) continue;
//         if (map.has(i)) {
//             if (map.get(i)) {
//                 cnt++;
//             }
//         } else {
//             let tmp = isPrime(i);
//             map.set(i, tmp);
//             if (tmp) {
//                 cnt++;
//             }
//         }
//     }
//     return cnt;
// };

// Need to fix Time limit exceed  17/20  8.3 night
// const countPrimes = (n) => {
//     let cnt = 0;
//     for (let i = 0; i < n; i++) {
//         if (isPrime(i)) {
//             cnt++;
//         }
//     }
//     return cnt;
// };

// const isPrime = (num) => {
//     for (let i = 2; i < num; i++)
//         if (num % i === 0) return false;
//     return num > 1;
// };

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


// don't know
// const countPrimes = (n) => {
//     if (n <= 2) return 0;
//     let cnt = 0;
//     // for (let item = 2;
//     //     (item < n) && (item % 2 != 0) && (Math.sqrt(item) != Math.floor(Math.sqrt(item))); item++) {
//     //     console.log(item);
//     //     for (let i = 2; i < item; i++) {
//     //         if (item % i === 0) {
//     //             cnt++;
//     //             break;
//     //         }
//     //     }
//     // }
//     for (let item = 2; item < n; item++) {
//         for (let i = 2; i < item; i++) {
//             if (item % i === 0) {
//                 cnt++;
//                 break;
//             }
//         }
//     }
//     return cnt;
// };