// 7.12 evening 7.13 evening
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
}

main()