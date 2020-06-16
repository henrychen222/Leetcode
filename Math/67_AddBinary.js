/**
 * 6.14 night
 * https://leetcode.com/problems/add-binary/
 */
const addBinary = (a, b) => {
    let aDecimal = binaryToDecimal(a);
    let bDecimal = binaryToDecimal(b);
    let sum = aDecimal + bDecimal;
    return (sum >>> 0).toString(2);
};

const binaryToDecimal = (num) => {
    return parseInt(num, 2);
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
    console.log(addBinary(a_debug1, b_debug1));
};

main()