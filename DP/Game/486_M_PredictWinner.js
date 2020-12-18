/**
 * 12.16 morning 12.16 night 12.17 afternoon
 * https://leetcode.com/problems/predict-the-winner/
 */

// 192ms 36.84%
// reference: https://zxi.mytechroad.com/blog/leetcode/leetcode-486-predict-the-winner/
const PredictTheWinner = (nums) => {
    return dfs(nums, 0, nums.length - 1) >= 0;
};

const dfs = (nums, l, r) => {
    if (l == r) return nums[r];
    return Math.max(nums[l] - dfs(nums, l + 1, r), nums[r] - dfs(nums, l, r - 1));
};

// Accepted --- 84ms 68.42%
// reference: https://zxi.mytechroad.com/blog/leetcode/leetcode-486-predict-the-winner/
const PredictTheWinner_huahua = (nums) => {
    let n = nums.length;
    let dp = initialize2DArrayNew(n, n);
    for (let i = 0; i < n; i++) {
        dp[i][i] = nums[i];
    }
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            let j = i + len - 1;
            // console.log(i, j, dp[i][j]);
            dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
        }
    }
    // console.log(dp);
    return dp[0][n - 1] >= 0;
};

// Accepted --- 76ms 92.63%
// reference: https://leetcode.com/problems/predict-the-winner/discuss/96828/JAVA-9-lines-DP-solution-easy-to-understand-with-improvement-to-O(N)-space-complexity.
const PredictTheWinner2_origin = (nums) => {
    let n = nums.length;
    let dp = initialize2DArrayNew(n, n); // dp[i][j]: how much more scores that the first player will get from i to j than the second player
    for (let i = 0; i < n; i++) {
        dp[i][i] = nums[i];
    }
    for (let len = 1; len < n; len++) {
        for (let i = 0; i < n - len; i++) {
            let j = i + len;
            // console.log(i, j, dp[i][j]);
            dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
        }
    }
    // console.log(dp);
    return dp[0][n - 1] >= 0;
};

// Accepted --- 88ms 52.63%
// reference: https://www.cnblogs.com/grandyang/p/6369688.html
const PredictTheWinner2 = (nums) => {
    let n = nums.length;
    let dp = initialize2DArrayNew(n, n);
    for (let i = 0; i < n; i++) {
        dp[i][i] = nums[i];
    }
    for (let len = 1; len < n; len++) {
        for (let i = 0, j = len; j < n; i++, j++) {
            // console.log(i, j, dp[i][j]);
            dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
        }
    }
    // console.log(dp);
    return dp[0][n - 1] >= 0;
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};


////////////////////////////////////////////////////////////////////////////////////////////////////
// Wrong Answer 54/62
const PredictTheWinner1 = (nums) => {
    let p1 = 0;
    let p2 = 0;
    let turn = 1;
    while (nums.length) {
        if (turn % 2 == 1) {
            if (nums.length == 1) {
                p1 += nums.pop();
            } else {
                let l = nums[nums.length - 1];
                let sl = nums[nums.length - 2];
                if ((sl >= l && sl >= nums[0] && sl >= nums[1]) || (nums[0] >= nums[1] && nums[0] >= l && nums[0] >= sl)) {
                    p1 += nums.shift();
                } else if ((nums[1] >= nums[0] && nums[1] >= l && nums[1] >= sl) || (l >= sl && l >= nums[0] && l >= nums[1])) {
                    p1 += nums.pop();
                }
                // if ((sl >= l && sl >= nums[0]) || (nums[0] >= nums[1] && nums[0] >= l)) {
                //     p1 += nums.shift();
                // } else if ((nums[1] >= nums[0] && nums[1] >= l) || (l >= sl && l >= nums[0])) {
                //     p1 += nums.pop();
                // }
            }
            turn++;
        } else {
            if (nums.length == 1) {
                p2 += nums.pop();
            } else {
                let l = nums[nums.length - 1];
                let sl = nums[nums.length - 2];
                if ((sl >= l && sl >= nums[0] && sl >= nums[1]) || (nums[0] >= nums[1] && nums[0] >= l && nums[0] >= sl)) {
                    p2 += nums.shift();
                } else if ((nums[1] >= nums[0] && nums[1] >= l && nums[1] >= sl) || (l >= sl && l >= nums[0] && l >= nums[1])) {
                    p2 += nums.pop();
                }
                // if ((sl >= l && sl >= nums[0]) || (nums[0] >= nums[1] && nums[0] >= l)) {
                //     p2 += nums.shift();
                // } else if ((nums[1] >= nums[0] && nums[1] >= l) || (l >= sl && l >= nums[0])) {
                //     p2 += nums.pop();
                // }
            }
            turn++;
        }
        console.log(p1, p2, nums)
    }
    return p1 >= p2;
};

const main = () => {
    let nums = [1, 5, 2];
    let nums2 = [1, 5, 233, 7];
    let debug1 = [1, 1];
    let debug2 = [1, 567, 1, 1];
    let debug3 = [1000, 999, 999, 1000, 555, 400];
    console.log(PredictTheWinner(nums)); // false
    console.log(PredictTheWinner(nums2)); // true
    console.log(PredictTheWinner(debug1)); // true
    console.log(PredictTheWinner(debug2)); // true
    console.log(PredictTheWinner(debug3)); // true
};

main()