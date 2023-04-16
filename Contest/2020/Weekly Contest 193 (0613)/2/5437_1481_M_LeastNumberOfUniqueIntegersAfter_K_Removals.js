/**
 * 6.13 evening
 * https://leetcode.com/contest/weekly-contest-193/problems/least-number-of-unique-integers-after-k-removals/
 */

const findLeastNumOfUniqueInts = (arr, k) => {
    let elements = [...new Set(arr)];
    let map = new Map();
    for (const element of elements) {
        map.set(element, getFrequency(arr, element));
    }
    let sortedMap = new Map([...map].sort((a, b) => a[1] > b[1] ? 1 : -1));
    // console.log(sortedMap);
    let data = [];
    for (const i of sortedMap) {
        data.push(i);
    }
    // console.log(data);
    let sum = 0;
    let cnt = 0;
    for (let i = 0; i < data.length; i++) {  // problem
        if (sum >= k) break;
        let v = data[i][1];
        sum += v;
        cnt++;
    }
    // console.log(cnt);
    // console.log(sum - k);
    return data.length - cnt + (sum - k);
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let arr = [5, 5, 4], k = 1;
    let arr2 = [4, 3, 1, 1, 3, 3, 2], k2 = 3;
    let arr_debug1 = [1, 2, 3], k_debug1 = 3;
    let arr_debug2 = [1, 2, 2, 2, 2], k_debug2 = 2;
    console.log(findLeastNumOfUniqueInts(arr, k));  // 1
    console.log(findLeastNumOfUniqueInts(arr2, k2)); // 2
    console.log(findLeastNumOfUniqueInts(arr_debug1, k_debug1)); // 0
    console.log(findLeastNumOfUniqueInts(arr_debug2, k_debug2)); // 1
};

main()