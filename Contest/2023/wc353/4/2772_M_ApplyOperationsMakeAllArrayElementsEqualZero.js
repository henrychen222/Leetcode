/*
 * 07/08/23 night
 * https://leetcode.com/contest/weekly-contest-353/problems/apply-operations-to-make-all-array-elements-equal-to-zero/
 */

const pr = console.log;

// Accepted
// reference: AntonRaichuk https://leetcode.cn/circle/discuss/6cb8Km/
const checkArray = (a, k) => {
    let cur = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] < cur) return false;
        a[i] -= cur;
        cur += a[i];
        if (i - k + 1 >= 0) cur -= a[i - k + 1];
    }
    pr(cur, a)
    return cur ? false : true;
};

const main = () => {
    let a = [2, 2, 3, 1, 1, 0], k = 3;
    let a2 = [1, 3, 1, 1], k2 = 2
    pr(checkArray(a, k))
    pr(checkArray(a2, k2))
};

main()

// pr(LIS_subarray([5, 6, 3, 5, 7, 8, 9, 1, 2]))