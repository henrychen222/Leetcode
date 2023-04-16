/**
 * 04/16/22 evening
 * https://leetcode.com/contest/weekly-contest-289/problems/minimum-rounds-to-complete-all-tasks/
 */

const pr = console.log;

const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };

// Accepted (after contest 23 minutes)
const minimumRounds = (tasks) => {
    let m = counter(tasks), res = 0, a = Array.from(m.values());
    for(const x of a) {
        let d = [];
        if (x % 2 == 0) d.push(x /2);
        if (x % 3 == 0) d.push(x /3);
        let cur = x, cnt = 0;
        // pr("\ncur", cur)
        while(cur % 3 != 0) {
            cur -= 2;
            cnt++;
        }
        // pr("cur", cur, cnt)
        if (cur < x && cur >= 0) d.push(cnt + cur / 3);
        if (d.length == 0) return -1;
        let step = Math.min(...d);
        // pr("x", x, step, d)
        res += step;
    }
    return res;
}

const minimumRounds3 = (tasks) => {
    let m = counter(tasks), res = 0, a = Array.from(m.values());
    // pr(a);
    for (const x of a) {
        let step;
        if (x % 2 == 0) {
            let rem = x % 3;
            if (rem % 2 == 0) {
                step = parseInt(x / 3) + parseInt(rem / 2);
            } else {
                step = parseInt(x / 2);
            }
        } else {
            if (x % 3 == 0) {
                step = x / 3;
            } else {
                let rem3 = x % 3;
                // pr(x, rem3)
                if (rem3 % 2 == 0) {
                    step = parseInt(x / 3) + parseInt(rem3 / 2);
                } else {
                    // let cnt = parseInt(x / 3);
                    // if (cnt % 2 == 0) cnt--;
                    // step = cnt + (x - cnt * 3) / 2;
                    return -1;
                }
            }
        }
        pr(x, step)
        res += step;
    }
    return res;
}

const minimumRounds2 = (a) => {
    let m = counter(a), res = 0;
    pr(m)
    for (const [x, occ] of m) {
        if (occ % 3 == 0) {
            if (occ % 2 == 0) {
                res += parseInt(occ / 6), rem = occ % 6;
                rem == 0 ? m.delete(x): m.set(x, rem);
            } else {
                res += occ / 3;
                m.delete(x);
            }
        } else {
            if (occ % 2 == 0) {
                res += occ / 2;
                m.delete(x);
            } else {
                if (occ > 3) {
                    res += parseInt(occ / 3);
                    m.set(x, occ % 3);
                }
            }
        }
        pr("step1", 'occ', occ, m, res)
    }
    pr("step1", m, res)
    for (const [x, occ] of m) {
        if (occ % 2 == 0) {
            res += occ / 2;
            m.delete(x);
        }
    }
    pr("step2", m, res)
    return m.size == 0 ? res : -1;
};

const minimumRounds1 = (a) => {
    let m = counter(a), res = 0;
    pr(m)
    for (const [x, occ] of m) {
        if (occ >= 3) {
            res += parseInt(occ / 3), rem = occ % 3;
            rem > 0 ? m.set(x, rem) : m.delete(x);
        }
        pr(x, occ, "res", res, m)
    }
    pr("step1", m, res)
    for (const [x, occ] of m) {
        if (occ >= 2) {
            res += parseInt(occ / 2), rem = occ % 2;
            rem > 0 ? m.set(x, rem) : m.delete(x);
        }
        // pr(x, occ, "res", res)
    }
    pr("step2", res, m)
    return m.size == 0 ? res : -1;
};

const main = () => {
    let tasks = [2, 2, 3, 3, 2, 4, 4, 4, 4, 4];
    let tasks2 = [2, 3, 3];
    let debug1 = [5,5,5,5];
    let debug2 = [7,7,7,7,7,7];
    let debug3 = [69,65,62,64,70,68,69,67,60,65,69,62,65,65,61,66,68,61,65,63,60,66,68,66,67,65,63,65,70,69,70,62,68,70,60,68,65,61,64,65,63,62,62,62,67,62,62,61,66,69];
    let debug4 = [66,66,63,61,63,63,64,66,66,65,66,65,61,67,68,66,62,67,61,64,66,60,69,66,65,68,63,60,67,62,68,60,66,64,60,60,60,62,66,64,63,65,60,69,63,68,68,69,68,61];
    pr(minimumRounds(tasks))
    pr(minimumRounds(tasks2))
    pr(minimumRounds(debug1)) // 2
    pr(minimumRounds(debug2)) // 2
    pr(minimumRounds(debug3)) // 20
    pr(minimumRounds(debug4)) // 20
};

main()

// pr(2 + 3 + 4 + 1 + 2 + 2 + 1 + 1 + 2 + 2 + 1)

// for (let x = 6; x <= 100; x++) {
//     if (x % 2 == 0) pr(x % 6)
// }