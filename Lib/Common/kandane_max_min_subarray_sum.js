// 02/07/21 afternoon

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