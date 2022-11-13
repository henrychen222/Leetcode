// 09/10/22 night

const pr = console.log;

function SegmentTreeRMQ(n) {
    let h = Math.ceil(Math.log2(n)), len = 2 * 2 ** h, a = Array(len).fill(Number.MAX_SAFE_INTEGER);
    h = 2 ** h;
    return { update, minx, indexOf, tree }
    function update(pos, v) {
        a[h + pos] = v;
        for (let i = parent(h + pos); i >= 1; i = parent(i)) propagate(i);
    }
    function propagate(i) {
        a[i] = Math.min(a[left(i)], a[right(i)]);
    }
    function minx(l, r) {
        let min = Number.MAX_SAFE_INTEGER;
        if (l >= r) return min;
        l += h;
        r += h;
        for (; l < r; l = parent(l), r = parent(r)) {
            if (l & 1) min = Math.min(min, a[l++]);
            if (r & 1) min = Math.min(min, a[--r]);
        }
        return min;
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

// Accepted
const lengthOfLIS = (a, k) => {
    let max = Math.max(...a), st = new SegmentTreeRMQ(max + 3), res = 0;
    for (const x of a) {
        let l = Math.max(x - k, 0), r = x;
        let min = st.minx(l, r), maxL = min == Number.MAX_SAFE_INTEGER ? 0 : -min;
        // pr("min", min, "maxL", maxL)
        maxL++;
        res = Math.max(res, maxL);
        st.update(x, -maxL);
    }
    return res;
};

const main = () => {
    let a = [4, 2, 1, 4, 3, 4, 5, 8, 15], k = 3;
    let a2 = [7, 4, 5, 1, 8, 12, 4, 7], k2 = 5;
    let a3 = [1, 5], k3 = 1;
    let a_debug1 = [100000], k_debug1 = 1
    let a_debug2 = [4, 5], k_debug2 = 3
    let a_debug3 = [1, 3, 3, 4], k_debug3 = 1
    pr(lengthOfLIS(a, k))
    pr(lengthOfLIS(a2, k2))
    pr(lengthOfLIS(a3, k3))
    pr(lengthOfLIS(a_debug1, k_debug1)) // 1
    pr(lengthOfLIS(a_debug2, k_debug2)) // 2
    pr(lengthOfLIS(a_debug3, k_debug3)) // 2
};

main()