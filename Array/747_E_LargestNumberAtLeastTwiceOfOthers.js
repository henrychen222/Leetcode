/**
 * 6.5 evening
 * https://leetcode.com/problems/largest-number-at-least-twice-of-others/
 */

// Accepted --- 64ms 35.5MB
const dominantIndex = (nums) => {
    let numsCopy = [...nums];
    numsCopy.sort((a, b) => b - a);
    const largest = numsCopy[0];
    for (let i = 1; i < numsCopy.length; i++) {
        if (largest < 2 * numsCopy[i]) {
            return -1;
        }
    }
    return nums.indexOf(largest);
};

const main = () => {
    let nums = [3, 6, 1, 0];
    let nums2 = [1, 2, 3, 4];
    console.log(dominantIndex(nums));
    console.log("");
    console.log(dominantIndex(nums2));
};

main()