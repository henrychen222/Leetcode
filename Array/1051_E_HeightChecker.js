/**
 * 6.9 night
 * https://leetcode.com/problems/height-checker/
 */

// Accepted --- 84ms 35.4MB 15.39%
const heightChecker = (heights) => {
    heightsOrigin = [...heights];
    heights.sort((a, b) => a - b);
    let cnt = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heightsOrigin[i] != heights[i]) {
            cnt++;
        }
    }
    return cnt;
};

const main = () => {
    let heights = [1, 1, 4, 2, 1, 3];
    let heights2 = [5, 1, 2, 3, 4];
    let heights3 = [1, 2, 3, 4, 5];
    console.log(heightChecker(heights));
    console.log(heightChecker(heights2));
    console.log(heightChecker(heights3));
};

main();