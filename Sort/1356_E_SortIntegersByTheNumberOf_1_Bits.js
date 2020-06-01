/**
 * 5.31 evening
 * https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
 */

// Accepted --- 80ms 37.8MB 78.47%
const sortByBits = (arr) => {
    arr.sort((a, b) => {
        if (bitCount(a) == bitCount(b)) {
            return a - b;
        }
        return bitCount(a) - bitCount(b);
    });
    return arr;
};

// const sortByBits = (arr) => {
//     arr.sort((a, b) => bitCount(a) - bitCount(b));
//     return arr;
// };

const bitCount = (n) => {
    n = n - ((n >> 1) & 0x55555555);
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
    return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24;
};

const main = () => {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let arr2 = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
    let arr3 = [10000, 10000];
    let arr4 = [2, 3, 5, 7, 11, 13, 17, 19];
    let arr5 = arr = [10, 100, 1000, 10000];

    console.log(sortByBits(arr));
    console.log(sortByBits(arr2));
    console.log(sortByBits(arr3));
    console.log(sortByBits(arr4));
    console.log(sortByBits(arr5));

};

main()