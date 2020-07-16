/**
 * 7.15 evening
 * https://leetcode.com/problems/maximum-swap/
 */

// Accepted --- 88ms 33.6MB 16.32%
const maximumSwap = (num) => {
    let arr = num.toString().split("").map(x => Number(x));
    let sortedArr = [...arr].sort((a, b) => b - a);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != sortedArr[i]) { // 找到要swap的最高位
            let idx = arr.lastIndexOf(sortedArr[i]); // 从尽可能的低位换来大数, 保证新数尽可能大
            let tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
            break;
        }
    }
    let res = '';
    for (const i of arr) {
        res += i;
    }
    return Number(res);
};

// Accepted --- 68ms 33.9MB 68.65%
const maximumSwap2 = (num) => {
    let arr = num.toString().split("").map(x => Number(x));
    let sortedArr = [...arr].sort((a, b) => b - a);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != sortedArr[i]) {
            let idx = arr.lastIndexOf(sortedArr[i]);
            [arr[i], arr[idx]] = [arr[idx], arr[i]];
            break;
        }
    }  
    let res = '';
    for (const i of arr) {
        res += i;
    }
    return Number(res);
};

const main = () => {
    let num = 2736;
    let num2 = 9973;
    console.log(maximumSwap(num));
    console.log(maximumSwap(num2));

    console.log(maximumSwap(num));
    console.log(maximumSwap(num2));
};

main()