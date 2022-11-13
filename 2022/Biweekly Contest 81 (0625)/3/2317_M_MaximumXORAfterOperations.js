/**
 * 06/25/22 morning
 * https://leetcode.com/contest/biweekly-contest-81/problems/maximum-xor-after-operations/
 */

const pr = console.log;

// Accepted  让所有数的同一位只保留一个1
const maximumXOR = (a) => {
    let res = 0;
    for (const x of a) res |= x;
    return res;
};

const maximumXOR1 = (a) => {
    let res = 0;
    for (const x of a) res ^= x;
    pr(res, res.toString(2));
    let maxL = 0;
    a = a.map(x => {
        let s = x.toString(2);
        maxL = Math.max(maxL, s.length);
        return s;
    });
    pr(a, maxL)
    a = a.map(s => fill(maxL, s));
    let xor = binarxor(a);
    pr(a, xor)
};

const fill = (maxL, s) => '0'.repeat(maxL - s.length) + s;

const binarxor = (g) => {
    let n = g.length, m = g[0].length, res = '';
    for (let j = 0; j < m; j++) {
        let t = '', zero = 0, one = 0;
        for (let i = 0; i < n; i++) t += g[i][j];
        // pr("t", t)
        for (const c of t) c == '0' ? zero++ : one++;
        res += xorPrinciple(zero, one);
    }
    return res;
};

const xorPrinciple = (zero, one) => {
    if (zero % 2 == 0) {
        if (one % 2 == 0) {
            return 0;
        } else {
            return 1;
        }
    } else {
        if (one % 2 == 0) {
            return 0;
        } else {
            return 1;
        }
    }
};

const main = () => {
    let a = [3, 2, 4, 6];
    let a2 = [1, 2, 3, 9, 2];
    pr(maximumXOR(a))
    pr(maximumXOR(a2))
};

main()

/*
011     011
010     010
100     100
110     010

011     111


*/


pr(0 ^ 0 ^ 1 ^ 1) // 0
pr(0 ^ 0 ^ 1) // 1
pr(0 ^ 1 ^ 1) // 0
pr(0 ^ 1) // 1