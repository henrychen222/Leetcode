/**
 * 6.5 night
 * https://leetcode.com/problems/binary-prefix-divisible-by-5/
 */

// need to fix
const prefixesDivBy5 = (A) => {
    let allNum = [];
    let res = [];
    for (let i = 0; i < A.length; i++) {
        let each = convertBinaryToDecimal(A.slice(0, i + 1).join(""));
        allNum.push(each);
        if (each % 5 == 0) { // still number length > 16 problem
            res.push(true);
        } else {
            res.push(false);
        }
    }
    console.log(allNum);
    return res;
};

const convertBinaryToDecimal = (binary) => {
    // input is string
    return parseInt(binary, 2);
};

// const isDivideBy5 = (input) => {
//     const regex = RegExp('^(0|1(10)*(0|11)(01*01|01*00(10)*(0|11))*1)*');
//     return regex.test(input);
// };

const main = () => {
    let A = [0, 1, 1];
    let A2 = [1, 1, 1];
    let A3 = [0, 1, 1, 1, 1, 1];
    let A4 = [1, 1, 1, 0, 1];
    console.log(prefixesDivBy5(A));
    console.log(prefixesDivBy5(A2));
    console.log(prefixesDivBy5(A3));
    console.log(prefixesDivBy5(A4));

    let debug1 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1];
    console.log(prefixesDivBy5(debug1));
};

main()