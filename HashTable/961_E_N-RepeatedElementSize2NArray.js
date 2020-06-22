/**
 * 6.21 night
 * https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
 */

// Accepted --- 80ms 42.4MB 50.58%
const repeatedNTimes = (A) => {
    let N = A.length >> 1;
    let unique = [...new Set(A)];
    for (const i of unique) {
        if (getFrequency(A, i) == N) {
            return i;
        }
    }
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let A = [1, 2, 3, 3];
    let A2 = [2, 1, 2, 5, 3, 2];
    let A3 = [5, 1, 5, 2, 5, 3, 5, 4];
    console.log(repeatedNTimes(A));
    console.log(repeatedNTimes(A2));
    console.log(repeatedNTimes(A3));
};

main()