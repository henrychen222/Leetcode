/**
 * 10.25 morning
 * https://leetcode.com/problems/prime-arrangements/
 */

// Accepted --- 84ms 20.51%
const mod = BigInt(1e9 + 7);
const numPrimeArrangements = (n) => {
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            cnt++;
        }
    }
    let bCnt = BigInt(cnt);
    let restCnt = BigInt(n - cnt);
    return Number(factorial(restCnt, restCnt) * factorial(bCnt, bCnt) % mod);
};

const factorial = (m, n) => {
    let num = BigInt(1);
    let cnt = 0;
    for (let i = BigInt(m); i > 0; i--) {
        if (cnt == n) break;
        num = num * i;
        cnt++;
    }
    return num;
};

const isPrime = (num) => {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
};

const main = () => {
    let n = 5;
    let n2 = 100;
    let n3 = 28;
    console.log(numPrimeArrangements(n));
    console.log(numPrimeArrangements(n2)); // 682289015
    console.log(numPrimeArrangements(n3)); // 940068494

};

main()