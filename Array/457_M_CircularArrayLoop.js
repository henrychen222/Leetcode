/**
 * 7.12 evening
 * https://leetcode.com/problems/circular-array-loop/
 */

// need to fix
const circularArrayLoop = (nums) => {
    let n = nums.length;
    let record = [];
    for (let i = 0; i < n; i++) {
        let startIdx = i;
        let idx = i + nums[i];
        console.log(idx);
        while (idx < n && idx >= 0) {
            if (nums[idx] > 0) {
                idx = idx + nums[idx];
                record.push('+');
            } else {
                idx = idx + nums[idx];
                record.push('-');
            }
        }
        console.log(idx, nums[idx])

        // idx = idx - n;
        // while (idx < startIdx && idx >= 0) {
        //     if (nums[idx] > 0) {
        //         idx = idx + nums[idx];
        //         record.push('+');
        //     } else {
        //         idx = idx + nums[idx];
        //         record.push('-');
        //     }
        // }
        // console.log(startIdx, idx, record)

        // if (idx == startIdx && [...new Set(record)].length == 1 && [...new Set(record)][0] == '+') {
        //     return true;
        // }
    }
    return false;
};

const main = () => {
    let nums = [2, -1, 1, 2, 2];
    let nums2 = [-1, 2];
    let nums3 = [-2, 1, -1, -2, -2];
    // console.log(circularArrayLoop(nums));
    // console.log(circularArrayLoop(nums2));
    console.log(circularArrayLoop(nums3));
};

main()