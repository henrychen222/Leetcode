/**
 * 10/09/21 night
 */

const pr = console.log;

function MultiSet() {
    let tm = {}; // works for key >= 0
    return { insert, eraseOne, erase, contains, first, last, show }
    function insert(x) {
        tm[x] ? tm[x]++ : tm[x] = 1;
    }
    function eraseOne(x) {
        let occ = tm[x];
        occ > 1 ? tm[x]-- : delete tm[x];
    }
    function erase(x) {
        delete tm[x];
    }
    function contains(x) {
        return tm[x] ? 1 : 0;
    }
    function first() {
        let i = 0;
        for (const key in tm) {
            if (i == 0) {
                return key - '0';
            }
            i++;
        }
    }
    function last() {
        let a = Object.keys(tm);
        return a[a.length - 1] - '0';
    }
    function show() {
        console.log(tm);
    };
}

// TLE
function StockPrice() {
    let lastT = -1, lastP;
    let se = new MultiSet(), tm = {};
    return { update, current, maximum, minimum }
    function update(timestamp, price) {
        if (timestamp >= lastT) {
            lastT = timestamp;
            lastP = price;
        }
        if (tm[timestamp]) se.eraseOne(tm[timestamp]);
        se.insert(price);
        tm[timestamp] = price;
    }
    function current() {
        return lastP;
    }
    function maximum() {
        return se.last();
    }
    function minimum() {
        return se.first();
    }
};