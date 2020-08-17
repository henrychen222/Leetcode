/**
 * 6.9 evening
 * https://leetcode.com/problems/count-largest-group/
 */

// Accepted --- 132ms 44.9MB 16.07%
const countLargestGroup = (n) => {
    let map = new Map();
    for (let i = 1; i <= n; i++) {
        let tmp = i.toString().split("").map(x => Number(x));
        let sum = tmp.reduce((acc, cur) => acc + cur);
        if (map.has(sum)) {
            map.get(sum).push(tmp);
        } else {
            map.set(sum, [tmp]);
        }
    }
    // console.log(map);
    let arr = Array.from(map.values()).map(x => x.length);
    arr.sort((a, b) => b - a);
    // console.log(arr);
    if ([...new Set(arr)].length == 1) return arr.length;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] != arr[i]) {
            return i;
        }
    }
};

const main = () => {
    let n = 13;
    let n2 = 2;
    let n3 = 15;
    let n4 = 24;
    let debug1 = 3;
    console.log(countLargestGroup(n));
    console.log(countLargestGroup(n2));
    console.log(countLargestGroup(n3));
    console.log(countLargestGroup(n4));
    console.log(countLargestGroup(debug1)); // 3
};

main()