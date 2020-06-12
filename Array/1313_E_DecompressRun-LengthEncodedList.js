/**
 * 6.11 night
 * https://leetcode.com/problems/decompress-run-length-encoded-list/
 */

// Accepted --- 116ms 40.4MB 13.42%
const decompressRLElist = (nums) => {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let freq = nums[2 * i];
        let val = nums[2 * i + 1];
        for (let j = 1; j <= freq; j++) {
            res.push(val);
        }
    }
    return res;
};

const main = () => {
    let nums = [1, 2, 3, 4];
    let nums2 = [1, 1, 2, 3];
    console.log(decompressRLElist(nums));
    console.log(decompressRLElist(nums2));
};

main()