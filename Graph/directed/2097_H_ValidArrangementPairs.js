/**
 * 12/05/21 night
 * https://leetcode.com/problems/valid-arrangement-of-pairs/
 * 
 * reference:
 * https://leetcode.com/contest/weekly-contest-270/ranking 	hoanh
 * https://leetcode.com/problems/valid-arrangement-of-pairs/discuss/1612010/Python3-Hierholzer's-algo
 * https://leetcode.com/problems/valid-arrangement-of-pairs/discuss/1611983/Python-O(pairs.length)-Hierholzer's-Algorithm
 * 
 * read:
 * https://www.geeksforgeeks.org/hierholzers-algorithm-directed-graph/
 * https://www.geeksforgeeks.org/euler-circuit-directed-graph/
 */

const packDGInOutDegreeMap = (gm, edges, dm) => { for (const [u, v] of edges) { if (!gm.has(u)) gm.set(u, []); gm.get(u).push(v); dm.set(u, (dm.get(u) || 0) + 1); dm.set(v, (dm.get(v) || 0) - 1); } };

// Accepted --- 1004ms
const validArrangement = (pairs) => {
    let g = new Map(), deg = new Map(), res = [];
    packDGInOutDegreeMap(g, pairs, deg);
    // pr("graph", g)
    // pr("deg", deg)
    let start = -1;
    for (const [node, ] of deg) {
        if (start == -1 || deg.get(node) == 1) start = node;
    }
    // pr(start);
    let path = eulerianPath(g, start);
    path.reverse();
    // pr(path);
    for (let i = 1; i < path.length; i++) {
       res.push([path[i-1], path[i]]);
    }
    return res;
};

const eulerianPath = (g, start) => { // eulerian Path with Hierholzer’s Algorithm
    let st = [start], path = [];
    while (st.length) {
        let u = st[st.length - 1], ua = g.get(u) || [];
        if (ua.length) {
            let v = ua.pop();
            g.set(u, ua);
            st.push(v);
        } else {
            path.push(u);
            st.pop();
        }
    }
    return path;
};

const pr = console.log;
const main = () => {
    let pairs = [
        [5, 1],
        [4, 5],
        [11, 9],
        [9, 4]
    ];
    let pairs2 = [
        [1, 3],
        [3, 2],
        [2, 1]
    ];
    let pairs3 = [
        [1, 2],
        [1, 3],
        [2, 1]
    ];
    pr(validArrangement(pairs))
    pr(validArrangement(pairs2))
    pr(validArrangement(pairs3))
};

main()