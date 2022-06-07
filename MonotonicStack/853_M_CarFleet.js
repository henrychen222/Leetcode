/**
 * 06/03/22 evening
 * https://leetcode.com/problems/car-fleet/
 */

const pr = console.log;

// Accepted --- 488ms 15.61%
// reference: https://leetcode.com/problems/car-fleet/discuss/139850/C%2B%2BJavaPython-Straight-Forward
const carFleet = (target, pos, speed) => {
    pos = pos.map((x, i) => {
        let time = (target - x) / speed[i];
        return [x, time];
    });
    pos.sort((x, y) => x[0] - y[0]);
    // pr(pos)
    let cur = -1, res = 0, n = pos.length;
    for (let i = n - 1; ~i; i--) {
        let [, time] = pos[i];
        if (time > cur) {
            cur = time;
            res++;
        }
    }
    return res;
};

const carFleet1 = (t, pos, speed) => MonotonicStack(t, pos, speed);

// Accepted --- 330ms 61.21%
// reference: https://leetcode.com/problems/car-fleet/discuss/1108723/C%2B%2B-Detailed-Explained!-Sort-%2B-Monotonic-Stack.
const MonotonicStack = (target, pos, speed) => {
    let n = pos.length, st = [], m = new Map();
    for (let i = 0; i < n; i++) m.set(pos[i], speed[i]);
    pos.sort((x, y) => x - y);
    for (const cur of pos) {
        let cursp = m.get(cur), time = (target - cur) / cursp; // time to reach target
        // pr(st);
        while (st.length >= 1 && time >= st[st.length - 1]) st.pop(); // less time can chase up to more time car, so pop the less time elements (being chased up)
        st.push(time);
    }
    // pr(st);
    return st.length;
};

// WA
const ok = (cur, pre, cursp, presp) => (cur > pre && cursp < presp) || (cur < pre && cursp > presp) || cur == pre;
const MonotonicStack1 = (target, pos, speed) => {
    let n = pos.length, st = [], m = new Map();
    for (let i = 0; i < n; i++) m.set(pos[i], speed[i]);
    pos.sort((x, y) => x - y);
    // pr(pos);
    for (const x of pos) {
        st.push(x);
        while (st.length >= 2) {
            let cur = st[st.length - 1], pre = st[st.length - 2];
            let cursp = m.get(cur), presp = m.get(pre);
            // pr("cur", cur, "pre", pre, "cursp", cursp, "presp", presp, ok(cur, pre, cursp, presp));
            if (!ok(cur, pre, cursp, presp)) break;
            let spDiff = Math.abs(presp - cursp), dis = Math.abs(cur - pre);
            let t = spDiff == 0 ? 0 : dis / spDiff, meet = cur + t * cursp;
            if (dis % spDiff != 0) meet = Math.ceil(meet);
            // pr("t", t, "meet", meet)
            if (meet > target) break;
            st.pop();
            st.pop();
            st.push(meet);
            let meetsp = Math.min(cursp, presp);
            m.set(meet, meetsp);
        }
        // pr(st);
    }
    // pr(st);
    return st.length;
};

const main = () => {
    let target = 12,
        position = [10, 8, 0, 5, 3],
        speed = [2, 4, 1, 1, 3];
    let target2 = 10,
        position2 = [3],
        speed2 = [3];
    let target3 = 100,
        position3 = [0, 2, 4],
        speed3 = [4, 2, 1];
    let target_debug1 = 10,
        position_debug1 = [0, 4, 2],
        speed_debug1 = [2, 1, 3];
    let target_debug2 = 12,
        position_debug2 = [4, 0, 5, 3, 1, 2],
        speed_debug2 = [6, 10, 9, 6, 7, 2];
    let target_debug3 = 10,
        position_debug3 = [4, 6],
        speed_debug3 = [3, 2];
    pr(carFleet(target, position, speed))
    pr(carFleet(target2, position2, speed2))
    pr(carFleet(target3, position3, speed3))
    pr(carFleet(target_debug1, position_debug1, speed_debug1)) // 1
    pr(carFleet(target_debug2, position_debug2, speed_debug2)) // 4
    pr(carFleet(target_debug3, position_debug3, speed_debug3)) // 1
};

main()