/**
 * 6.15 night
 * https://leetcode.com/problems/complement-of-base-10-integer/
 * same to 476 https://leetcode.com/problems/number-complement/
 */

// Accepted --- 60ms 33.7 MB 31.11%
const bitwiseComplement = (N) => {
    let NbinStr = decimalToBinary(N);
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
    let N = 5;
    let N2 = 7;
    let N3 = 10;
    console.log(bitwiseComplement(N));
    console.log(bitwiseComplement(N2));
    console.log(bitwiseComplement(N3));
};

main()