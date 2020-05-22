/**
 * https://leetcode.com/problems/letter-tile-possibilities/
 * 5.20 night 5.21 night
 */

/**
 * https://www.acwing.com/solution/LeetCode/content/2468/
 * Accepted --- 76ms 34.6MB 67.32%
 */
let ans = 0;
const numTilePossibilities_acwing = (tiles) => {
    let seen = new Map();
    let num = [];
    for (const c of tiles) {
        if (seen[c] == seen[-1]) { // check if the iterator hit the end of Map
            // if (seen[c] == seen[seen.length - 1]) { 
            seen[c] = num.length;
            num.push(0);
        }
        num[seen[c]]++;
    }
    ans = 0;
    dfs(num);
    return ans - 1;
};

const dfs = (num) => {
    ans++;
    for (let i = 0; i < num.length; i++) {
        if (num[i] > 0) {
            num[i]--;
            dfs(num);
            num[i]++;
        }
    }
};

/**
 * https://www.cnblogs.com/hwd9654/p/11008562.html
 * Accepted --- 76ms 35.3MB 67.32%
 */
const numTilePossibilities_cnblogs = (tiles) => {
    if (tiles.length == 0) return 0;
    let count = [];
    fillArr(count, 26);
    for (const c of tiles.split("")) {
        let tmp = c.charCodeAt(0);
        count[tmp - 65]++; // c - 'A' will return NaN, need to transfer to ASCII manually
    }
    // console.log(count);
    return DFS(count);
}

const DFS = (array) => {
    let res = 0;
    for (let i = 0; i < 26; i++) {
        if (array[i] == 0) continue;
        res++;
        array[i]--;
        res += DFS(array);
        array[i]++;
    }
    return res;
}

const fillArr = (arr, n) => {
    for (let i = 0; i <= n; i++) {
        arr.push(0);
    }
};

// not fixed
const numTilePossibilities_csdn = (tiles) => {
    let count = [];
    fillArr(count, 25);
    for (const c of tiles) {
        // count[c - 'A']++;
        let tmp = c.charCodeAt(0);
        count[tmp - 65]++;
    }
    let res = 0;
    backtrack(count, res);
    console.log(count)
    console.log(count.length)
    return res;
};

const backtrack = (count, res) => {
    for (let i = 0; i < 26; i++) {
        if (count[i] == 0) {
            continue;
        }
        res++;
        console.log(res); // problem
        count[i]--;
        backtrack(count, res);
        count[i]++;
    }
    return res;
};

const main = () => {
    let tiles = "AAB";
    let tiles2 = "AAABBC";

    console.log(numTilePossibilities_acwing(tiles));
    console.log(numTilePossibilities_acwing(tiles2));

    console.log("")
    console.log(numTilePossibilities_cnblogs(tiles));
    console.log(numTilePossibilities_cnblogs(tiles2));

    // console.log("")
    // console.log(numTilePossibilities_csdn(tiles));
    // console.log(numTilePossibilities_csdn(tiles2));
};

main()