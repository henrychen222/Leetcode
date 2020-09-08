/**
 * 9.7 afternoon
 * https://leetcode.com/problems/prison-cells-after-n-days/
 */

// time limit
const prisonAfterNDays = (cells, N) => {
    for (let t = 1; t <= N; t++) {
        let data = [0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = 1; i + 1 < 8; i++) {
            if ((cells[i - 1] == 0 && cells[i + 1] == 0) || (cells[i - 1] == 1 && cells[i + 1] == 1)) {
                data[i] = 1;
            } else {
                data[i] = 0;
            }
        }
        cells = [];
        cells = data;
        // console.log(cells);
    }
    return cells;
};

const main = () => {
    let cells = [0, 1, 0, 1, 1, 0, 0, 1],
        N = 7;
    let cells2 = [1, 0, 0, 1, 0, 0, 1, 0],
        N2 = 1000000000;
    console.log(prisonAfterNDays(cells, N));
    console.log(prisonAfterNDays(cells2, N2));
};

main()