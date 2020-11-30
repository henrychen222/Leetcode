/**
 * 10.22 evening
 * https://leetcode.com/problems/target-sum/
 */

// working but TLE  77/139
// let memo = new Map();
let cnt = 0;
const findTargetSumWays1 = (nums, S) => {
    // memo.clear();
    cnt = 0;
    dfs(nums, "", S);
    return cnt;
};

const dfs = (nums, path, S) => {
    let n = nums.length;
    let add = path + '+';
    let minus = path + '-';
    if (path.length == n) {
        // if (memo.has(path)) {
        //     if (memo.get(path) == S) {
        //         cnt++;
        //     }
        // } else {
        //     let sum = calculate(nums, path);
        //     memo.set(path, sum);
        //     if (sum == S) {
        //         cnt++;
        //     }
        // }
        if (calculate(nums, path) == S) {
            cnt++;
        }
        return;
    }
    dfs(nums, add, S);
    dfs(nums, minus, S);
};

// TLE 81/139
const dfs2 = (nums, path, S) => {
    let n = nums.length;
    if (path.length == n) {
        if (calculate(nums, path) == S) {
            cnt++;
        }
        return;
    }
    dfs(nums, path + '+', S);
    dfs(nums, path + '-', S);
};

const calculate = (nums, path) => {
    let n = nums.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (path[i] == '+') {
            sum += nums[i];
        } else {
            sum -= nums[i];
        }
    }
    return sum;
};

const main = () => {
    let nums = [1, 1, 1, 1, 1],
        S = 3;
    let nums_debug1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        S_debug1 = 1;
    let nums_debug2 = [42, 24, 30, 14, 38, 27, 12, 29, 43, 42, 5, 18, 0, 1, 12, 44, 45, 50, 21, 47],
        S_debug2 = 38;
    let nums_debug3 = [0, 35, 32, 3, 4, 16, 12, 25, 47, 9, 14, 29, 7, 26, 17, 42, 21, 23, 48, 18],
        S_debug3 = 20;
    let nums_debug4 = [45, 18, 27, 39, 42, 19, 1, 35, 32, 16, 7, 6, 25, 41, 27, 18, 38, 6, 42, 10],
        S_debug4 = 49;
    let nums_debug5 = [11, 31, 37, 36, 43, 40, 50, 18, 10, 15, 10, 35, 43, 25, 41, 43, 6, 22, 38, 38],
        S_debug5 = 44;
    console.log(findTargetSumWays(nums, S));
    console.log(findTargetSumWays(nums_debug1, S_debug1));
    console.log(findTargetSumWays(nums_debug2, S_debug2));
    console.log(findTargetSumWays(nums_debug3, S_debug3));
    console.log(findTargetSumWays(nums_debug4, S_debug4));
    console.log(findTargetSumWays(nums_debug5, S_debug5));
};

main()