/**
 * 05/08/21 evening
 */

const pr = console.log;
const mi = Math.min;
const mx = Math.max;

// Accepted
const maximumPopulation = (logs) => {
    let m = new Map();
    for (const [b, d] of logs) {
        for (let y = b; y < d; y++) {
            m.set(y, m.get(y) + 1 || 1);
        }
        //   m.set(b, m.get(b) + 1 || 1);
        //   m.set(d, m.get(d) - 1 || -1);
    }
    m = new Map([...m].sort((x, y) => {
        if (x[1] == y[1]) return x[0] - y[0];
        return y[1] - x[1];
    }));
    // pr(m);
    return m.keys().next().value;
};

const main = () => {
    let logs = [[1993, 1999], [2000, 2010]];
    let logs2 = [[1950, 1961], [1960, 1971], [1970, 1981]];
    let logs3 = [[2033,2034],[2039,2047],[1998,2042],[2047,2048],[2025,2029],[2005,2044],[1990,1992],[1952,1956],[1984,2014]];
    pr(maximumPopulation(logs));
    pr(maximumPopulation(logs2));
    pr(maximumPopulation(logs3)); // 2005
};

main()