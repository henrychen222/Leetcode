/**
 * 5.13 night
 * https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/
 */

/**
 * https://www.acwing.com/solution/LeetCode/content/2745/
 * Accepted --- 72ms 37.2MB 47.83%
 * 可以通过一次遍历，求出每个位置的深度，求出最大的深度 maxDepth
 */
const maxDepthAfterSplit_acwing = (seq) => {
    let depth = 0;
    let maxDepth = 0;
    let DepthArr = [];
    let res = [];
    let n = seq.length;

    // 维护一个当前左括号的数量depth, 如果新遇到一个左括号，则depth++，更新当前位置的深度为depth
    // 否则先更新当前位置的深度为depth，然后depth--
    for (let i = 0; i < n; i++) {
        if (seq[i] == '(') {
            DepthArr[i] = ++depth; //depth++ result is different
        } else {
            DepthArr[i] = depth--;
        }
        maxDepth = Math.max(maxDepth, depth);
    }

    // 采用贪心策略，显然将深度最大的部分尽量分为两部分
    maxDepth /= 2;
    for (let i = 0; i < n; i++)
        if (DepthArr[i] <= maxDepth) {
            res[i] = 0; //在深度小于等于maxDepth的地方划分给A
        } else {
            res[i] = 1; //其余的地方划分给B
        }
    return res;
};

/**
 * https://blog.csdn.net/lemonade13/article/details/105241132
 * Accepted --- 76ms 36.8 MB 43.48%
 * 先找到字符串深度是多少，把深度劈成2半，小于等于一半深度的为A，大于为B
 */
const maxDepthAfterSplit_csdn = (seq) => {
    let res = [];
    let depth = 0;
    let maxDepth = 0;
    if (seq.length <= 1) {
        return ans;
    }
    for (let i = 0; i < seq.length; ++i) {
        if (seq[i] == '(') {
            ++depth;
            maxDepth = Math.max(maxDepth, depth);
        } else {
            --depth;
        }
    }
    depth = 0;
    for (let i = 0; i < seq.length; ++i) {
        if (seq[i] == '(') {
            ++depth;
        }
        if (depth <= maxDepth / 2) {
            res.push(0);
        } else {
            res.push(1);
        }
        if (seq[i] == ')') {
            --depth;
        }
    }
    return res;
};

/**
 * https://blog.csdn.net/lemonade13/article/details/105241132
 * Accepted --- 72ms 36.3 MB 47.83%
 * 找规律: 对于每层的()，一层分给A，一层分给B，这样交替就能平均分. 交替规律可由其在字符串中位置的下标得到
 * seq： ( ( ) ( ( ) ) ( ) )
 * 下标： 0 1 2 3 4 5 6 7 8 9
 * 层数： 1 2 2 2 3 3 2 2 2 1
 * 
 * 字符为'('时，偶数下标 = 奇数层数，奇数下标 = 偶数层数
 * 字符为')'时，偶数下标 = 偶数层数，奇数下标 = 奇数层数
 * 
 * 只要把偶数层数分给A，奇数层数分给B即可
 */
const maxDepthAfterSplit_csdn2 = (seq) => {
    let res = [];
    if (seq.length <= 1) {
        return ans;
    }
    for (let i = 0; i < seq.length; ++i) {
        if (seq[i] == '(') {
            if (i % 2 == 0) {
                res.push(0);
            } else {
                res.push(1);
            }
        } else {
            if (i % 2 == 0) {
                res.push(1);
            } else {
                res.push(0);
            }
        }
    }
    return res;
};

const main = () => {
    let seq = "(()())";
    let seq2 = "()(())()";
    console.log(maxDepthAfterSplit_acwing(seq)); // [0,1,1,1,1,0]
    console.log(maxDepthAfterSplit_acwing(seq2)); // [0,0,0,1,1,0,1,1]

    console.log("")
    console.log(maxDepthAfterSplit_csdn(seq));
    console.log(maxDepthAfterSplit_csdn(seq2));

    console.log("")
    console.log(maxDepthAfterSplit_csdn2(seq));
    console.log(maxDepthAfterSplit_csdn2(seq2));

};

main()