/**
 * 6.4 night  8.16 night still not done   8.28 night complete
 * https://leetcode.com/problems/magic-squares-in-grid/
 * 
 * 10 * 10, 共8 * 8 = 64个 3 * 3 grid
 */

// Accepted --- 76ms 76.81%
const numMagicSquaresInside_refine = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    if (m < 3 || n < 3) return 0;
    let cnt = 0;
    for (let i = 0; i + 2 < m; i++) {
        for (let j = 0; j + 2 < n; j++) {
            let one = grid[i][j];
            let two = grid[i][j + 1];
            let three = grid[i][j + 2];
            let four = grid[i + 1][j];
            let five = grid[i + 1][j + 1];
            let six = grid[i + 1][j + 2];
            let seven = grid[i + 2][j];
            let eight = grid[i + 2][j + 1];
            let nine = grid[i + 2][j + 2];
            let arr = [one, two, three, four, five, six, seven, eight, nine];
            if ([...new Set(arr)].length == 9) {
                if (isDigit(one) && isDigit(two) && isDigit(three) && isDigit(four) && isDigit(five) && isDigit(six) && isDigit(seven) && isDigit(eight) && isDigit(nine)) {
                    if (isMagic(one, two, three, four, five, six, seven, eight, nine)) {
                        cnt++;
                    }
                }
            }
        }
    }
    return cnt;
};

// Accepted --- 80ms 62.32%
const numMagicSquaresInside = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    if (m < 3 || n < 3) return 0;
    let cnt = 0;
    for (let i = 0; i + 2 < m; i++) {
        for (let j = 0; j + 2 < n; j++) {
            let one = grid[i][j];
            let two = grid[i][j + 1];
            let three = grid[i][j + 2];
            let four = grid[i + 1][j];
            let five = grid[i + 1][j + 1];
            let six = grid[i + 1][j + 2];
            let seven = grid[i + 2][j];
            let eight = grid[i + 2][j + 1];
            let nine = grid[i + 2][j + 2];
            let arr = [one, two, three, four, five, six, seven, eight, nine]; // check distinct
            // let tmp = [[one, two, three], [four, five, six], [seven, eight, nine]];
            // console.log(tmp);
            if (isMagic(one, two, three, four, five, six, seven, eight, nine) && checkDistinctOneToNine(arr)) {
                cnt++;
            }
        }
    }
    return cnt;
};

const isMagic = (one, two, three, four, five, six, seven, eight, nine) => {
    let row1 = one + two + three;
    let row2 = four + five + six;
    let row3 = seven + eight + nine;
    let col1 = one + four + seven;
    let col2 = two + five + eight;
    let col3 = three + six + nine;
    let diagonal1 = one + five + nine;
    let diagonal2 = three + five + seven;
    if (row1 == row2 && row2 == row3 && row3 == col1 && col1 == col2 && col2 == col3 && col3 == diagonal1 && diagonal1 == diagonal2) return true;
    return false;
};

const checkDistinctOneToNine = (arr) => {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if ((i + 1) != arr[i]) return false;
    }
    return true;
};

const isDigit = (n) => {
    if (n == 1 || n == 2 || n == 3 || n == 4 || n == 5 || n == 6 || n == 7 || n == 8 || n == 9) return true;
    return false;
};

const main = () => {
    let grid = [
        [4, 3, 8, 4],
        [9, 5, 1, 9],
        [2, 7, 6, 2]
    ];
    let debug1 = [
        [5, 5, 5],
        [5, 5, 5],
        [5, 5, 5]
    ];
    let debug2 = [
        [8, 1, 6],
        [3, 5, 7],
        [4, 9, 2]
    ];
    let debug3 = [
        [10, 3, 5],
        [1, 6, 11],
        [7, 9, 2]
    ];
    console.log(numMagicSquaresInside(grid)); // 1
    console.log(numMagicSquaresInside(debug1)); // 0
    console.log(numMagicSquaresInside(debug2)); // 1
    console.log(numMagicSquaresInside(debug3)); // 0

    console.log("");
    console.log(numMagicSquaresInside_refine(grid)); // 1
    console.log(numMagicSquaresInside_refine(debug1)); // 0
    console.log(numMagicSquaresInside_refine(debug2)); // 1
    console.log(numMagicSquaresInside_refine(debug3)); // 0

    // console.log(checkDistinctOneToNine([1, 2, 3, 4, 5, 6, 7, 8, 9]));// true
    // console.log(checkDistinctOneToNine([10, 3, 5, 1, 6, 11, 7, 9, 2])); // false

};

main()


// // don't know how to do
// const numMagicSquaresInside = (grid) => {
//     let m = grid.length;
//     let n = grid[0].length;
//     // let data = [];
//     // for (let i = 0; i < m; i++) {
//     //     let tmp = [];
//     //     for (let j = 0; j < 3; j++) {
//     //         tmp.push(grid[i][j]);
//     //     }
//     //     data.push(tmp);
//     // }
//     // console.log(data);

//     // for (let i = 0; i < m; i++) {
//     //     for (let j = 0; j < n; j++) {
//     //         let tmp = grid[i].slice(j, j + 3);
//     //         if (tmp.length == 3) {
//     //             console.log(tmp)
//     //         }
//     //     }
//     // }

//     let data = [];
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[0].length; j++) {
//             data.push({
//                 item: grid[i][j],
//                 row: i + 1,
//                 col: j + 1,
//             });
//         }
//     }
//     console.log(data)
// };