/**
 * 6.7 night 6.8 afternoon  8.12 night complete
 * https://leetcode.com/problems/duplicate-zeros/
 */

// Accepted --- 80ms 39.5MB 88.45%
const duplicateZeros = (arr) => {
    let n = arr.length;
    let stack = [];
    for (const item of arr) {
        if (item == 0) {
            stack.push(0);
            if (stack.length == n) break;
            stack.push(0);
        } else {
            stack.push(item);
        }
        if (stack.length == n) break;
    }
    // console.log(stack);
    arr.splice(0, arr.length);
    for (const i of stack) {
        arr.push(i);
    }
    console.log(arr);
};

// Accepted --- 84ms 38.8MB 76.08%
const duplicateZeros2 = (arr) => {
    let n = arr.length;
    let data = [...arr];
    arr.splice(0, arr.length);
    for (const item of data) {
        if (item == 0) {
            arr.push(0);
            if (arr.length == n) break;
            arr.push(0);
        } else {
            arr.push(item);
        }
        if (arr.length == n) break;
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



// need to fix
// const duplicateZeros = (arr) => {
//     let n = arr.length;
//     for (let i = 0; i < n; i++) {
//         if (arr[i] == 0 && arr[i + 1] != 0 && arr[i - 1] != 0) {
//             arr.splice(i, 0, 0);
//         }
//         if (arr[i] == 0 && arr[i + 1] == 0 && arr[i - 1] == 0) {
//             arr.splice(i, 0, 0);
//         }
//     }
//     console.log(arr);
//     let res = [];
//     res = arr.slice(0, n);
//     arr.splice(0, arr.length);
//     for (const i of res) {
//         arr.push(i);
//     }
//     console.log(arr);
// };