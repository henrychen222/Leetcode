/**
 * 5.9 night  5.31 night translate code
 * https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/
 */

// Accepted --- 68ms 36MB 82.21%
const countTriplets_tian_tang_6 = (arr) => {
    let xor = [];
    fillArrEmpty(xor, arr.length + 1);
    for (let i = 1; i <= arr.length; i++) {
        xor[i] = xor[i - 1] ^ arr[i - 1];
    }
    let n = arr.length;
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        for (let k = i + 1; k <= n; k++) {
            let val = xor[k] ^ xor[i - 1];
            if (val != 0) {
                continue;
            }
            ans += (k - i + 1) - 1;
        }
    }
    return ans;
};

// Accepted --- 72ms 36MB 81.59%
const countTriplets_uwi = (arr) => {
    let n = arr.length;
    let cum = [];
    fillArrEmpty(cum, n + 1);
    for (let i = 0; i < n; i++) {
        cum[i + 1] = cum[i] ^ arr[i];
    }
    let ct = 0;
    for (let i = 0; i <= n; i++) {
        for (let k = i + 2; k <= n; k++) {
            if (cum[i] == cum[k]) {
                ct += k - i - 1;
            }
        }
    }
    return ct;
};

const fillArrEmpty = (arr, n) => {
    for (let i = 0; i <= n; i++) {
        arr.push("");
    }
};

// const countTriplets = (arr) => {
//     let ijk = [];
//     let a = 0;
//     let b = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             for (let k = j; k < array.length; k++) {
//                 let a = Math.pow(arr[i], arr[i + 1]);
//             }
//         }
//     }
// };

// let calculate = (arr, start, end) => {
//     Math.pow(arr[start], arr[start + 1]);
//     Math.pow(arr[start + 1], arr[start + 2]);
// }

const main = () => {
    let arr = [2, 3, 1, 6, 7];
    let arr2 = [1, 1, 1, 1, 1];
    let arr3 = [2, 3];
    let arr4 = [1, 3, 5, 7, 9];
    let arr5 = [7, 11, 12, 9, 5, 2, 7, 17, 22];

    console.log(countTriplets_uwi(arr));
    console.log(countTriplets_uwi(arr2));
    console.log(countTriplets_uwi(arr3));
    console.log(countTriplets_uwi(arr4));
    console.log(countTriplets_uwi(arr5));

    console.log("");
    console.log(countTriplets_tian_tang_6(arr));
    console.log(countTriplets_tian_tang_6(arr2));
    console.log(countTriplets_tian_tang_6(arr3));
    console.log(countTriplets_tian_tang_6(arr4));
    console.log(countTriplets_tian_tang_6(arr5));
}

main()