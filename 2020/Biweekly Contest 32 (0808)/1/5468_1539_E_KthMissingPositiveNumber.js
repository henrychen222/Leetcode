/**
 * 8.8 morning
 * https://leetcode.com/contest/biweekly-contest-32/problems/kth-missing-positive-number/
 */

// Accepted
const findKthPositive = (arr, k) => {
    let end = arr[arr.length - 1];
    let res = [];
    for (let i = 1; i <= end + k; i++) {
        if (arr.indexOf(i) == -1) {
            res.push(i);
        }
        if (res.length == k) break;
    }
    if (res.length == 0) return end + k;
    return res[res.length - 1];
};

const main = () => {
    let arr = [2, 3, 4, 7, 11], k = 5;
    let arr2 = [1, 2, 3, 4], k2 = 2;
    let arr_debug1 = [1, 13, 18]; k_debug1 = 17;
    console.log(findKthPositive(arr, k));
    console.log(findKthPositive(arr2, k2));
    console.log(findKthPositive(arr_debug1, k_debug1));

};

main()