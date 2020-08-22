/**
 * 8.21 night
 * https://leetcode.com/problems/image-smoother/
 */

// Accepted --- 148ms 69.01%
const imageSmoother1 = (M) => {
    let m = M.length;
    let n = M[0].length;
    if (m == 1) {
        if (n == 1) {
            return M;
        } else if (n == 2) {
            let tmp = (M[0][0] + M[0][1]) >> 1;
            return [
                [tmp, tmp]
            ];
        } else {
            let start = (M[0][0] + M[0][1]) >> 1;
            let end = (M[0][M[0].length - 1] + M[0][M[0].length - 2]) >> 1;
            let res = [
                [start]
            ];
            for (let i = 1; i < M[0].length - 1; i++) {
                let tmp = Math.floor((M[0][i - 1] + M[0][i] + M[0][i + 1]) / 3);
                res[0].push(tmp);
            }
            res[0].push(end);
            return res;
        }
    } else if (n == 1) {
        if (m == 2) {
            let tmp = (M[0][0] + M[1][0]) >> 1;
            return [
                [tmp],
                [tmp]
            ];
        } else if (m > 2) {
            let top = (M[0][0] + M[1][0]) >> 1;
            let bottom = (M[M.length - 1][0] + M[M.length - 2][0]) >> 1;
            let res = [
                [top]
            ];
            for (let j = 1; j < M.length - 1; j++) {
                let tmp = Math.floor((M[j - 1][0] + M[j][0] + M[j + 1][0]) / 3);
                res.push([tmp]);
            }
            res.push([bottom]);
            return res;
        }
    }

    let data = initialize2DArray(m, n);
    /**
     * conditions for at least 2 row 2 col
     */
    // four corners
    data[0][0] = Math.floor((M[0][0] + M[0][1] + M[1][0] + M[1][1]) / 4);
    data[m - 1][0] = Math.floor((M[m - 1][0] + M[m - 2][0] + M[m - 1][1] + M[m - 2][1]) / 4); // bottom left
    data[0][n - 1] = Math.floor((M[0][n - 1] + M[0][n - 2] + M[1][n - 1] + M[1][n - 2]) / 4); // top right
    data[m - 1][n - 1] = Math.floor((M[m - 1][n - 1] + M[m - 1][n - 2] + M[m - 2][n - 1] + M[m - 2][n - 2]) / 4); // top right
    // console.log(data);
    for (let j = 1; j < n - 1; j++) { // first row except begin and end
        data[0][j] = Math.floor((M[0][j] + M[0][j - 1] + M[0][j + 1] + M[1][j] + M[1][j - 1] + M[1][j + 1]) / 6);
    }
    // console.log(data);
    for (let j = 1; j < n - 1; j++) { // last row except begin and end
        data[m - 1][j] = Math.floor((M[m - 1][j] + M[m - 1][j - 1] + M[m - 1][j + 1] + M[m - 2][j] + M[m - 2][j - 1] + M[m - 2][j + 1]) / 6);
    }
    // console.log(data);
    for (let i = 1; i < m - 1; i++) { // first col except top and bottom
        data[i][0] = Math.floor((M[i][0] + M[i - 1][0] + M[i + 1][0] + M[i][1] + M[i - 1][1] + M[i + 1][1]) / 6);
    }
    // console.log(data);
    for (let i = 1; i < m - 1; i++) { // last col except top and bottom
        data[i][n - 1] = Math.floor((M[i][n - 1] + M[i - 1][n - 1] + M[i + 1][n - 1] + M[i][n - 2] + M[i - 1][n - 2] + M[i + 1][n - 2]) / 6);
    }
    // console.log(data);
    for (let i = 1; i < m - 1; i++) { // inside
        for (let j = 1; j < n - 1; j++) {
            let neighbors = M[i - 1][j] + M[i + 1][j] + M[i][j - 1] + M[i][j + 1];
            let corners = M[i - 1][j - 1] + M[i - 1][j + 1] + M[i + 1][j - 1] + M[i + 1][j + 1];
            data[i][j] = Math.floor((M[i][j] + neighbors + corners) / 9);
        }
    }
    return data;
};

