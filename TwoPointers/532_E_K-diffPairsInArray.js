/**
 * 6.4 evening  6.17 night redo complete
 * https://leetcode.com/problems/k-diff-pairs-in-an-array/
 */

// Accepted --- 684ms 39.6MB 18.21%
const findPairs = (nums, k) => {
    nums.sort((a, b) => a - b);
    let res = [];
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[j] - nums[i]) == k && !res.includes(nums[i] + nums[j])) {
                res.push(nums[i] + nums[j]);
                cnt++;
            }
        }
    }
    return cnt;
};

// Accepted --- 720ms 39.5 MB 17.55%
const findPairs2 = (nums, k) => {
    let res = [];
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs((nums[j] - nums[i])) == k && !res.includes(nums[i] + nums[j])) {
                res.push(nums[i] + nums[j]);
                cnt++;
            }
        }
    }
    return cnt;
};

// Accepted --- 344ms 41MB 22.52%
const findPairs3 = (nums, k) => {
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[j] - nums[i]) == k) {
                res.push(nums[i] + nums[j]);
            }
        }
    }
    return [...new Set(res)].length;
};

// Accepted --- 544ms 40.6MB 18.54%
const findPairs4 = (nums, k) => {
    nums.sort((a, b) => a - b);
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[j] - nums[i]) == k) {
                set.add(nums[i] + nums[j]);
            }
        }
    }
    return set.size;
};

const main = () => {
    let nums = [3, 1, 4, 1, 5],
        k = 2;
    let nums2 = [1, 2, 3, 4, 5],
        k2 = 1;
    let nums3 = [1, 3, 1, 5, 4],
        k3 = 0;
    console.log(findPairs(nums, k));
    console.log(findPairs(nums2, k2));
    console.log(findPairs(nums3, k3));

    console.log("");
    console.log(findPairs2(nums, k));
    console.log(findPairs2(nums2, k2));
    console.log(findPairs2(nums3, k3));

    console.log("");
    console.log(findPairs3(nums, k));
    console.log(findPairs3(nums2, k2));
    console.log(findPairs3(nums3, k3));

    console.log("");
    console.log(findPairs4(nums, k));
    console.log(findPairs4(nums2, k2));
    console.log(findPairs4(nums3, k3));
};

main()



// // need to fix
// const findPairs = (nums, k) => {
//     let res = [];
//     for (let i = 0; i < nums.length; i++) {
//         let a = nums[i];
//         for (let j = i + 1; j < nums.length; j++) {
//             let b = nums[j];
//             if (Math.abs(a - b) == k && (!res.includes([a, b]))) {
//                 res.push([a, b]);
//             }
//         }
//     }
//     console.log(res);
//     return [...new Set(res)];
// };