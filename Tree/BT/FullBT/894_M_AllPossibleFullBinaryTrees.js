/**
 * 7.4 morning
 * https://leetcode.com/problems/all-possible-full-binary-trees/
 * reference: https://www.cnblogs.com/grandyang/p/10952459.html
 *            https://zxi.mytechroad.com/blog/tree/leetcode-894-all-possible-full-binary-trees/
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Accepted --- 184ms 55.3MB 22.66%
const allPossibleFBT = (N) => {
    if (N % 2 == 0) return []; // 满二叉树的结点总数都是奇数，所以只要当N为偶数的时候，一定返回的是空数组
    if (N == 1) return [new TreeNode(0)];
    let res = [];
    for (let i = 1; i < N; i += 2) {
        let left = allPossibleFBT(i);
        let right = allPossibleFBT(N - i - 1);
        for (const a of left) {
            for (const b of right) {
                let current = new TreeNode(0);
                current.left = a;
                current.right = b;
                res.push(current);
            }
        }
    }
    return res;
};

// Accepted --- 152ms 46.2MB 40.63%
let map = new Map();
const allPossibleFBT_refine = (N) => {
    if (N % 2 == 0) return [];
    if (N == 1) return [new TreeNode(0)];
    if (map.has(N)) return map.get(N); //如果存在, 直接取, 避免重复计算
    let res = [];
    for (let i = 1; i < N; i += 2) {
        let left = allPossibleFBT(i);
        let right = allPossibleFBT(N - i - 1);
        for (const a of left) {
            for (const b of right) {
                let current = new TreeNode(0);
                current.left = a;
                current.right = b;
                res.push(current);
            }
        }
    }
    map.set(N, res);
    return res;
};


// Accepted --- 120ms 47.2MB 83.59%
const allPossibleFBT_DP = (N) => {
    if (N % 2 == 0) return [];
    let dp = [];
    fillArr(dp, N + 1);
    dp[1] = [new TreeNode(0)];
    for (let i = 3; i <= N; i += 2) {
        for (let j = 1; j < i; j += 2) {
            let k = i - j - 1;
            for (const left of dp[j]) {
                for (const right of dp[k]) {
                    let root = new TreeNode(0);
                    root.left = left;
                    root.right = right;
                    dp[i].push(root);
                }
            }
        }
    }
    return dp[N];
};

const fillArr = (arr, n) => {
    for (let i = 1; i <= n; i++) {
        arr.push([]);
    }
};

const main = () => {
    console.log(allPossibleFBT(1))
    console.log(allPossibleFBT_refine(1));
    console.log(allPossibleFBT_DP(1));

    console.log(allPossibleFBT(7));
    console.log("\n")
    console.log(allPossibleFBT_refine(7));
    console.log("\n")
    console.log(allPossibleFBT_DP(7));
};

main()