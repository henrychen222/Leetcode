/**
 * 5.8 night
 * https://leetcode.com/problems/partition-labels/
 */

/**
 * https://www.cnblogs.com/grandyang/p/8654822.html
 * Accepted --- 72ms 36.3 MB 31.03%
 */
const partitionLabels_cnblog = (S) => {
    let res = [];
    let map = new Map();
    let start = 0, // 当前子串的起始位置
        last = 0; // 当前子串的结束位置
    for (let i = 0; i < S.length; ++i) { //使用一个HashMap来建立字母和其最后出现位置之间的映射
        map[S[i]] = i;
    }
    // console.log(map);
    for (let i = 0; i < S.length; ++i) {
        last = Math.max(last, map[S[i]]); // 每当我们遍历到一个字母，我们需要在HashMap中提取出其最后一个位置map[S[i]]. 因为一旦当前子串包含了一个字母, 其必须包含所有的相同字母, 所以我们要不停的用当前字母的最后一个位置来更新last变量
        if (i == last) { //只有当i和last相同了，即当 i = 8 时,当前子串包含了所有已出现过的字母的最后一个位置，即之后的字符串里不会有之前出现过的字母了，此时就应该是断开的位置
            res.push(i - start + 1); // 将长度9加入结果res中
            start = i + 1;
        }
    }
    return res;
};

/**
 * https://www.cnblogs.com/grandyang/p/8654822.html
 * Accepted --- 64 ms 35.9MB 67.93%
 */
const partitionLabels_cnblog_modify = (S) => {
    let res = [];
    let map = new Map();
    let start = 0,
        last = 0;
    for (let i = 0; i < S.length; ++i) {
        map.set(S[i], i); // change
    }
    // console.log(map);
    for (let i = 0; i < S.length; ++i) {
        last = Math.max(last, map.get(S[i])); // change
        if (i == last) {
            res.push(i - start + 1);
            start = i + 1;
        }
    }
    return res;
};

/**
 * https://zxi.mytechroad.com/blog/string/leetcode-763-partition-labels/
 * Accepted --- 56ms 35.2 MB 94.83%
 */
const partitionLabels_huahua_Brute_Force = (S) => { // same to cnblog
    let res = [];
    let start = 0,
        last = 0;
    for (let i = 0; i < S.length; ++i) {
        last = Math.max(last, S.lastIndexOf(S[i])); // S.lastIndexOf(S[i]) 字母其最后出现位置
        if (i == last) {
            res.push(last - start + 1);
            start = last + 1;
        }
    }
    return res;
};

/**
 * https://zxi.mytechroad.com/blog/string/leetcode-763-partition-labels/
 * Accepted --- 60ms 36.1 MB 86.03%
 */
const partitionLabels_huahua_Greedy = (S) => {
    let res = [];
    let start = 0,
        last = 0;
    let last_index = [];
    for (let i = 0; i < S.length; ++i) {
        last_index[S[i]] = i;
    }
    for (let i = 0; i < S.length; ++i) {
        last = Math.max(last, last_index[S[i]]);
        if (i == last) {
            res.push(last - start + 1);
            start = last + 1;
        }
    }
    return res;
};

const main = () => {
    let S = "ababcbacadefegdehijhklij";
    console.log(partitionLabels_cnblog(S));
    console.log("");
    console.log(partitionLabels_cnblog_modify(S));

    console.log("");
    console.log(partitionLabels_huahua_Brute_Force(S));

    console.log("");
    console.log(partitionLabels_huahua_Greedy(S));
};

main()