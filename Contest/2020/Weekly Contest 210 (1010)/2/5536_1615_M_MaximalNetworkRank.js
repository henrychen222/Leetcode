/**
 * 10.10 evening
 * https://leetcode.com/contest/weekly-contest-210/problems/maximal-network-rank/
 */

// reference: https://leetcode.com/discuss/interview-question/364760/
// const maximalNetworkRank = (n, roads) => {
//     let m = roads.length;
//     let edgeCount = new Array(n).fill(0);
//     let A = roads.map(x => x[0]);
//     let B = roads.map(x => x[1]);
//     console.log(A, B);
   
//     for (let i = 0; i < m; i++) {
//         edgeCount[A[i] - 1]++;
//         edgeCount[B[i] - 1]++;
//     }
//     let maxRank = Number.MIN_VALUE;
//     for (let i = 0; i < m; i++) {
//         let rank = edgeCount[A[i] - 1] + edgeCount[B[i] - 1] - 1;
//         if (rank > maxRank)
//             maxRank = rank;
//     }
//     return maxRank;
// };


const maximalNetworkRank = (n, roads) => {
    let maxRank = 0;
    let edgesLen = roads.length;
    let A = roads.map(x => x[0]);
    let B = roads.map(x => x[1]);
    let edgesCount = new Array(n + 1).fill(0);
    for (let i = 0; i < edgesLen; i++) {
        edgesCount[A[i]] += 1;
        edgesCount[B[i]] += 1;
    }
    for (let i = 0; i < edgesLen; i++) {
        let localMax = edgesCount[A[i]] + edgesCount[B[i]] - 1;
        maxRank = Math.max(maxRank, localMax);
    }
    return maxRank;
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