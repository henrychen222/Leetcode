/**
 * 1.30 evening
 * https://leetcode.com/contest/weekly-contest-226/problems/restore-the-array-from-adjacent-pairs/
 */

// WA
let ne;
const restoreArray = (a) => {
    ne = new Map();
    for (const e of a) {
        generateNe(e[0], e[1]);
        generateNe(e[1], e[0]);
    }
    ne = sortMapByValue(ne);
    let n = ne.size;
    let res = Array(n).fill('*');
    let beginEnd = [];
    // console.log(ne, n)
    for (const [k, v] of ne) {
        if (v.length > 1) break;
        beginEnd.push(k);
        ne.delete(k);
    }
    res[0] = beginEnd[0];
    res[n - 1] = beginEnd[1];
    // console.log(res, ne);
    while (ne.size) {
        for (const [k, v] of ne) {
            let idx = res.indexOf(v[0]);
            if (idx != -1) {
                idx == n - 1 ? res[idx - 1] = k : res[idx + 1] = k;
                ne.delete(k);
                continue;
            }
            let idx2 = res.indexOf(v[1]);
            if (idx2 != -1) {
                idx2 == n - 1 ? res[idx2 - 1] = k : res[idx2 + 1] = k;
                ne.delete(k);
            }
        }
        console.log(res);
        console.log(ne);
    }
    return res;
};

const generateNe = (item, next) => {
    if (!ne.has(item)) {
        ne.set(item, []);
    }
    ne.get(item).push(next);
};

const sortMapByValue = (map) => {
    return new Map([...map].sort((a, b) => a[1].length - b[1].length));
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


// ma.set(e[0], ma.get(e[0]) + 1 || 1);
// ma.set(e[1], ma.get(e[1]) + 1 || 1);