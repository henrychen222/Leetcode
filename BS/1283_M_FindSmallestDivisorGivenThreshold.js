/**
 * 09/12/20 afternoon  03/26/22 evening fixed
 * https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/
 */

// Accepted --- 68ms 100%
let a, border;
const smallestDivisor = (nums, threshold) => {
    a = nums, border = threshold;
    return BinarySearch(0, Number.MAX_SAFE_INTEGER)
};

const BinarySearch = (low, high) => {
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        if (possible(mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
};

const possible = (d) => {
    let sum = 0;
    for (const x of a) sum += Math.ceil(x / d);
    return sum > border;
};

///////////////////////////////////////////////////////
// time limit 56/59
const smallestDivisor1 = (nums, threshold) => {
    for (let d = 1;; d++) {
        let sum = 0;
        for (const n of nums) {
            let tmp = Math.ceil(n / d);
            sum += tmp;
        }
        if (sum <= threshold) return d;
    }
};

const main = () => {
    let nums = [1, 2, 5, 9],
        threshold = 6;
    let nums2 = [2, 3, 5, 7, 11],
        threshold2 = 11;
    let nums3 = [19],
        threshold3 = 5;
    let nums_debug1 = [962551, 933661, 905225, 923035, 990560],
        threshold_debug1 = 10
    console.log(smallestDivisor(nums, threshold));
    console.log(smallestDivisor(nums2, threshold2));
    console.log(smallestDivisor(nums3, threshold3));
    console.log(smallestDivisor(nums_debug1, threshold_debug1)); // 495280
};

main()