/**
 * 6.3 night
 * https://leetcode.com/problems/fibonacci-number/
 */

// Accepted --- 68ms 32.8 MB 46.77%
const fib = (N) => {
    if (N == 1) return 1;
    let res = [0, 1];
    let max = Number.MIN_VALUE;
    for (let i = 2; i <= N; i++) {
        res[i] = res[i - 1] + res[i - 2];
        max = Math.max(max, res[i]);
    }
    return max;
};

const main = () => {
    let N = 2
    let N2 = 3;
    let N3 = 4;
    let N_debug1 = 1;
    console.log(fib(N));
    console.log(fib(N2));
    console.log(fib(N3));
    console.log(fib(N_debug1));
};

main()