// 11/27/21 afternoon

const pr = console.log;

const MAX = Number.MAX_SAFE_INTEGER, mi = Math.min, mx = Math.max;
const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(MAX); d.push(t); } return d; };


// memory out
const minCost1 = (startPos, homePos, rowCosts, colCosts) => {
    let n = rowCosts.length, m = colCosts.length;
    let dp = initialize2DArray(n, m);
    let [sx, sy] = startPos, [hx, hy] = homePos;
    dp[sx][sy] = 0;
    for (let i = sx; i < n; i++) {
        for (let j = sy; j < m; j++) {
            operate1(dp, i, j, rowCosts, colCosts);
        }
        for (let j = m - 1; j >= 0; j--) {
            operate1(dp, i, j, rowCosts, colCosts);
        }
    }
    for (let i = sx; i >= 0; i--) {
        for (let j = sy; j < m; j++) {
            operate1(dp, i, j, rowCosts, colCosts);
        }
        for (let j = m - 1; j >= 0; j--) {
            operate1(dp, i, j, rowCosts, colCosts);
        }
    }
    return dp[hx][hy];
};
const operate1 = (dp, i, j, rowCosts, colCosts) => {
    let n = rowCosts.length, m = colCosts.length;
    if (i - 1 >= 0 && dp[i - 1][j] != MAX) {
        dp[i][j] = mi(dp[i][j], dp[i - 1][j] + rowCosts[i]);
    }
    if (i + 1 < n && dp[i + 1][j] != MAX) {
        dp[i][j] = mi(dp[i][j], dp[i + 1][j] + rowCosts[i]);
    }
    if (j - 1 >= 0 && dp[i][j - 1] != MAX) {
        dp[i][j] = mi(dp[i][j], dp[i][j - 1] + colCosts[j]);
    }
    if (j + 1 < m && dp[i][j + 1] != MAX) {
        dp[i][j] = mi(dp[i][j], dp[i][j + 1] + colCosts[j]);
    }
    // pr("i", i, "j", j, "now", dp[i][j]);
};

///////////////////////////////////////////////////////////////////////
// memory out
let memo, ke, n, m;
const minCost = (startPos, homePos, rowCosts, colCosts) => {
    memo = new Map(), n = rowCosts.length, m = colCosts.length;
    let [sx, sy] = startPos, [hx, hy] = homePos;
    ke = sx + " " + sy;
    memo.set(ke, 0);
    // pr(memo);
    for (let i = sx; i < n; i++) {
        for (let j = sy; j < m; j++) {
            operate(i, j, rowCosts, colCosts);
        }
        for (let j = m - 1; j >= 0; j--) {
            operate(i, j, rowCosts, colCosts);
        }
    }
    for (let i = sx; i >= 0; i--) {
        for (let j = sy; j < m; j++) {
            operate(i, j, rowCosts, colCosts);
        }
        for (let j = m - 1; j >= 0; j--) {
            operate(i, j, rowCosts, colCosts);
        }
    }
    ke = hx + " " + hy;
    return memo.get(ke);
};

const operate = (i, j, rowCosts, colCosts) => {
    ke = i + " " + j;
    if (i - 1 >= 0) {
        let fromKe = (i - 1) + " " + j;
        if (memo.has(fromKe)) {
            let cost = memo.get(fromKe) + rowCosts[i];
            // pr("cost1", cost)
            if (memo.has(ke)) {
                if (cost < memo.get(ke)) memo.set(ke, cost);
            } else {
                memo.set(ke, cost);
            }
        }
    }
    if (i + 1 < n) {
        let fromKe = (i + 1) + " " + j;
        if (memo.has(fromKe)) {
            let cost = memo.get(fromKe) + rowCosts[i];
            // pr("cost2", cost)
            if (memo.has(ke)) {
                if (cost < memo.get(ke)) memo.set(ke, cost);
            } else {
                memo.set(ke, cost);
            }
        }
    }
    if (j - 1 >= 0) {
        let fromKe = i + " " + (j - 1);
        if (memo.has(fromKe)) {
            let cost = memo.get(fromKe) + colCosts[j];
            // pr("cost3", cost)
            if (memo.has(ke)) {
                if (cost < memo.get(ke)) memo.set(ke, cost);
            } else {
                memo.set(ke, cost);
            }
        }
    }
    if (j + 1 < m) {
        let fromKe = i + " " + (j + 1);
        if (memo.has(fromKe)) {
            let cost = memo.get(fromKe) + colCosts[j];
            // pr("cost4", cost)
            if (memo.has(ke)) {
                if (cost < memo.get(ke)) memo.set(ke, cost);
            } else {
                memo.set(ke, cost);
            }
        }
    }
    // pr("i", i, "j", j, "now", memo.get(ke));
};

