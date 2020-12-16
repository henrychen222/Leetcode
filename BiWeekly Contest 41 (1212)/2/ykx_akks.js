// 12.12 noon

// Accepted --- 220ms
const getSumAbsoluteDifferences = (nums) => {
    let n = nums.length;
    let res = [0];
    for (let i = 0; i < n; i++) {
        res[0] += nums[i] - nums[0];
    }
    for (let i = 1; i < n; i++) {
        let diff = nums[i] - nums[i - 1];
        res.push(res[res.length - 1] + i * diff - (n - i) * diff);
    }
    return res;
};

// // Accepted --- 220ms
const getSumAbsoluteDifferences2 = (nums) => {
    let n = nums.length;
    let res = [0];
    for (let i = 0; i < n; i++) {
        res[0] += nums[i] - nums[0];
    }
    for (let i = 1; i < n; i++) {
        let diff = nums[i] - nums[i - 1];
        res[i] = res[i - 1] + i * diff - (n - i) * diff; // difference
    }
    return res;
};

// Accepted --- 236ms
const getSumAbsoluteDifferences_Origin = (nums) => {
    let n = nums.length;
    let res = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        res[0] += nums[i] - nums[0];
    }
    for (let i = 1; i < n; i++) {
        let diff = nums[i] - nums[i - 1];
        res[i] = res[i - 1] + i * diff - (n - i) * diff;
    }
    return res;
};

const main = () => {
    let nums = [2, 3, 5];
    let nums2 = [1, 4, 6, 8, 10];
    console.log(getSumAbsoluteDifferences(nums));
    console.log(getSumAbsoluteDifferences(nums2));
};

main()