/**
 * 10/27/21 night
 * https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/
 */

const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };
const initializeGraphSet = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push(new Set()); } return G; };

// Accepted --- 456ms 50%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/15187461.html
 * https://leetcode.com/contest/weekly-contest-155/ranking
 */
const sortItems = (n, m, group, beforeItems) => {
    for (let i = 0; i < n; i++) {
        if (group[i] == -1) {
            group[i] = m++;
        }
    }
    let gg = initializeGraphSet(m); // graph group
    let gi = initializeGraphSet(n); // graph item
    let indegreeGG = Array(m).fill(0);
    let indegreeGI = Array(n).fill(0);
    let res = [];
    for (let i = 0; i < n; i++) { // build graph
        let to = group[i];
        for (const x of beforeItems[i]) {
            let from = group[x];
            if (from != to && !gg[from].has(to)) {
                gg[from].add(to);
                indegreeGG[to]++;
            }
            if (!gi[x].has(i)) {
                gi[x].add(i);
                indegreeGI[i]++;
            }
        }
    }
    // pr(gg, indegreeGG);
    // pr(gi, indegreeGI);
    let ggOrder = topologicalSort(gg, indegreeGG);
    let giOrder = topologicalSort(gi, indegreeGI);
    // pr("order group", ggOrder);
    // pr("order item", giOrder);
    if (ggOrder.length == 0 || giOrder.length == 0) return [];
    let group2Item = initializeGraph(m);
    for (const item of giOrder) group2Item[group[item]].push(item);
    // pr('group2Item', group2Item);
    for (const group_id of ggOrder) {
        for (const item of group2Item[group_id]) {
            res.push(item);
        }
    }
    return res;
};

const topologicalSort = (g, indegree) => {
    let res = [],
        q = [],
        len = indegree.length;
    for (let i = 0; i < len; i++) {
        if (indegree[i] == 0) q.push(i);
    }
    // pr('q', q);
    while (q.length) {
        let cur = q.shift();
        res.push(cur);
        for (const child of g[cur]) {
            if (--indegree[child] == 0) q.push(child);
        }
    }
    // pr('indegree', indegree);
    for (let i = 0; i < len; i++) {
        if (indegree[i] > 0) return [];
    }
    return res;
};

const pr = console.log;
const main = () => {
    let n = 8,
        m = 2,
        group = [-1, -1, 1, 0, 0, 1, 0, -1],
        beforeItems = [
            [],
            [6],
            [5],
            [6],
            [3, 6],
            [],
            [],
            []
        ];
    let n2 = 8,
        m2 = 2,
        group2 = [-1, -1, 1, 0, 0, 1, 0, -1],
        beforeItems2 = [
            [],
            [6],
            [5],
            [6],
            [3],
            [],
            [4],
            []
        ];
    let n_debug1 = 5,
        m_debug1 = 5,
        group_debug1 = [2, 0, -1, 3, 0],
        beforeItems_debug1 = [
            [2, 1, 3],
            [2, 4],
            [],
            [],
            []
        ];
    pr(sortItems(n, m, group, beforeItems))
    pr(sortItems(n2, m2, group2, beforeItems2))
    pr(sortItems(n_debug1, m_debug1, group_debug1, beforeItems_debug1))
};

main()