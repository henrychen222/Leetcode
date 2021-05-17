/**
 * 05/12/21 moring
 * https://leetcode.com/problems/count-of-smaller-numbers-after-self/
 */

function SegmentTreeRSQ(N) {
    let n = 10 ** 5 + 1;
    // let n = N;
    let h = Math.ceil(Math.log2(n));
    const MAX = 2 * 2 ** h - 1;
    let tree = Array(MAX).fill(0);
    // pr(n, h, MAX);
    return {add,sum}

    function add(newVal) {
        addUtil(0, 0, n - 1, newVal);
    }

    function addUtil(vi, tl, tr, newVal) {
        if (tl == tr && tl == newVal) {
            tree[vi]++;
        } else {
            let mid = getMid(tl, tr);
            if (newVal <= mid) {
                addUtil(2 * vi + 1, tl, mid, newVal);
            } else {
                addUtil(2 * vi + 2, mid + 1, tr, newVal);
            }
            tree[vi] = tree[2 * vi + 1] + tree[2 * vi + 2];
        }
    }

    function sum(l, r) {
        return sumUtil(0, 0, n - 1, l, r);
    }

    function sumUtil(vi, l, r, tl, tr) {
        if (r < tl || l > tr) return 0;
        if (l >= tl && r <= tr) return tree[vi];
        let mid = getMid(l, r);
        return sumUtil(2 * vi + 1, l, mid, tl, tr) + sumUtil(2 * vi + 2, mid + 1, r, tl, tr);
    }

    function getMid(low, high) {
        return low + (high - low >> 1);
    }
}

// Accepted --- 676ms 65.38%
const N = 10 ** 4;
const countSmaller = (a) => {
    let n = a.length;
    for (let i = 0; i < n; i++) a[i] += N;
    // pr(a);
    let st = new SegmentTreeRSQ(n);
    let res = Array(n).fill(0);
    for (let i = n - 1; ~i; i--) {
        let sm = st.sum(0, a[i] - 1);
        res[i] = sm;
        st.add(a[i]);
    }
    return res;
};


// TLE
const countSmaller1 = (a) => {
    let n = a.length;
    let res = [];
    for (let i = 0; i < n; i++) {
        let cnt = 0;
        for (let j = i + 1; j < n; j++) {
            if (a[j] < a[i]) cnt++;
        }
        res.push(cnt);
    }
    return res;
};

const pr = console.log;
const main = () => {
    let nums = [5, 2, 6, 1];
    let nums2 = [-1];
    let nums3 = [-1, -1];
    pr(countSmaller(nums));
    pr(countSmaller(nums2));
    pr(countSmaller(nums3));
};

main()