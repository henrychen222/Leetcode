// 05/29/21 afternoon

const bitCount = (n) => { n = n - ((n >> 1) & 0x55555555); n = (n & 0x33333333) + ((n >> 2) & 0x33333333); return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24; };

// Accepted --- 88ms
const mi = Math.min;
const minimumXORSum = (a1, a2) => {
    let n = a1.length;
    let dp = Array(1 << n).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for (let i = 0; i < 1 << n; i++) {
        let bit = bitCount(i);
        for (let j = 0; j < n; j++) {
            // if (i << (-j - 1) >= 0) {
            if (i << ~j >= 0) {
                dp[i | 1 << j] = mi(dp[i | 1 << j], dp[i] + (a1[bit] ^ a2[j]));
                // pr(dp);
                // pr("idx", i | 1 << j, "value", dp[i | 1 << j]);
            }
        }
    }
    return dp[(1 << n) - 1];
};

const pr = console.log;
const main = () => {
    let nums1 = [1, 2], nums2 = [2, 3];
    let nums1_2 = [1, 0, 3], nums2_2 = [5, 3, 4];
    let nums1_debug1 = [70, 29, 44, 29, 86, 28, 97, 58, 37, 2], nums2_debug1 = [53, 71, 82, 12, 23, 80, 92, 37, 15, 95];
    let nums1_debug2 = [9606269, 5221932, 7334481, 8439484, 5986425, 8864979, 5430580, 14172, 2078710, 7420803, 7542233],
        nums2_debug2 = [5875595, 5113681, 9047874, 6700866, 5693602, 9586753, 8259408, 1897425, 6334375, 6415366, 3421110]
    let nums1_debug3 = [65022, 4657711, 8572489, 3336640, 7744043, 8672352, 6861299, 5122697, 2857375, 7539481, 8907966, 3311170],
        nums2_debug3 = [6030101, 8828015, 59043, 6529065, 9719816, 7144904, 6799001, 5637315, 9805075, 1136584, 8266168, 4154565]
    pr(minimumXORSum(nums1, nums2))
    pr(minimumXORSum(nums1_2, nums2_2))
    pr(minimumXORSum(nums1_debug1, nums2_debug1)) // 254
    pr(minimumXORSum(nums1_debug2, nums2_debug2)) // 22257895
    pr(minimumXORSum(nums1_debug3, nums2_debug3)) // 15088819
};

main()

// pr(0, ~0);
// pr(1, ~1);
// pr(2, ~2);
// pr(3, ~3);
// pr(~100);