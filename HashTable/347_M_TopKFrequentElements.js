/**
 * 8.1 night
 * https://leetcode.com/problems/top-k-frequent-elements/
 * 
 * similar to 692
 */

// Accepted --- 1600ms 40.1MB 5.12%
const topKFrequent = (nums, k) => {
    let element = [...new Set(nums)];
    let data = [];
    for (const e of element) {
        data.push([getFrequency(nums, e), e]);
    }
    data.sort((a, b) => b[0] - a[0]);
    let res = [];
    for (let i = 0; i < k; i++) {
        res.push(data[i][1]);
    }
    return res;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let nums = [1, 1, 1, 2, 2, 3],
        k = 2;
    let nums2 = [1],
        k2 = 1;
    let nums_debug1 = [3, 0, 1, 0],
        k_debug1 = 1;
    console.log(topKFrequent(nums, k));
    console.log(topKFrequent(nums2, k2));
    console.log(topKFrequent(nums_debug1, k_debug1));
};

main()