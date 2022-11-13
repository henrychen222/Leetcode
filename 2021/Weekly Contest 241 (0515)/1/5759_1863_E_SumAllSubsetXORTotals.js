/**
 * 05/15/21 evening
 * https://leetcode.com/contest/weekly-contest-241/problems/sum-of-all-subset-xor-totals/
 */

const pr = console.log;

// Accepted
const subsetXORSum = (a) => {
    let res = 0
    let n = a.length;
    let N = 2 ** n;
    for (let i = 0; i < N; i++) {
        let data = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                data.push(a[j]);
            }
        }
        // pr(data, cal(data));
        res += cal(data)
    }
    return res;
};

const cal = (a) => {
    let res = 0;
    for (const e of a) res ^= e;
    return res;
};

const main = () => {
    let nums = [1, 3];
    let nums2 = [5, 1, 6];
    pr(subsetXORSum(nums))
    pr(subsetXORSum(nums2))
};

main()