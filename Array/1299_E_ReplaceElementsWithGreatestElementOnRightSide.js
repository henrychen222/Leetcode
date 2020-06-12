/**
 * 6.10 evening
 * https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 */

// Accepted --- 592ms 41.1MB 21.10%
const replaceElements = (arr) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let max = Number.MIN_VALUE;
        for (let j = i + 1; j < arr.length; j++) {
            max = Math.max(max, arr[j]);
        }
        res.push(max);
    }
    res.splice(res.length - 1, 1, -1);
    return res;
};

// Time Limit Exceed 10/15 test cases pass
const replaceElements1 = (arr) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let currentTillRightEnd = arr.slice(i + 1, arr.length);
        res.push(currentTillRightEnd.sort((a, b) => b - a)[0]);
    }
    res.splice(res.length - 1, 1, -1);
    return res;
};

const main = () => {
    let arr = [17, 18, 5, 4, 6, 1];
    console.log(replaceElements(arr));
};

main()