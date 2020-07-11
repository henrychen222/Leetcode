/**
 * 7.10 afternoon
 * https://leetcode.com/problems/integer-replacement/
 */

// don't know, how to decide when to n+1 or n-1
const integerReplacement = (n) => {
    console.log(one(n), two(n))
    return Math.min(one(n), two(n));
};

const one = (n) => {
    let tmp = n;
    let cnt = 0;
    while (tmp != 1) {
        if (tmp % 2 == 0) {
            tmp = tmp >> 1;
        } else {
            tmp--;
        }
        cnt++;
    }
    return cnt;
};

const two = (n) => {
    let tmp = n;
    let cnt = 0;
    while (tmp != 1) {
        if (tmp % 2 == 0) {
            tmp = tmp >> 1;
        } else {
            tmp++;
        }
        cnt++;
    }
    return cnt;
};


const main = () => {
    let n = 8;
    let n2 = 7;
    let debug1 = 65535;
    let debug2 = 1234;
    let debug3 = 10000;
    console.log(integerReplacement(n)); // 3
    console.log(integerReplacement(n2)); // 4
    console.log(integerReplacement(debug1)); // 17
    console.log(integerReplacement(debug2)); // 14
    console.log(integerReplacement(debug3)); // 16
};

main()