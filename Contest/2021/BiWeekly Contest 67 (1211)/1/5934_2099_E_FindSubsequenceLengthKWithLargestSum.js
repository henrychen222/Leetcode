/**
 * 12/11/21 morning
 */

const pr = console.log;

// Accepted
const maxSubsequence = (a, k) => {
    let b = a.map((x, i) => [x, i]);
    b.sort((x, y) => y[0] - x[0]);
    let se = new Set(), res = [], n = a.length;
    for (let i = 0; i < k; i++) se.add(b[i][1]);
    // pr(se, a);
    for (let i = 0; i < n; i++) {
        if (se.has(i)) res.push(a[i]);
    }
    return res;
};

const main = () => {
    let nums = [2, 1, 3, 3], k = 2;
    let nums2 = [-1, -2, 3, 4], k2 = 3;
    let nums3 = [3, 4, 3, 3], k3 = 2;
    pr(maxSubsequence(nums, k))
    pr(maxSubsequence(nums2, k2))
    pr(maxSubsequence(nums3, k3))
};

main()