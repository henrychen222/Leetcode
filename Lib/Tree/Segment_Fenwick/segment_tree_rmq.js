/*
05/28/22 afternoon   08/13/23 evneing reorganize
Example problem:

st.update(i, a[i]) // common
https://leetcode.com/problems/jump-game-vi/
https://leetcode.com/problems/dinner-plate-stacks/   firstle() lastle()
https://leetcode.com/problems/booking-concert-tickets-in-groups/  firstle()
https://leetcode.com/problems/falling-squares/

st.update(a[i], i)
https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/
https://leetcode.com/problems/longest-increasing-subsequence-ii/


Array constructor:
https://leetcode.com/problems/maximum-balanced-subsequence-sum/
*/

// ------------------------------- range min query -----------------------------------------------------
function SegmentTreeRMQ(n) { // min
    let h = Math.ceil(Math.log2(n)), len = 2 * 2 ** h, a = Array(len).fill(Number.MAX_SAFE_INTEGER);
    h = 2 ** h;
    // return { update, minx, firstle, lastle, tree }
    return { update, minx, tree }
    function update(pos, v) {
        a[h + pos] = v;
        for (let i = parent(h + pos); i >= 1; i = parent(i)) pushup(i);
    }
    function pushup(i) {
        a[i] = Math.min(a[left(i)], a[right(i)]);  // [min .... max]
    }
    function minx(l, r) { // [L, R)
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
    // function firstle(l, v) {
    //     if (l >= h) return -1;
    //     let cur = h + l;
    //     while (1) {
    //         if (a[cur] <= v) {
    //             if (cur >= h) return cur - h;
    //             cur = left(cur);
    //         } else {
    //             cur++;
    //             if ((cur & cur - 1) == 0) return -1;
    //             if (cur % 2 == 0) cur = parent(cur);
    //         }
    //     }
    // }
    // function lastle(l, v) {
    //     if (l < 0) return -1;
    //     let cur = h + l;
    //     while (1) {
    //         if (a[cur] <= v) {
    //             if (cur >= h) return cur - h;
    //             cur = right(cur);
    //         } else {
    //             if ((cur & cur - 1) == 0) return -1;
    //             cur--;
    //             if (cur % 2 != 0) cur = parent(cur);
    //         }
    //     }
    // }
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

// ------------------------------- range max query -----------------------------------------------------
// 09/18/22 evening
function SegmentTreeRMQ(n) { // max
    let h = Math.ceil(Math.log2(n)), len = 2 * 2 ** h, a = Array(len).fill(Number.MIN_SAFE_INTEGER);
    h = 2 ** h;
    return { update, maxx, tree }
    function update(pos, v) {
        a[h + pos] = v;
        for (let i = parent(h + pos); i >= 1; i = parent(i)) pushup(i);
    }
    function pushup(i) {
        a[i] = Math.max(a[left(i)], a[right(i)]);  // [max .... min]
    }
    function maxx(l, r) { // [L, R)
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



///////////////////////////////////// Array constructor /////////////////////////////////////////////////////////////
function SegmentTreeRMQ(A) { // min
    let n = A.length, h = Math.ceil(Math.log2(n)), len = 2 * 2 ** h, a = Array(len).fill(Number.MAX_SAFE_INTEGER);
    h = 2 ** h;
    initializeFromArray();
    return { update, minx, tree }
    function initializeFromArray() {
        for (let i = 0; i < n; i++) a[h + i] = A[i];
        for (let i = h - 1; i >= 1; i--) pushup(i);
    }
    function update(pos, v) {
        a[h + pos] = v;
        for (let i = parent(h + pos); i >= 1; i = parent(i)) pushup(i);
    }
    function pushup(i) {
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

// 11/12/23 afternoon
function SegmentTreeRMQArray(A) { // max
    let n = A.length, h = Math.ceil(Math.log2(n)), len = 2 * 2 ** h, a = Array(len).fill(Number.MIN_SAFE_INTEGER);
    h = 2 ** h;
    initializeFromArray();
    return { update, maxx, tree }
    function initializeFromArray() {
        for (let i = 0; i < n; i++) a[h + i] = A[i];
        for (let i = h - 1; i >= 1; i--) pushup(i);
    }
    function update(pos, v) {
        a[h + pos] = v;
        for (let i = parent(h + pos); i >= 1; i = parent(i)) pushup(i);
    }
    function pushup(i) {
        a[i] = Math.max(a[left(i)], a[right(i)]);
    }
    function maxx(l, r) {
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