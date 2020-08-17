/**
 * 6.4 night  8.16 night still not done
 * https://leetcode.com/problems/magic-squares-in-grid/
 * 
 * 10 * 10, 共8 * 8 = 64个 3 * 3 grid
 */

// don't know how to do
const numMagicSquaresInside = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    // let data = [];
    // for (let i = 0; i < m; i++) {
    //     let tmp = [];
    //     for (let j = 0; j < 3; j++) {
    //         tmp.push(grid[i][j]);
    //     }
    //     data.push(tmp);
    // }
    // console.log(data);

    // for (let i = 0; i < m; i++) {
    //     for (let j = 0; j < n; j++) {
    //         let tmp = grid[i].slice(j, j + 3);
    //         if (tmp.length == 3) {
    //             console.log(tmp)
    //         }
    //     }
    // }

    let data = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            data.push({
                item: grid[i][j],
                row: i + 1,
                col: j + 1,
            });
        }
    }
    console.log(data)
};

const main = () => {
    let grid = [
        [4, 3, 8, 4],
        [9, 5, 1, 9],
        [2, 7, 6, 2]
    ];
    console.log(numMagicSquaresInside(grid))
};

main()