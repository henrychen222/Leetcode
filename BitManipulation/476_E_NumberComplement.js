/**
 * 6.15 night
 * https://leetcode.com/problems/number-complement/
 * same to 1009 https://leetcode.com/problems/complement-of-base-10-integer/
 */

// Accepted --- 72ms 33.9MB 6.13%
const findComplement = (num) => {
    let NbinStr = decimalToBinary(num);
    let complement = "";
    for (const i of NbinStr) {
        if (i == '1') {
            complement += '0';
        } else {
            complement += '1';
        }
    }
    return binaryToDecimal(complement);
};

const decimalToBinary = (num) => {
    return (num).toString(2);
};

const binaryToDecimal = (num) => {
    return parseInt(num, 2);
};

const main = () => {
    let num = 5;
    let num2 = 1;
    console.log(findComplement(num));
    console.log(findComplement(num2));
};

main()