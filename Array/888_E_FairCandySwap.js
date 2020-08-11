/**
 * 8.10 morning
 * https://leetcode.com/problems/fair-candy-swap/
 */

// Accepted --- 604ms 42.7MB 42.86%
const fairCandySwap = (A, B) => {
    let swapDiff;
    let res = [];
    let sumA = sum(A);
    let sumB = sum(B);
    if (sumA > sumB) {
        swapDiff = (sumA - sumB) >> 1;
        for (const i of A) {
            for (const j of B) {
                if ((i - j) == swapDiff) {
                    res.push(i);
                    res.push(j);
                    return res;
                }
            }
        }
    } else {
        swapDiff = (sumB - sumA) >> 1;
        for (const i of A) {
            for (const j of B) {
                if ((j - i) == swapDiff) {
                    res.push(i);
                    res.push(j);
                    return res;
                }
            }
        }
    }
};

const sum = (arr) => {
    return arr.reduce((acc, cur) => acc + cur);
};

const main = () => {
    let A = [1, 1],
        B = [2, 2];
    let A2 = [1, 2],
        B2 = [2, 3];
    let A3 = [2],
        B3 = [1, 3];
    let A4 = [1, 2, 5],
        B4 = [2, 4];
    console.log(fairCandySwap(A, B));
    console.log(fairCandySwap(A2, B2));
    console.log(fairCandySwap(A3, B3));
    console.log(fairCandySwap(A4, B4));
};

main()