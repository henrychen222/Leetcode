/**
 * 07/14/22 night
 * https://leetcode.com/problems/k-th-smallest-prime-fraction/
 */

const pr = console.log;

// Accepted --- 2870ms 9.09%
const kthSmallestPrimeFraction = (a, k) => {
    let n = a.length, d = [];
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            d.push([a[i], a[j]]);
        }
    }
    d.sort((x, y) => x[0] / x[1] - y[0] / y[1]);
    // pr(d)
    return d[k - 1];
};


const main = () => {
    let a = [1, 2, 3, 5], k = 3;
    let a2 = [1, 7], k2 = 1;
    pr(kthSmallestPrimeFraction(a, k))
    pr(kthSmallestPrimeFraction(a2, k2))
};

main()