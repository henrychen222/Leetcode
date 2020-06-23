/**
 * 6.20 evening
 * https://leetcode.com/contest/weekly-contest-194/problems/xor-operation-in-an-array/
 */

const xorOperation = (n, start) => {
    let nums = [];
    let xor = 0;
    for (let i = 0; i < n; i++) {
        nums[i] = start + 2*i;
        xor ^= nums[i];
    }
    return xor;
};

const main = () => {
    let n = 5, start = 0;
    let n2 = 4, start2 = 3;
    let n3 = 1, start3 = 7;
    let n4 = 10, start4 = 5;
    console.log(xorOperation(n, start));
    console.log(xorOperation(n2, start2));
    console.log(xorOperation(n3, start3));
    console.log(xorOperation(n4, start4));
};

main()