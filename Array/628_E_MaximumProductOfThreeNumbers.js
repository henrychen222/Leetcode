/**
 * 6.5 night 8.8 afternoon complete
 * https://leetcode.com/problems/maximum-product-of-three-numbers/
 */

// Accepted --- 124ms 40MB 45.17%
const maximumProduct = (nums) => {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    let x = nums[0] * nums[1] * nums[n - 1]; // --+
    let y = nums[n - 3] * nums[n - 2] * nums[n - 1]; // +++
    return Math.max(x, y);
};

const main = () => {
    let nums = [1, 2, 3];
    let nums2 = [1, 2, 3, 4];
    let debug1 = [-4, -3, -2, -1, 60];
    let debug2 = [-1, -2, -3];
    console.log(maximumProduct(nums)); // 6
    console.log(maximumProduct(nums2)); // 24
    console.log(maximumProduct(debug1)); // 720
    console.log(maximumProduct(debug2)); // -6

    // console.log("")
    // console.log(maximumProduct2(nums));
    // console.log(maximumProduct2(nums2));
    // console.log(maximumProduct2(debug1));
    // console.log(maximumProduct2(debug2));
};

main()



// // need to fix
// const maximumProduct = (nums) => {
//     let pos = [];
//     let neg = [];
//     let zero = [];
//     nums.forEach(x => {
//         if (x > 0) {
//             pos.push(x);
//         } else if (x == 0) {
//             zero.push(x);
//         } else {
//             neg.push(x);
//         }
//     });
//     pos.sort((a, b) => b - a);
//     neg.sort((a, b) => a - b);
//     console.log(pos);
//     console.log(neg);

//     // three pos,  2neg + 1pos
//     // return nums[0] * nums[1] * nums[2];
// };

// const maximumProduct2 = (nums) => {
//     let max = Number.MIN_VALUE;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 max = Math.max(max, nums[i] * nums[j] * nums[k]);
//             }
//         }
//     }
//     return max;
// };