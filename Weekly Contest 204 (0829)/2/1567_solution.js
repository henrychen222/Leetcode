/**
 * 8.29 night
 * https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/
 * Greedy, sliding window
 */

// 92ms 100.00%
const getMaxLen_uwi = (nums) => {
    let n = nums.length;
    let res = 0;
    for (let i = 0; i < n;) { // pointer i 
        while (i < n && nums[i] == 0) i++;
        let j = i;  // pointer j
        while (j < n && nums[j] != 0) j++;
        if (i < j) {
            let neg = 0;  // count negative number
            let first = -1, last = -1; // first and last index of Negative numbers
            for (let k = i; k < j; k++) { // pointer k
                if (nums[k] < 0) {
                    if (first == -1) {
                        first = k;
                    }
                    last = k;
                    neg++;
                }
            }
            if (neg % 2 == 0) { // negative number is even
                res = Math.max(res, j - i);
            } else {
                res = Math.max(res, last - i);
                res = Math.max(res, j - (first + 1));
            }
        }
        i = j;
    }
    return res;
};

// Accepted --- 100ms
const getMaxLen_skywalkert = (nums) => {
    let n = nums.length;
    let res = 0, pos = 0, last = [-1, n], neg = 0;
    for(const x of nums) {
        if(!x) { // if meet 0 reset
            last[0] = pos;
            last[1] = n;
            neg = 0;
        } else {
            neg ^= x < 0;
            last[neg] = Math.min(last[neg], pos);
            res = Math.max(res, pos - last[neg]);
        }
        pos++;
    }
    return res;
};

// https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/discuss/819278/Java-O(n)-time-O(1)-space
// Accepted --- 92ms 100%
const getMaxLen_fighting_for_flag = (nums) => {
    let n = nums.length;
    let firstNeg = -1, zeroPos = -1, neg = 0, max = 0; // neg: count the number of negative numbers from zeroPosition to current index
    for (let i = 0; i < n; i++) {
        if (nums[i] < 0) {
            neg++;
            if (firstNeg == -1) firstNeg = i; // get first negative number
        }
        if (nums[i] == 0) {// reset like the game if meet 0
            neg = 0;
            firstNeg = -1;
            zeroPos = i;
        } else {
            if (neg % 2 == 0) {
                max = Math.max(i - zeroPos, max); // consider index of zero
            } else {
                max = Math.max(i - firstNeg, max); // consider index of first negative number
            }
        }
    }
    return max;
};

const main = () => {
    let nums = [1, -2, -3, 4];
    let nums2 = [0, 1, -2, -3, -4];
    let nums3 = [-1, -2, -3, 0, 1];
    let nums4 = [-1, 2];
    let nums5 = [1, 2, 3, 5, -6, 4, 0, 10];
    console.log(getMaxLen_uwi(nums));
    console.log(getMaxLen_uwi(nums2));
    console.log(getMaxLen_uwi(nums3));
    console.log(getMaxLen_uwi(nums4));
    console.log(getMaxLen_uwi(nums5));

    console.log("")
    console.log(getMaxLen_skywalkert(nums));
    console.log(getMaxLen_skywalkert(nums2));
    console.log(getMaxLen_skywalkert(nums3));
    console.log(getMaxLen_skywalkert(nums4));
    console.log(getMaxLen_skywalkert(nums5));

    console.log("")
    console.log(getMaxLen_fighting_for_flag(nums));
    console.log(getMaxLen_fighting_for_flag(nums2));
    console.log(getMaxLen_fighting_for_flag(nums3));
    console.log(getMaxLen_fighting_for_flag(nums4));
    console.log(getMaxLen_fighting_for_flag(nums5));
};

main()