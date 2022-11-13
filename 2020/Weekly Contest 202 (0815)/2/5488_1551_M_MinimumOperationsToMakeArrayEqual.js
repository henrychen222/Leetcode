/**
 * 8.15 night
 * https://leetcode.com/contest/weekly-contest-202/problems/minimum-operations-to-make-array-equal/
 */

const minOperations = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(2 * i + 1);
    }
    // console.log(arr);
    let sum = arr.reduce((acc, cur) => acc + cur);
    let avg = sum / n;
    // console.log(avg);
    if (n % 2 != 0) {
        let middle = arr.indexOf(avg);
        let left = arr.slice(0, middle);
        let right = arr.slice(middle + 1, n);
        let sum = 0;
        for (let i = 0; i < left.length; i++) {
            sum += ((right[i] - left[i]) >> 1);
        }
        return sum;
    } else {
        let rightIdx;
        for (let i = 1; i < n; i++) {
            if (arr[i - 1] < avg && arr[i] > avg) {
                rightIdx = i;
            }
        }
        let left = arr.slice(0, rightIdx);
        let right = arr.slice(rightIdx, n);
        // console.log(left, right);
        let sum = 0;
        for (let i = 0; i < left.length; i++) {
            sum += ((right[i] - left[i]) >> 1);
        }
        return sum;
    }
};

const main = () => {
    let n = 3;
    let n2 = 6;
    console.log(minOperations(n));
    console.log(minOperations(n2));
};

main()