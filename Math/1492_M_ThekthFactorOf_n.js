/**
 * 2/2/21 afternoon
 * https://leetcode.com/problems/the-kth-factor-of-n/
 */

// Accepted --- 132ms 5.89%
const kthFactor = (n, k) => {
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) cnt++;
        if (cnt == k) return i;
    }
    return -1;
};

const main = () => {
    let n = 12,
        k = 3;
    let n2 = 7,
        k2 = 2;
    let n3 = 4,
        k3 = 4;
    let n4 = 1,
        k4 = 1;
    let n5 = 1000,
        k5 = 3;
    console.log(kthFactor(n, k));
    console.log(kthFactor(n2, k2));
    console.log(kthFactor(n3, k3));
    console.log(kthFactor(n4, k4));
    console.log(kthFactor(n5, k5));
};

main()