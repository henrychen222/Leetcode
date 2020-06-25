/**
 * 6.24 evening
 * https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
 */

// Accepted --- 68ms 37.2MB 63.67%
const kWeakestRows_refine = (mat, k) => {
    let data = [];
    for (let i = 0; i < mat.length; i++) {
        data.push([i, getFrequency(mat[i], 1)]);
    }
    data.sort((a, b) => a[1] - b[1]); // shouldn't work (does not consider a[1] == b[1]), but works.
    let res = [];
    for (let i = 0; i < k; i++) {
        res.push(data[i][0]);
    }
    return res;
};

// Accepted --- 76ms 37.4MB 36.01%
const kWeakestRows = (mat, k) => {
    let data = [];
    for (let i = 0; i < mat.length; i++) {
        data.push([i, getFrequency(mat[i], 1)]);
    }
    data.sort((a, b) => {
        if (a[1] == b[1]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });
    let res = [];
    for (let i = 0; i < k; i++) {
        res.push(data[i][0]);
    }
    return res;
};

const getFrequency = (arr, item) => {
    return arr.filter(x => x === item).length;
};

const main = () => {
    let mat = [
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1]
    ];
    let k = 3;
    let mat2 = [
        [1, 0, 0, 0],
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 0, 0, 0]
    ];
    let k2 = 2;
    console.log(kWeakestRows(mat, k));
    console.log(kWeakestRows(mat2, k2));

    console.log(kWeakestRows_refine(mat, k));
    console.log(kWeakestRows_refine(mat2, k2));
};

main()