/**
 * 7.12 evening
 * https://leetcode.com/problems/xor-queries-of-a-subarray/
 */

// Accepted --- 996ms 49.3MB 26.00%
const xorQueries = (arr, queries) => {
    let res = [];
    for (const q of queries) {
        let xor;
        for (let i = q[0]; i <= q[1]; i++) {
            xor ^= arr[i];
        }
        res.push(xor);
    }
    return res;
};


const main = () => {
    let arr = [1, 3, 4, 8],
        queries = [
            [0, 1],
            [1, 2],
            [0, 3],
            [3, 3]
        ];
    let arr2 = [4, 8, 2, 10],
        queries2 = [
            [2, 3],
            [1, 3],
            [0, 0],
            [0, 3]
        ];
    console.log(xorQueries(arr, queries));
    console.log(xorQueries(arr2, queries2));
};

main()