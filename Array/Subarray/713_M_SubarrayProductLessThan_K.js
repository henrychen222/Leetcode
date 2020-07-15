/**
 * 7.14 night 7.15 noon
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 */

// Accepted --- 84ms 45.6MB 92.06%
/**
 * reference: 
 * https://leetcode.com/problems/minimum-size-subarray-sum/discuss/59213/Javascript-solution-if-anyone-is-interested
 * https://leetcode.com/problems/subarray-product-less-than-k/discuss/576658/Simple-and-Fast-O(n)-JavaScript-Two-Pointers
 */
const numSubarrayProductLessThanK = (nums, k) => {
    let cnt = 0;
    let start = 0;
    let end = 0;
    let windowProduct = 1;
    while (start < nums.length && end < nums.length) {
        if (windowProduct * nums[start] < k) {
            windowProduct *= nums[start];
            cnt += start - end + 1;
            start++;
        } else if (nums[end]) {
            windowProduct /= nums[end];
            end++;
        } else {
            break;
        }
    }
    return cnt;
};

// Time Limit 35/84
const numSubarrayProductLessThanK1 = (nums, k) => {
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            let subarr = nums.slice(i, j + 1);
            if (getProduct(subarr) < k) {
                cnt++;
            }
        }
    }
    return cnt;
};

const getProduct = (arr) => {
    return arr.reduce((acc, cur) => acc * cur);
};

const main = () => {
    let nums = [10, 5, 2, 6],
        k = 100;
    console.log(numSubarrayProductLessThanK(nums, k));
};

main()