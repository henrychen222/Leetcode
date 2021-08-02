/**
 * 08/01/21 night
 * https://leetcode.com/problems/trapping-rain-water-ii/
 */

const {MinPriorityQueue} = require('@datastructures-js/priority-queue');

// Accepted --- 152ms 95.00%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/5928987.html
 * https://leetcode.com/problems/trapping-rain-water-ii/discuss/89476/concise-C%2B%2B-priority_queue-solution
 */
const dir = [[0, -1], [-1, 0], [0, 1], [1, 0]];
const MAX =  200 * 201; // n * m + m
const trapRainWater = (g) => {
    let n = g.length, m = g[0].length;
    if (n == 0) return 0;
    let res = 0, max = Number.MIN_SAFE_INTEGER;
    let pq = new MinPriorityQueue({priority: x => x[0] * MAX + x[1]});
    let visit = initialize2DArrayNew(n, m);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i == 0 || i == n - 1 || j == 0 || j == m - 1) {
                pq.enqueue([g[i][j], i * m + j]);
                visit[i][j] = true;
            }
        }
    }
    // pr(pq.toArray(), visit)
    while (pq.size()) {
        let cur = pq.dequeue().element;
        // pr(cur);
        let h = cur[0], r = cur[1] / m >> 0, c = cur[1] % m;
        max = Math.max(max, h);
        // pr(h, r, c, "max", max);
        for (let k = 0; k < 4; k++) {
            let x = r + dir[k][0], y = c + dir[k][1];
            if (x < 0 || x >= n || y < 0 || y >= m || visit[x][y]) continue;
            visit[x][y] = true;
            if (g[x][y] < max) res += max - g[x][y];
            pq.enqueue([g[x][y], x * m + y]);
        }
    }
    return res;
};

const initialize2DArrayNew = (n, m) => { let data = []; for (let i = 0; i < n; i++) { let tmp = Array(m).fill(false); data.push(tmp); } return data; };

const pr = console.log;
const main = () => {
   let heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]];
   let heightMap2 = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]];
   pr(trapRainWater(heightMap))
   pr(trapRainWater(heightMap2))
};

main()