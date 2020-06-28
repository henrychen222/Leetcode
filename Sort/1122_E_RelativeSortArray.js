/**
 * 5.31 evening  6.27 night redo complete
 * https://leetcode.com/problems/relative-sort-array/
 */

// Accepted --- 88ms 35.7MB 19.40%
const relativeSortArray = (arr1, arr2) => {
    let exist = [];
    let nonexist = [];
    for (const i of arr1) {
        if (arr2.indexOf(i) != -1) {
            exist.push(i);
        } else {
            nonexist.push(i);
        }
    }
    exist.sort((a, b) => {
        return arr2.indexOf(a) - arr2.indexOf(b);
    });
    nonexist.sort((a, b) => a - b);
    return exist.concat(nonexist);
};

const main = () => {
    let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
        arr2 = [2, 1, 4, 3, 9, 6];
    console.log(relativeSortArray(arr1, arr2))
};

main()



// // need to fix
// const relativeSortArray = (arr1, arr2) => {
//     let arr1Origin = arr1;
//     let arr2Origin = arr2;
//     arr1.sort((a, b) => a - b);
//     // console.log(arr1);
//     for (let i = 0; i < arr1.length; i++) {
//         if (!arr2.includes(arr1[i])) {
//             erase(arr1, i);
//         }
//     }
//     console.log(arr1);
//     console.log(arr2);
//     for (let i = 0; i < arr2.length; i++) {
//         if (arr2Origin.includes(arr2[i])) {
//             erase(arr2, i);
//             erase(arr2Origin, i);
//         }
//     }
//     console.log(arr2);
// };

// const insert = (arr, index, item) => {
//     arr.splice(index, 0, item);
// };

// const erase = (arr, index) => {
//     arr.splice(index, 1);
// };