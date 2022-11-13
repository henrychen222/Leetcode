// 05/08/21 night
const pr = console.log;


// Accepted --- 100ms
const maxDistance = (a, b) => {
    let n = a.length;
    let m = b.length;
    let res = 0;
    let j = 0;
    for (let i = 0; i < n; i++) {
        for (j = mx(i, j); j < m && a[i] <= b[j]; j++);
        res = mx(res, j - i - 1);
    }
    return res;
};

// Accepted --- 104ms
const mx = Math.max;
const maxDistance1 = (a, b) => {
    let n = a.length;
    let m = b.length;
    let j = -1;
    let res = 0;
    for (let i = 0; i < n; i++) {
        j = mx(i, j);
        // j = i; // Accepted --- 3696ms
        while (j + 1 < m && a[i] <= b[j + 1]) j++;
        // pr(i, j, a[i], b[j], j - i);
        res = mx(res, j - i);
    }
    return res;
};

const main = () => {
    let nums1 = [55, 30, 5, 4, 2], nums2 = [100, 20, 10, 10, 5];
    let nums1_2 = [2, 2, 2], nums2_2 = [10, 10, 1];
    let nums1_3 = [30, 29, 19, 5], nums2_3 = [25, 25, 25, 25, 25];
    let nums1_4 = [5, 4], nums2_4 = [3, 2];
    let nums1_debug1 = [55, 30, 5, 4, 2], nums2_debug1 = [100, 20, 10, 10, 5];
    let nums1_debug2 = [2], nums2_debug2 = [1];
    pr(maxDistance(nums1, nums2));
    pr(maxDistance(nums1_2, nums2_2));
    pr(maxDistance(nums1_3, nums2_3));
    pr(maxDistance(nums1_4, nums2_4));
    pr(maxDistance(nums1_debug1, nums2_debug1));
    pr(maxDistance(nums1_debug2, nums2_debug2));
};

main()