// 6.23 evening
const binarySearch_refine = (arr, item) => {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    arr.sort((a, b) => a - b);
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
    arr.sort((a, b) => a - b);
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

const main = () => {
    let arr = [1, 3, 5, 7, 8, 9];
    let x = 5;
    console.log(binarySearch(arr, x));
    console.log(binarySearch_refine(arr, x));
    console.log(linearSearch(arr, x));
};

main()