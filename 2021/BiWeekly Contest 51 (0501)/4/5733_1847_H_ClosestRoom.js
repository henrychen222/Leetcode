/**
 * 05/01/21 morning
 * https://leetcode.com/contest/biweekly-contest-51/problems/closest-room/
 */

const pr = console.log;
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

// don't know
const assign = 10 ** 7;
const closestRoom = (rooms, queries) => {
    rooms = rooms.map((t, i) => [...t, i]);
    rooms.sort((x, y) => y[0] - x[0]);
    let pq = MinPriorityQueue({ priority: ([diff, id]) => diff * assign + id });
    let res = [];
    for (const e of queries) {
        while (!pq.isEmpty()) {
        }
    }
};

const main = () => {
    let rooms = [[2, 2], [1, 2], [3, 2]], queries = [[3, 1], [3, 3], [5, 2]];
    let rooms = [[1, 4], [2, 3], [3, 5], [4, 1], [5, 2]], queries = [[2, 3], [2, 4], [2, 5]];
    pr(closestRoom(rooms, queries));

};

main()