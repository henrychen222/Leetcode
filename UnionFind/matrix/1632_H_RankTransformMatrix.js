/**
 * 08/07/21 night   08/08/21 complete
 * https://leetcode.com/problems/rank-transform-of-a-matrix/
 */

function DJSet(n) {
    let parent = Array(n).fill(-1);
    return { find, union }
    function find(x) {
        return parent[x] == -1 ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x != y) parent[x] = y;
        // pr(parent)
    }
}

// Accepted --- 696ms 50.00%
// reference: https://zxi.mytechroad.com/blog/graph/leetcode-1632-rank-transform-of-a-matrix/
const matrixRankTransform = (matrix) => {
    let m = matrix.length, n = matrix[0].length;
    let res = initialize2DArrayNew(m, n), ma = new Map();
    for (let y = 0; y < m; y++) {
        for (let x = 0; x < n; x++) {
            operateMap(ma, matrix[y][x], [x, y]);
        }
    }
    // pr(ma);
    ma = stmkey_in(ma)
    // pr(ma);
    let rx = Array(n).fill(0);
    let ry = Array(m).fill(0);
    for (const [val, pos] of ma) {
        let ds = new DJSet(n + m);
        let cc = initializeGraph(n + m);
        for (const [x, y] of pos) ds.union(x, y + n);
        for (const [x, y] of pos) {
            let tmp = ds.find(x);
            // pr(tmp, x, y)
            cc[tmp].push([x, y]);
        }
        // pr(cc);
        for (const pos of cc) {
            let rank = 1;
            for (const [x, y] of pos) rank = Math.max(rank, Math.max(rx[x], ry[y]) + 1);
            for (const [x, y] of pos) rx[x] = ry[y] = res[y][x] = rank;
        }
    }
    return res;
};

const operateMap = (m, k, v) => {
    if (!m.has(k)) m.set(k, []);
    m.get(k).push(v);
};

const stmkey_in = (m) => new Map([...m].sort((x, y) => x[0] - y[0]));

const initializeGraph = (n) => {
    let G = [];
    for (let i = 0; i < n; i++) G.push([]);
    return G;
};

const initialize2DArrayNew = (n, m) => { let data = []; for (let i = 0; i < n; i++) { let tmp = Array(m).fill(0); data.push(tmp); } return data; };

const pr = console.log;
const main = () => {
    let matrix = [
        [1, 2],
        [3, 4]
    ];
    let matrix2 = [
        [7, 7],
        [7, 7]
    ];
    let matrix3 = [
        [20, -21, 14],
        [-19, 4, 19],
        [22, -47, 24],
        [-19, 4, 19]
    ];
    let matrix4 = [
        [7, 3, 6],
        [1, 4, 5],
        [9, 8, 2]
    ];
    pr(matrixRankTransform(matrix))
    pr(matrixRankTransform(matrix2))
    pr(matrixRankTransform(matrix3))
    pr(matrixRankTransform(matrix4))
};

main()