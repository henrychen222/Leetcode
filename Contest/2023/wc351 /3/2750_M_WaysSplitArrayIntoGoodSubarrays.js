/*
 * 06/24/23 evening
 * https://leetcode.com/contest/weekly-contest-351/problems/ways-to-split-array-into-good-subarrays/
 */

const pr = console.log;

const mod = 1e9 + 7;
const initialize2DArray = (n, m) => [...Array(n)].map(() => Array(m).fill(0));

// Accepted --- https://leetcode.cn/circle/discuss/8rbiK2/ DP
const numberOfGoodSubarraySplits = (a) => {
    // f[i][state] : i为前i个元素，state:0,1代表该子串是否有1个1了
    let n = a.length, f = initialize2DArray(n, 2);
    f[0][0] = a[0] ^ 1;
    f[0][1] = a[0];
    pr(f[0])
    for (let i = 1; i < n; i++) {
        if (a[i] == 0) {
            f[i][0] = (f[i - 1][0] + f[i - 1][1]) % mod;
            f[i][1] = f[i - 1][1];
        } else {
            f[i][0] = 0;
            f[i][1] = (f[i - 1][0] + f[i - 1][1]) % mod;
        }
    }
    return f[n - 1][1];
};

//////////////////////////////////////////////////////////////////////
// 相邻的1中间找分割点
const numberOfGoodSubarraySplits2 = (a) => {
    let se = new Set(a);
    if (se.size == 1 && se.values().next().value == 0) return 0;
    let ia = [], res = 1;
    a.map((x, i) => {
        if (x == 1) ia.push(i);
    });
    for (let i = 1; i < ia.length; i++) {
        res *= ia[i] - ia[i - 1];
        res %= mod;
    }
    return res;
};

// WA
const numberOfGoodSubarraySplits1 = (a) => {
    let zero = 0, one = 0;
    for (const x of a) x == 0 ? zero++ : one++;
    let res = zero * one / 2;
    pr(zero, one)
    return res % (1e9 + 7);
};

const main = () => {
    let a = [0, 1, 0, 0, 1];
    let a2 = [0, 1, 0];
    let debug1 = [0, 1, 0, 0]
    let debug2 = [0, 0];
    pr(numberOfGoodSubarraySplits(a))
    pr(numberOfGoodSubarraySplits(a2))
    pr(numberOfGoodSubarraySplits(debug1)) // 1
    pr(numberOfGoodSubarraySplits(debug2)) // 0
};

main()

// pr(comb(5, 4))