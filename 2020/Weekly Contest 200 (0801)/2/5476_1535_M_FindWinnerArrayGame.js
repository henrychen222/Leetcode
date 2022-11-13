/**
 * 8.1 night
 * https://leetcode.com/contest/weekly-contest-200/problems/find-the-winner-of-an-array-game/
 */

//////////////////////////////////// In Contest //////////////////////////////////
// Time Limit 184/185
const getWinner = (arr, k) => {
    if (k >= arr.length) return Math.max.apply(Math, arr);
    if (k == 1) return Math.max(arr[0], arr[1]);
    let winCnt = 1;
    let winRecord = [];
    while (winCnt != k) {
        let a = arr[0];
        let b = arr[1];
        let end = Math.min(a, b);
        let win = Math.max(a, b);
        if (win == winRecord[winRecord.length - 1]) {
            winCnt++;
        } else {
            winCnt = 1;
        }
        winRecord.push(win);
        arr.shift(arr[0]);
        arr.shift(arr[1]); // arr.shift(arr[0]); same
        arr.push(end);
        arr.unshift(win);
    }
    return winRecord[winRecord.length - 1];
};


// Time Limit 177/185
let res;
const getWinner1 = (arr, k) => {
    if (k >= arr.length) return Math.max.apply(Math, arr);
    let map = new Map();
    let flag = 0;
    for (const i of arr) {
        map.set(i, 0);
    }
    while (flag == 0) {
        let a = arr[0];
        let b = arr[1];
        let end = Math.min(a, b);
        let win = Math.max(a, b);
        map.set(win, map.get(win) + 1);
        arr.shift(arr[0]);
        arr.shift(arr[1]);
        arr.push(end);
        arr.unshift(win);
        let tmp = check(map, k);
        flag = tmp;
    }
    // console.log(map);
    return res;
};

const check = (map, k) => {
    let flag = 0;
    for (const key of map.keys()) {
        if (map.get(key) == k) {
            flag = 1;
            res = key;
        }
    }
    return flag;
};

const main = () => {
    let arr = [2, 1, 3, 5, 4, 6, 7], k = 2;
    let arr2 = [3, 2, 1], k2 = 10;
    let arr3 = [1, 9, 8, 2, 3, 7, 6, 4, 5], k3 = 7;
    let arr4 = [1, 11, 22, 33, 44, 55, 66, 77, 88, 99], k4 = 1000000000;
    let arr_debug1 = [1, 25, 35, 42, 68, 70]; k_debug1 = 1;
    console.log(getWinner(arr, k));  // 5
    console.log(getWinner(arr2, k2)); // 3
    console.log(getWinner(arr3, k3)); // 9
    console.log(getWinner(arr4, k4)); // 99
    console.log(getWinner(arr_debug1, k_debug1)); // 25
};

main()