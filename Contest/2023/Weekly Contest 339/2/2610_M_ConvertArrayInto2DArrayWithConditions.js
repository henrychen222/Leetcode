/*
 * 04/01/23 evening
 * https://leetcode.com/contest/weekly-contest-339/problems/convert-an-array-into-a-2d-array-with-conditions/
 */

const pr = console.log;

// Accepted
const findMatrix = (a) => {
    let N = Math.max(...a), f = Array(N + 1).fill(0), res = [], d = [];
    for (const x of a) f[x]++;
    for (let i = 0; i <= N; i++) d.push([i, f[i]]);
    while (1) {
        d.sort((x, y) => y[1] - x[1]);
        if (d[0][1] == 0) break;
        let cur = [];
        for (let i = 0; i <= N; i++) {
            if (d[i][1] > 0) {
                cur.push(d[i][0]);
                d[i][1]--;
            } else {
                break;
            }
        }
        res.push(cur);
    }
    return res;
};

const main = () => {
    let a = [1, 3, 4, 1, 2, 3, 1];
    let a2 = [1, 2, 3, 4];
    pr(findMatrix(a))
    pr(findMatrix(a2))
};

main()