/**
 * 8.22 night
 * https://leetcode.com/contest/weekly-contest-203/problems/find-latest-group-of-size-m/
 */

// Time limit
const findLatestStep = (arr, m) => {
    let n = arr.length;
    let data = [];
    for (let i = 0; i < n; i++) {
        data.push(0);
    }
    let res = [];
    for (let i = 0; i < n; i++) {
        let idx = arr[i] - 1;
        data[idx] = 1;
        let tmp = data.join("");
        let groups = tmp.split("0").filter(x => x.length != 0);
        res.push(groups);
    }
    // console.log(res);
    for (let i = res.length - 1; i >= 0; i--) {
        for (const each of res[i]) {
            if (each.length == m) {
                return i + 1;
            }
        }
    }
    return -1;
};

// Time Limit  104/114
const findLatestStep2 = (arr, m) => {
    let n = arr.length;
    let data = [];
    for (let i = 0; i < n; i++) {
        data.push(0);
    }
    let res = [];
    for (let i = 0; i < n; i++) {
        let idx = arr[i] - 1;
        data[idx] = 1;
        let tmp = data.join("");
        let groups = tmp.split("0");
        if (groups.find(x => x.length == m) != undefined) {
            res.push(i + 1);
        }
    }
    if (res.length == 0) return -1;
    return res[res.length - 1];
};

// heap out of memory  98/114
const findLatestStep1 = (arr, m) => {
    let n = arr.length;
    let data = [];
    for (let i = 0; i < n; i++) {
        data.push(0);
    }
    let res = [];
    for (let i = 0; i < n; i++) {
        let idx = arr[i] - 1;
        data[idx] = 1;
        let tmp = data.join("");
        let groups = tmp.split("0");
        res.push(groups);
    }
    for (let i = res.length - 1; i >= 0; i--) {
        for (const each of res[i]) {
            if (each.length == m) {
                return i + 1;
            }
        }
    }
    return -1;
};

const main = () => {
    let arr = [3, 5, 1, 2, 4], m = 1;
    let arr2 = [3, 1, 5, 4, 2], m2 = 2;
    let arr3 = [1], m3 = 1;
    let arr4 = [2, 1], m4 = 2;
    console.log(findLatestStep(arr, m));
    // console.log(findLatestStep(arr2, m2));
    // console.log(findLatestStep(arr3, m3));
    // console.log(findLatestStep(arr4, m4));
};

main()