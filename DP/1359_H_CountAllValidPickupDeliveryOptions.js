/*
 * 03/24/23 afternoon
 * https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/
 */

const pr = console.log;

const ll = BigInt;
const mod = ll(1e9 + 7);
const factorial = (m, n) => { let res = 1n, cnt = 0; for (let i = ll(m); i > 0; i--) { if (cnt == n) break; res *= i; cnt++; } return res; };

// Accepted
const countOrders = (n) => factorial(2 * n, 2 * n) / ll(2 ** n) % mod;

const main = () => {
    let n = 1;
    let n2 = 2;
    let n3 = 3;
    let n_debug1 = 7;
    let n_debug2 = 8
    pr(countOrders(n))
    pr(countOrders(n2))
    pr(countOrders(n3))
    pr(countOrders(n_debug1)) // 681080400
    pr(countOrders(n_debug2)) // 729647433
};

main()