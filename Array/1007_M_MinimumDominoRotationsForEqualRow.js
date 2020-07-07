/**
 * 7.6 afternoon
 * https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/
 */

// Accepted --- 180ms 54.7MB 11.51%
const minDominoRotations = (A, B) => {
    let itemA = getMostFreqItem(A);
    let itemB = getMostFreqItem(B);
    let n = A.length;
    let newA = [];
    let newB = [];
    for (let i = 0; i < n; i++) {
        if (A[i] != itemA) {
            newA.push(B[i]);
        } else {
            newA.push(A[i]);
        }

        if (B[i] != itemB) {
            newB.push(A[i]);
        } else {
            newB.push(B[i]);
        }
    }
    if ([...new Set(newA)].length != 1 && [...new Set(newB)].length != 1) {
        return -1;
    }
    let stepA = checkStep(newA, A);
    let stepB = checkStep(newB, B);
    return Math.min(stepA, stepB);
};

const checkStep = (current, origin) => {
    let cnt = 0
    for (let i = 0; i < origin.length; i++) {
        if (current[i] != origin[i]) {
            cnt++;
        }
    }
    return cnt;
};

const getMostFreqItem = (arr) => {
    let element = [...new Set(arr)];
    let max = 0;
    let data = [];
    for (const e of element) {
        data.push([e, getFrequency(arr, e)]);
    }
    data.sort((a, b) => b[1] - a[1]);
    return data[0][0];
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let A = [2, 1, 2, 4, 2, 2],
        B = [5, 2, 6, 2, 3, 2];
    let A2 = [3, 5, 1, 2, 3],
        B2 = [3, 6, 3, 3, 4];
    console.log(minDominoRotations(A, B));
    console.log(minDominoRotations(A2, B2));
};

main()