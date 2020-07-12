/**
 * 7.11 evening
 * https://leetcode.com/problems/single-number-iii/
 * 
 * compare to 137
 */

// Accepted --- 388ms 37.8MB 5.02%
const singleNumber = (nums) => {
    let element = [...new Set(nums)];
    let res = [];
    for (const e of element) {
        if (nums.indexOf(e) == nums.lastIndexOf(e)) {
            res.push(e);
        }
    }
    return res;
};

// Accepted --- 1744ms 40.7MB 5.02%
const singleNumber2 = (nums) => {
    let res = [];
    for (const i of nums) {
        if (nums.filter(x => x === i).length == 1) {
            res.push(i);
        }
    }
    return res;
};

const main = () => {
    let nums = [1, 2, 1, 3, 2, 5];
    console.log(singleNumber(nums));
    console.log(singleNumber2(nums));
};

main()