// 08/14/23 noon

/*
Example problem:
https://leetcode.com/problems/apply-operations-to-maximize-score/
*/

const prevWall = (a) => { // left farthest index to reach
    let n = a.length, L = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        L[i] = i - 1;
        while (L[i] >= 0 && a[L[i]] < a[i]) L[i] = L[L[i]];
    }
    return L;
};

const nextWall = (a) => { // right farthest index to reach
    let n = a.length, R = Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        R[i] = i + 1;
        while (R[i] < n && a[R[i]] <= a[i]) R[i] = R[R[i]];
    }
    return R;
};

// reference: https://leetcode.cn/circle/discuss/ol6BYC/
const MonotonicStack_PrevNextWall = (a) => { // left/right farthest index to reach
    let n = a.length, L = Array(n).fill(-1), R = Array(n).fill(n), st = [];
    for (let i = 0; i < n; i++) {
        while (st.length && a[st[st.length - 1]] < a[i]) R[st.pop()] = i;
        if (st.length) L[i] = st[st.length - 1];
        st.push(i);
    }
    return [L, R];
};