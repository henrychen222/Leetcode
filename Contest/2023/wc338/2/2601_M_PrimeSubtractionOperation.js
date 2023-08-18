/*
 * 03/25/23 evening
 * https://leetcode.cn/contest/weekly-contest-338/problems/prime-subtraction-operation/
 * https://leetcode.com/contest/weekly-contest-338/problems/prime-subtraction-operation/
 */

const pr = console.log;

// Accepted  03/27/23 night complete
const primeSubOperation = (a) => {
    let se = sieveEratosthenes(1005), pre = 0;
    for (const x of a) {
        let cur = x;
        for (const p of se) {
            if (p <= x && x - p > pre) cur = Math.min(cur, x - p);
        }
        if (cur <= pre) return false;
        pre = cur;
    }
    return true;
};

//////////////////////////////////////////////////////////
const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);

const primeSubOperation1 = (a) => {
    let n = a.length, se = sieveEratosthenes(1005)
    for (let i = 1; i < n; i++) {
        if (a[i - 1] == a[i]) {
            return false;
        } else if (a[i - 1] >= a[i]) {
            if (gcd(a[i - 1], a[i]) == 1) return false;
        }
    }
    return true;
};

const sieveEratosthenes = (n) => {
    let prime = Array(n + 1).fill(true), res = new Set();
    for (let p = 2; p * p <= n; p++) {
        if (prime[p] == true) {
            for (let i = p * p; i <= n; i += p) prime[i] = false;
        }
    }
    for (let p = 2; p <= n; p++) {
        if (prime[p]) res.add(p);
    }
    return res;
};


const main = () => {
    let a = [4, 9, 6, 10];
    let a2 = [6, 8, 11, 12];
    let a3 = [5, 8, 3];
    let a_debug1 = [1, 20, 7, 12, 4];
    let a_debug2 = [2, 2];
    let a_debug3 = [17, 20, 5, 15, 6];
    pr(primeSubOperation(a))
    pr(primeSubOperation(a2))
    pr(primeSubOperation(a3))
    pr(primeSubOperation(a_debug1)) // false
    pr(primeSubOperation(a_debug2)) // false
    pr(primeSubOperation(a_debug3)) // false
};

main()