/**
 * 6.18 night  8.26 night complete
 * https://leetcode.com/problems/longest-harmonious-subsequence/
 */

// 712ms 5.36%
const findLHS2_another = (nums) => {
    let element = new Set(nums);
    let data = [];
    element.forEach(x => {
        if (element.has(1 + x)) {
            data.push([x, 1 + x]);
        }
    })
    if (data.length == 0) return 0;
    let n = nums.length;
    let max = 0;
    for (const d of data) {
        let cnt = n;
        for (const i of nums) {
            if (i > d[1] || i < d[0]) {
                cnt--;
            }
        }
        max = Math.max(max, cnt);
    }
    return max;
};

// Accepted --- 740ms 5.36%
const findLHS2 = (nums) => {
    let element = new Set(nums);
    let data = [];
    element.forEach(x => {
        if (element.has(1 + x)) {
            data.push([x, 1 + x]);
        }
    })
    if (data.length == 0) return 0;
    // console.log(data);
    let res = [];
    let n = nums.length;
    for (const d of data) {
        let cnt = n;
        for (const i of nums) {
            if (i > d[1] || i < d[0]) {
                cnt--;
            }
        }
        res.push(cnt);
    }
    res.sort((a, b) => b - a);
    return res[0];
};

// Accepted --- 1612ms 5.36%
const findLHS = (nums) => {
    let element = [...new Set(nums)];
    element.sort((a, b) => a - b);
    let data = [];
    for (let i = 0; i < element.length; i++) {
        for (let j = i + 1; j < element.length; j++) {
            let tmp = element[j] - element[i];
            if (tmp == 1) {
                data.push([element[i], element[j]]); // get pairs of difference 1: harmounious
            }
        }
    }
    if (data.length == 0) return 0;
    data = removeDuplicatesMultiArray(data);
    // console.log(data);
    let res = [];
    let n = nums.length;
    for (const d of data) {
        let cnt = n;
        for (const i of nums) {
            if (i > d[1] || i < d[0]) { // for each pair, if item > max OR < min, that item should be removed in the subsequence
                cnt--;
            }
        }
        res.push(cnt);
    }
    res.sort((a, b) => b - a);
    // console.log(res);
    return res[0];
};

const removeDuplicatesMultiArray = (arr) => {
    return arr.map(JSON.stringify).reverse().filter((item, index, arr) => {
        return arr.indexOf(item, index + 1) === -1;
    }).reverse().map(JSON.parse);
};

const main = () => {
    let nums = [1, 3, 2, 2, 5, 2, 3, 7];
    let debug1 = [1, 2, 2, 1];
    let debug2 = [0, 3, 1, 3, 3, 3, 0, 1, 0, 2, 0, 3, 1, 3, -3, 2, 0, 3, 1, 2, 2, -3, 2, 2, 3, 3];
    let debug3 = [1, 1, 1, 1];
    console.log(findLHS(nums)) // 5
    console.log(findLHS(debug1)) // 4
    console.log(findLHS(debug2)); // 15
    console.log(findLHS(debug3)); // 0

    console.log("");
    console.log(findLHS2(nums))
    console.log(findLHS2(debug1))
    console.log(findLHS2(debug2));
    console.log(findLHS2(debug3));

    console.log("");
    console.log(findLHS2_another(nums))
    console.log(findLHS2_another(debug1))
    console.log(findLHS2_another(debug2));
    console.log(findLHS2_another(debug3));
};

main()



///////////////////////////// 8.26 night ///////////////////////////
// for (const d of data) {
//     let leftIdx = nums.indexOf(d[0]);
//     let rightIdx = nums.lastIndexOf(d[1]);
//     let cnt = rightIdx - leftIdx + 1;
//     for (let i = leftIdx; i <= rightIdx; i++) {
//          if (nums[i] > d[1] || nums[i] < d[0]) {
//              cnt--;
//          }
//     }
//     res.push(cnt);
// }
// for (const d of data) {
//     let leftIdx = nums.indexOf(d[1]);
//     let rightIdx = nums.lastIndexOf(d[0]);
//     let cnt = rightIdx - leftIdx + 1;
//     for (let i = leftIdx; i <= rightIdx; i++) {
//          if (nums[i] > d[1] || nums[i] < d[0]) {
//              cnt--;
//          }
//     }
//     res.push(cnt);
// }


// const findLHS = (nums) => {
//     let max = 0;
//     let data = [];
//     let N = nums.length;
//     let len = 2 ** N - 1;
//     for (let i = 1; i < len; i++) {
//         let tmp = [];
//         for (let j = 0; j <= N; j++) {
//             if (i & (1 << j)) {
//                 tmp.push(nums[j]);
//             }
//         }
//         data.push(tmp);
//     }
//     // console.log(data);
//     data = removeDuplicatesMultiArray(data);
//     for (const d of data) {
//         if (isharmounious(d)) {
//             max = Math.max(max, d.length);
//         }
//     }
//     if (isharmounious(nums)) {
//         max = Math.max(max, N);
//     }
//     return max;
// };

///////////////////////////// 6.18 night ///////////////////////////
// time limit 25/201
// const findLHS = (nums) => {
//     let max = Number.MIN_VALUE;
//     // let res = [];
//     let N = nums.length;
//     let len = 2 ** N - 1;
//     for (let i = 1; i < len; i++) {
//         let data = [];
//         for (let j = 0; j <= N; j++) {
//             if (i & (1 << j)) {
//                 data.push(nums[j]);
//             }
//         }
//         if (isharmounious(data)) {
//             // res.push(data);
//             max = Math.max(max, data.length);
//         }
//     }
//     // console.log(res);
//     if (isharmounious(nums)) {
//         max = Math.max(max, N);
//     }
//     return max;
// };

// const isharmounious = (arr) => {
//     let sortedArr = [...arr].sort((a, b) => a - b);
//     if (sortedArr[sortedArr.length - 1] - sortedArr[0] != 1) {
//         return false;
//     }
//     return true;
// };