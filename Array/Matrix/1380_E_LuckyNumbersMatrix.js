/**
 * 4.24 night
 * https://leetcode.com/problems/lucky-numbers-in-a-matrix/
 */

/**
 * https://blog.csdn.net/mapoos/article/details/104876617
 * Accepted --- 56ms 36.4 MB 91.09%
 */
const luckyNumbers_csdn = (matrix) => {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        // 找到行的最小值
        let min = Number.MAX_VALUE;
        let pos = 0;
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] < min) {
                min = matrix[i][j];
                pos = j;
            }
        }
        // 判断是不是列的最大值
        let flag = true;
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][pos] > min) {
                flag = false;
                break;
            }
        }
        if (flag) {
            result.push(min);
        }
    }
    return result;
};

// const luckyNumbers_cnblogs = (matrix) => {
//     let m = matrix.length;
//     let n = matrix[0].length;
//     let min = [];
//     let max = [];

//     for(let i = 0; i < m; i++) {
//         min.push(Number.MAX_VALUE);
//     }
//     // Array.prototype.fill(min, Number.MAX_VALUE)
//     // min.fill(Number.MAX_VALUE);

//     for (let i = 0; i < m; ++i) {
//         for (let j = 0; j < n; ++j) {
//             min[i] = Math.min(matrix[i][j], min[i]);
//             max[j] = Math.max(matrix[i][j], max[j]);
//         }
//     }
//     let result = [];
//     for (let i = 0; i < m; ++i)
//         for (let j = 0; j < n; ++j)
//             if (min[i] == max[j])
//                 result.push(min[i]);
//     return result;
// };


// Wrong
const luckyNumbers = (matrix) => {
    let minEachRow = [];
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        minEachRow.push(getMinArr(matrix[i]));
    }
    // console.log(minEachRow);
    // console.log(getMaxArr(minEachRow));
    result.push(getMaxArr(minEachRow));
    return result;
};

const getMinArr = (arr) => {
    let min = arr[0];
    for (i = 1; i < arr.length; i++)
        if (arr[i] < min)
            min = arr[i];
    return min;
};

const getMaxArr = (arr) => {
    let max = arr[0];
    for (i = 1; i < arr.length; i++)
        if (arr[i] > max)
            max = arr[i];
    return max;
};

const main = () => {
    const matrix = [
        [3, 7, 8],
        [9, 11, 13],
        [15, 16, 17]
    ];
    const matrix2 = [
        [1, 10, 4, 2],
        [9, 3, 8, 7],
        [15, 16, 17, 12]
    ];
    const matrix3 = [
        [7, 8],
        [1, 2]
    ];

    console.log(luckyNumbers(matrix)); // [15]
    console.log(luckyNumbers(matrix2)); // [12]
    console.log(luckyNumbers(matrix3)); // [7]

    const debug1 = [
        [36376, 85652, 21002, 4510],
        [68246, 64237, 42962, 9974],
        [32768, 97721, 47338, 5841],
        [55103, 18179, 79062, 46542]
    ];
    console.log(luckyNumbers(debug1)); // []

    /******************************************************************/
    console.log("\n\n\n");
    console.log(luckyNumbers_csdn(matrix));
    console.log(luckyNumbers_csdn(matrix2));
    console.log(luckyNumbers_csdn(matrix3));
    console.log(luckyNumbers_csdn(debug1));

    // console.log("\n");
    // console.log(luckyNumbers_cnblogs(matrix));
    // console.log(luckyNumbers_cnblogs(matrix2));
    // console.log(luckyNumbers_cnblogs(matrix3));
    // console.log(luckyNumbers_cnblogs(debug1));


};

main()