/**
 * 12.10 evening  12.11 morning 12.11 evening
 * https://leetcode.com/problems/k-concatenation-maximum-sum/
 * 
 * read:
 * https://leetcode.com/problems/k-concatenation-maximum-sum/discuss/382350/Java-Solution(Kadens-Algo)-with-Explanation
 * https://zxi.mytechroad.com/blog/dynamic-programming/leetcode-1191-k-concatenation-maximum-sum/
 */

// Accepted --- 96ms 75.00%
const mod = 1e9 + 7;
const kConcatenationMaxSum = (arr, k) => {
    let n = arr.length;
    let Tsum = arr.reduce((a, b) => a + b);
    let best = sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
        if (sum < 0) sum = 0;
        best = Math.max(best, sum);
    }
    let maxPrefixSum = maxSuffixSum = 0;
    sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
        maxPrefixSum = Math.max(maxPrefixSum, sum);
    }
    sum = 0;
    for (let i = n - 1; ~i; i--) {
        sum += arr[i];
        maxSuffixSum = Math.max(maxSuffixSum, sum);
    }
    // console.log(best, maxPrefixSum, maxSuffixSum);
    if (k > 1) best = Math.max(best, maxPrefixSum + maxSuffixSum, maxPrefixSum + maxSuffixSum + (k - 2) * Tsum);
    return best % mod;
};

// Accepted --- 104ms 25.00%
// https://leetcode.com/contest/weekly-contest-154/ranking/  neal_wu
const kConcatenationMaxSum_Origin = (arr, k) => {
    let n = arr.length;
    let Tsum = arr.reduce((a, b) => a + b);
    let best = sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
        if (sum < 0) {
            sum = 0;
        } else if (sum > best) {
            best = sum;
        }
    }
    let maxPrefixSum = maxSuffixSum = 0;
    sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
        maxPrefixSum = Math.max(maxPrefixSum, sum);
    }
    sum = 0;
    for (let i = n - 1; ~i; i--) {
        sum += arr[i];
        maxSuffixSum = Math.max(maxSuffixSum, sum);
    }
    if (k > 1) {
        best = Math.max(best, maxPrefixSum + maxSuffixSum);
        best = Math.max(best, maxPrefixSum + maxSuffixSum + (k - 2) * Tsum);
    }
    return best % mod;
};

// TLE 34/38
const kConcatenationMaxSum2 = (arr, k) => {
    let data = arr;
    for (let i = 1; i < k; i++) {
        data = data.concat(arr);
    }
    // console.log(data);
    let n = data.length;
    let prefixSum = [0];
    for (let i = 1; i <= n; i++) {
        prefixSum[i] = prefixSum[i - 1] + data[i - 1];
    }
    // console.log(prefixSum);
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (data[i] <= 0) continue;
        // for (let j = n; j > i; j--) {
        for (let j = i + 1; j <= n; j++) {
            if (data[j] > 0) continue;
            let sum = prefixSum[j] - prefixSum[i];
            // console.log(sum, i, j)
            sum %= mod;
            res = Math.max(res, sum);
        }
    }
    return res;
};

// TLE 31/38
// const kConcatenationMaxSum1 = (arr, k) => {
//     let data = arr;
//     for (let i = 1; i < k; i++) {
//         data = data.concat(arr);
//     }
//     console.log(data);
//     let n = data.length;
//     let res = 0;
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             let sub = data.slice(i, j + 1);
//             let sum = sub.length == 0 ? 0 : sub.reduce((a, b) => a + b);
//             // console.log(sub, sum)
//             sum %= mod;
//             res = Math.max(res, sum);
//         }
//     }
//     return res;
// };