// Accepted --- 200ms 23.94%   submit again 144ms 85.92%
const imageSmoother2 = (M) => {
    let m = M.length;
    let n = M[0].length;
    if (m == 1) {
        if (n == 1) {
            return M;
        } else if (n == 2) {
            let tmp = (M[0][0] + M[0][1]) >> 1;
            return [
                [tmp, tmp]
            ];
        } else {
            let start = (M[0][0] + M[0][1]) >> 1;
            let end = (M[0][n - 1] + M[0][n - 2]) >> 1; // difference
            let res = [
                [start]
            ];
            for (let i = 1; i < n - 1; i++) { // difference
                let tmp = Math.floor((M[0][i - 1] + M[0][i] + M[0][i + 1]) / 3);
                res[0].push(tmp);
            }
            res[0].push(end);
            return res;
        }
    } else if (n == 1) {
        if (m == 2) {
            let tmp = (M[0][0] + M[1][0]) >> 1;
            return [
                [tmp],
                [tmp]
            ];
        } else if (m > 2) {
            let top = (M[0][0] + M[1][0]) >> 1;
            let bottom = (M[m - 1][0] + M[m - 2][0]) >> 1; // difference
            let res = [
                [top]
            ];
            for (let j = 1; j < m - 1; j++) { // difference
                let tmp = Math.floor((M[j - 1][0] + M[j][0] + M[j + 1][0]) / 3);
                res.push([tmp]);
            }
            res.push([bottom]);
            return res;
        }
    }
    let data = initialize2DArray(m, n);
    data[0][0] = Math.floor((M[0][0] + M[0][1] + M[1][0] + M[1][1]) / 4);
    data[m - 1][0] = Math.floor((M[m - 1][0] + M[m - 2][0] + M[m - 1][1] + M[m - 2][1]) / 4);
    data[0][n - 1] = Math.floor((M[0][n - 1] + M[0][n - 2] + M[1][n - 1] + M[1][n - 2]) / 4);
    data[m - 1][n - 1] = Math.floor((M[m - 1][n - 1] + M[m - 1][n - 2] + M[m - 2][n - 1] + M[m - 2][n - 2]) / 4);
    for (let j = 1; j < n - 1; j++) {
        data[0][j] = Math.floor((M[0][j] + M[0][j - 1] + M[0][j + 1] + M[1][j] + M[1][j - 1] + M[1][j + 1]) / 6);
    }
    for (let j = 1; j < n - 1; j++) {
        data[m - 1][j] = Math.floor((M[m - 1][j] + M[m - 1][j - 1] + M[m - 1][j + 1] + M[m - 2][j] + M[m - 2][j - 1] + M[m - 2][j + 1]) / 6);
    }
    for (let i = 1; i < m - 1; i++) {
        data[i][0] = Math.floor((M[i][0] + M[i - 1][0] + M[i + 1][0] + M[i][1] + M[i - 1][1] + M[i + 1][1]) / 6);
    }
    for (let i = 1; i < m - 1; i++) {
        data[i][n - 1] = Math.floor((M[i][n - 1] + M[i - 1][n - 1] + M[i + 1][n - 1] + M[i][n - 2] + M[i - 1][n - 2] + M[i + 1][n - 2]) / 6);
    }
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            let neighbors = M[i - 1][j] + M[i + 1][j] + M[i][j - 1] + M[i][j + 1];
            let corners = M[i - 1][j - 1] + M[i - 1][j + 1] + M[i + 1][j - 1] + M[i + 1][j + 1];
            data[i][j] = Math.floor((M[i][j] + neighbors + corners) / 9);
        }
    }
    return data;
};

const initialize2DArray = (height, width) => {
    let M = [];
    for (let i = 0; i < height; i++) {
        let tmp = [];
        for (let j = 0; j < width; j++) {
            tmp.push(0);
        }
        M.push(tmp);
    }
    return M;
};

const main = () => {
    let M = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ]
    let M2 = [
        [1]
    ]
    let M3 = [
        [1],
        [2]
    ]
    let M4 = [
        [1, 2]
    ]
    let M5 = [
        [1, 2],
        [1, 2]
    ]
    let debug1 = [
        [2, 3, 4],
        [5, 6, 7],
        [8, 9, 10],
        [11, 12, 13],
        [14, 15, 16]
    ];
    console.log(imageSmoother(M));
    console.log(imageSmoother(M2));
    console.log(imageSmoother(M3));
    console.log(imageSmoother(M4));
    console.log(imageSmoother(M5));

    /**
     *  2  3  4      4  4  5
     *  5  6  7      5  6  6
     *  8  9  10     8  9  9
     *  11 12 13     11 12 12
     *  14 15 16     13 13 14
     */
    console.log(imageSmoother(debug1)); // [[4,4,5],[5,6,6],[8,9,9],[11,12,12],[13,13,14]]
    let debug2 = [
        [6, 9, 7]
    ];
    let M6 = [
        [6],
        [9],
        [7]
    ];
    console.log(imageSmoother(debug2));
    console.log(imageSmoother(M6));
};

main()