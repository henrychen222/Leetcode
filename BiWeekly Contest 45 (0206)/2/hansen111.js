// 2.7 afternoon

// Accepted --- 88ms
const maxAbsoluteSum = (nums) => {
    let res = sum = min = max = 0;
    for (const e of nums) {
        sum += e;
        min = Math.min(min, sum);
        max = Math.max(max, sum);
        res = Math.max(res, Math.abs(sum - max));
        res = Math.max(res, Math.abs(sum - min));
        console.log(sum, min, max, res);
    }
    return res;
};

const main = () => {
    let nums = [1, -3, 2, 3, -4];
    let nums2 = [2, -5, 1, -4, 3, -2];
    console.log(maxAbsoluteSum(nums));
    console.log(maxAbsoluteSum(nums2));
};

main()