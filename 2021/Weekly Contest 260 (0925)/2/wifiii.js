// 09/25/21 night

const pr = console.log;

// Accepted
// read: https://leetcode.com/problems/grid-game/discuss/1486340/Python-Robot1-Minimize-Top-Right-Sum-and-Bottom-Left-Sum-of-Robot-2-Picture-Explained
const gridGame = (g) => {
    let n = 2; m = g[0].length;
    let pre = initialize2DArrayNew(n, m + 1);
    let res = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < m + 1; i++) {
        pre[0][i] = g[0][i - 1] + pre[0][i - 1];
        pre[1][i] = g[1][i - 1] + pre[1][i - 1];
    }
    // pr(pre)
    for (let i = 1; i < m + 1; i++) {
        let robot1Max = Math.max(pre[0][m] - pre[0][i], pre[1][i - 1]);
        // pr(robot1Max)
        res = Math.min(res, robot1Max);
    }
    return res;
};

const initialize2DArrayNew = (n, m) => { let data = []; for (let i = 0; i < n; i++) { let tmp = Array(m).fill(0); data.push(tmp); } return data; };

const main = () => {
    let grid = [[2, 5, 4], [1, 5, 1]];
    let grid2 = [[3, 3, 1], [8, 5, 2]];
    let grid3 = [[1, 3, 1, 15], [1, 3, 3, 1]];
    let debug1 = [[20, 3, 20, 17, 2, 12, 15, 17, 4, 15], [20, 10, 13, 14, 15, 5, 2, 3, 14, 3]]; // 63
    pr(gridGame(grid))
    pr(gridGame(grid2))
    pr(gridGame(grid3))
    pr(gridGame(debug1))
};

main()