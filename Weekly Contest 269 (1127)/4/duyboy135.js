// 11/27/21 night


const pr = console.log;

let { MinPriorityQueue } = require('@datastructures-js/priority-queue');


const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };
const packUGCost = (G, Edges) => { for (const [u, v, cost] of Edges) { G[u].push([v, cost]); G[v].push([u, cost]); } };

// Accepted
const findAllPeople = (n, meetings, firstPerson) => {
    let g = initializeGraph(n), timeDis = Array(n).fill(Number.MAX_SAFE_INTEGER), res = [];
    packUGCost(g, meetings);
    let pq = new MinPriorityQueue({
        compare: (x, y) => {
            if (x[0] != y[0]) return x[0] - y[0];
            return x[1] - y[1];
        }
    });
    pq.enqueue([0, firstPerson]);
    pq.enqueue([0, 0]);
    timeDis[firstPerson] = 0;
    timeDis[0] = 0;
    while (pq.size()) {
        let [t, cur] = pq.dequeue();
        // if (timeDis[cur] != t) continue;
        res.push(cur);
        for (const [child, tc] of g[cur]) {
            if (tc < t) continue;
            if (timeDis[child] > tc) {
                timeDis[child] = tc;
                pq.enqueue([tc, child]);
            }
        }
    }
    return res;
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