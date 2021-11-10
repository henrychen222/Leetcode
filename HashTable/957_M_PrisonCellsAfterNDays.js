/**
 * 09/07/20 afternoon   11/05/21 night complete
 * https://leetcode.com/problems/prison-cells-after-n-days/
 */


// Accepted
// reference: https://leetcode.com/problems/prison-cells-after-n-days/discuss/205684/JavaPython-Find-the-Loop-or-Mod-14
const prisonAfterNDays = (cells, N) => {
    N = (N - 1) % 14 + 1; // trick
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
    }
    return cells;
};

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