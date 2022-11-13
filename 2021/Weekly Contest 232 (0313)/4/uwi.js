
// 03/14/21 night

const pr = console.log;

// Accepted --- 112ms
const mx = Math.max;
const mi = Math.min;
const maximumScore = (a, k) => {
    let n = a.length;
    for (let i = k - 1; ~i; i--) {
        a[i] = mi(a[i], a[i + 1]);
    }
    // pr(a);
    for (let i = k + 1; i < n; i++) {
        a[i] = mi(a[i], a[i - 1]);
    }
    // pr(a);
    let l = r = k;
    let res = 0;
    for (let x = a[k]; x >= 1; x--) {
        while (~(l - 1) && a[l - 1] >= x) l--;
        while (r + 1 < n && a[r + 1] >= x) r++;
        // pr(a[l], a[r], x);
        res = mx(res, (r - l + 1) * x);
    }
    return res;
};

const main = () => {
    let nums = [1, 4, 3, 7, 4, 5], k = 3;
    let nums2 = [5, 5, 4, 5, 4, 1, 1, 1], k2 = 0;
    let nums_debug1 = [6569, 9667, 3148, 7698, 1622, 2194, 793, 9041, 1670, 1872], k_debug1 = 5;
    pr(maximumScore(nums, k));
    pr(maximumScore(nums2, k2));
    pr(maximumScore(nums_debug1, k_debug1)); // 9732
};

main()