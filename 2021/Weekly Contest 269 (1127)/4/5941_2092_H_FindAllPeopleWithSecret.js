/**
 * 11/27/21 evening
 * https://leetcode.com/contest/weekly-contest-269/problems/find-all-people-with-secret/
 */

const pr = console.log;

// const unionSet = (s1, s2) => { if (s1.size > s2.size) { for (const e of s2) s1.add(e); return s1; } else { for (const e of s1) s2.add(e); return s2; } };

// const counter_value_in_indexA_in = (a) => {
//     let m = new Map(), n = a.length;
//     for (let i = 0; i < n; i++) {
//         if (!m.has(a[i][2])) m.set(a[i][2], new Set());
//         m.get(a[i][2]).add(a[i][0]);
//         m.get(a[i][2]).add(a[i][1]);
//     }
//     return m;
// };


const counter_value_in_indexA_in = (a) => {
    let m = new Map(), n = a.length;
    for (let i = 0; i < n; i++) {
        if (!m.has(a[i][2])) m.set(a[i][2], new Set());
        m.get(a[i][2]).add([a[i][0], a[i][1]]);
    }
    return m;
};

// TLE
const findAllPeople = (n, meetings, firstPerson) => {
    let secret = new Set([0, firstPerson]);
    meetings.sort((x, y) => x[2] - y[2]);
    let m = counter_value_in_indexA_in(meetings);
    // pr(meetings)
    // pr(m)
    let visit = new Map();
    for (const [x, y, t] of meetings) {
        // pr("time", t, x, y, 'secret', secret);
        let a = m.get(t);
        let sa = JSON.stringify(a);
        if (secret.has(x)) {
            if (secret.has(y)) {
                operate(secret, visit, a, sa);
            } else {
                secret.add(y);
                operate(secret, visit, a, sa);
            }
        } else {
            if (secret.has(y)) {
                secret.add(x);
                operate(secret, visit, a, sa);
            } else {
            }
        }
    }
    return [...secret];
};

const operate = (secret, visit, a, sa) => {
    if (visit.has(sa)) {
        if (visit.get(sa).size == a.length) return;
    } else {
        visit.set(sa, new Set());
    }
    for (let i = 0; i < a.length; i++) {
        let e = a[i];
        if (secret.has(e[0] || secret.has(e[1]))) {
            secret.add(e[0]);
            secret.add(e[1]);
            visit.get(sa).add(i);        
        }
    }
};

const main = () => {
    let n = 6, meetings = [[1, 2, 5], [2, 3, 8], [1, 5, 10]], firstPerson = 1;
    let n2 = 4, meetings2 = [[3, 1, 3], [1, 2, 2], [0, 3, 3]], firstPerson2 = 3;
    let n3 = 5, meetings3 = [[3, 4, 2], [1, 2, 1], [2, 3, 1]], firstPerson3 = 1;
    let n4 = 6, meetings4 = [[0, 2, 1], [1, 3, 1], [4, 5, 1]], firstPerson4 = 1;
    let n_debug1 = 11, meetings_debug1 = [[5, 1, 4], [0, 4, 18]], firstPerson_debug1 = 1
    pr(findAllPeople(n, meetings, firstPerson))
    pr(findAllPeople(n2, meetings2, firstPerson2))
    pr(findAllPeople(n3, meetings3, firstPerson3))
    pr(findAllPeople(n4, meetings4, firstPerson4))
    pr(findAllPeople(n_debug1, meetings_debug1, firstPerson_debug1)) // [0,1,4,5]
};

main()