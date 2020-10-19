/**
 * 7.7 morning  10.17 evening complete
 * https://leetcode.com/problems/largest-number/
 */

// Accepted --- 88ms 63.60%
const largestNumber_modify2 = (nums) => {
    let sArr = nums.map(x => x + '');
    sArr.sort((a, b) => {
        let ab = Number(a + b);
        let ba = Number(b + a);
        if (ab > ba) {
            return -1;
        } else {
            return 1;
        }
    });
    let n = sArr.length;
    let res = sArr.join("");
    for (let i = 0; i < n; i++) {
        if (res[i] != '0' || i == n - 1) return res.slice(i);
    }
};

// Accepted --- 100ms 10.24%  Array access index is slower than string
const largestNumber_modify = (nums) => {
    let sArr = nums.map(x => x + '');
    sArr.sort((a, b) => {
        let ab = Number(a + b);
        let ba = Number(b + a);
        if (ab > ba) {
            return -1;
        } else {
            return 1;
        }
    });
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (sArr[i] != '0' || i == n - 1) return sArr.slice(i).join("");
    }
};

// Accepted --- 84ms 78.57%
const largestNumber1 = (nums) => {
    let sArr = nums.map(x => x + '');
    sArr.sort((a, b) => {
        let ab = Number(a + b);
        let ba = Number(b + a);
        if (ab > ba) {
            return -1;
        } else {
            return 1;
        }
    });
    console.log(sArr);
    let res = sArr.join("");
    while (true) {
        if (res.length == 1 || res[0] != '0') break;
        res = res.slice(1);
    }
    return res;
};

// wrong
// const largestNumber = (nums) => {
//     let sArr = nums.map(x => x + '');
//     sArr.sort((a, b) => {
//         let i = 0;
//         let Idx;
//         while (true) {
//             if (a[i] != b[i]) {
//                 Idx = i;
//                 break;
//             }
//             i++;
//         }
//         if (a[Idx] == undefined) {
//             if (a[Idx - 1] < b[Idx]) {
//                 return 1;
//             } else {
//                 return -1;
//             }
//         }
//         if (b[Idx] == undefined) {
//             if (b[Idx - 1] < a[Idx]) {
//                 return -1;
//             } else {
//                 return 1;
//             }
//         }
//         return b.localeCompare(a);
//     });
//     console.log(sArr);
//     return sArr.join("");
// };

const main = () => {
    let nums = [10, 2];
    let nums1 = [3, 30, 34, 5, 9];
    let nums2 = [3, 32, 30, 34, 5, 9];
    let nums3 = [1];
    let nums4 = [10];
    let debug1 = [111311, 1113];
    let debug2 = [34323, 3432];
    let debug3 = [0, 0];
    let debug4 = [0];
    let debug5 = [0, 0, 0];
    // console.log(largestNumber(nums));
    console.log(largestNumber(nums1)); //  "9534330"
    // console.log(largestNumber(nums2)); // "953433230"
    // console.log(largestNumber(nums3));
    // console.log(largestNumber(nums4));
    console.log(largestNumber(debug1)); // "1113111311"
    console.log(largestNumber(debug2)); // "343234323"
    console.log(largestNumber(debug3)); // "0"
    console.log(largestNumber(debug4)); // "0"
    console.log(largestNumber(debug5)); // "0"

};

main()

// // need to fix
// const largestNumber = (nums) => {
//     let arr = nums.join("").split("").map(x => Number(x));
//     arr.sort((a, b) => b - a);
//     console.log(arr);
//     return arr.join("");
// };