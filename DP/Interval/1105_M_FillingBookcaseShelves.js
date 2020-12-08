/**
 * 12.7 morning
 * 
 * reference:
 * https://leetcode.com/contest/weekly-contest-143
 * https://www.acwing.com/solution/LeetCode/content/2652/
 * https://blog.csdn.net/qq_24342739/article/details/95858738
 */

// Accepted --- 80ms 73.68%  neal_wu
const minHeightShelves1 = (books, shelf_width) => {
    let n = books.length;
    let dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i < n; i++) {
        let totWidth = maxHeight = 0;
        for (let j = i; j < n; j++) {
            totWidth += books[j][0];
            maxHeight = Math.max(maxHeight, books[j][1]); // 每层的高度由最高的那本书决定
            if (totWidth <= shelf_width) {
                dp[j + 1] = Math.min(dp[j + 1], dp[i] + maxHeight); // 选择高度最小的方法
                // console.log(dp[j + 1], j + 1);
            }
        }
    }
    // console.log(dp);
    return dp[n];
};

// Accepted --- 92ms 18.42%  uwi
const minHeightShelves2 = (books, shelf_width) => {
    let n = books.length;
    let dp = new Array(n + 1).fill(999999999);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        let remain = shelf_width;
        let maxHeight = 0;
        for (let j = i - 1; ~j; j--) {
            remain -= books[j][0];
            maxHeight = Math.max(maxHeight, books[j][1]);
            if (remain >= 0) {
                dp[i] = Math.min(dp[i], dp[j] + maxHeight);
                // console.log(dp[i], i);
            }
        }
    }
    // console.log(dp);
    return dp[n];
};

// Accepted --- 96ms 15.79%  wzc_1995
const minHeightShelves = (books, shelf_width) => {
    let n = books.length;
    let dp = new Array(n + 1).fill(10000000);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        let totWidth = 0;
        let maxHeight = 0;
        for (let j = i - 1; ~j; j--) {
            totWidth += books[j][0];
            maxHeight = Math.max(maxHeight, books[j][1]);
            if (totWidth > shelf_width) break;
            dp[i] = Math.min(dp[i], dp[j] + maxHeight);
            // console.log(dp[i], i);
        }
    }
    return dp[n];
};

const main = () => {
    let books = [
            [1, 1],
            [2, 3],
            [2, 3],
            [1, 1],
            [1, 1],
            [1, 1],
            [1, 2]
        ],
        shelf_width = 4;
    console.log(minHeightShelves(books, shelf_width));
};

main()