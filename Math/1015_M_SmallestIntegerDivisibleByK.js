/**
 * 03/13/21 afternoon
 * https://leetcode.com/problems/smallest-integer-divisible-by-k/
 */

const pr = console.log;

// Accepted --- 240ms 11.11%
// reference: https://leetcode.com/contest/weekly-contest-129/ranking
const smallestRepunitDivByK = (k) => {
    let remain = 0;
    for (let i = 1; i < 1e6; i++) {
        remain = (remain * 10 + 1) % k;
        if (remain == 0) return i;
    }
    return -1;
};

// TLE
const smallestRepunitDivByK1 = (k) => {
    k = BigInt(k);
    for (let i = 1; i <= 6122; i++) {
        let s = '1'.repeat(i);
        let n = BigInt(s);
        if (n % k == 0) return i;
    }
    return -1;
};

const main = () => {
    let k = 1;
    let k2 = 2;
    let k3 = 3;
    let k_debug1 = 19;
    let k_debug2 = 149;
    let k_debug3 = 393;
    let k_debug4 = 19645;
    let k_debug5 = 1983;
    let k_debug6 = 5367;
    let k_debug7 = 18367;
    let k_debug8 = 16;
    pr(smallestRepunitDivByK(k));
    pr(smallestRepunitDivByK(k2));
    pr(smallestRepunitDivByK(k3));
    pr(smallestRepunitDivByK(k_debug1)); // 18
    pr(smallestRepunitDivByK(k_debug2)); // 148
    pr(smallestRepunitDivByK(k_debug3)); // 390
    pr(smallestRepunitDivByK(k_debug4));
    pr(smallestRepunitDivByK(k_debug5)); // 666
    pr(smallestRepunitDivByK(k_debug6)); // 1788
    pr(smallestRepunitDivByK(k_debug7)); // 6122
    pr(smallestRepunitDivByK(k_debug8)); // 6122
};

main()