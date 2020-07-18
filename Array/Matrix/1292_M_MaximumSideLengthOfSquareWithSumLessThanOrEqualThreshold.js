/**
 * 7.17 afternoon
 * https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/
 */

// don't know
const maxSideLength = (mat, threshold) => {
    for (let i = 1; i < mat.length; i++) {
        for (let j = 1; j < mat[0].length; j++) {
            let topLeft = mat[i-1][j-1];
            let topRight = mat[i-1][j];
            let bottomLeft = mat[i][j-1];
            let bottomRight = mat[i][j];
            console.log(topLeft, topRight, bottomLeft, bottomRight);
        }

    }
};

const main = () => {
    let mat = [
            [1, 1, 3, 2, 4, 3, 2],
            [1, 1, 3, 2, 4, 3, 2],
            [1, 1, 3, 2, 4, 3, 2]
        ],
        threshold = 4;
    let mat2 = [
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2]
        ],
        threshold2 = 1;
    let mat3 = [
            [1, 1, 1, 1],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0]
        ],
        threshold3 = 6;
    let mat4 = [
            [18, 70],
            [61, 1],
            [25, 85],
            [14, 40],
            [11, 96],
            [97, 96],
            [63, 45]
        ],
        threshold4 = 40184;
    console.log(maxSideLength(mat, threshold));
    // console.log(maxSideLength(mat2, threshold2));
    // console.log(maxSideLength(mat3, threshold3));
    // console.log(maxSideLength(mat4, threshold4));
};

main()