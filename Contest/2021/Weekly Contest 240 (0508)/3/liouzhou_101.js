/**
 * 05/08/21 evening
 * https://leetcode.com/contest/weekly-contest-240/problems/maximum-subarray-min-product/
 * 
 * reference:
 * https://leetcode.com/contest/weekly-contest-240/ranking/1/ huangyuyang ZeroLJ
 */

const pr = console.log;

const find = (x) => {
    return parent[x] == x ? x : parent[x] = find(parent[x]);
};

const union = (x, y) => {
    let px = find(x);
    let py = find(y);
    parent[px] = py;
    sum[py] += sum[px];
};

// Accepted --- 600ms
// Accepted --- 612ms
const BMOD = BigInt(1e9 + 7);
let parent, sum;
const maxSumMinProduct = (a) => {
    let n = a.length;
    let pos = Array(n).fill(0);
    let visit = Array(n).fill(0);
    parent = Array(n).fill(0);
    sum = Array(n).fill(0n);
    for (let i = 0; i < n; i++) {
        parent[i] = i;
        sum[i] = BigInt(a[i]);
        pos[i] = i;
    }
    pos.sort((x, y) => a[y] - a[x]);
    // pr("parent", parent);
    // pr("visit", visit);
    // pr("pos", pos);
    // pr("sum", sum);
    let res = 0n;
    for (const i of pos) {
        if (i - 1 >= 0 && visit[i - 1]) union(i - 1, i);
        if (i + 1 < n && visit[i + 1]) union(i, i + 1);
        visit[i] = 1;
        let tmp = BigInt(a[i]) * sum[find(i)]; // min-product
        if (tmp > res) res = tmp;
        // pr("parent", parent);
        // pr("visit", visit);
        // pr("pos", pos);
        // pr("sum", sum);
    }
    return Number(res % BMOD);
};


const main = () => {
    let nums = [1, 2, 3, 2];
    let nums2 = [2, 3, 3, 1, 2];
    let nums3 = [3, 1, 5, 6, 4, 2];
    pr(maxSumMinProduct(nums));
    pr(maxSumMinProduct(nums2));
    pr(maxSumMinProduct(nums3));
};

main()
