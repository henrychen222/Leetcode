/**
 * 11/26/21 evening
 * https://leetcode.com/problems/reconstruct-itinerary/
 * 
 * reference:
 * https://leetcode.com/problems/reconstruct-itinerary/discuss/78768/short-ruby-python-java-c
 * https://www.cnblogs.com/grandyang/p/5183210.html
 */

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

const generateMapPQ = (m, k, v) => {
    if (!m.has(k)) {
        let pq = new MaxPriorityQueue({
            compare: (x, y) => {
                return x.localeCompare(y)
            }
        });
        m.set(k, pq);
    }
    m.get(k).enqueue(v);
};

// Accepted --- 236ms 5.04%
// Accepted --- 176ms 9.24%
// Accepted --- 186ms 6.16%
const findItinerary = (tickets) => {
    let g = new Map();
    for (const [from, to] of tickets) {
        generateMapPQ(g, from, to);
    }
    debug(g);
    let route = [], st = ['JFK'];
    while (st.length) {
        while (g.has(st[st.length - 1]) && g.get(st[st.length - 1]).size()) {
            let pq = g.get(st[st.length - 1]);
            st.push(pq.dequeue());
        }
        route.unshift(st.pop());
    }
    return route;
};

const debug = (g) => {
    for (const [s, pq] of g) {
        pr(s, pq.toArray())
    }
};

const pr = console.log;
const main = () => {
    let tickets = [
        ["MUC", "LHR"],
        ["JFK", "MUC"],
        ["SFO", "SJC"],
        ["LHR", "SFO"]
    ];
    let tickets2 = [
        ["JFK", "SFO"],
        ["JFK", "ATL"],
        ["SFO", "ATL"],
        ["ATL", "JFK"],
        ["ATL", "SFO"]
    ];
    pr(findItinerary(tickets))
    pr(findItinerary(tickets2))
};

main()

// pr('SJC' < 'SFO');