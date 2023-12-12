/*
 * 08/18/23 night
 * https://leetcode.com/contest/weekly-contest-357/problems/maximum-elegance-of-a-k-length-subsequence/
 */

const pr = console.log;

const { MinPriorityQueue } = require("@datastructures-js/priority-queue")

// Accepted 
// reference: https://leetcode.cn/circle/discuss/chtVBq/
const findMaximumElegance = (items, k) => {
    items.sort((x, y) => y[0] - x[0] || y[1] - x[1]);
    // pr(items)
    let used = new Set(), pq = new MinPriorityQueue({ compare: (x, y) => x - y }), sum = 0, res = 0;
    for (const [profit, category] of items.slice(0, k)) {
        sum += profit;
        used.has(category) ? pq.enqueue(profit) : used.add(category);
    }
    // pr(used)
    res += sum + used.size ** 2;
    for (const [profit, category] of items.slice(k)) {
        if (pq.size() && !used.has(category)) {
            used.add(category);
            sum -= pq.dequeue();
            sum += profit;
            res = Math.max(res, sum + used.size ** 2);
        }
    }
    return res;
};

const main = () => {
    let items = [[3, 2], [5, 1], [10, 1]], k = 2;
    let items2 = [[3, 1], [3, 1], [2, 2], [5, 3]], k2 = 3;
    let items3 = [[1, 1], [2, 1], [3, 1]], k3 = 3;
    let item_debug1 = [[1, 2], [10, 1]], k_debug1 = 1;
    let item_debug2 = [[3, 2], [5, 1], [10, 1]], k_debug2 = 2;
    pr(findMaximumElegance(items, k))
    pr(findMaximumElegance(items2, k2))
    pr(findMaximumElegance(items3, k3))
    pr(findMaximumElegance(item_debug1, k_debug1)) // 11
    pr(findMaximumElegance(item_debug2, k_debug2)) // 17
};

main()