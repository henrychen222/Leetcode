/**
 * 9.9 afternoon
 * https://leetcode.com/problems/find-k-pairs-with-smallest-sums/
 */

// Accepted --- 408ms 55.56%
const kSmallestPairs = (nums1, nums2, k) => {
    let data = [];
    for (const i of nums1) {
        for (const j of nums2) {
            data.push([i, j]);
        }
    }
    // console.log(data)
    data.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
    // console.log(data)
    return data.slice(0, k);
};

const main = () => {
    let nums1 = [1, 7, 11],
        nums2 = [2, 4, 6],
        k = 3;
    let nums1_2 = [1, 1, 2],
        nums2_2 = [1, 2, 3],
        k2 = 2;
    let nums1_3 = [1, 2],
        nums2_3 = [3],
        k3 = 3;
    console.log(kSmallestPairs(nums1, nums2, k));
    console.log(kSmallestPairs(nums1_2, nums2_2, k2));
    console.log(kSmallestPairs(nums1_3, nums2_3, k3));
};

main()