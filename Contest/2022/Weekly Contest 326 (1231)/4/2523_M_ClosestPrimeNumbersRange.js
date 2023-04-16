/*
 * 12/31/22 evening
 * https://leetcode.com/contest/weekly-contest-326/problems/closest-prime-numbers-in-range/
 */

const pr = console.log;

// Accepted
const closestPrimes = (l, r) => {
    let a = sieveEratosthenes(r), idx = 0, res = [-1, -1], dis = Number.MAX_SAFE_INTEGER;
    a = [...a].sort((x, y) => x - y);
    for (let i = 0; i < a.length; i++) {
        if (a[i] >= l) {
            idx = i;
            break;
        }
    }
    a = a.slice(idx);
    // pr(a)
    for (let i = 1; i < a.length; i++) {
        if (a[i] - a[i - 1] < dis) {
            dis = a[i] - a[i - 1];
            res = [a[i - 1], a[i]];
        }
    }
    return res;
};

const sieveEratosthenes = (n) => {
    let prime = Array(n + 1).fill(true);
    for (let p = 2; p * p <= n; p++) {
        if (prime[p] == true) {
            for (let i = p * p; i <= n; i += p) prime[i] = false;
        }
    }
    let res = new Set();
    for (let p = 2; p <= n; p++) {
        if (prime[p]) res.add(p);
    }
    return res;
};

const main = () => {
    let l = 10, r = 19;
    let l2 = 4, r2 = 6;
    pr(closestPrimes(l, r))
    pr(closestPrimes(l2, r2))
};

main()