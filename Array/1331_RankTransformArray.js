/**
 * 6.9 noon
 * https://leetcode.com/problems/rank-transform-of-an-array/
 */

// Accepted --- 4996ms 59.2MB 17.57%
const arrayRankTransform = (arr) => {
    arrOrigin = [...arr];
    arr = [...new Set(arr)];
    arr.sort((a, b) => a - b);
    return arrOrigin.map(x => arr.indexOf(x) + 1);
};

const main = () => {
    let arr = [40, 10, 20, 30];
    let arr2 = [100, 100, 100];
    let arr3 = [37, 12, 28, 9, 100, 56, 80, 5, 12];
    console.log(arrayRankTransform(arr));
    console.log(arrayRankTransform(arr2));
    console.log(arrayRankTransform(arr3));
};

main()