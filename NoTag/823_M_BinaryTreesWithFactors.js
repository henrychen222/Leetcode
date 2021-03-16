/**
 * 03/13/21 evening
 * https://leetcode.com/problems/binary-trees-with-factors/
 */


const pr = console.log;

// Accepted --- 248ms 70%
const MOD = 1e9 + 7;
const numFactoredBinaryTrees = (a) => {
    let n = a.length;
    let dp = new Map();
    a.sort((x, y) => x - y);
    for (let i = 0; i < n; i++) {
        dp.set(a[i], 1);
        for (let j = 0; j < i; j++) {
            let divide = a[i] / a[j] >> 0;
            let dd = dp.get(divide);
            let ii = dp.get(a[i]);
            let jj = dp.get(a[j]);
            if (a[i] % a[j] == 0 && dp.has(divide)) {
                dp.set(a[i], ii + jj * dd);
            }
            // pr(ii)
        }
    }
    let res = 0;
    for (const [, v] of dp) res += v;
    return res % MOD;
};

const main = () => {
    let arr = [2, 4];
    let arr2 = [2, 4, 5, 10];
    let debug1 = [18, 3, 6, 2];
    pr(numFactoredBinaryTrees(arr));
    pr(numFactoredBinaryTrees(arr2));
    pr(numFactoredBinaryTrees(debug1)); // 12
};

main()