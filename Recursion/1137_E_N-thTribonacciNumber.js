/**
 * 8.19 night
 * https://leetcode.com/problems/n-th-tribonacci-number/
 */

// Accepted --- 100ms 36.1MB 12.37%
const tribonacci = (n) => {
    switch (n) {
        case 0:
            return 0;
        case 1 || 2:
            return 1;
    }
    let tmp = [0, 1, 1];
    while (true) {
        let len = tmp.length;
        if (len == n + 1) break;
        tmp.push(tmp[len - 1] + tmp[len - 2] + tmp[len - 3]);
    }
    return tmp[tmp.length - 1];
};

const main = () => {
    let n = 4;
    let n2 = 25;
    console.log(tribonacci(n));
    console.log(tribonacci(n2));
};

main()