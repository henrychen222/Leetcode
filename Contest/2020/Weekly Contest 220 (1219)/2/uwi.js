// 12.19 night

// 116ms https://leetcode.com/contest/weekly-contest-220/ranking/3/
const maximumUniqueSubarray = (nums) => {
    let n = nums.length;
    let freq = Array(10001).fill(0); // record occurrence for every [1, 10001]
    // let freq = Array(n + 1).fill(0); // wrong
    let left = sum = res = 0;
    for (let i = 0; i < n; i++) {
        freq[nums[i]]++;
        sum += nums[i];
        while (left <= i && freq[nums[i]] >= 2) {
            freq[nums[left]]--;
            sum -= nums[left];
            left++;
        }
        // console.log(left, i, nums.slice(left, i + 1), freq);
        res = Math.max(res, sum);
    }
    // console.log(freq)
    return res;
};


const main = () => {
    let nums = [4, 2, 4, 5, 6];
    let nums2 = [5, 2, 1, 2, 5, 2, 1, 2, 5];
    let debug1 = [10000,1,10000,1,1,1,1,1,1];
    console.log(maximumUniqueSubarray(nums));
    console.log(maximumUniqueSubarray(nums2));
    console.log(maximumUniqueSubarray(debug1)); // 10001
};

main()