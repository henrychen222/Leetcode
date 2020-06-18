/**
 * 6.17 morning noon
 * https://leetcode.com/problems/convert-a-number-to-hexadecimal/
 */

// Accepted --- 68ms 33MB 58.33%
const toHex = (num) => {
    return (num >>> 0).toString(16);
};

const main = () => {
    let num = 16;
    let num2 = -1;
    let num3 = 5;
    console.log(toHex(num)); // 1a
    console.log(toHex(num2)); // ffffffff
    console.log(toHex(num3)); // 0x5
};


main()