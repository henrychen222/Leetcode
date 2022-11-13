/**
 * 05/01/21 morning
 * https://leetcode.com/contest/biweekly-contest-51/problems/seat-reservation-manager/
 */

const pr = console.log;
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

// Accepted
function SeatManager(n) {
    let pq = new MinPriorityQueue({ priority: x => x });
    for (let i = 1; i <= n; i++) pq.enqueue(i);
    // pr(pq.toArray())
    return { reserve, unreserve }
    function reserve() {
        return pq.dequeue().element;
    }

    function unreserve(seatNumber) {
        pq.enqueue(seatNumber);
    }
}


const main = () => {
    let seatManager = new SeatManager(5);
    pr(seatManager.reserve()); // 1
    pr(seatManager.reserve()); // 2
    seatManager.unreserve(2);
    pr(seatManager.reserve()); // 2
    pr(seatManager.reserve()); // 3
    pr(seatManager.reserve()); // 4
    pr(seatManager.reserve()); // 5
    seatManager.unreserve(5);

};

main()
