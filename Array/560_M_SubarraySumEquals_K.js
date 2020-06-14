// 6.8 night
// https://leetcode.com/problems/subarray-sum-equals-k

// Accepted --- 76ms 42.7MB 79.39%
// reference: https://leetcode.com/articles/subarray-sum-equals-k/#
const subarraySum_hash_map = (nums, k) => {
    let count = 0, sum = 0;
    let map = new Map();
    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k))
            count += map.get(sum - k);
        map.set(sum, getOrDefault(map, sum, 0) + 1);
        console.log(map);
    }
    return count;
};

const getOrDefault = (map, k, v) => {
    if (!map.has(k)) {
        return v;
    }
    return map.get(k);
};

// Accepted --- 800ms 36.9MB 5.02%
// reference: https://leetcode.com/articles/subarray-sum-equals-k/#
const subarraySum_Without_Space = (nums, k) => {
    let count = 0;
    for (let start = 0; start < nums.length; start++) {
        let sum = 0;
        for (let end = start; end < nums.length; end++) {
            sum += nums[end];
            if (sum == k)
                count++;
        }
    }
    return count;
};

// Accepted --- 376ms 16.37%
// reference: https://leetcode.com/articles/subarray-sum-equals-k/#
const subarraySum_Cumulative_Sum = (nums, k) => {
    let count = 0;
    let sum = [];
    sum.push(0);
    for (let i = 1; i <= nums.length; i++)
        sum[i] = sum[i - 1] + nums[i - 1];
    for (let start = 0; start < nums.length; start++) {
        for (let end = start + 1; end <= nums.length; end++) {
            if (sum[end] - sum[start] == k)
                count++;
        }
    }
    return count;
};

// Time Limit exceed
// reference: https://leetcode.com/articles/subarray-sum-equals-k/#
const subarraySum_brute_force = (nums, k) => {
    let count = 0;
    for (let start = 0; start < nums.length; start++) {
        for (let end = start + 1; end <= nums.length; end++) {
            let sum = 0;
            for (let i = start; i < end; i++)
                sum += nums[i];
            if (sum == k)
                count++;
        }
    }
    return count;
};

const subarraySum = (nums, k) => {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let sub = nums.slice(i, j + 1);
            if (calculate(sub) == k) {
                count++;
            }
        }
    }
    return count;
};

const calculate = (arr) => {
    let sum = 0;
    for (const i of arr) {
        sum += i;
    }
    return sum;
};

const main = () => {
    let nums = [1, 1, 1], k = 2;
    let debug1_nums = [1, 2, 3], debug1_k = 3;
    console.log(subarraySum(nums, k));
    console.log(subarraySum(debug1_nums, debug1_k));  // 2

    console.log("")
    console.log(subarraySum_brute_force(nums, k));  // 2
    console.log(subarraySum_brute_force(debug1_nums, debug1_k));  // 2

    console.log("")
    console.log(subarraySum_Cumulative_Sum(nums, k));
    console.log(subarraySum_Cumulative_Sum(debug1_nums, debug1_k));

    console.log("")
    console.log(subarraySum_Without_Space(nums, k));
    console.log(subarraySum_Without_Space(debug1_nums, debug1_k));

    console.log("")
    console.log(subarraySum_hash_map(nums, k));
    console.log(subarraySum_hash_map(debug1_nums, debug1_k));

};

main()