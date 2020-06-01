/**
 * https://leetcode.com/problems/to-lower-case/
 * 5.31 night
 */

// Accepted --- 60ms 32.8MB 27.34%
const toLowerCase = (str) => {
    str = str.toLowerCase();
    return str;
};

const main = () => {
    let str = "Hello";
    let str2 = "here";
    let str3 = "LOVELY";

    console.log(toLowerCase(str));
    console.log(toLowerCase(str2));
    console.log(toLowerCase(str3));
};

main()