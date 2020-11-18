/**
 * 11.17 evening
 * https://leetcode.com/problems/champagne-tower/
 * 
 * reference:
 * https://www.cnblogs.com/grandyang/p/9286537.html
 * https://leetcode.com/problems/champagne-tower/discuss/118660/20ms-C++-Easy-understand-solution
 * https://leetcode.com/problems/champagne-tower/discuss/118692/9ms-5-Lines-Code-C++Java
 */

// Accepted --- 84ms 96.51%
const champagneTower2 = (poured, query_row, query_glass) => {
    let dp = new Array(101).fill(0);
    dp[0] = poured;
    for (let i = 1; i <= query_row; i++) {
        for (let j = i; ~j; j--) {
            dp[j] = Math.max(0, (dp[j] - 1) / 2);
            dp[j + 1] += dp[j];
            // console.log(dp[j + 1]);
        }
    }
    // console.log(dp);
    return Math.min(1, dp[query_glass]);
};

// Accepted --- 108ms 22.00%
const champagneTower = (poured, query_row, query_glass) => {
    let dp = initialize2DArrayNew(101, 101);
    dp[0][0] = poured;
    for (let i = 0; i <= query_row; i++) {
        for (let j = 0; j <= i; j++) {
            if (dp[i][j] >= 1) {
                dp[i + 1][j] += (dp[i][j] - 1) / 2;
                dp[i + 1][j + 1] += (dp[i][j] - 1) / 2;
                dp[i][j] = 1;
                // console.log(dp[i + 1][j],  dp[i + 1][j + 1]);
            }
        }
    }
    return dp[query_row][query_glass];
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};

// 112ms
const initialize2DArrayNew2 = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        data[i] = new Array(n).fill(0);
    }
    return data;
};

const main = () => {
    let poured = 1,
        query_row = 1,
        query_glass = 1;
    let poured2 = 2,
        query_row2 = 1,
        query_glass2 = 1;
    let poured3 = 100000009,
        query_row3 = 33,
        query_glass3 = 17;
    console.log(champagneTower(poured, query_row, query_glass));
    console.log(champagneTower(poured2, query_row2, query_glass2));
    console.log(champagneTower(poured3, query_row3, query_glass3));
};

main()