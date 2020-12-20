/**
 * 9.11 noon  12.18 evening complete
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * 
 * read:
 * https://www.geeksforgeeks.org/longest-monotonically-increasing-subsequence-size-n-log-n/
 */

// Accepted --- 88ms 84.11%  Tail table with binary search
// reference: https://leetcode.com/problems/longest-increasing-subsequence/discuss/74824/JavaPython-Binary-search-O(nlogn)-time-with-explanation
const lengthOfLIS = (nums) => {
    let n = nums.length;
    let tail = Array(n).fill(0);
    let len = 0;
    for (const num of nums) {
        let low = 0;
        let high = len;
        while (low != high) {
            let mid = low + ((high - low) >> 1);
            if (tail[mid] < num) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        tail[low] = num;
        if (low == len) len++;
    }
    return len;
};

// Accepted --- 180ms 24.44%
/**
 * reference: 
 * https://www.cnblogs.com/grandyang/p/4938187.html
 * https://leetcode.com/problems/longest-increasing-subsequence/discuss/74989/C%2B%2B-Typical-DP-N2-solution-and-NLogN-solution-from-GeekForGeek
 */
const lengthOfLIS_DP = (nums) => {
    let n = nums.length;
    let dp = Array(n).fill(1); // dp[i]: max length of LIS with end index i: [j, i]
    let res = 1;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        res = Math.max(res, dp[i]);
    }
    return res;
};

// WA 32/54, consider wrong, increasing only depends on two elements, only depends on three elements can use three pointer, Question 1027, 873, 1218
const lengthOfLIS3 = (nums) => {
    let n = nums.length;
    let res = 1;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[j] > nums[i]) {
                let tmp = [nums[i], nums[j]];
                console.log("first", tmp);
                for (let k = j + 1; k < n; k++) {
                    console.log(nums[k], tmp)
                    if (nums[k] > tmp[tmp.length - 1]) {
                        tmp.push(nums[k]);
                    }
                }
                console.log(tmp);
                res = Math.max(res, tmp.length);
            }
        }
    }
    return res;
};

///////////////////////////////// 9.11 noon ////////////////////////////
// time limit 21/24
const lengthOfLIS2 = (nums) => {
    let n = nums.length;
    let N = 2 ** n;
    let res = 0;
    for (let i = 0; i < N; i++) {
        let data = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                data.push(nums[j]);
            }
        }
        let sorted = [...data].sort((a, b) => a - b);
        if (data.join("") == sorted.join("")) {
            if (isAscending(data)) {
                res = Math.max(res, data.length);
            }
        }
    }
    return res;
};

const isAscending = (arr) => {
    return arr.every((x, i) => {
        return i === 0 || x > arr[i - 1];
    });
};

// wrong
const lengthOfLIS1 = (nums) => {
    let n = nums.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let tmp = [nums[i]];
        for (let j = i + 1; j < n; j++) {
            if (nums[j] > tmp[tmp.length - 1]) {
                tmp.push(nums[j]);
            }
        }
        console.log(tmp);
        res = Math.max(res, tmp.length);
    }
    return res;
};

const main = () => {
    let nums = [10, 9, 2, 5, 3, 7, 101, 18];
    let nums2 = [0, 1, 0, 3, 2, 3];
    let nums3 = [7, 7, 7, 7, 7, 7, 7];
    let debug1 = [10, 9, 2, 5, 3, 4];
    let debug2 = [2, 2];
    let debug3 = [0];
    console.log(lengthOfLIS(nums)); // 4
    console.log(lengthOfLIS(nums2)); // 4
    console.log(lengthOfLIS(nums3)); // 1
    console.log(lengthOfLIS(debug1)); // 3  [2, 3, 4]
    console.log(lengthOfLIS(debug2)); // 1
    console.log(lengthOfLIS(debug3)); // 1

};

main()