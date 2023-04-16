// 01/17/23 noon at company

// Accepted --- 604ms 96.91%
function SegmentTreeRSQ(n) {
    let h = Math.ceil(Math.log2(n)), len = 2 * 2 ** h, a = Array(len).fill(0);
    return { update, rangeSum, tree }
    function update(pos, v) {
        a[n + pos] = v;
        for (let i = parent(n + pos); i >= 1; i = parent(i)) pushup(i);
    }
    function pushup(i) {
        a[i] = a[left(i)] +  a[right(i)];
    }
    function query(l, r) { // [L, R)
        let sum = 0;
        if (l >= r) return 0;
        l += n;
        r += n;
        for (; l < r; l = parent(l), r = parent(r)) {
            if (l & 1) sum += a[l++];
            if (r & 1) sum += a[--r];
        }
        return sum;
    }
    function rangeSum(l, r) {
        let lsum = query(0, l), rsum = query(0, r + 1);
        return rsum - lsum;
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

function NumArray(a) {
    let n = a.length, st = new SegmentTreeRSQ(n + 3);
    for (let i = 0; i < n; i++) st.update(i, a[i]);
    return { update, sumRange }
    function update(i, v) {
        st.update(i, v);
    }
    function sumRange(l, r) {
       return st.rangeSum(l, r);
    }
}


const pr = console.log;
const main = () => {
    let numArray = new NumArray([1, 3, 5]);
    pr(numArray.sumRange(0, 2)); // 9
    numArray.update(1, 2);
    pr(numArray.sumRange(0, 2)); // 8

    pr()
    let debug1 = new NumArray([9, -8]);
    debug1.update(0, 3);
    pr(debug1.sumRange(1, 1)); // -8
    pr(debug1.sumRange(0, 1)); // -5
    debug1.update(1, -3);
    pr(debug1.sumRange(0, 1)); // 0
};

main()