/*
 * 06/03/23 evening
 * https://leetcode.com/contest/weekly-contest-348/problems/sum-of-matrix-after-queries/
 */

const pr = console.log;

const initialize2DArray = (n, m) => [...Array(n)].map(() => Array(m).fill(0));
const addOneOrManyMap = (m, x, cnt = 1) => m.set(x, m.get(x) + cnt || cnt);

// Accepted After Contest
const matrixSumQueries = (n, queries) => {
    pr("answer", test(n, queries))
    let usedRow = new Set(), usedCol = new Set(), res = 0;
    // pr(queries)
    queries.reverse();
    for (const [type, idx, v] of queries) {
        // addOneOrManyMap(m, type+" "+idx) // has repeat
        if (type == 0) {
            if (!usedRow.has(idx)) { // miss this fuck
                usedRow.add(idx);
                let cnt = n - usedCol.size;
                res += v * cnt;
                // pr(v, cnt)
            }
        } else {
            if (!usedCol.has(idx)) {
                usedCol.add(idx)
                let cnt = n - usedRow.size;
                res += v * cnt;
                // pr(v, cnt)
            }
        }
    }
    // pr(m, m.size, queries.length)
    return res;
};


// Memory out
const matrixSumQueries2 = (n, queries) => {
    let g = Array(n).fill(0).map(() => Array(n).fill(0)), res = 0;
    for (const [type, idx, val] of queries) {
        if (type === 0) {
            for (let j = 0; j < n; j++) {
                res -= g[idx][j];
                g[idx][j] = val;
                res += g[idx][j];
            }
        } else if (type === 1) {
            for (let i = 0; i < n; i++) {
                res -= g[i][idx];
                g[i][idx] = val;
                res += g[i][idx];
            }
        }
    }
    return res;
};

const test = (n, queries) => {
    let g = initialize2DArray(n, n), res = 0;
    for (const [type, idx, v] of queries) {
        if (type == 0) {
            for (let j = 0; j < n; j++) g[idx][j] = v;
        } else {
            for (let i = 0; i < n; i++) g[i][idx] = v;
        }
    }
    // pr("grid", g);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res += g[i][j];
        }
    }
    return res;
}

const main = () => {
    let n = 3, queries = [[0, 0, 1], [1, 2, 2], [0, 2, 3], [1, 0, 4]];
    let n2 = 3, queries2 = [[0, 0, 4], [0, 1, 2], [1, 0, 1], [0, 2, 3], [1, 2, 1]]
    let n_debug1 = 8, queries_debug1 = [[0, 6, 30094], [0, 7, 99382], [1, 2, 18599], [1, 3, 49292], [1, 0, 81549], [1, 1, 38280], [0, 0, 19405], [0, 4, 30065], [1, 4, 60826], [1, 5, 9241], [0, 5, 33729], [0, 1, 41456], [0, 2, 62692], [0, 3, 30807], [1, 7, 70613], [1, 6, 9506], [0, 5, 39344], [1, 0, 44658], [1, 1, 56485], [1, 2, 48112], [0, 6, 43384]];
    let n_test = 8, q_test = [[0, 6, 1], [0, 7, 2], [1, 2, 3], [1, 3, 4], [1, 0, 5], [1, 1, 6], [0, 0, 7], [0, 4, 8], [1, 4, 9], [1, 5, 10], [0, 5, 11], [0, 1, 12], [0, 2, 13], [0, 3, 1], [1, 7, 1], [1, 6, 1], [0, 5, 1], [1, 0, 1], [1, 1, 1], [1, 2, 1], [0, 6, 1]];
    pr(matrixSumQueries(n, queries))
    pr(matrixSumQueries(n2, queries2))
    pr(matrixSumQueries(n_debug1, queries_debug1)) // 2783119
    pr(matrixSumQueries(n_test, q_test)) // 200
};

main()