/////////////////////////////////////////////////////////////////////////////////////////
// 06/23/21 evening  only for sorted array
const binarySearch_refine = (arr, item) => {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (low <= high) {
        mid = low + ((high - low) >> 1);
        if (arr[mid] < item) {
            low = mid + 1;
        } else if (arr[mid] > item) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
};

// from book https://github.com/henrychen222/Stevens-CS570/blob/master/Textbook/Learning%20Javascript%20Data%20Structures%20and%20Algorithms.pdf
const binarySearch = (arr, item) => {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    let tmp;
    while (low <= high) {
        mid = low + ((high - low) >> 1);
        tmp = arr[mid];
        if (tmp < item) { //lower, item is on the right
            low = mid + 1;
        } else if (tmp > item) { //higher, item is on the left
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
};

const linearSearch = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            return i;
        }
    }
};

//////////////////////////////////////////////////////////////////////////////////////
// 07/12/21 evening 07/12/21 evening
// https://www.youtube.com/watch?v=P3YID7liBug
const binarySearch_unsortedArr = (arr, item) => {
    let origin = [...arr];
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (item == arr[mid]) {
            return origin.indexOf(item);
        } else if (item < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};

/////////////////////////////////// Test //////////////////////////////////////////
const main = () => {
    let arr = [1, 3, 5, 7, 8, 9];
    let x = 5;
    let arr2 = [4, 5, 6, 7, 0, 1, 2],
        x2 = 0;
    let arr3 = [4, 5, 6, 7, 0, 1, 2],
        x3 = 3;

    console.log(binarySearch_unsortedArr(arr, x)); // 2
    console.log(binarySearch_unsortedArr(arr2, x2)); // 4
    console.log(binarySearch_unsortedArr(arr3, x3)); //  -1

    console.log(binarySearch(arr, x));
    console.log(binarySearch_refine(arr, x));
    console.log(linearSearch(arr, x));
}

main()