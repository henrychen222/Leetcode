/**
 * 07/10/21 evening
 * https://leetcode.com/contest/weekly-contest-249/problems/painting-a-grid-with-three-different-colors/
 */

const pr = console.log;

const initialize2DArrayNew = (n, m) => { let data = []; for (let i = 0; i < n; i++) { let tmp = Array(m).fill(0); data.push(tmp); } return data; };

const colorTheGrid = (m, n) => {
    let p = initialize2DArrayNew(m, n);
    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let cnt = 3;
            if (i - 1 >= 0 && p[i - 1][j] != 0) cnt--;
            if (i + 1 < m && p[i + 1][j] != 0) cnt--;
            if (j - 1 >= 0 && p[i][j - 1] != 0) cnt--;
            if (j + 1 < n && p[i][j + 1] != 0) cnt--;
            pr(cnt);
            res += cnt;
        }
    }
    return res;
};

const main = () => {
    let m = 1, n = 1;
    let m2 = 1, n2 = 2;
    let m3 = 5, n3 = 5;
    // pr(colorTheGrid(m, n));
    // pr(colorTheGrid(m2, n2));
    pr(colorTheGrid(m3, n3));
};

main()