// 2.7 afternoon

// https://en.wikipedia.org/wiki/Maximum_subarray_problem
const Kadane_max = (nums) => {
    let res = sum = 0;
    for (const e of nums) {
        sum = Math.max(0, sum + e);
        res = Math.max(res, sum);
    }
    return res;
};

// https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
const Kadane_max2 = (nums) => {
    let res = sum = 0;
    for (const e of nums) {
        sum += e;
        if (res < sum) res = sum;
        if (sum < 0) sum = 0;
    }
    return res;
};

// https://www.geeksforgeeks.org/smallest-sum-contiguous-subarray/
const Kadane_min = (nums) => {
    let res = sum = Number.MAX_SAFE_INTEGER;
    for (const e of nums) {
        sum > 0 ? sum = e : sum += e;
        res = Math.min(res, sum);
    }
    return res;
};

// Accepted --- 96ms
const maxAbsoluteSum1 = (nums) => {
    return Math.max(Kadane_max(nums), Math.abs(Kadane_min(nums)));
};

// Accepted --- 88ms 92ms
const maxAbsoluteSum = (nums) => {
    return Math.max(Kadane_max2(nums), Math.abs(Kadane_min(nums)));
};

const main = () => {
    let nums = [1, -3, 2, 3, -4];
    let nums2 = [2, -5, 1, -4, 3, -2];
    console.log(maxAbsoluteSum(nums));
    console.log(maxAbsoluteSum(nums2));

    // Test
    console.log(Kadane_max(nums), Kadane_max2(nums), Kadane_min(nums2));
    console.log(Kadane_max(nums), Kadane_max2(nums), Kadane_min(nums2));
};

main()

