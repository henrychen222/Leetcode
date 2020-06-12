/**
 * 6.11 evening
 * https://leetcode.com/problems/reverse-integer/
 */

// Accepted --- 104ms 37.8 MB 15.70%
const reverse = (x) => {
    let xArr = x.toString().split("");
    let res = [];
    if (xArr[0] == '-') {
        res = xArr.slice(1, xArr.length).reverse();
    } else {
        res = xArr.reverse();
    }
    for (let i = 0; i < res.length; i++) {
        if (res[0] == '0') {
            if (res[i] != 0) {
                res = res.slice(i, res.length);
            }
        }
    }
    if (x.toString()[0] == '-') {
        res.unshift('-');
    }
    if (res.join("") > 2 ** 31 - 1 || res.join("") < -(2 ** 31)) {
        return 0;
    }
    return res.join("");
};

const main = () => {
    let x = 123;
    let x2 = -123;
    let x3 = 120;
    let debug1 = 1534236469;
    console.log(reverse(x));
    console.log(reverse(x2));
    console.log(reverse(x3));
    console.log(reverse(debug1));
};

main()