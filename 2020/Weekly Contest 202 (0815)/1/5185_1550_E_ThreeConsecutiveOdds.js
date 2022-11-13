/**
 * 8.15 night
 * https://leetcode.com/contest/weekly-contest-202/problems/three-consecutive-odds/
 */

const threeConsecutiveOdds = (arr) => {
    // if (arr.length == 1) {
    //     if (arr[0] % 2 != 0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // } else if (arr.length == 2) {
    //     if (arr[0] % 2 != 0 && arr[1] % 2 != 0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    if (arr.length == 1 || arr.length == 2) return false;
    for (let i = 2; i < arr.length; i++) {
        let first = arr[i - 2];
        let second = arr[i - 1];
        let third = arr[i];
        if (first % 2 != 0 && second % 2 != 0 && third % 2 != 0) {
            return true;
        }
    }
    return false;
};

const main = () => {
    let arr = [2, 6, 4, 1];
    let arr2 = [1, 2, 34, 3, 4, 5, 7, 23, 12];
    let debug1 = [1];
    console.log(threeConsecutiveOdds(arr));
    console.log(threeConsecutiveOdds(arr2));
    console.log(threeConsecutiveOdds(debug1)); // false
};

main()