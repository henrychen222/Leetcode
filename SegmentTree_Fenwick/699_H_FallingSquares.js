/*
* 09/23/22 night
* https://leetcode.com/problems/falling-squares/
*/

const pr = console.log;

function SegmentTreeRMQ(n) {
    let h = Math.ceil(Math.log2(n)), len = 2 * 2 ** h, a = Array(len).fill(Number.MIN_SAFE_INTEGER);
    h = 2 ** h;
    return { update, maxx, indexOf, tree }
    function update(pos, v) {
        a[h + pos] = v;
        for (let i = parent(h + pos); i >= 1; i = parent(i)) pushup(i);
    }
    function pushup(i) {
        a[i] = Math.max(a[left(i)], a[right(i)]);
    }
    function maxx(l, r) { // query [l, r)
        let max = Number.MIN_SAFE_INTEGER;
        if (l >= r) return max;
        l += h;
        r += h;
        for (; l < r; l = parent(l), r = parent(r)) {
            if (l & 1) max = Math.max(max, a[l++]);
            if (r & 1) max = Math.max(max, a[--r]);
        }
        return max;
    }
    function indexOf(l, v) {
        if (l >= h) return -1;
        let cur = h + l;
        while (1) {
            if (a[cur] <= v) {
                if (cur >= h) return cur - h;
                cur = left(cur);
            } else {
                cur++;
                if ((cur & cur - 1) == 0) return -1;
                if (cur % 2 == 0) cur = parent(cur);
            }
        }
    }
    function parent(i) {
        return i >> 1;
    }
    function left(i) {
        return 2 * i;
    }
    function right(i) {
        return 2 * i + 1;
    }
    function tree() {
        return a;
    }
}

// Accepted --- 274ms 10.53%
const fallingSquares = (a) => {
    let m = coorCompression(a), n = m.size;
    // pr(m, n)
    let st = new SegmentTreeRMQ(n + 3), res = [], top = 0;
    for (const [l, r] of a) {
        let L = m.get(l), R = m.get(l + r - 1), max = st.maxx(L, R + 1);
        let v = r + Math.max(max, 0);
        top = Math.max(top, v);
        for (let i = L; i <= R; i++) st.update(i, v);
        // st.update(R + 1, v);
        // pr(L, R, max, r, v)
        res.push(top);
    }
    return res;
};

const coorCompression = (a) => {
    let se = new Set(), n = 0, m = new Map();
    for (const [l, r] of a) {
        se.add(l);
        se.add(l + r - 1);
    }
    se = new Set([...se].sort((x, y) => x - y));
    for (const x of se) m.set(x, n++);
    return m;
};

const main = () => {
    let a = [[1, 2], [2, 3], [6, 1]];
    let a2 = [[100, 100], [200, 100]];
    let debug1 = [[1, 5], [2, 2], [7, 5]];
    let debug2 = [[9,7],[1,9],[3,1]];
    pr(fallingSquares(a))
    pr(fallingSquares(a2))
    pr(fallingSquares(debug1)) // [5,7,7]
    pr(fallingSquares(debug2)) // [7,16,17]
};

main()