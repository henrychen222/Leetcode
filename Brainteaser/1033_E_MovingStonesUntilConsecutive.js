/**
 * 10.26 evening
 * https://leetcode.com/tag/brainteaser/
 */

// Accepted --- 84ms 27.78%
const numMovesStones = (a, b, c) => {
    let arr = [a, b, c].sort((x, y) => x - y);
    return [getMin(arr), getMax(arr)];
};

const getMax = (arr) => {
    return (arr[2] - arr[1] - 1) + (arr[1] - arr[0] - 1);
};

const getMin = (arr) => {
    let leftDiff = arr[1] - arr[0];
    let rightDiff = arr[2] - arr[1];
    if (leftDiff == 2 || rightDiff == 2) return 1;
    let min;
    if (leftDiff == 1) {
        if (rightDiff == 1) {
            min = 0;
        } else {
            min = 1;
        }
    } else {
        if (rightDiff == 1) {
            min = 1;
        } else {
            min = 2;
        }
    }
    return min;
};

const main = () => {
    let a = 1,
        b = 2,
        c = 5;
    let a2 = 4,
        b2 = 3,
        c2 = 2;
    let a3 = 3,
        b3 = 5,
        c3 = 1;
    console.log(numMovesStones(a, b, c));
    console.log(numMovesStones(a2, b2, c2));
    console.log(numMovesStones(a3, b3, c3));
};

main()