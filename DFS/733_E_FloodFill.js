/**
 * 10.25 evening
 * https://leetcode.com/problems/flood-fill/
 */

// Accepted --- 104ms 25.77%
const flood = '*';
const floodFill = (image, sr, sc, newColor) => {
    let oldColor = image[sr][sc];
    image[sr][sc] = flood;
    let m = image.length;
    let n = image[0].length;
    let record = [];
    while (true) {
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (image[i][j] == oldColor) {
                    if ((i - 1 >= 0 && image[i - 1][j] == flood) || (i + 1 < m && image[i + 1][j] == flood) ||
                        (j - 1 >= 0 && image[i][j - 1] == flood) || (j + 1 < n && image[i][j + 1] == flood)) {
                        image[i][j] = flood;
                    }
                }
            }
        }
        let tmp = JSON.stringify(image);
        if (tmp == record[record.length - 1]) break;
        record.push(tmp);
    }
    // console.log(image);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (image[i][j] == flood) {
                image[i][j] = newColor;
            }
        }
    }
    return image;
};

const main = () => {
    let image = [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1]
        ],
        sr = 1,
        sc = 1,
        newColor = 2;
    let image_debug1 = [
            [0, 0, 0],
            [0, 0, 0]
        ],
        sr_debug1 = 0,
        sc_debug1 = 0,
        newColor_debug1 = 2;
    let image_debug2 = [
            [0, 1, 0],
            [0, 0, 1]
        ],
        sr_debug2 = 1,
        sc_debug2 = 1,
        newColor_debug2 = 1;
    console.log(floodFill(image, sr, sc, newColor));
    console.log(floodFill(image_debug1, sr_debug1, sc_debug1, newColor_debug1)); // [[2,2,2],[2,2,2]]
    console.log(floodFill(image_debug2, sr_debug2, sc_debug2, newColor_debug2)); // [[1,1,0],[1,1,1]]
};

main()