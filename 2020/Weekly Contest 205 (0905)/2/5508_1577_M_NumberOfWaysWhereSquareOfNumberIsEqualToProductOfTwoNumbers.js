/**
 * 9.5 evening
 * https://leetcode.com/contest/weekly-contest-205/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/
 */

// Accepted
const numTriplets = (nums1, nums2) => {
    let n1 = nums1.length;
    let n2 = nums2.length;
    let cnt = 0;
    let tmp1 = nums1.map(x => x ** 2);
    let tmp2 = nums2.map(x => x ** 2);
    for (let i = 0; i < n1; i++) {
        let sq = tmp1[i];
        for (let j = 0; j < n2; j++) {
            for (let k = j + 1; k < n2; k++) {
                let v = nums2[j] * nums2[k];
                if (v == sq) {
                    cnt++;
                }
            }
        }
    }
    for (let i = 0; i < n2; i++) {
        let sq = tmp2[i];
        for (let j = 0; j < n1; j++) {
            for (let k = j + 1; k < n1; k++) {
                let v = nums1[j] * nums1[k];
                if (v == sq) {
                    cnt++;
                }
            }
        }
    }
    return cnt;
};

const main = () => {
    let nums1 = [7, 4], nums2 = [5, 2, 8, 9];
    let nums1_2 = [1, 1], nums2_2 = [1, 1, 1];
    let nums1_3 = [7, 7, 8, 3], nums2_3 = [1, 2, 9, 7];
    let nums1_4 = [4, 7, 9, 11, 23], nums2_4 = [3, 5, 1024, 12, 18];
    let nums1_debug1 = [3, 1, 2, 2], nums2_debug1 = [1, 3, 4, 4];
    console.log(numTriplets(nums1, nums2));
    console.log(numTriplets(nums1_2, nums2_2));
    console.log(numTriplets(nums1_3, nums2_3));
    console.log(numTriplets(nums1_4, nums2_4));
    console.log(numTriplets(nums1_debug1, nums2_debug1)); // 4
};

main()


// const numTriplets = (nums1, nums2) => {
//     let n1 = nums1.length;
//     let n2 = nums2.length;
//     let cnt = 0;
//     let tmp1 = nums1.map(x => x ** 2);
//     let tmp2 = nums2.map(x => x ** 2);
//     // console.log(tmp1, tmp2)
//     for (let i = 0; i < n1; i++) {
//         let sq = tmp1[i];
//         for (let j = 0; j < n2; j++) {
//             if (nums2[j] % 2 == 0) {
//                 for (let k = j + 1; k < n2; k++) {
//                     if (nums2[k] % 2 == 0) {
//                         let v = nums2[j] * nums2[k];
//                         if (v == sq) {
//                             cnt++;
//                         }
//                     }
//                 }
//             } else {
//                 for (let k = j + 1; k < n2; k++) {
//                     if (nums2[k] % 2 != 0) {
//                         let v = nums2[j] * nums2[k];
//                         if (v == sq) {
//                             cnt++;
//                         }
//                     }
//                 }
//             }
//         }
//     }

//     for (let i = 0; i < n2; i++) {
//         let sq = tmp2[i];
//         for (let j = 0; j < n1; j++) {
//             if (nums1[j] % 2 == 0) {
//                 for (let k = j + 1; k < n1; k++) {
//                     if (nums1[k] % 2 == 0) {
//                         let v = nums1[j] * nums1[k];
//                         if (v == sq) {
//                             cnt++;
//                         }
//                     }
//                 }
//             } else {
//                 for (let k = j + 1; k < n1; k++) {
//                     if (nums1[k] % 2 != 0) {
//                         let v = nums1[j] * nums1[k];
//                         if (v == sq) {
//                             cnt++;
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return cnt;
// };