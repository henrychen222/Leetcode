/**
 * 04/30/22 evening
 * https://leetcode.com/contest/weekly-contest-291/problems/k-divisible-elements-subarrays/
 */

const pr = console.log;

// const ll = BigInt;
// const combination = (m, n) => { return factorial(m, n) / factorial(n, n); };
// const factorial = (m, n) => { let res = 1n; let cnt = 0; for (let i = ll(m); i > 0; i--) { if (cnt == n) break; res *= i; cnt++; } return res; };

// const countDistinct = (a, k, p) => {
//     let n = a.length, d = 0, nd = 0, res = 0n;
//     for (let i = 0; i < n; i++) a[i] % p == 0 ? d++ : nd++;
//     pr(d, nd)
//     for (let i = 0; i <= k; i++) {
//         let p1 = combination(ll(d), ll(i)), p2 = combination(ll(nd), ll(n - i));
//         pr("d", i, p1, "notD", n - i, p2);
//         res += p1 * p2;

//     }
//     return res;
// };


// Accepted
const countDistinct = (a, k, p) => {
    let n = a.length, se = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sub = a.slice(i, j + 1);
            if (ok(sub, k, p)) se.add(JSON.stringify(sub));
        }
    }
    return se.size;
};

const ok = (a, k, p) => {
    let cnt = 0;
    for (const x of a) {
        if (x % p == 0) cnt++;
    }
    return cnt <= k;
};

const main = () => {
    let a = [2, 3, 3, 2, 2], k = 2, p = 2;
    let a2 = [1, 2, 3, 4], k2 = 4, p2 = 1;
    pr(countDistinct(a, k, p))
    pr(countDistinct(a2, k2, p2))
};

main()