/**
 * 6.9 afternoon
 * https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
 */

// Accepted --- 716ms 41.1MB 5.50%
const findSpecialInteger = (arr) => {
    let allItem = [...new Set(arr)];
    for (const item of allItem) {
        let freq = getFrequency(arr, item);
        if (freq > arr.length * 0.25) {
            return item;
        }
    }
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];
    console.log(findSpecialInteger(arr));
};

main()