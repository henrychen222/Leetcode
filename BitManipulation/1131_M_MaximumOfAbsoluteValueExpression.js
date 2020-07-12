/**
 * 7.11 evening
 * https://leetcode.com/problems/maximum-of-absolute-value-expression/
 */

// Accepted --- 6768ms 39.6MB 45.71%
const maxAbsValExpr = (arr1, arr2) => {
    let n = arr1.length;
    let max = Number.MIN_VALUE;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let a = Math.abs(arr1[j] - arr1[i]);
            let b = Math.abs(arr2[j] - arr2[i]);
            let c = Math.abs(j - i);
            max = Math.max(max, a + b + c);
        }
    }
    return max;
};

const main = () => {
    let arr1 = [1, 2, 3, 4],
        arr2 = [-1, 4, 5, 6];
    let arr1_2 = [1, -2, -5, 0, 10],
        arr2_2 = [0, -2, -1, -7, -4];
    console.log(maxAbsValExpr(arr1, arr2));
    console.log(maxAbsValExpr(arr1_2, arr2_2));
};

main()