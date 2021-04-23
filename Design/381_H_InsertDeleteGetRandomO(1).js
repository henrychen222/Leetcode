/**
 * 04/20/21 morning
 * https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/
 */

// Accepted --- 184ms 33.80%
function RandomizedCollection() {
    let a = [];
    return {
        insert,
        remove,
        getRandom
    }

    function insert(val) {
        let idx = a.indexOf(val);
        a.push(val);
        return idx == -1 ? 1 : 0;
    }

    function remove(val) {
        let idx = a.indexOf(val);
        if (idx == -1) {
            return 0;
        } else {
            a.splice(idx, 1);
            return 1;
        }
    }

    function getRandom() {
        let idx = Math.random() * a.length >> 0;
        return a[idx];
    }
}

// Accepted --- 244ms 15.49% (Finally fixed) 
function RandomizedCollection1() {
    let m = new Map();
    // let rcnt = new Map();
    let tot = 0;
    return {
        insert,
        remove,
        getRandom
    }

    function insert(val) {
        tot++;
        // rcnt = new Map();
        if (m.has(val)) {
            m.set(val, m.get(val) + 1);
            return 0;
        } else {
            m.set(val, 1);
            return 1;
        }
    }

    function remove(val) {
        // rcnt = new Map();
        let occ = m.get(val);
        if (occ) {
            occ == 1 ? m.delete(val) : m.set(val, occ - 1);
            tot--;
            return 1;
        } else {
            return 0;
        }
    }

    function getRandom() {
        let idx = Math.random() * tot >> 0;
        let sum = 0;
        let pre = m.keys().next().value;
        for (const [k, v] of m) {
            if (sum == idx) {
                return k;
            } else if (sum > idx) {
                return pre;
            }
            sum += v;
            pre = k;
        }
        return pre;
    }

    // TLE
    // function getRandom() {
    //     let a = [];
    //     for (const [k, v] of m) a = a.concat(Array(v).fill(k));
    //     let idx = Math.random() * m.size >> 0;
    //     return a[idx];
    // }

    // WA
    // function getRandom() {
    //     let ka = Array.from(m.keys());
    //     let idx;
    //     while (1) {
    //         idx = Math.random() * m.size >> 0;
    //         let k = ka[idx];
    //         // pr(k, rcnt.get(k), m.get(k));
    //         if ((rcnt.get(k) || 0) < m.get(k)) {
    //             rcnt.set(k, rcnt.get(k) + 1 || 1);
    //             return ka[idx];
    //         }
    //     }
    // }

    // // TLE
    // function getRandom() {
    //     let a = [];
    //     for (const [k, v] of m) a = a.concat(Array(v).fill(k));
    //     return shuffle(a)[0];
    // }

    // function shuffle(a) {
    //     for (let i = a.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [a[i], a[j]] = [a[j], a[i]];
    //     }
    //     return a;
    // }
}

const pr = console.log;
const main = () => {
    let randomizedCollection = new RandomizedCollection();
    pr(randomizedCollection.insert(1)); // true
    pr(randomizedCollection.insert(1)); // false
    pr(randomizedCollection.insert(2)); // true
    pr(randomizedCollection.getRandom()); // 1
    pr(randomizedCollection.remove(1)); // true
    pr(randomizedCollection.getRandom()); // 1
};

main()