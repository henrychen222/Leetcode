/**
 * 7.4 night
 * https://leetcode.com/problems/queries-on-a-permutation-with-key/
 */

// Accepted --- 80ms 42.5MB 44.05%
const processQueries = (queries, m) => {
    let P = [];
    for (let i = 1; i <= m; i++) {
        P.push(i);
    }
    let res = [];
    for (const query of queries) {
        let idx = P.indexOf(query);
        res.push(idx);
        P = P.slice(0, idx).concat(P.slice(idx + 1, P.length));
        P.unshift(query);
    }
    return res;
};

// Accepted --- 72ms 37.3MB 72.62%
const processQueries2 = (queries, m) => {
    let P = [];
    for (let i = 1; i <= m; i++) {
        P.push(i);
    }
    let res = [];
    for (const query of queries) {
        let idx = P.indexOf(query);
        res.push(idx);
        P.splice(idx, 1); // difference
        P.unshift(query);
    }
    return res;
};

const main = () => {
    let queries = [3, 1, 2, 1],
        m = 5;
    let queries2 = [4, 1, 2, 2],
        m2 = 4;
    let queries3 = [7, 5, 5, 8, 3],
        m3 = 8;
    console.log(processQueries(queries, m));
    console.log(processQueries(queries2, m2));
    console.log(processQueries(queries3, m3));

    console.log("");
    console.log(processQueries2(queries, m));
    console.log(processQueries2(queries2, m2));
    console.log(processQueries2(queries3, m3));
};

main()