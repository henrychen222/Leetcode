/**
 * 06/26/21 morning  afternoon complete
 * https://leetcode.com/contest/biweekly-contest-55/problems/design-movie-rental-system/
 */

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

// const priorAssign = 10 ** 5;

// Accepted
function MovieRentingSystem(n, entries) {
    let unrentM = new Map();
    let rentM = new Map();
    // let pq = new MinPriorityQueue({ priority: x => x[2] * priorAssign + x[3] });
    entries.map((x, i) => {
        let [shop, movie, price] = x;
        if (!unrentM.has(movie)) unrentM.set(movie, []);
        unrentM.get(movie).push([shop, movie, price]);
        // let tmp = [...x, i];
        // pq.enqueue(tmp);
        /// return tmp;
    });
    // pr(unrentM);
    return { search, rent, drop, report }
    function search(movie) {
        let a = unrentM.get(movie) || [];
        // pr("search", a);
        a.sort((x, y) => {
            if (x[2] == y[2]) return x[0] - y[0];
            return x[2] - y[2];
        });
        return a.map(x => x[0]).slice(0, 5);
    }

    function rent(shop, movie) {
        let a = unrentM.get(movie) || [];
        let idx, cur;
        for (let i = 0; i < a.length; i++) {
            if (a[i][0] == shop) {
                idx = i;
                cur = a[i];
                break;
            }
        }
        if (cur) {
            if (!rentM.has(movie)) rentM.set(movie, []);
            rentM.get(movie).push(cur);
            a.splice(idx, 1);
            a.length == 0 ? unrentM.delete(movie) : unrentM.set(movie, a);
        }
    }

    function drop(shop, movie) {
        let a = rentM.get(movie) || [];
        let idx, cur;
        for (let i = 0; i < a.length; i++) {
            if (a[i][0] == shop) {
                idx = i;
                cur = a[i];
                break;
            }
        }
        if (cur) {
            if (!unrentM.has(movie)) unrentM.set(movie, []);
            unrentM.get(movie).push(cur);
            a.splice(idx, 1);
            a.length == 0 ? rentM.delete(movie) : rentM.set(movie, a);
        }
    }

    function report() {
        // pr(rentM)
        let d = [];
        for (const [, a] of rentM) {
            for (const e of a) {
                d.push(e);
            }
        }
        d.sort((x, y) => {
            if (x[2] != y[2]) return x[2] - y[2];
            if (x[0] != y[0]) return x[0] - y[0];
            return x[1] - y[1];
        });
        // pr(d);
        return d.map(x => [x[0], x[1]]).slice(0, 5);
    }
};

const pr = console.log;
const main = () => {
    let movieRentingSystem = new MovieRentingSystem(3, [[0, 1, 5], [0, 2, 6], [0, 3, 7], [1, 1, 4], [1, 2, 7], [2, 1, 5]]);
    pr(movieRentingSystem.search(1));  // [1, 0, 2]
    movieRentingSystem.rent(0, 1);
    movieRentingSystem.rent(1, 2);
    pr(movieRentingSystem.report());   // [[0, 1], [1, 2]]
    movieRentingSystem.drop(1, 2);
    pr(movieRentingSystem.search(2));  // [0, 1]
};

main()
