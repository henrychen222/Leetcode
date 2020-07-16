/**
 * 7.15 afternoon  7.15 evening
 * https://leetcode.com/problems/summary-ranges/
 */

// Accepted --- 80ms 33.1MB 24.16%
const summaryRanges = (nums) => {
    if (nums.length == 0) return [];
    if (nums.length == 1) return [nums[0] + ''];
    let data = [];
    if (nums[0] + 1 != nums[1]) { // head single
        data.push([nums[0] + '']);
    } else {
        data.push([nums[0] + '', '->']);
    }
    for (let i = 2; i < nums.length; i++) {
        if ((nums[i - 2] + 1) != nums[i - 1] && (nums[i - 1] + 1) == nums[i]) {
            data.push([nums[i - 1] + '', '->']); // start/left number of each ->
        } else if ((nums[i - 2] + 1) != nums[i - 1] && (nums[i - 1] + 1) != nums[i]) {
            data.push([nums[i - 1] + '']); // single
        }
    }
    let last = nums[nums.length - 1];
    let secondLast = nums[nums.length - 2];
    if (secondLast + 1 != last) { // tail single
        data.push([last + '']);
    } else {
        data[data.length - 1].push([last + '']);
    }
    // console.log(data);
    let res = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].length == 1) { // handle single ['']
            res.push(data[i][0] + '');
        } else if (data[i].length == 3) { // handle tail ['', '->', [tail]]
            res.push(data[i][0] + data[i][1] + data[i][2]);
        } else { // hanle ['', '->']
            let idx = nums.indexOf(Number(data[i + 1][0])) - 1;
            res.push(data[i][0] + data[i][1] + nums[idx]);
        }
    }
    return res;
};

const main = () => {
    let nums = [0, 1, 2, 4, 5, 7];
    let nums2 = [0, 2, 3, 4, 6, 8, 9];
    let debug1 = [];
    let debug2 = [-1];
    let debug3 = [-2147483648, -2147483647, 2147483647];
    let debug4 = [-1000000000, -9999, 0, 1, 2, 10, 100, 1000, 999999999, 1000000000];
    console.log(summaryRanges(nums));
    console.log(summaryRanges(nums2));
    console.log(summaryRanges(debug1));
    console.log(summaryRanges(debug2));
    console.log(summaryRanges(debug3));
    console.log(summaryRanges(debug4));
};

main()