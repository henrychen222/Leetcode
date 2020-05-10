// 5.2 night
// still not fixed
const longestSubarray_alanmiller = (nums, limit) => {
    let n = nums.length;
    let j = 0;
    let ans = 0;
    let mx = nums[0];
    let mi = nums[0];

    // nums.map((v, i) => {
    //     mx = Math.max(mx, v);
    //     mi = Math.min(mi, v);
    //     while (mx - mi > limit) {
    //         if (mx == nums[j]) {
    //             mx = Math.max(nums.slice(j + 1, i + 1));
    //         }
    //         if (mi == nums[j]) {
    //             mi = Math.min(nums.slice(j + 1, i + 1));
    //         }
    //         j++;
    //     }
    //     ans = Math.max(ans, i - j + 1)
    // });

    for (const [i, v] of nums.entries()) {
        mx = Math.max(mx, v);
        mi = Math.min(mi, v);
        while (mx - mi > limit) {
            if (mx == nums[j]) {
                mx = Math.max(nums.slice(j + 1, i + 1));
            }
            if (mi == nums[j]) {
                mi = Math.min(nums.slice(j + 1, i + 1));
            }
            j++;
        }
        ans = Math.max(ans, i - j + 1)
    }
    return ans;
};

// still not fixed
const longestSubarray_SaveVMK = (nums, limit) => {
    let n = nums.length;
    let tm = new Map(); // need TreeMap, this is HashMap
    let max = 0;
    let a = 0;
    for (let i = 0; i < n; ++i) {
        if (!tm.has(nums[i])) {
            tm.set(nums[i], 1);
        } else {
            tm.set(nums[i], tm.get(nums[i]) + 1);
        }
        while (getLastKeyInMap(tm) - getFirstKeyInMap(tm) > limit) {
            tm.set(nums[a], tm.get(nums[a]) - 1);
            if (tm.get(nums[a]) == 0)
                tm.delete(nums[a]);
            a++;
        }
        max = Math.max(max, i - a + 1);
    }
    return max;
};

const getLastKeyInMap = map => Array.from(map)[map.size - 1][0]
const getFirstKeyInMap = map => Array.from(map)[0][0]

// FATAL ERROR: semi-space copy Allocation failed - JavaScript heap out of memory
const longestSubarray = (nums, limit) => {
    let allSubArr = getAllSubArr(nums);
    // let data = [];
    let allLength = [];
    for (const eachSubArr of allSubArr) {
        let difference = Math.abs(getMaxArr(eachSubArr) - getMinArr(eachSubArr));
        if (difference <= limit) {
            // data.push({
            //     difference: difference,
            //     eachSubArr: eachSubArr,
            //     length: eachSubArr.length
            // });
            allLength.push(eachSubArr.length);
        }
    }
    // console.log(data);
    return getMaxArr(allLength);
};

const getAllSubArr = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            result.push(arr.slice(i, j + 1));
        }
    }
    return result;
};

const getMinArr = (arr) => {
    return Math.min(...arr);
};

const getMaxArr = (arr) => {
    return Math.max(...arr);
};

const main = () => {
    let nums = [8, 2, 4, 7],
        limit = 4;
    let nums2 = [10, 1, 2, 4, 7, 2],
        limit2 = 5;
    let nums3 = [4, 2, 2, 2, 4, 4, 2, 2],
        limit3 = 0;

    // console.log(longestSubarray(nums, limit)); // 2
    // console.log("");
    // console.log(longestSubarray(nums2, limit2)); // 4
    // console.log("");
    // console.log(longestSubarray(nums3, limit3)); // 3

    // console.log("");
    // console.log(longestSubarray_SaveVMK(nums, limit));
    // console.log(longestSubarray_SaveVMK(nums2, limit2));
    // console.log(longestSubarray_SaveVMK(nums3, limit3));

    console.log("");
    console.log(longestSubarray_alanmiller(nums, limit));
    console.log(longestSubarray_alanmiller(nums2, limit2));
    console.log(longestSubarray_alanmiller(nums3, limit3));


};

main()