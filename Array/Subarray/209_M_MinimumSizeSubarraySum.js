/**
 * 7.14 night  7.15 morning
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 */

// Accepted --- 76ms 35.9MB 39.44%
/**
 * reference:
 * read sliding window solution in O(N)
 * https://leetcode.com/problems/minimum-size-subarray-sum/discuss/59213/Javascript-solution-if-anyone-is-interested
 * https://walkccc.github.io/CS/JavaScript/01/slidingWindow/
 * https://zxi.mytechroad.com/blog/two-pointers/leetcode-209-minimum-size-subarray-sum/
 * https://www.cnblogs.com/grandyang/p/4501934.html
 */
const minSubArrayLen_sliding_window = (k, arr) => {
    let res = Number.MAX_VALUE;
    let start = 0;
    let end = 0;
    let windowSum = 0;
    while (start < arr.length) {
        if (windowSum < k && end < arr.length) {
            windowSum += arr[end];
            end++;
        } else if (windowSum >= k) {
            res = Math.min(res, end - start);
            windowSum -= arr[start];
            start++;
        } else {
            break;
        }
    }
    return res == Number.MAX_VALUE ? 0 : res;
};

// Accepted --- 348ms 37MB 7.09%
const minSubArrayLen_refine = (s, nums) => {
    let min = Number.MAX_VALUE;
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i];
        let len = 1;
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            len++;
            if (sum >= s) {
                min = Math.min(min, len);
                break;
            }
        }
    }
    if (min == Number.MAX_VALUE) return 0;
    return min;
};

// Accepted --- 1564ms 36.8MB 5.02%
const minSubArrayLen = (s, nums) => {
    if (nums.find(x => x >= s)) return 1;
    let min = Number.MAX_VALUE;
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i];
        let len = 1;
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            len++;
            if (sum >= s) {
                min = Math.min(min, len);
            }
        }
    }
    if (min == Number.MAX_VALUE) return 0;
    return min;
};

// Time Limit Exceed  14/15
const minSubArrayLen1 = (s, nums) => {
    if (nums.find(x => x >= s)) return 1;
    let min = Number.MAX_VALUE;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) { // not conside j = i, single subarr already considered
            let subarr = nums.slice(i, j + 1);
            if (sum(subarr) >= s) {
                min = Math.min(min, subarr.length);
            }
        }
    }
    if (min == Number.MAX_VALUE) return 0;
    return min;
};

const sum = (arr) => {
    return arr.reduce((acc, cur) => acc + cur);
};

const main = () => {
    let s = 7,
        nums = [2, 3, 1, 2, 4, 3];
    let s_debug1 = 100,
        nums_debug1 = [];
    console.log(minSubArrayLen(s, nums));
    console.log(minSubArrayLen(s_debug1, nums_debug1));

    console.log("");
    let s_debug2 = 15,
        nums_debug2 = [5, 1, 3, 5, 10, 7, 4, 9, 2, 8];
    console.log(minSubArrayLen_refine(s, nums));
    console.log(minSubArrayLen_refine(s_debug1, nums_debug1));
    console.log(minSubArrayLen_refine(s_debug2, nums_debug2)); // 2

    console.log("");
    console.log(minSubArrayLen_sliding_window(s, nums));
    console.log(minSubArrayLen_sliding_window(s_debug1, nums_debug1));
    console.log(minSubArrayLen_sliding_window(s_debug2, nums_debug2)); // 2

};

main()