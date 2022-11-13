/**
 * 8.29 evening
 * https://leetcode.com/contest/weekly-contest-204/problems/detect-pattern-of-length-m-repeated-k-or-more-times/
 */


// const containsPattern = (arr, m, k) => {
//     let n = arr.length;
//     let set = new Set();
//     let data = [];
//     for (let i = 0; i < n; i++) {
//         let tmp = arr.slice(i, i + m);
//         let str = tmp.join("");
//         set.add(str);
//         data.push(str);
//     }
//     // console.log(set, data);
//     let res = [];
//     set.forEach(x => {
//         let freq = getFrequency(data, x);
//         res.push(freq);
//     });
//     // console.log(res);
//     for (const r of res) {
//         if (r >= k) return true;
//     }
//     return false;
// };

// const getFrequency = (arr, item) => {
//     return arr.filter(x => x === item).length;
// };

// Accepted
const containsPattern = (arr, m, k) => {
    let n = arr.length;
    let s = arr.join("");
    for (let i = 0; i < n; i++) {
        let item = s.slice(i, i + m);
        let target = s.slice(i, i + m * k);
        // console.log(item, target);
        let tmp = item.repeat(k);
        // console.log(tmp)
        if (tmp == target) return true;
    }
    return false;
};

const main = () => {
    let arr = [1, 2, 4, 4, 4, 4], m = 1, k = 3;
    let arr2 = [1, 2, 1, 2, 1, 1, 1, 3], m2 = 2, k2 = 2;
    let arr3 = [1, 2, 1, 2, 1, 3], m3 = 2, k3 = 3;
    let arr4 = [1, 2, 3, 1, 2], m4 = 2, k4 = 2;
    let arr5 = [2, 2, 2, 2], m5 = 2, k5 = 3;
    let arr_debug1 = [2, 2, 1, 2, 2, 1, 1, 1, 2, 1], m_debug1 = 2, k_debug1 = 2;
    console.log(containsPattern(arr, m, k));
    console.log(containsPattern(arr2, m2, k2));
    console.log(containsPattern(arr3, m3, k3));
    console.log(containsPattern(arr4, m4, k4));
    console.log(containsPattern(arr5, m5, k5));
    console.log(containsPattern(arr_debug1, m_debug1, k_debug1));  // false
};

main();