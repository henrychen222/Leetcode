/**
 * 8.3 night
 * https://leetcode.com/problems/distribute-candies/
 */

// Accepted --- 144ms 50.3MB 58.04%
const distributeCandies_refine = (candies) => {
    let element = [...new Set(candies)];
    let res = [];
    let n = candies.length >> 1;
    for (const e of element) {
        res.push(e);
        if (res.length == n) break;
    }
    // console.log(res);
    return [...new Set(res)].length;
};

// Accepted --- 2824ms 48.6MB 5.36%  
// 一开始想复杂了, 以为要根据odd even 进行push. even push一半. odd 从低freq开始push. 实际直接push element, 到candies一半停
const distributeCandies = (candies) => {
    let element = [...new Set(candies)];
    let data = [];
    for (const e of element) {
        data.push([e, getFrequency(candies, e)]);
    }
    // data.sort((a, b) => a[1] - b[1]);
    let res = [];
    let n = candies.length >> 1;
    for (const d of data) {
        res.push(d[0]);
        if (res.length == n) break;
    }
    return [...new Set(res)].length;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let candies = [1, 1, 2, 2, 3, 3];
    let candies2 = [1, 1, 2, 3];
    let debug1 = [1, 1, 1, 1, 2, 2, 2, 3, 3, 3];
    let debug2 = [37, 10, 60, 72, 76, 96, 1, 93, 29, 80, 91, 68, 29, 25, 42, 62, 59, 3, 54, 95, 23, 71, 74, 72, 9, 49, 86, 29, 60, 81, 62, 4, 15, 71, 98, 65, 74, 92, 1, 23, 62, 98, 85, 0, 66, 147, 85, 49, 65, 92, 29, 85, 46, 10, 91, 89, 35, 82, 15, 0, 43, 1, 34, 73, 51, 97, 24, 38, 86, 15, 60, 51, 78, 91, 29, 8, 91, 35, 46, 96, 72, 85, 12, 17, 9, 11, 72, 65, 18, 88, 44, 35, 7, 29, 11, 82, 1, 81, 80, 62];
    console.log(distributeCandies(candies));
    console.log(distributeCandies(candies2));
    console.log(distributeCandies(debug1)); // 3
    console.log(distributeCandies(debug2)); // 50

    console.log("");
    console.log(distributeCandies_refine(candies));
    console.log(distributeCandies_refine(candies2));
    console.log(distributeCandies_refine(debug1));
    console.log(distributeCandies_refine(debug2));
};

main()