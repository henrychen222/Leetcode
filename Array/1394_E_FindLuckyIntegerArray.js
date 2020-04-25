/**
 * 4.24 evening
 * https://leetcode.com/problems/find-lucky-integer-in-an-array/
 */

// Accpted --- 52ms, 95.40%
const findLucky = (arr) => {
    let dict = getFrequency(arr);
    
    // for (const key in dict) {
    //     console.log("key is: ", key)
    //     console.log("value is: ", dict[key])
    // }

    // let lucky = Number.MIN_VALUE;
    // for (const key in dict) {
    //     if (key == dict[key]) {
    //         // lucky = Math.max(key, lucky);
    //         // return lucky;
    //         return key;
    //     }
    // }
    // return -1;

    let luckyArr = [];
    for (const key in dict) {
        if (key == dict[key]) {
            luckyArr.push(dict[key]);
        }
    }
    // console.log(luckyArr);
    if (luckyArr.length == 0) {
        return -1;
    } else {
        return getMaxArr(luckyArr);
    }
};

const getMaxArr = (arr) => {
    let max = arr[0];
    for (i = 1; i < arr.length; i++)
        if (arr[i] > max)
            max = arr[i];
    return max;
}

const getFrequency = (arr) => {
    let counts = {};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    // console.log(counts);
    return counts;
}

const main = () => {
    let arr = [2, 2, 3, 4];
    let arr2 = [1, 2, 2, 3, 3, 3];
    let arr3 = [2, 2, 2, 3, 3];
    let arr4 = [5];

    console.log(findLucky(arr)); // 2
    console.log("");
    console.log(findLucky(arr2)); // 3
    console.log("");
    console.log(findLucky(arr3)); // -1
    console.log("");
    console.log(findLucky(arr4)); // -1

    console.log("");
    let debug1 = [5, 8, 10, 9, 8, 10, 9, 6, 6, 7, 10, 8, 10, 10, 9, 4, 6, 2, 10, 3, 5, 10, 2, 6, 4, 8, 7, 3, 9, 9, 5, 7, 8, 7, 11, 9, 3, 1, 5, 11, 9, 5, 8, 10, 8, 4, 9, 7, 6, 7, 10, 9, 7, 8, 6, 10, 4];
    console.log(findLucky(debug1)); // 10
};

main()