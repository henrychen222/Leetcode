/**
 * 6.8 evening
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */

// Accepted --- 464ms 35.9 MB 5.11%
const twoSum = (numbers, target) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] == target) {
                return [i + 1, j + 1];
            }
        }
    }
};

const main = () => {
    let numbers = [2, 7, 11, 15],
        target = 9;
    console.log(twoSum(numbers, target));
};

main()