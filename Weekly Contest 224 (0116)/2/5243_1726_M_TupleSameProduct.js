/**
 * 1.16 evening
 * https://leetcode.com/contest/weekly-contest-224/problems/tuple-with-same-product/
 */

// TLE
// const tupleSameProduct = (nums) => {
//     let n = nums.length;
//     let cnt = 0;
//     nums.sort((a, b) => a - b);
//     for (let a = 0; a < n; a++) {
//         for (let b = a + 1; b < n; b++) {
//             if (nums[b] == nums[a]) continue;
//             for (let c = b + 1; c < n; c++) {
//                 if (nums[a] != nums[b] && nums[b] != nums[c]) {
//                     for (let d = c + 1; d < n; d++) {
//                         if (nums[a] != nums[b] && nums[b] != nums[c] && nums[c] != nums[d]) {
//                             if ((nums[a] * nums[b] == nums[c] * nums[d]) || (nums[a] * nums[c] == nums[b] * nums[d]) || (nums[a] * nums[d] == nums[b] * nums[c])) {
//                                 // console.log(nums[a], nums[b], nums[c], nums[d])
//                                 cnt++;
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return cnt * 8;
// };

// Accepted
const tupleSameProduct = (nums) => {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    let m = new Map();
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let p = nums[i] * nums[j];
            let tmp = JSON.stringify([nums[i], nums[j]]);
            if (m.has(p)) {
                m.set(p, m.get(p).add(tmp));
            } else {
                m.set(p, new Set([tmp]));
            }
        }
    }
    let res = 0;
    for (const [k, v] of m) {
        let t = v.size;
        if (t > 1) {
            res += Number(combination(t, 2)) * 8;
        }
    }
    return res;
};

const combination = (m, n) => {
    return factorial(m, n) / factorial(n, n);
};

const factorial = (m, n) => {
    let num = BigInt(1);
    let cnt = 0;
    for (let i = BigInt(m); i > 0; i--) {
        if (cnt == n) break;
        num = num * i;
        cnt++;
    }
    return num;
};

const main = () => {
    let nums = [2, 3, 4, 6];
    let nums2 = [1, 2, 4, 5, 10];
    let nums3 = [2, 3, 4, 6, 8, 12];
    let nums4 = [2, 3, 5, 7];
    console.log(tupleSameProduct(nums));
    console.log(tupleSameProduct(nums2));
    console.log(tupleSameProduct(nums3));
    console.log(tupleSameProduct(nums4));
};

main()

// console.log(combination(3, 2));