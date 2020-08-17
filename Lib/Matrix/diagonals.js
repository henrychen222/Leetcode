// 8.16 night

// reference: https://www.geeksforgeeks.org/zigzag-or-diagonal-traversal-of-matrix/
const diagnalTraversal_Zigzag = (matrix) => {
    let row = matrix.length;
    let col = matrix[0].length;
    let data = [];
    for (let i = 1; i <= row + col - 1; i++) {
        let start_col = max(0, i - row);
        let cnt = minThree(i, (col - start_col), row);
        let tmp = [];
        for (let j = 0; j <= cnt - 1; j++) {
            let item = matrix[minTwo(row, i) - j - 1][start_col + j];
            tmp.push(item);
        }
        data.push(tmp);
    }
    return data;
};

const minTwo = (a, b) => {
    return (a < b) ? a : b;
};

const minThree = (a, b, c) => {
    return minTwo(minTwo(a, b), c);
};

const max = (a, b) => {
    return (a > b) ? a : b;
};

// reference: https://stackoverflow.com/questions/35373936/javascript-to-get-diagonals-of-matrix-array
function diagnalTraversal_Zigzag2(m) {
    let s, x, y, d,
        o = [];
    for (s = 0; s < m.length; s++) {
        d = [];
        for (y = s, x = 0; y >= 0; y--, x++) {
            d.push(m[y][x]);
        }
        o.push(d);
    }
    for (s = 1; s < m[0].length; s++) {
        d = [];
        for (y = m.length - 1, x = s; x < m[0].length; y--, x++) {
            d.push(m[y][x]);
        }
        o.push(d);
    }
    return o;
}

const main = () => {
    let matrix = [
        [1, 2, 3, 4],
        [5, 1, 2, 3],
        [9, 5, 1, 2]
    ]
    console.log(diagnalTraversal_Zigzag(matrix));
    console.log(diagnalTraversal_Zigzag2(matrix));
};

main()