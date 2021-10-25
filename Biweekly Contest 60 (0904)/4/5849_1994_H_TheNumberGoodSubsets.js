/**
 * 09/04/21 morning
 * https://leetcode.com/contest/biweekly-contest-60/problems/the-number-of-good-subsets/
 */

const pr = console.log;

const N = 100010;
const ll = BigInt;
const mod = ll(1e9 + 7);

const powmod = (a, b, mod) => { let r = 1n; while (b > 0n) { if (b % 2n == 1) r = r * a % mod; b >>= 1n; a = a * a % mod; } return r; };

// https://www.geeksforgeeks.org/prime-subset-product-problem/
const numberOfGoodSubsets = (A) => {
    let n = A.length;
    let prime = Array(N).fill(1);
    prime[0] = prime[1] = 0;
    let i = 2;
    while (i * i < N) {
        if (prime[i]) {
            for (let j = 2 * i; j <= N; j += i) prime[j] = 0;
        }
        i++;
    }
    let t = powmod(2n, ll(n - 1), mod - 1n);
    let ans = 1n;
    for (let j = 0; j < n; j++) {
        let i = A[j];
        if (prime[i]) {
            ans *= powmod(ll(i), t, mod);
            ans %= mod;
        }
    }
    return ans;
};

const main = () => {
    let nums = [1, 2, 3, 4];
    let nums2 = [4, 2, 3, 15];
    let test = [3, 7]
    pr(numberOfGoodSubsets(nums))
    pr(numberOfGoodSubsets(nums2))
    pr(numberOfGoodSubsets(test)) // 441
};

main()