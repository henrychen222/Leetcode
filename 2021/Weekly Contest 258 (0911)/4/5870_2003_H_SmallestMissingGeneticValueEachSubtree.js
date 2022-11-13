/**
 * 09/11/21 evening
 * https://leetcode.com/contest/weekly-contest-258/problems/smallest-missing-genetic-value-in-each-subtree/
 */

const pr = console.log;

// don't know, give up


// azukun modify dfs
// Accepted --- 876ms
let g, a, res;
const smallestMissingValueSubtree = (parents, nums) => {
    let n = parents.length;
    a = nums;
    g = initializeGraph(n);
    for (let i = 1; i < n; i++) g[parents[i]].push(i);
    res = Array(n).fill(0);
    dfs(0);
    return res;
};

const dfs = (x) => {
    let set = new Set(), miss = 1;
    // pr(set, miss)
    for (const e of g[x]) {
        let [nset, nmiss] = dfs(e); // accumulation
        miss = Math.max(miss, nmiss);
        set = unionSet(set, nset);
    }
    // pr(set, miss)
    set.add(a[x])
    while (set.has(miss)) miss++;
    res[x] = miss;
    return [set, miss];
};

const unionSet = (s1, s2) => {
    if (s1.size > s2.size) {
        for (const e of s2) s1.add(e);
        return s1;
    } else {
        for (const e of s1) s2.add(e);
        return s2;
    }
};

const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };

const main = () => {
    let parents = [-1, 0, 0, 2], nums = [1, 2, 3, 4];
    let parents2 = [-1, 0, 1, 0, 3, 3], nums2 = [5, 4, 6, 2, 1, 3];
    let parents3 = [-1, 2, 3, 0, 2, 4, 1], nums3 = [2, 3, 4, 5, 6, 7, 8];
    pr(smallestMissingValueSubtree(parents, nums))
    pr(smallestMissingValueSubtree(parents2, nums2))
    pr(smallestMissingValueSubtree(parents3, nums3))
};

main()