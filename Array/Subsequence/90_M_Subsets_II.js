/**
 * 7.8 morning
 * https://leetcode.com/problems/subsets-ii/
 */

// Accepted --- 112ms 38.8MB 13.00%
const subsetsWithDup = (nums) => {
    let data = getAllSubsequences(nums);
    data.map(x => x.sort((a, b) => a - b));
    return removeDuplicatesMultiArray(data);
};

const getAllSubsequences = (arr) => {
    let res = [];
    let n = arr.length;
    let N = 2 ** n;
    for (let i = 0; i < N; i++) {
        let data = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                data.push(arr[j]);
            }
        }
        res.push(data);
    }
    return res;
};

const removeDuplicatesMultiArray = (arr) => {
    return arr.map(JSON.stringify).reverse().filter((item, index, arr) => {
        return arr.indexOf(item, index + 1) === -1;
    }).reverse().map(JSON.parse);
};

const main = () => {
    let nums = [1, 2, 2];
    let debug1 = [1, 1, 2, 2];
    let debug2 = [4, 4, 4, 1, 4];
    console.log(subsetsWithDup(nums));
    console.log(subsetsWithDup(debug1));
    console.log(subsetsWithDup(debug2));
};

main()