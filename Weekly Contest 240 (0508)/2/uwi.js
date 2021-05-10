// 05/08/21 evening

const pr = console.log;

function SegmentTreeRMQ(n) {
    let N = n;
    let M = highestOneBit(Math.max(N - 1, 1)) << 2; // tree MAX size
    let H = M >>> 1; // height
    let st = Array(M).fill(Number.MAX_SAFE_INTEGER);
    return { update, minx, getTree, size, height }
    function highestOneBit(i) {
        i |= (i >> 1);
        i |= (i >> 2);
        i |= (i >> 4);
        i |= (i >> 8);
        i |= (i >> 16);
        return i - (i >>> 1);
    }
    function height() {
        return H;
    }
    function size() {
        return M;
    }
    function getTree() {
        return st;
    }
    function update(pos, x) {
        st[H + pos] = x;
        for (let i = (H + pos) >>> 1; i >= 1; i >>>= 1) propagate(i);
    }
    function propagate(i) {
        st[i] = Math.min(st[2 * i], st[2 * i + 1]);
    }
    function minx(l, r) {
        let min = Number.MAX_SAFE_INTEGER;
        if (l >= r) return min;
        l += H; r += H;
        for (; l < r; l >>>= 1, r >>>= 1) {
            if (l & 1) min = Math.min(min, st[l++]);
            if (r & 1) min = Math.min(min, st[--r]);
        }
        return min;
    }
    function minx1(low, high) {
        let min = Number.MAX_SAFE_INTEGER;
        if (low >= high) return min;
        while (low != 0) {
            let f = low & -low;
            if (low + f > high) break;
            let v = st[parseInt((H + low) / f)];
            if (v < min) min = v;
            low += f;
        }
        while (low < high) {
            let f = high & -high;
            let v = st[parseInt((H + high) / f) - 1];
            if (v < min) min = v;
            high -= f;
        }
        return min;
    }
}

// Accepted --- 384ms minx1
// Accepted --- 380ms minx
const mx = Math.max;
const MAX = 10 ** 5;
const maxDistance1 = (a, b) => {
    let n = a.length;
    let m = b.length;
    // a = a.slice(0, m); //  remove Accepted --- 372ms minx
    for (let i = n; i < m; i++) a[i] = MAX + 1;
    let st = new SegmentTreeRMQ(MAX + 3);
    let res = 0;
    for (let i = 0; i < m; i++) {
        let mi = st.minx(a[i], a[i] + 1);
        // pr(mi);
        if (mi > i) {
            st.update(a[i], i);
        }
        let tmp = st.minx(0, b[i] + 1);
        if (tmp != Number.MAX_SAFE_INTEGER) {
            res = mx(res, i - tmp);
        }
    }
    return res;
};

// Accepted --- 296ms
// Accepted --- 272ms change st fill
const maxDistance = (a, b) => {
    let n = mx(a.length, b.length);
    let maxA = mx.apply(Math, a);
    let maxB = mx.apply(Math, b);
    let st = new SegmentTreeRMQ(mx(maxA, maxB) + 1);
    let res = 0;
    // pr(st.size(), st.height())
    for (let i = 0; i < n; i++) {
        let mina = st.minx(a[i], a[i] + 1);
        if (mina > i) {
            st.update(a[i], i);
        }
        let minb = st.minx(0, b[i] + 1);
        if (minb != Number.MAX_SAFE_INTEGER) {
            res = mx(res, i - minb);
        }
        // pr(st.getTree());
        // pr("process", res, i - minb, "track", mina, minb, st.height())
    }
    return res;
};

const main = () => {
    let nums1 = [55, 30, 5, 4, 2], nums2 = [100, 20, 10, 10, 5];
    let nums1_2 = [2, 2, 2], nums2_2 = [10, 10, 1];
    let nums1_3 = [30, 29, 19, 5], nums2_3 = [25, 25, 25, 25, 25];
    let nums1_4 = [5, 4], nums2_4 = [3, 2];
    let nums1_debug1 = [55, 30, 5, 4, 2], nums2_debug1 = [100, 20, 10, 10, 5];
    let nums1_debug2 = [2], nums2_debug2 = [1];
    pr(maxDistance(nums1, nums2));
    pr(maxDistance(nums1_2, nums2_2));
    pr(maxDistance(nums1_3, nums2_3));
    pr(maxDistance(nums1_4, nums2_4));
    pr(maxDistance(nums1_debug1, nums2_debug1));
    pr(maxDistance(nums1_debug2, nums2_debug2));
};

main()