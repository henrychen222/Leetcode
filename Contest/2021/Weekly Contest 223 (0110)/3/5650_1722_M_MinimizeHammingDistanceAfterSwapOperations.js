/**
 * 1.9 evening
 * https://leetcode.com/contest/weekly-contest-223/problems/minimize-hamming-distance-after-swap-operations/
 * 
 * read:
 * https://www.geeksforgeeks.org/reduce-hamming-distance/
 */

// don't know, like a DP/DFS problem
const minimumHammingDistance = (source, target, allowedSwaps) => {
    let n = source.length;
    let hd = hammingDistance(source, target, n);
    if (allowedSwaps.length == 0) return hd;
    // let sortedS = [...source].sort((a, b) => a - b);
    // let sortedT = [...target].sort((a, b) => a - b);
    // let minhd = hammingDistance(sortedS, sortedT, n);
    console.log(hd);
};

const hammingDistance = (s, t, n) => {
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] != t[i]) cnt++;
    }
    return cnt;
};

const main = () => {
    let source = [1, 2, 3, 4], target = [2, 1, 4, 5], allowedSwaps = [[0, 1], [2, 3]];
    let source2 = [1, 2, 3, 4], target2 = [1, 3, 2, 4], allowedSwaps2 = [];
    let source3 = [5, 1, 2, 4, 3], target3 = [1, 5, 4, 2, 3], allowedSwaps3 = [[0, 4], [4, 2], [1, 3], [1, 4]];
    console.log(minimumHammingDistance(source, target, allowedSwaps));
    console.log(minimumHammingDistance(source2, target2, allowedSwaps2));
    console.log(minimumHammingDistance(source3, target3, allowedSwaps3));
};

main()