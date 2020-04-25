/**
 * 4.24 night
 * https://leetcode.com/problems/create-target-array-in-the-given-order/
 */

// Accepted --- 56ms 34MB 55.20%
const createTargetArray = (nums, index) => {
    let result = [];
    let data = index.concat(nums);
    // console.log(data);

    for (let i = 0; i < index.length; i++) { // loop until index length, not data
        result.splice(data[i], 0, data[i + index.length]); // insert at index index[i] the value nums[i]
        // console.log(result);
    }
    // console.log(result);
    return result;
};

const main = () => {
    const nums = [0, 1, 2, 3, 4],
        index = [0, 1, 2, 2, 1];
    const nums2 = [1, 2, 3, 4, 0],
        index2 = [0, 1, 2, 3, 0];
    const nums3 = [1],
        index3 = [0];

    console.log(createTargetArray(nums, index)); //[0,4,1,3,2]
    console.log(createTargetArray(nums2, index2)); // [0,1,2,3,4]
    console.log(createTargetArray(nums3, index3)); // [1]

};

main()