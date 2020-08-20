/**
 * 6.14 night 8.19 morning complete
 * https://leetcode.com/problems/add-binary/
 */

// reference: https://stackoverflow.com/questions/40353000/javascript-add-two-binary-numbers-returning-binary
// Accepted --- 92ms 38.3MB 53.30%
const addBinary = (a, b) => {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let res = "";
    while (i >= 0 || j >= 0) {
        let m = i < 0 ? 0 : a[i] | 0;
        let n = j < 0 ? 0 : b[j] | 0;
        carry += m + n;
        res = carry % 2 + res;
        carry = carry / 2 | 0; // remove decimals,  1 / 2 = 0.5, only get 0
        i--;
        j--;
    }
    if (carry !== 0) {
        res = carry + res;
    }
    return res;
};

const main = () => {
    let a = "11",
        b = "1";
    let a2 = "1010",
        b2 = "1011";
    let a_debug1 = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
        b_debug1 = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";
    console.log(addBinary(a, b));
    console.log(addBinary(a2, b2));
    console.log(addBinary(a_debug1, b_debug1)); // "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
};

main()


// // Wrong answer with large number
// const addBinary = (a, b) => {
//     let aDecimal = binaryToDecimal(a);
//     let bDecimal = binaryToDecimal(b);
//     let sum = aDecimal + bDecimal;
//     return (sum >>> 0).toString(2);
// };

// const binaryToDecimal = (num) => {
//     return parseInt(num, 2);
// };