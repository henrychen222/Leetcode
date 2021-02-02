/**
 * 01/31/21 morning
 * https://leetcode.com/problems/adding-two-negabinary-numbers/
 */

// Accepted --- 96ms 44.44%
const addNegabinary = (arr1, arr2) => {
    let sum = cal(arr1) + cal(arr2);
    // console.log(cal(arr1), cal(arr2), sum);
    return ToNegabinary(sum).split("").map(x => Number(x));
};

const cal = (a) => {
    let n = BigInt(a.length);
    let res = 0n;
    for (let i = 0n; i < n; i++) {
        if (a[i] == 1n) {
            let tmp = (-2n) ** (n - i - 1n);
            res += tmp;
        }
    }
    return res;
};

// https://stackoverflow.com/questions/9330946/how-to-convert-a-decimal-base-10-to-a-negabinary-base-2
const ToNegabinary = (num) => {
    let res = '';
    while (num != 0n) {
        let remainder = num % -2n;
        num /= -2n;
        if (remainder < 0n) {
            remainder += 2n;
            num++;
        }
        res = remainder.toString() + res;
    }
    return res.length == 0n ? '0' : res;
};

const main = () => {
    let arr1 = [1, 1, 1, 1, 1],
        arr2 = [1, 0, 1];
    let arr1_2 = [0],
        arr2_2 = [0];
    let arr1_3 = [0],
        arr2_3 = [1];
    let arr1_debug1 = [0],
        arr2_debug1 = [1, 0];
    let arr1_debug2 = [0],
        arr2_debug2 = [1, 1];
    console.log(addNegabinary(arr1, arr2));
    console.log(addNegabinary(arr1_2, arr2_2));
    console.log(addNegabinary(arr1_3, arr2_3));
    console.log(addNegabinary(arr1_debug1, arr2_debug1)); // [1,0]
    console.log(addNegabinary(arr1_debug2, arr2_debug2)); // [1,1]
};

main()

// console.log(cal([1, 1, 0, 1]));
// console.log(ToNegabinary(16));

// console.log(16n % 2n);