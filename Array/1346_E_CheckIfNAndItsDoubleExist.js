/**
 * 6.5 evening
 * https://leetcode.com/problems/check-if-n-and-its-double-exist/
 */

// Accpeted --- 80ms 36MB 19.94%
const checkIfExist = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == 2 * arr[j] || arr[j] == 2 * arr[i]) {
                return true;
            }
        }
    }
    return false;
};

const main = () => {
    let arr = [10, 2, 5, 3];
    let arr2 = [7, 1, 14, 11];
    let arr3 = [3, 1, 7, 11];
    console.log(checkIfExist(arr));
    console.log(checkIfExist(arr2));
    console.log(checkIfExist(arr3));
};

main()