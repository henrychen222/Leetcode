/*
 * 12/09/23 evening
 * https://leetcode.com/contest/weekly-contest-375/problems/count-the-number-of-good-partitions/
 */

const pr = console.log;

const ll = BigInt, mod = 1e9 + 7;
const pow_mod = (a, b, mod) => { let r = 1; while (b > 0) { if (b & 1) r = multi_mod(r, a, mod); b >>= 1; a = multi_mod(a, a, mod); } return r; };
const multi_mod = (x, y, mod) => Number(ll(x) * ll(y) % ll(mod));

// Accepted
// reference: https://leetcode.cn/circle/discuss/E0mGFA/
const numberOfGoodPartitions = (a) => {
    let last = new Map(); // save last occurence index of value
    a.map((x, i) => last.set(x, i))
    let r = -1, res = 0;
    a.map((x, i) => {
        r = Math.max(r, last.get(x)); // when x added, this current partitioned array should enlarge to max index of x
        if (r == i) res++; // r and i overlap, partition/non-partition 2 cases
    })
    return pow_mod(2, res - 1, mod);
};

// Accepted uwi
const numberOfGoodPartitions1 = (a) => {
    let first = new Map(), last = new Map(); // save first/last occurence index of value
    a.map((x, i) => {
        if (!first.has(x)) first.set(x, i);
        last.set(x, i);
    })
    // pr(first, last)
    let n = a.length, imos = Array(n + 1).fill(0), res = 1;
    for (const [x, i] of first) {
        // pr(x, i, last.get(x))
        imos[i]++;
        imos[last.get(x)]--;
    }
    // pr(imos)
    for (let i = 0; i < n; i++) imos[i + 1] += imos[i];
    // pr(imos)
    for (let i = 0; i < n - 1; i++) {
        if (imos[i] == 0) res = res * 2 % mod;
    }
    return res;
};;


const main = () => {
    let a = [1, 2, 3, 4];
    let a2 = [1, 1, 1, 1];
    let a3 = [1, 2, 1, 3];
    let a_debug1 = [1, 1, 1, 3, 2];
    pr(numberOfGoodPartitions(a))
    pr(numberOfGoodPartitions(a2))
    pr(numberOfGoodPartitions(a3))
    pr(numberOfGoodPartitions(a_debug1)) // 4
};

main()