const main = () => {
    let startPos = [1, 0], homePos = [2, 3], rowCosts = [5, 4, 3], colCosts = [8, 2, 6, 7];
    let startPos2 = [0, 0], homePos2 = [0, 0], rowCosts2 = [5], colCosts2 = [26];
    let startPos_debug1 = [5, 5], homePos_debug1 = [5, 2], rowCosts_debug1 = [7, 1, 3, 3, 5, 3, 22, 10, 23], colCosts_debug1 = [5, 5, 6, 2, 0, 16];
    let startPos_debug2 = [550, 597], homePos_debug2 = [5, 595],
        rowCosts_debug2 = [9, 0, 4, 7, 4, 3, 5, 9, 5, 8, 9, 0, 4, 1, 5, 7, 2, 9, 1, 0, 1, 4, 0, 6, 1, 7, 1, 4, 9, 2, 6, 4, 1, 0, 3, 7, 0, 9, 0, 2, 8, 6, 0, 7, 2, 1, 10, 5, 5, 0, 3, 9, 4, 3, 9, 2, 5, 3, 6, 6, 1, 6, 10, 0, 2, 9, 6, 9, 6, 7, 2, 10, 6, 3, 3, 7, 4, 9, 7, 1, 2, 5, 2, 10, 10, 5, 1, 3, 10, 2, 4, 0, 1, 8, 7, 8, 0, 1, 8, 4, 8, 1, 9, 10, 4, 8, 6, 8, 6, 2, 0, 5, 5, 8, 8, 3, 0, 3, 4, 3, 6, 3, 0, 4, 10, 6, 9, 2, 10, 6, 3, 8, 8, 5, 4, 2, 0, 10, 7, 9, 4, 6, 8, 10, 1, 2, 8, 8, 1, 6, 3, 1, 4, 7, 4, 8, 3, 0, 4, 10, 9, 2, 10, 2, 10, 9, 8, 9, 5, 4, 8, 1, 9, 10, 4, 8, 10, 10, 6, 4, 6, 1, 4, 5, 5, 4, 6, 10, 10, 4, 9, 8, 3, 0, 9, 2, 5, 6, 0, 10, 3, 4, 8, 3, 6, 4, 3, 10, 4, 8, 10, 0, 8, 3, 7, 7, 6, 8, 7, 6, 0, 4, 7, 10, 0, 0, 0, 4, 4, 3, 9, 7, 2, 5, 8, 5, 8, 3, 7, 10, 2, 2, 4, 2, 9, 8, 6, 2, 0, 8, 0, 9, 8, 0, 1, 10, 7, 7, 8, 2, 0, 1, 7, 10, 2, 8, 0, 2, 8, 8, 5, 7, 0, 3, 10, 6, 10, 10, 6, 0, 0, 4, 9, 1, 2, 7, 2, 6, 10, 3, 9, 2, 4, 9, 0, 6, 1, 1, 4, 9, 2, 10, 4, 6, 10, 9, 9, 1, 2, 4, 0, 1, 6, 8, 4, 7, 2, 9, 8, 2, 10, 1, 6, 6, 10, 9, 3, 3, 8, 1, 0, 3, 0, 4, 1, 5, 0, 8, 3, 4, 4, 5, 7, 7, 5, 0, 6, 4, 9, 8, 1, 7, 5, 9, 7, 0, 9, 3, 10, 7, 9, 3, 6, 7, 0, 0, 0, 1, 9, 0, 2, 8, 9, 1, 4, 6, 2, 4, 10, 0, 1, 5, 0, 9, 6, 1, 2, 2, 7, 1, 1, 0, 8, 0, 7, 8, 5, 0, 4, 4, 3, 6, 5, 1, 8, 9, 6, 3, 10, 0, 9, 6, 3, 7, 2, 6, 10, 6, 2, 0, 4, 10, 1, 9, 7, 3, 0, 5, 1, 9, 6, 0, 3, 10, 4, 8, 8, 0, 9, 7, 2, 7, 10, 3, 10, 8, 4, 4, 9, 6, 7, 9, 3, 0, 4, 2, 0, 8, 10, 8, 3, 5, 10, 6, 5, 3, 6, 0, 9, 0, 10, 10, 10, 1, 5, 0, 0, 10, 8, 3, 5, 1, 6, 6, 1, 3, 2, 6, 0, 1, 5, 1, 5, 5, 9, 6, 6, 1, 8, 10, 2, 3, 0, 6, 1, 0, 4, 3, 7, 3, 10, 4, 3, 2, 6, 6, 1, 0, 9, 3, 10, 8, 7, 4, 4, 9, 1, 0, 3, 6, 8, 9, 9, 0, 0, 10, 10, 2, 4, 8, 3, 3, 6, 1, 5, 2, 0, 6, 7, 6, 5507, 9945, 9525, 7638, 7555, 6264, 6148, 9831, 9310, 8533, 8640, 5158, 9958, 5725, 8080, 6828, 8992, 5908, 7541, 8707, 7278, 6224, 8302, 7884, 6727, 8459, 7267, 5454, 8938, 6475, 8364, 6436, 8945, 6978, 5879, 8902, 8706, 8262, 7173, 9093, 7256, 8781, 6032, 7263, 8882, 9003, 8509, 5050, 7973, 7205, 9584, 6397, 9399, 9487, 7699, 9833, 8648, 7932, 8819, 9095, 9472, 8799, 9511, 7641, 5922, 7694, 7288, 8874, 8538, 8097, 5320, 5677, 8242, 8974, 8986, 5096, 9906, 8631, 7653, 6154, 8693, 6443, 8985, 7633, 8775, 9345, 6665, 8217, 6835, 9444, 9727, 5908, 8043, 7943, 6244, 6279, 9322, 5158, 9735, 5022, 7092, 9153, 8634, 8325, 7555, 8225, 7172, 5159, 9980, 6789, 8932, 6839, 8670, 6286, 9297, 5292, 9080, 6821, 5124, 6920, 6340, 5829, 5792, 7485, 5491, 9849, 9483, 9247, 8661, 9156, 7032, 7075, 5246, 7913, 7045, 6789, 5178, 9821, 9856, 9363, 7188, 8422, 9222, 7890, 6567, 9307, 9690, 6143, 7305, 6866, 9935, 9300, 9921, 9936, 9685, 8302, 6915, 7762, 6901, 8951, 6385, 9792, 5471, 6958, 8161, 7404, 9061, 5652, 5998, 9724, 7995, 9084, 8941, 8909, 6457, 6688, 6768, 8612, 6487],
        colCosts_debug2 = [0, 3, 9, 2, 1, 1, 4, 8, 10, 7, 1, 0, 7, 4, 4, 9, 5, 7, 0, 1, 8, 9, 8, 0, 8, 0, 10, 2, 2, 5, 7, 4, 7, 3, 9, 3, 5, 10, 0, 3, 2, 2, 8, 10, 10, 7, 5, 10, 9, 8, 10, 9, 6, 4, 2, 8, 10, 8, 2, 5, 2, 5, 1, 0, 10, 9, 7, 7, 8, 10, 1, 10, 0, 4, 1, 8, 1, 8, 7, 7, 5, 10, 6, 10, 6, 4, 10, 9, 3, 3, 10, 0, 8, 1, 6, 6, 6, 1, 9, 10, 7, 8, 9, 9, 9, 6, 2, 9, 5, 10, 1, 9, 9, 10, 6, 1, 3, 1, 3, 1, 6, 0, 2, 2, 3, 5, 7, 2, 8, 0, 10, 1, 9, 10, 3, 3, 6, 5, 8, 10, 9, 0, 4, 2, 7, 4, 0, 7, 10, 0, 3, 1, 0, 9, 2, 1, 8, 7, 3, 5, 1, 1, 7, 8, 10, 5, 7, 2, 1, 8, 2, 4, 7, 7, 6, 5, 4, 8, 0, 9, 2, 10, 3, 0, 2, 0, 10, 2, 5, 3, 3, 1, 7, 8, 8, 2, 10, 9, 4, 6, 1, 1, 8, 9, 10, 5, 10, 1, 7, 2, 8, 3, 2, 8, 4, 3, 7, 9, 3, 10, 4, 6, 3, 4, 7, 4, 2, 7, 0, 5, 3, 8, 4, 0, 3, 1, 4, 0, 8, 3, 0, 9, 6, 7, 5, 8, 6, 9, 3, 7, 3, 4, 9, 7, 0, 0, 10, 1, 10, 10, 7, 0, 7, 3, 6, 4, 7, 7, 4, 7, 1, 6, 9, 9, 8, 4, 7, 5, 10, 5, 3, 8, 5, 5, 4, 6, 8, 8, 4, 1, 7, 2, 7, 8, 7, 2, 0, 5, 4, 1, 7, 9, 0, 3, 9, 1, 0, 3, 6, 10, 3, 8, 1, 3, 8, 4, 1, 3, 1, 9, 2, 4, 3, 3, 10, 8, 7, 9, 2, 3, 10, 8, 9, 4, 6, 4, 10, 1, 5, 4, 4, 1, 6, 5, 2, 4, 4, 2, 2, 9, 7, 7, 10, 9, 0, 9, 10, 8, 9, 4, 7, 6, 0, 1, 5, 6, 1, 7, 9, 8, 2, 0, 4, 4, 2, 3, 2, 1, 9, 9, 5, 7, 8, 8, 1, 6, 1, 1, 8, 3, 9, 4, 0, 1, 1, 6, 7, 0, 10, 4, 7, 9, 6, 5, 10, 3, 5, 10, 10, 1, 6, 5, 6, 0, 3, 9, 10, 0, 2, 10, 7, 7, 1, 0, 2, 6, 0, 3, 8, 1, 10, 6, 1, 0, 4, 1, 4, 5, 5, 4, 0, 5, 4, 7, 8, 2, 8, 2, 8, 4, 1, 0, 10, 3, 3, 7, 6, 8, 8, 10, 2, 3, 1, 5, 2, 2, 3, 9, 3, 0, 6, 10, 2, 1, 1, 0, 0, 5, 5, 2, 4, 9, 8, 2, 10, 4, 9, 5, 0, 7, 1, 8, 10, 3, 7, 9, 4, 0, 4, 9, 5, 1, 10, 6, 4, 5, 8, 8, 5, 8, 8, 5, 0, 10, 0, 10, 6, 1, 7, 8, 4, 3, 8, 4, 10, 8, 5, 2, 7, 6, 4, 1, 0, 4, 10, 9, 0, 7, 7, 4, 7, 1, 0, 1, 6, 3, 5, 6, 3, 7, 0, 3, 2, 4, 5, 3, 5, 2, 5, 1, 7, 2, 10, 6, 6, 0, 5, 1, 8, 6, 3, 2, 0, 0, 6, 4, 3, 4, 4, 9, 3, 8, 8, 7, 3, 5, 9, 8, 8, 10, 6, 4, 10, 0, 9, 0, 3, 6514, 7036, 8635, 6887, 8734, 6242, 6381, 9848, 9195, 6637, 7274, 5015, 9045, 9907, 8964, 8665, 9304, 7496, 6228, 7947, 9308, 8048, 9237, 6576, 6804, 6076, 6136];
    let startPos_debug3 = [2, 0], homePos_debug3 = [2, 2], rowCosts_debug3 = [8,5,6,12,10], colCosts_debug3 =  [1,8,18,11,24,16];
    pr(minCost(startPos, homePos, rowCosts, colCosts))
    pr(minCost(startPos2, homePos2, rowCosts2, colCosts2))
    pr(minCost(startPos_debug1, homePos_debug1, rowCosts_debug1, colCosts_debug1)) // 8
    pr(minCost(startPos_debug2, homePos_debug2, rowCosts_debug2, colCosts_debug2)) // 2674
    pr(minCost(startPos_debug3, homePos_debug3, rowCosts_debug3, colCosts_debug3)) // 26
};

main()