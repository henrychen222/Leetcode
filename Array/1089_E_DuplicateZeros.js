/**
 * 6.7 night 6.8 afternoon
 * https://leetcode.com/problems/duplicate-zeros/
 */

// need to fix
const duplicateZeros = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] == 0 && arr[i + 1] != 0 && arr[i - 1] != 0) {
            arr.splice(i, 0, 0);
        }
        if (arr[i] == 0 && arr[i + 1] == 0 && arr[i - 1] == 0) {
            arr.splice(i, 0, 0);
        }
    }
    console.log(arr);
    let res = [];
    res = arr.slice(0, n);
    arr.splice(0, arr.length);
    for (const i of res) {
        arr.push(i);
    }
    console.log(arr);
};

const main = () => {
    let arr = [1, 0, 2, 3, 0, 4, 5, 0];
    let arr2 = [1, 2, 3];
    let debug1 = [8, 4, 5, 0, 0, 0, 0, 7];
    let debug2 = [0, 4, 1, 0, 0, 8, 0, 0, 3];
    duplicateZeros(arr);
    duplicateZeros(arr2);
    duplicateZeros(debug1); // [8,4,5,0,0,0,0,0]
    duplicateZeros(debug2); // [0,0,4,1,0,0,0,0,8]
};

main()