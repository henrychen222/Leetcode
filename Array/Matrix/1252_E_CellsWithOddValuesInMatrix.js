/**
 * 8.21 night
 * https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/
 */

// Accepted --- 104ms 27.49%
const oddCells = (n, m, indices) => {
    let data = initialize2DArray(n, m);
    // console.log(data)
    for (const i of indices) {
        let row = i[0];
        let col = i[1];
        for (let j = 0; j < m; j++) {
            data[row][j]++;
        }
        for (let i = 0; i < n; i++) {
            data[i][col]++;
        }
    }
    // console.log(data)
    let cnt = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[0].length; j++) {
            if (data[i][j] % 2 != 0) cnt++;
        }
    }
    return cnt;
};

const initialize2DArray = (height, width) => {
    return [...Array(height)].map(x => Array(width).fill(0));
};


// Accepted --- 72ms 92.69%
const oddCells2 = (n, m, indices) => {
    let data = initialize2DArray2(n, m); // difference
    for (const i of indices) {
        let row = i[0];
        let col = i[1];
        for (let j = 0; j < m; j++) {
            data[row][j]++;
        }
        for (let i = 0; i < n; i++) {
            data[i][col]++;
        }
    }
    let cnt = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[0].length; j++) {
            if (data[i][j] % 2 != 0) cnt++;
        }
    }
    return cnt;
};

const initialize2DArray2 = (height, width) => {
    let data = [];
    for (let i = 0; i < height; i++) {
        let tmp = [];
        for (let j = 0; j < width; j++) {
            tmp.push(0);
        }
        data.push(tmp);
    }
    return data;
};

const main = () => {
    let n = 2,
        m = 3,
        indices = [
            [0, 1],
            [1, 1]
        ];
    let n2 = 2,
        m2 = 2,
        indices2 = [
            [1, 1],
            [0, 0]
        ];
    console.log(oddCells(n, m, indices));
    console.log(oddCells(n2, m2, indices2));

    console.log("");
    console.log(oddCells2(n, m, indices));
    console.log(oddCells2(n2, m2, indices2));
};

main()