const main = () => {
    let arr = [1, 2],
        k = 3;
    let arr2 = [1, -2, 1],
        k2 = 5;
    let arr3 = [-1, -2],
        k3 = 7;
    let arr_debug1 = [-52, 0, -53, -49, 32, 195, -83, -60, -19, 130, -134, 26, 136, 58, 45, 135, -55, 33, 71, -122, -8, -70, -82, 115, 124, -26, 179, -46, 121, -132, 105, -57, 123, -58, -18, -169, 148, 57, 107, -134, -36, 45, -195, -31, 78, -169, 53, 200, 142, 120, 146, -29, 2, -11, -140, 49, -111, 60, 148, 186, -56, -158, -116, 37, -8, -16, 125, -72, -33, -20, 112, 5, 166, -164, -159, -66, -24, -115, 173, -5, -134, -141, 26, 176, -74, -1, -37, -165, 89, -42, 175, 21, -171, -12, -177, -79, -37, -74, 157, 93, 69, 45, -52, 167, -115, -155, 149, -9, 5, -197, 175, 33, 64, 36, -21, -115, 141, 23, -130, -103, -97, -143, 33, 129, 42, 143, -88, 86, 98, 82, -138, -130, 196, 110, 60, -106, 193, -121, -196, -167, 111, -158, 42, 186, -97, 149, -9, 70, 28, -65, 150, -139, 194, -156, -160, 153, -132, -197, 108, -49, -137, 168, 79, 98, -30, -192, -1, 122, 35, -159, -167, 100, -6, 154, 126, -148, 177, -64, -70, -115, 107, -183, 116, -166, -89, -10, -124, -68, 44, -64, -180, -133, -3, -126, 176, 7, -37, -7, -48, -2],
        k_debug1 = 195;
    let arr_debug2 = [1, -1],
        k_debug2 = 1;
    let arr_debug3 = [-220, -304, 161, -154, -414, 180, -98, -245, 314, 452, 92, 175, -64, -442, 185, -429, 263, -178, -240, -48, 461, -389, -6, 394, 245, 85, -399, -358, 499, 434, -260, -414, -218, -115, -180, -149, -41, -135, -209, -326, 446, -325, 259, -265, -281, 369, -423, 404, 336, -190, 70, 102, -141, 149, -166, -407, 486, 284, -22, 217, -418, 450, 0, -9, 87, 276, 57, -22, 484, 326, -161, 16, 352, 391, 321, -85, 272, 231, -191, -53, 154, -87, -172, 87, 181, -316, -427, 345, 49, -114, 311, -483, 77, 30, 48, -381, 338, 24, 270, 476, -136, -220, -361, -466, 73, 55, 206, -232, -332, 431, 354, 259, -191, -244, -376, -52, -213, 225, 31, 351, -153, -281, -221, 232, -461, 323, 296, -182, -275, -489, -487, 429, 480, 336, 127, -8, -494, 256, -446, -300, 260, -312, -127, 3, -161, 322, 352, -14, -73, -262, -177, -457, 208, -80, 180, 381, 485, 362, 85, -285, -466, 153, -323, -22, -431, -461, 471, -178, 337, -331, -422, 499, -433, -215, -389, -108, -423, -448, 116, -386, -258, 67, -336, 142, -122, 265, -353, 110, -84, -145, 261, 145, 364, 105, -463, -341, -375, 172, -227, -238, 254, 429, -110, 239, -163, 265, 437, -170, 215, -47, 331, 461, -407, -252, -424, 382, 216, -15, 490, -127, -217, -370, 143, 266, -216, -323, 223, 341, -236, -111, 25, 359, 25, -145, 12, 105, -331, 450, -101, 144, 431, 398, -418, 493, 1, 247, -430, -195, 376, -463, -121, 454, -93, -156, 437, -236, 292, -11, 347, 368, -180, 500, 342, 437, 375, 218, 421, 101, 484, -267, 264, -423, 121, 63, 123, -309, -442, 177, -442, 236, 384, 30, 239, -202, 278, -225, 323, 394, -143, -129, 274, 443, -211, 324, 493, -167, -64, -14, -278, -496, -154, 72, -157, 281, -377, 472, -298, 116, 259, 296, -472, 322, 500, 195, -274, 114, 324, 75, -10, -180, 417, -95, -112, 88, 51, 11, -337, 467, 104, -145, -202, -269, -387, -179, -462, -361, -308, 77, -348, 113, 369, 430, -349, -382, -391, 128, 358, 141, -244, 297, 469, 334, 423, -157, -184, 123, -171, 341, -480, -143, 161, 258, 442, 267, 478, -373, 230, -280, 403, 180, 353, -398, -269, -127, 206, 127, -366, 311, 390, 252, 461, -415, -167, -255, -92, -105, 158, -118, -357, -321, -273, -92, -117, -433, 263, 377, -59, 276, 452, -204, 497, 100, -306, 343, 15, 474, 184, 28, 15, -95, -490, -191, 490, 137, -316, -480, 37, 424, 82, -415, 311, 214, 22, 437, -128, -142, 213, -244, -287, -499, -73, -234, 49, 461, -149, -38, -254, -111, -474, -8, -7, -434, 434, -364, -106, 344, -195, -329, -4, -324, -273, -317, -326, 50, 182, 47, 132, -267, 391, -130, 469, -371, -440, 399, 246, 234, -304, -489, 224, 459, 310, -47, -15, -480, -490, 114, 426, 292, -391, 291, 138, 130, 261, 411, -197, 217, 285, -498, -165, -436, 213, -155, -236, -190, 263, 489, -119, -24, 100, 10],
        k_debug3 = 223;
    console.log(kConcatenationMaxSum(arr, k)); // 9
    console.log(kConcatenationMaxSum(arr2, k2)); // 2
    console.log(kConcatenationMaxSum(arr3, k3)); // 0
    console.log(kConcatenationMaxSum(arr_debug1, k_debug1)); // 1174
    console.log(kConcatenationMaxSum(arr_debug2, k_debug2)); // 1
    console.log(kConcatenationMaxSum(arr_debug3, k_debug3)); // 570028
};

main()