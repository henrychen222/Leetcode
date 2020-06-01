/**
 * 5.31 evening
 * https://leetcode.com/problems/largest-perimeter-triangle/
 */

// Accepted --- 100ms 38.8MB 65.06%
const largestPerimeter = (A) => {
    A.sort((a, b) => b - a);
    // console.log(A);
    let a = A[0];
    let b = A[1];
    let c = A[2];
    for (let i = 0; i < A.length; i++) {
        if (isTriangle(a, b, c)) {
            return a + b + c;
        }
        a = A[i + 1];
        b = A[i + 2];
        c = A[i + 3];
    }
    return 0;
};

const isTriangle = (a, b, c) => {
    if ((a + b) > c && (a + c) > b && (b + c) > a) {
        return true;
    }
    return false;
};

const main = () => {
    let A = [2, 1, 2];
    let A2 = [1, 2, 1];
    let A3 = [3, 2, 3, 4];
    let A4 = [3, 6, 2, 3];

    console.log(largestPerimeter(A));
    console.log(largestPerimeter(A2));
    console.log(largestPerimeter(A3));
    console.log(largestPerimeter(A4));
};

main()