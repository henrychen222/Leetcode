/**
 * 03/19/21 night
 * https://leetcode.com/problems/keys-and-rooms/
 */

const pr = console.log;

// Accepted --- 76ms 97.02%
// reference: https://www.cnblogs.com/grandyang/p/10415773.html
let visit;
const canVisitAllRooms1 = (rooms) => {
    visit = new Set();
    helper(rooms, 0);
    return visit.size == rooms.length;
};

const helper = (rooms, idx) => {
    visit.add(idx);
    let e = rooms[idx];
    for (const ke of e) {
        if (!visit.has(ke)) {
            helper(rooms, ke);
        }
    }
};

// Accepted --- 84ms 69.38%
let res, ke;
const canVisitAllRooms = (rooms) => {
    res = new Set();
    ke = new Set();
    dfs(rooms, 0);
    return res.size == rooms.length;
};

const dfs = (rooms, idx) => {
    // pr(idx, ke, rooms[idx]);
    if (res.has(idx)) return;
    res.add(idx); // fix RE error
    let e = rooms[idx];
    let n = e.length;
    if (n == 0) {
        res.add(idx);
        return;
    }
    for (let i = 0; i < n; i++) {
        ke.add(e[i]);
        if (hasAllkey(ke, e)) res.add(idx);
        dfs(rooms, e[i]);
    }
};

const hasAllkey = (ke, a) => {
    // pr(ke, a)
    for (const e of a) {
        if (!ke.has(e)) return false;
    }
    return true;
};

const main = () => {
    let rooms = [
        [1],
        [2],
        [3],
        []
    ];
    let rooms2 = [
        [1, 3],
        [3, 0, 1],
        [2],
        [0]
    ];
    let debug1 = [
        [1, 3, 2],
        [2, 3],
        [2, 1, 3, 1],
        []
    ];
    pr(canVisitAllRooms(rooms));
    pr(canVisitAllRooms(rooms2));
    pr(canVisitAllRooms(debug1));
};

main()