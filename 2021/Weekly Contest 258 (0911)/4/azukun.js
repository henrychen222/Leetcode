


// 09/11/21 night

const pr = console.log;

// Accepted --- 3264ms
const smallestMissingValueSubtree = (parents, nums) => {
    let n = parents.length, g = initializeGraph(n);
    for (let i = 1; i < n; i++) g[parents[i]].push(i);
    // pr(g)
    let res = Array(n).fill(0);
    const dfs = (x) => {
        let set = new Set(), miss = 1;
        for (const e of g[x]) {
            let [cset, cpos] = dfs(e);
            miss = Math.max(miss, cpos);
            set = unionSet(set, cset);
        }
        set.add(nums[x])
        while (set.has(miss)) miss++;
        res[x] = miss;
        return [set, miss];
    }
    dfs(0);
    return res;
};

const unionSet = (s1, s2) => {
    if (s1.size > s2.size) {
        for (const e of s2) s1.add(e);
        return s1;
    } else {
        for (const e of s1) s2.add(e);
        return s2;
    }
}

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


// let test = new Set([1, 2, 3]);
// let test2 = new Set([4, 5]);

// unionSet(test, test2)
// pr(test, test2)