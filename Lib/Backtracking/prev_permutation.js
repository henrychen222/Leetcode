/**
 * 9.25 evening
 * https://www.geeksforgeeks.org/lexicographically-previous-permutation-in-c/  (use)
 * 
 * other reference:
 * https://medium.com/dummies-for-dummies-my-algorithm-learning-notes/next-previous-permutation-25f21b83a342
 * https://www.techiedelight.com/std_prev_permutation-overview-implementation/
 * https://www.javatpoint.com/cpp-algorithm-prev_permutation-function
 */

const prev_permutation = (arr) => {
    let n = arr.length - 1;
    let i = n;
    while (i > 0 && arr[i - 1] <= arr[i]) {
        i--;
    }
    if (i <= 0) return false;
    let j = i - 1;
    while (j + 1 <= n && arr[j + 1] < arr[i - 1]) {
        j++;
    }
    // console.log(arr, i - 1, j);
    [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
    return arr;
};

const main = () => {
    let arr = [4, 3, 2, 1];
    let arr2 = [3, 2, 1];
    let arr3 = [1, 9, 4, 6, 7];
    let arr4 = [3, 1, 1, 3];
    let arr5 = [1, 1, 5]
    console.log(prev_permutation(arr)); // [4, 3, 1, 2];
    console.log(prev_permutation(arr2)); // [3, 1, 2];
    console.log(prev_permutation(arr3)); // [1, 7, 4, 6, 9]
    console.log(prev_permutation(arr4)); // [1, 1, 3, 3]
};

main()