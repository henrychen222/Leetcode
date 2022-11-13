// 1.30 night

let ma;
const restoreArray = (a) => {
    ma = new Map();
    for (const e of a) {
        generateNe(e[0], e[1]);
        generateNe(e[1], e[0]);
    }
    // console.log(ma);
    let cur = 0;
    for (const [k, v] of ma) {
        if (v.length == 1) cur = k;
    }
    let visit = new Set();
    let res = [];
    res.push(cur);
    visit.add(cur);
    // console.log(res);
    while (true) { // greedily select neighbour (map做对, 贪心没想出: 2选1)
        let ne = ma.get(cur);
        if (!visit.has(ne[0])) {
            cur = ne[0];
            res.push(cur);
            visit.add(cur);
        } else if (ne.length > 1 && !visit.has(ne[1])) {
            cur = ne[1];
            res.push(cur);
            visit.add(cur);
        } else {
            break;
        }
        // console.log(cur, res);
    }
    return res;
};

const generateNe = (item, next) => {
    if (!ma.has(item)) {
        ma.set(item, []);
    }
    ma.get(item).push(next);
};

const main = () => {
    let adjacentPairs = [[2, 1], [3, 4], [3, 2]];
    let adjacentPairs2 = [[4, -2], [1, 4], [-3, 1]];
    let adjacentPairs3 = [[100000, -100000]];
    let debug1 = [[-3, -9], [-5, 3], [2, -9], [6, -3], [6, 1], [5, 3], [8, 5], [-5, 1], [7, 2]];
    // console.log(restoreArray(adjacentPairs));
    // console.log(restoreArray(adjacentPairs2));
    // console.log(restoreArray(adjacentPairs3));
    console.log(restoreArray(debug1));
};

main()