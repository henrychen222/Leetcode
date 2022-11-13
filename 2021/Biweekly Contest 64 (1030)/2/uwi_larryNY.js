// 10/30/21 noon

const pr = console.log;

// LarryNY
// Accepted
const maxTwoEvents1 = (a) => {
    let d = [], res = 0, maxPreSum = 0;
    for (const [start, end, sum] of a) {
        d.push([start, sum, 1]);
        d.push([end + 1, sum, -1])
    }
    d.sort((x, y) => {
        if (x[0] != y[0]) return x[0] - y[0];
        return x[2] - y[2];
    });
    // pr(d);
    for (const [, sum, flag] of d) {
        if (flag == -1) {
            maxPreSum = Math.max(maxPreSum, sum);
        } else {
            // pr(maxPreSum, sum);
            res = Math.max(res, maxPreSum + sum);
        }
    }
    return res;
};

// uwi
// Accepted
const maxTwoEvents = (a) => {
    let d = [], res = 0, maxPreSum = 0;
    for (const [start, end, sum] of a) {
        d.push([start, sum, 1]);
        d.push([end, sum, -1])
    }
    d.sort((x, y) => {
        if (x[0] != y[0]) return x[0] - y[0];
        return y[2] - x[2];
    });
    // pr(d);
    for (const [, sum, flag] of d) {
        if (flag == -1) {
            maxPreSum = Math.max(maxPreSum, sum);
        } else {
            res = Math.max(res, maxPreSum + sum);
        }
    }
    return res;
};


const main = () => {
    let events = [[1, 3, 2], [4, 5, 2], [2, 4, 3]];
    let events2 = [[1, 3, 2], [4, 5, 2], [1, 5, 5]];
    let events3 = [[1, 5, 3], [1, 5, 1], [6, 6, 5]];
    let debug1 = [[10, 83, 53], [63, 87, 45], [97, 100, 32], [51, 61, 16]];
    let debug2 = [[1, 1, 1], [1, 1, 1]];
    let debug3 = [[2, 1000000000, 1000000], [1, 1, 1000000]];
    pr(maxTwoEvents(events))
    pr(maxTwoEvents(events2))
    pr(maxTwoEvents(events3))
    pr(maxTwoEvents(debug1)) // 85
    pr(maxTwoEvents(debug2)) // 1
    pr(maxTwoEvents(debug3)) // 2000000
};

main()