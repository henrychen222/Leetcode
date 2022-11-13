/**
 * 12.5 evening
 * https://leetcode.com/contest/weekly-contest-218/problems/concatenation-of-consecutive-binary-numbers/
 */

const mod = BigInt(1e9 + 7);
const concatenatedBinary = (n) => {
    let tmp = "";
    for (let i = 1; i <= n; i++) {
        let bin = decimalToBinary(i);
        // console.log(bin);
        tmp += bin;
    }
    let len = tmp.length;
    let res = 0n;
    for (let i = len - 1; i >= 0; i--) {
        if (tmp[i] == '1') {
            res += BigInt(2 ** (len - i - 1));
        }
    }
    return Number(res % mod);
};

const decimalToBinary = (num) => {
    return (num >>> 0).toString(2);
};

const binaryToDecimal = (num) => {
    return parseInt(num, 2);
};

const main = () => {
    let n = 1;
    let n2 = 3;
    let n3 = 12;
    let debug1 = 42;
    let debug2 = 418;
    console.log(concatenatedBinary(n));
    console.log(concatenatedBinary(n2));
    console.log(concatenatedBinary(n3));
    console.log(concatenatedBinary(debug1)); // 727837408
    console.log(concatenatedBinary(debug2));
};

main();