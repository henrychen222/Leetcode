/**
 * 07/31/21 evening
 * https://leetcode.com/contest/weekly-contest-252/problems/three-divisors/
 */

const pr = console.log;

// Accepted
const isThree = (n) => {
    // pr(calD(n));
    return calD(n).size == 3;
};

const calD = (n) => {
    let res = new Set();
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            if (n / i == i) {
                res.add(i)
            } else {
                res.add(i);
                res.add(n / i);
            }
        }
    }
    return res;
};

const main = () => {
    let n = 2;
    let n2 = 4;
    let debug1 = 9;
    let debug2 = 12;
    pr(isThree(n))
    pr(isThree(n2))
    pr(isThree(debug1)) // true;
    pr(isThree(debug2)) // false
};

main()


// pr(isPrime(12))
// pr(isPrime(1e9 + 7));