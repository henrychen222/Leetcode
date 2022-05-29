// 05/28/22 afternoon
const pr = console.log;

function Fenwick(n) {
    let a = Array(n).fill(0);
    return { query, update, rangeSum, tree }
    function query(i) { // [0, i] prefix sum
        let sum = 0;
        for (i++; i > 0; i = parent(i)) sum += a[i];
        return sum;
    }
    function update(i, v) {
        for (i++; i < n; i = next(i)) a[i] += v;
    }
    function rangeSum(l, r) {
        return query(r) - query(l - 1);
    }
    function parent(x) {
        return x - lowestOneBit(x);
    }
    function next(x) {
        return x + lowestOneBit(x);
    }
    function lowestOneBit(x) {
        return x & -x;
    }
    function tree() {
        return a;
    }
}

// Accepted --- 4665ms 100.00%
// https://leetcode.cn/contest/biweekly-contest-79/ranking/10/
function BookMyShow(n, m) {
    let used = Array(n).fill(0), fen = new Fenwick(n + 3);
    for (let i = 0; i < n; i++) fen.update(i, m);
    return { gather, scatter }
    function gather(k, maxRow) {
        for (let i = 0; i <= maxRow; i++) {
            let seat = m - used[i];
            if (seat >= k) {
                let first = used[i];
                used[i] += k;
                fen.update(i, -k); // -k: remove k
                return [i, first];
            }
        }
        return [];
    }
    function scatter(k, maxRow) {
        let totToMaxRow = fen.query(maxRow);
        // pr(totToMaxRow, used, fen.tree())
        if (totToMaxRow < k) return false;
        for (let i = 0; i <= maxRow; i++) {
            let seat = m - used[i];
            if (seat >= k) {
                used[i] += k;
                fen.update(i, -k);
                k = 0;
            } else {
                k -= seat;
                fen.update(i, -seat);
                used[i] = m;
            }
        }
        return true;
    }
}

const main = () => {
    let bms = new BookMyShow(2, 5);
    pr(bms.gather(4, 0)); // [0, 0]
    pr(bms.gather(2, 0)); // []
    pr(bms.scatter(5, 1)); // true
    pr(bms.scatter(5, 1)); // false

    pr()
    let debug1 = new BookMyShow(3, 7);
    pr(debug1.scatter(9, 0)); // false
    pr(debug1.gather(2, 2)); // [0, 0]
    pr(debug1.gather(8, 2)); // []
}

main()