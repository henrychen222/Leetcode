/**
 * 7.15 evening
 * https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/
 */

// need to fix
const canArrange = (arr, k) => {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j >= i + 1; j--) {
            if ((arr[i] + arr[j]) % k == 0) {
                arr = [...arr].splice(i, 1);
                arr = [...arr].splice(j, 1);
                break;
            }
        }
        console.log(arr);
        if (arr.length != 0) return false
    }
    return true;
};


const main = () => {
    let arr = [1, 2, 3, 4, 5, 10, 6, 7, 8, 9],
        k = 5;
    let arr2 = [1, 2, 3, 4, 5, 6],
        k2 = 7;
    let arr3 = [1, 2, 3, 4, 5, 6],
        k3 = 10;
    let arr4 = [-10, 10],
        k4 = 2;
    let arr5 = [-1, 1, -2, 2, -3, 3, -4, 4],
        k5 = 3;
    let arr_debug1 = [3, 8, 17, 2, 5, 6],
        k_debug1 = 10;
    console.log(canArrange(arr, k));
    console.log(canArrange(arr2, k2));
    console.log(canArrange(arr3, k3));
    console.log(canArrange(arr4, k4));
    console.log(canArrange(arr5, k5));
    console.log(canArrange(arr_debug1, k_debug1));
};

main()