/**
 * 6.8 evening 8.9 night complete
 * https://leetcode.com/problems/degree-of-an-array/
 */

// Accepted --- 388ms 47.2MB 6.13%
const findShortestSubArray3 = (nums) => {
    let element = [...new Set(nums)];
    let data = [];
    for (const e of element) {
        let tmp = getFrequency(nums, e);
        data.push([e, tmp]);
    }
    data.sort((a, b) => b[1] - a[1]);
    let MaxFreqData = [];
    if (data.length <= 1) {
        MaxFreqData = data;
    } else {
        if (data[0][1] == data[data.length - 1][1]) {
            MaxFreqData = data;
        } else {
            for (let i = 1; i < data.length; i++) {
                if (data[i - 1][1] != data[i][1]) {
                    MaxFreqData = data.slice(0, i);
                    break;
                }
            }
        }
    }
    let min = Number.MAX_VALUE;
    for (const d of MaxFreqData) {
        min = Math.min(min, findMinLenArr(nums, d[0], d[1]).length);
    }
    return min;
};

// Accepted --- 404ms 46.7MB 6.13%
const findShortestSubArray2 = (nums) => {
    let element = [...new Set(nums)];
    let data = [];
    let freq = new Set();
    for (const e of element) {
        let tmp = getFrequency(nums, e);
        data.push([e, tmp]);
        freq.add(tmp);
    }
    data.sort((a, b) => b[1] - a[1]);
    let MaxFreqData = [];
    if (data.length <= 1) {
        MaxFreqData = data;
    } else {
        if (freq.size == 1) {
            MaxFreqData = data;
        } else {
            for (let i = 1; i < data.length; i++) {
                if (data[i - 1][1] != data[i][1]) {
                    MaxFreqData = data.slice(0, i);
                    break;
                }
            }
        }
    }
    let min = Number.MAX_VALUE;
    for (const d of MaxFreqData) {
        min = Math.min(min, findMinLenArr(nums, d[0], d[1]).length);
    }
    return min;
};

// Accepted --- 400ms 46.5MB 6.13%
const findShortestSubArray = (nums) => {
    let element = [...new Set(nums)];
    let data = [];
    let freq = new Set();
    for (const e of element) {
        data.push([e, getFrequency(nums, e)]);
        freq.add(getFrequency(nums, e));
    }
    data.sort((a, b) => b[1] - a[1]);
    // console.log(data);
    let MaxFreqData = [];
    if (data.length <= 1) {
        MaxFreqData = data;
    } else {
        if (freq.size == 1) {
            MaxFreqData = data;
        } else {
            for (let i = 1; i < data.length; i++) {
                if (data[i - 1][1] != data[i][1]) {
                    MaxFreqData = data.slice(0, i);
                    break;
                }
            }
        }
    }
    // console.log(MaxFreqData);
    let min = Number.MAX_VALUE;
    for (const d of MaxFreqData) {
        // console.log(findMinLenArr(nums, d[0], d[1]));
        min = Math.min(min, findMinLenArr(nums, d[0], d[1]).length);
    }
    return min;
};

const findMinLenArr = (arr, item, freq) => {
    let idx = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == item) idx.push(i);
    }
    // console.log(arr, item, freq, idx);
    let data = [];
    for (let i = 0; i < idx.length; i++) {
        let a = idx[i];
        let b = idx[i + freq - 1];
        let distance = b - a;
        data.push([a, b, distance]);
    }
    data.sort((a, b) => a[2] - b[2]);
    // console.log(data);
    return arr.slice(data[0][0], data[0][1] + 1);
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let nums = [1, 2, 2, 3, 1];
    let nums2 = [1, 2, 2, 3, 1, 4, 2];
    let debug1 = [1];
    let debug2 = [1, 1, 2, 2, 2, 1];
    console.log(findShortestSubArray(nums)); // 2
    console.log(findShortestSubArray(nums2)); // 6 
    console.log(findShortestSubArray(debug1)); // 1
    console.log(findShortestSubArray(debug2)); // 3

    console.log("");
    console.log(findShortestSubArray2(nums));
    console.log(findShortestSubArray2(nums2));
    console.log(findShortestSubArray2(debug1));
    console.log(findShortestSubArray2(debug2));

    console.log("");
    console.log(findShortestSubArray3(nums));
    console.log(findShortestSubArray3(nums2));
    console.log(findShortestSubArray3(debug1));
    console.log(findShortestSubArray3(debug2));


    // console.log(findMinLenArr(nums2, 2, 3));
    // console.log(findMinLenArr(debug1, 1, 1));
};

main()


// // don't know how to do
// const findShortestSubArray = (nums) => {
//     const allItem = [...new Set(nums)];
//     let map = new Map();
//     for (const item of allItem) {
//         map.set(item, getFrequency(nums, item));
//     }
//     console.log(map);
//     nums.sort((a, b) => getFrequency(nums, b) - getFrequency(nums, a));
//     console.log(nums);
// };