/**
 * 7.4 evening
 * https://leetcode.com/contest/weekly-contest-196/problems/can-make-arithmetic-progression-from-sequence/
 */

const canMakeArithmeticProgression = (arr) => {
    arr.sort((a, b) => a - b);
    for (let i = 2; i < arr.length; i++) {
        if ((arr[i - 1] - arr[i - 2]) != (arr[i] - arr[i - 1])) {
            return false;
        }
    }
    return true;
};

const main = () => {
    let arr = [3, 5, 1];
    let arr2 = [1, 2, 4];
    console.log(canMakeArithmeticProgression(arr));
    console.log(canMakeArithmeticProgression(arr2));
};

main()