/*
 * 06/24/23 evening
 * https://leetcode.com/contest/weekly-contest-351/problems/robot-collisions/
 */

const pr = console.log;

// Memory out of Array
// const survivedRobotsHealths = (p, h, d) => {
//     let max = Math.max(...p), a = Array(max + 1).fill(0), res = Array(p.length).fill(0);
//     p.map((x, i) => a[x] = d[i] == 'R' ? [h[i], i] : [-h[i], i]);
//     a = a.filter(x => x != 0);
//     let v = asteroidCollision(a);
//     // pr(a)
//     // pr(v)
//     for (const [x, i] of v) res[i] = Math.abs(x);
//     return res.filter(x => x != 0);
// };

// Accepted
const survivedRobotsHealths = (p, h, d) => {
    let m = {}, res = Array(p.length).fill(0);
    p.map((x, i) => m[x] = d[i] == 'R' ? [h[i], i] : [-h[i], i]);
    let a = [];
    for (const k in m) a.push(m[k])
    let v = asteroidCollision(a);
    // pr(a)
    // pr(v)
    for (const [x, i] of v) res[i] = Math.abs(x);
    return res.filter(x => x != 0);
};

const asteroidCollision = (a) => {
    let st = [];
    for (const [x, i] of a) {
        st.push([x, i]);
        let l, li, sl, sli;
        if (st.length >= 1) [l, li] = st[st.length - 1];
        if (st.length >= 2) [sl, sli] = st[st.length - 2];
        while (st.length >= 2 && l < 0 && sl > 0) {
            st.pop();
            st.pop();
            let add, idx;
            if (-l > sl) {
                add = -(-l - 1);
                idx = li;
            } else if (-l < sl) {
                add = sl - 1;
                idx = sli;
            }
            if (add) st.push([add, idx]);
            if (st.length >= 1) [l, li] = st[st.length - 1];
            if (st.length >= 2) [sl, sli] = st[st.length - 2];
        }
    }
    return st;
};

const main = () => {
    let p = [5, 4, 3, 2, 1], h = [2, 17, 9, 15, 10], d = "RRRRR";
    let p2 = [3, 5, 2, 6], h2 = [10, 10, 15, 12], d2 = "RLRL"
    let p3 = [1, 2, 5, 6], h3 = [10, 10, 11, 11], d3 = "RLRL";
    let p_debug1 = [2], h_debug1 = [2], d_debug1 = "L";
    let p_debug2 = [11, 44, 16], h_debug2 = [1, 20, 17], d_debug2 = "RLR";
    let p_debug3 = [1000000000], h_debug3 = [1000000000], d_debug3 = "R";
    let p_debug4 = [13, 3], h_debug4 = [17, 2], d_debug4 = "LR";
    pr(survivedRobotsHealths(p, h, d))
    pr(survivedRobotsHealths(p2, h2, d2))
    pr(survivedRobotsHealths(p3, h3, d3))
    pr(survivedRobotsHealths(p_debug1, h_debug1, d_debug1)) // [ 2 ]
    pr(survivedRobotsHealths(p_debug2, h_debug2, d_debug2)) // [ 18 ]
    pr(survivedRobotsHealths(p_debug3, h_debug3, d_debug3)) // 
    pr(survivedRobotsHealths(p_debug4, h_debug4, d_debug4)) // [ 16 ]
};

main()

// pr(comb(5, 4))