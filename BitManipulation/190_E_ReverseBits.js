/**
 * 6.17 morning
 * https://leetcode.com/problems/reverse-bits/
 */

// Accepted --- 84ms 38.9MB 39.14%
const reverseBits_improve = (n) => {
    let res = "";
    let nStr = decimalToBinary(n);
    let nStrLen = nStr.length;
    if (nStrLen != 32) {
        for (let i = 1; i <= 32 - nStrLen; i++) {
            nStr = '0' + nStr;
        }
    }
    for (let i = nStr.length - 1; i >= 0; i--) {
        res += nStr[i];
    }
    return binaryToDecimal(res);
};

// Accepted --- 88ms 38.6MB 30.65%
const reverseBits = (n) => {
    let res = [];
    let nArr = decimalToBinary(n).split("");
    let nArrLen = nArr.length;
    if (nArrLen != 32) {
        nArr.unshift('0');
        for (let i = 1; i < 32 - nArrLen; i++) {
            nArr.unshift('0');
        }
    }
    for (let i = nArr.length - 1; i >= 0; i--) {
        res.push(nArr[i]);
    }
    return binaryToDecimal(res.join(""));
};

const decimalToBinary = (num) => {
    return (num >>> 0).toString(2);
};

const binaryToDecimal = (num) => {
    return parseInt(num, 2);
};

const main = () => {
    // get the idea from 191 of the binary input as number
    let n = parseInt("00000010100101000001111010011100", 2);
    let n2 = parseInt("11111111111111111111111111111101", 2);
    console.log(reverseBits(n));
    console.log(reverseBits(n2));
    console.log(reverseBits_improve(n));
    console.log(reverseBits_improve(n2));
};

main();