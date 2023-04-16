// 09/10/22 night
// reference: https://leetcode.cn/circle/discuss/s55Iwu/

const pr = console.log;

const { MinPriorityQueue } = require('@datastructures-js/priority-queue')

// 将所有区间按开始时间排序，并按顺序处理区间。处理一个区间时，若存在一个分组，使得该分组中最大的结束时间小于当前区间的开始时间，则当前区间可以被分到该组。否则就需要新开一组

const minGroups = (a) => {
    a.sort((x, y) => x[0] - y[0]);
    let pq = new MinPriorityQueue();
    for (const [l, r] of a) {
        if (pq.size() && pq.front().element < l) pq.dequeue(); // if exist a group, this group max R < current L, then current can be add to this group
        pq.enqueue(r);
    }
    return pq.size();
};

const main = () => {
    let intervals = [[5, 10], [6, 8], [1, 5], [2, 3], [1, 10]];
    let intervals2 = [[1, 3], [5, 6], [8, 10], [11, 13]];
    let debug1 = [[441459, 446342], [801308, 840640], [871890, 963447], [228525, 336985], [807945, 946787], [479815, 507766], [693292, 944029], [751962, 821744]]
    let debug0 = [[1, 1]]
    pr(minGroups(intervals))
    pr(minGroups(intervals2))
    pr(minGroups(debug1)) // 4
    pr(minGroups(debug0)) // 1
};

main()