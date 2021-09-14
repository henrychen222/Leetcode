/**
 * 09/14/21 morning
 * https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/
 */

function DJSet(n) {
    let parent = [];
    for (let i = 0; i < n; i++) parent.push(i);
    let size = Array(n).fill(1);
    return { find, union }
    function find(x) {
        return parent[x] == x ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x == y) return false;
        if (size[x] < size[y]) [x, y] = [y, x];
        size[x] += size[y];
        parent[y] = x;
        return true;
    }
}

// Accepted --- 492ms 25.00%
// reference: https://leetcode.com/contest/weekly-contest-220/ranking/1/ awice
const distanceLimitedPathsExist = (n, edgeList, queries) => {
    let en = edgeList.length, qn = queries.length
    edgeList.sort((x, y) => x[2] - y[2]);
    // pr(edgeList)
    queries = queries.map((x, i) => [...x, i]);
    // pr(queries)
    queries.sort((x, y) => x[2] - y[2]);
    let res = Array(qn).fill(false);
    let ds = new DJSet(n);
    let i = 0;
    for (const [p, q, limit, qi] of queries) {
        while(i < en && edgeList[i][2] < limit) {
            // pr(edgeList[i], p, q, limit, qi)
            ds.union(edgeList[i][0], edgeList[i][1]);
            i++;
        }
        res[qi] = ds.find(p) == ds.find(q);
    }
    return res;
};

const pr = console.log;
const main = () => {
   let n = 3, edgeList = [[0,1,2],[1,2,4],[2,0,8],[1,0,16]], queries = [[0,1,2],[0,2,5]];
   let n2 = 5, edgeList2 = [[0,1,10],[1,2,5],[2,3,9],[3,4,13]], queries2 = [[0,4,14],[1,4,13]];
   pr(distanceLimitedPathsExist(n, edgeList, queries))
   pr(distanceLimitedPathsExist(n2, edgeList2, queries2))
};

main()