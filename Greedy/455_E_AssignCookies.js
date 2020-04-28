/**
 * 4.27 night
 * https://leetcode.com/problems/assign-cookies/
 */

/**
 * https://www.cnblogs.com/grandyang/p/6077344.html
 * Accepted --- 88ms 38.3 MB 62.38%
 */
// 首先排序. 然后我们先拿最小的cookie给胃口最小的小朋友，看能否满足，能的话，结果result自加1，
// 然后再拿下一个cookie去满足下一位小朋友; 如果当前cookie不能满足当前小朋友，那么我们就用下一块稍大一点的cookie去尝试满足当前的小朋友。
// 当cookie发完了或者小朋友没有了我们停止遍历
const findContentChildren = (g, s) => {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let result = 0;
    let j = 0; // pointer to g
    for (const i of s) {
        // Greedy
        if (i >= g[j]) {
            result++;
            j++;
        }
    }
    return result;
};

// Accepted --- 88ms 38.3 MB 62.38%
// 精简, j既可以表示小朋友数组的坐标, 又可以表示已满足的小朋友的个数，因为只有满足了当前的小朋友，才会去满足下一个胃口较大的小朋友
const findContentChildren_refine = (g, s) => {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let j = 0;
    for (const i of s) {
        if (i >= g[j] && j < g.length) {
            j++;
        }
    }
    return j;
};

const main = (g, s) => {
    let g1 = [1, 2, 3],
        s1 = [1, 1];
    let g2 = [1, 2],
        s2 = [1, 2, 3];
    console.log(findContentChildren(g1, s1)); // 1
    console.log(findContentChildren(g2, s2)); // 2

    console.log(findContentChildren_refine(g1, s1));
    console.log(findContentChildren_refine(g2, s2));
};

main()