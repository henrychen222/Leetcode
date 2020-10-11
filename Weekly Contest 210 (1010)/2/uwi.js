/**
 * 10.10 evening
 * https://leetcode.com/contest/weekly-contest-210/problems/maximal-network-rank/
 */

// Accepted --- 100ms 100.00%
const maximalNetworkRank = (n, roads) => {
    let degree = new Array(n).fill(0);
    let connected = initialize2DArray(n, n);
    for (const r of roads) {
        degree[r[0]]++;
        degree[r[1]]++;
        connected[r[0]][r[1]] = connected[r[1]][r[0]] = true;
    }
    console.log(degree);
    console.log(connected);
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let v = degree[i] + degree[j];
            if (connected[i][j]) {
                v--;
            }
            res = Math.max(res, v);
        }
    }
    return res;
};

const initialize2DArray = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(false);
        data.push(tmp);
    }
    return data;
};

const main = () => {
    let n = 4, roads = [[0, 1], [0, 3], [1, 2], [1, 3]];
    let n2 = 5, roads2 = [[0, 1], [0, 3], [1, 2], [1, 3], [2, 3], [2, 4]];
    let n3 = 8, roads3 = [[0, 1], [1, 2], [2, 3], [2, 4], [5, 6], [5, 7]];
    console.log(maximalNetworkRank(n, roads));
    console.log(maximalNetworkRank(n2, roads2));
    console.log(maximalNetworkRank(n3, roads3));
};

main()