/**
 * 07/17/21 evening
 * https://leetcode.com/contest/weekly-contest-250/problems/maximum-genetic-difference-query/
 */

const pr = console.log;


function Query(index, val) {
    this.index = index;
    this.val = val;
}

// Accepted --- 1972ms
const maxGeneticDifference = (parents, queries) => {
    let pn = parents.length, qn = queries.length;
    let root = parents.indexOf(-1);
    let children = initializeGraph(pn);
    // pr(children)
    for (let i = 0; i < pn; i++) {
        if (i != root) {
            // pr(i, parents[i]);
            children[parents[i]].push(i);
        }
    }
    pr(children)
    let freq = Array(1 << 20).fill(0);
    let queriesByNode = initializeGraph(pn);
    for (let i = 0; i < qn; i++) {
        let query = queries[i];
        // pr(i, query);
        queriesByNode[query[0]].push(new Query(i, query[1]));
    }
    pr("queriesByNode", queriesByNode);
    let res = Array(qn).fill(0);
    // pr(res);
    const dfs = (idx) => {
        let y = (1 << 19) + idx;
        // pr("y", y, idx)
        while (y > 0) {
            freq[y]++;
            y >>= 1;
        }
        // pr("y", y)
        for (const qnode of queriesByNode[idx]) {
            // pr(qnode);
            let j = qnode.index, x = qnode.val;
            let cum = 0;
            let bit = 1 << 18;
            // pr("trace", idx, j, x, cum, bit);
            while (bit > 0) {
                let ii = ((1 << 19) ^ cum ^ x ^ bit) / bit >> 0;
                // pr("ii", ii);
                if (freq[ii] > 0) cum += bit;
                bit >>= 1;
            }
            res[j] = cum;
            // pr("res", res);
        }
        for (const child of children[idx]) dfs(child);
        y = (1 << 19) + idx;
        while (y > 0) {
            freq[y]--;
            y >>= 1;
        }
    };
    dfs(root);
    return res;
};

const initializeGraph = (n) => {
    let G = [];
    for (let i = 0; i < n; i++) G.push([]);
    return G;
};

const main = () => {
    let parents = [-1, 0, 1, 1], queries = [[0, 2], [3, 2], [2, 5]];
    let parents2 = [3, 7, -1, 2, 0, 7, 0, 2], queries2 = [[4, 6], [1, 15], [0, 5]];
    pr(maxGeneticDifference(parents, queries))
    pr(maxGeneticDifference(parents2, queries2))
};

main()