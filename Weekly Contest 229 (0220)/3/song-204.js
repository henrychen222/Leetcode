// 02/20/21 night
// https://leetcode.com/contest/weekly-contest-229/ranking/1/
// same logic from pku_erutan 

const pr = console.log;

// TLE Reason: python @lru_cache(None) improves the speed

// Accepted --- 5092ms
let m, mul, a, memo;
const mx = Math.max;
const maximumScore = (nums, multipliers) => {
    let n = nums.length;
    m = multipliers.length;
    // memo = initialize2DArrayNew(n + 1, n + 1); // now, Memory out, but run in okay. fuck
    memo = initialize2DArrayNew(m + 1, m + 1);
    a = nums;
    mul = multipliers;
    return dfs(0, n - 1, 0);
};

// Accepted --- 4356ms
// const dfs = (i, j, idx) => {
//     // pr(memo);
//     if (m == idx) return 0;
//     let ss = mul[idx] * a[i];
//     let sl = mul[idx] * a[j];
//     if (memo[i + 1][j]) {
//         if (memo[i][j - 1]) {
//             ss += memo[i + 1][j];
//             sl += memo[i][j - 1];
//         } else {
//             ss += memo[i + 1][j];
//             sl += memo[i][j - 1] = dfs(i, j - 1, idx + 1);
//         }
//     } else {
//         if (memo[i][j - 1]) {
//             ss += memo[i + 1][j] = dfs(i + 1, j, idx + 1);
//             sl += memo[i][j - 1];
//         } else {
//             ss += memo[i + 1][j] = dfs(i + 1, j, idx + 1);
//             sl += memo[i][j - 1] = dfs(i, j - 1, idx + 1);
//         }
//     }
//     return mx(ss, sl);
// };

const dfs = (i, j, idx) => {
    if (m == idx) return 0;
    let ss = mul[idx] * a[i];
    let sl = mul[idx] * a[j];
    memo[i][j - 1] ? sl += memo[i][j - 1] : sl += memo[i][j - 1] = dfs(i, j - 1, idx + 1);
    memo[i + 1][j] ? ss += memo[i + 1][j] : ss += memo[i + 1][j] = dfs(i + 1, j, idx + 1);
    return mx(ss, sl);
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(0);
        data.push(tmp);
    }
    return data;
};

// Also TLE
// const mx = Math.max;
// const maximumScore = (a, mul) => {
//     let n = a.length;
//     let m = mul.length;
//     let memo = initialize2DArrayNew(n + 1, n + 1);
//     const dfs = (i, j, idx) => {
//         if (m == idx) return 0;
//         let ss = mul[idx] * a[i];
//         let sl = mul[idx] * a[j];
//         memo[i][j - 1] ? sl += memo[i][j - 1] : sl += memo[i][j - 1] = dfs(i, j - 1, idx + 1);
//         memo[i + 1][j] ? ss += memo[i + 1][j] : ss += memo[i + 1][j] = dfs(i + 1, j, idx + 1);
//         return mx(ss, sl);
//     };
//     return dfs(0, n - 1, 0);
// };

const main = () => {
    let nums = [1, 2, 3], multipliers = [3, 2, 1];
    let nums2 = [-5, -3, -3, -2, 7, 1], multipliers2 = [-10, -5, 3, 4, 6];
    let nums_debug1 = [-947, 897, 328, -467, 14, -918, -858, -701, -518, -997, 22, 259, -4, 968, 947, 582, -449, 895, -121, -403, 633, 490, 64, 543, -396, -997, 841, -398, 247, 297, -147, -708, 804, -199, -765, -547, -599, 406, -223, -11, 663, 746, -365, -859, 256, -25, 919, -334, 490, -511, 865, -139, -968, 961, -793, 451, 317, 645, -294, 240, -312, -822, 961, -572, 309, 579, 161, 780, 525, -622, -511, 423, 946, -28, -199, 822, -123, -316, -913, 113, -458, -428, -414, 49, 922, 722, -854, 323, -219, 581, 302, 124, 164, 31, 727, 186, 308, -936, -937, -862, 939, 213, 966, -74, -76, -1, 521, 777, -966, 454, -199, 526, -895, 447, -749, -518, -639, 849, -771, 979, -760, -763, -601, -201, 40, -911, 207, 890, -942, -352, 700, 267, 830, -396, 536, 877, -896, -687, 262, -60, -373, -373, 526],
        multipliers_debug1 = [864, 849, 586, 769, 309, -413, 318, 652, 883, -690, 796, 251, -648, 433, 1000, -969, 422, 194, -785, -242, -118, 69, 187, -925, -418, -556, 88, -399, -619, -383, -188, 206, -793, -9, 738, -587, 878, 360, 640, 318, -399, -366, 365, -291, -75, -451, -674, -199, 177, 862, 1, 11, 390, -52, -101, 127, -354, -717, -717, 180, 655, 817, -898, 28, -641, -35, -563, -737, 283, -223, -322, -59, 955, 172, 230, 512, -205, -180, 899, 169, -663, -253, 270, 651, 168, 417, 613, -443, 980, -189, 417, 372, -891, -272, 993, -877, 906, 680, -630, -328, -873, -811, 78, -667, -2, 190, -773, 878, 529, 620, -951, -687, 314, -989, -48, -601, -950, 31, -789, -663, -480, 750, -872, -358, 529, -426, -111, 517, 750, -536, -673, 370];
    pr(maximumScore(nums, multipliers));
    pr(maximumScore(nums2, multipliers2));
    pr(maximumScore(nums_debug1, multipliers_debug1));
};

main()