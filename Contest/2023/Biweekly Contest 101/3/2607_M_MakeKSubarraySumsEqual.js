/*
 * 04/01/23 morning
 * https://leetcode.com/contest/biweekly-contest-101/problems/make-k-subarray-sums-equal/
 */

const pr = console.log;

// Accepted
// reference: AntonRaichuk Tlatoani
// https://leetcode.cn/circle/discuss/3Cqiwp/
// https://leetcode.cn/circle/discuss/Ml2xuc/ 
const makeSubKSumEqual = (a, k) => medianGreedy(a, k)

const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
const medianGreedy = (a, k) => {
    k = gcd(a.length, k);
    let res = 0;
    for (let i = 0; i < k; i++) {
        let b = [];
        for (let j = i; j < a.length; j += k) b.push(a[j]);
        // pr(b);
        b.sort((x, y) => x - y);
        let mid = b[b.length >> 1];
        for (const x of b) res += Math.abs(x - mid);
    }
    return res;
};

const main = () => {
    let a = [1, 4, 1, 3], k = 2;
    let a2 = [2, 5, 5, 7], k2 = 3
    pr(makeSubKSumEqual(a, k))
    pr(makeSubKSumEqual(a2, k2))
};

main()