/**
 * 6.3 night
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 */

// Accepted --- 92ms 43.1MB 99.58%
const sortedSquares = (A) => {
    A = A.map(x => x ** 2);
    return A.sort((a, b) => a - b);
};

const main = () => {
    let A = [-4, -1, 0, 3, 10];
    let A2 = [-7, -3, 2, 3, 11];
    console.log(sortedSquares(A));
    console.log(sortedSquares(A2));
};

main()