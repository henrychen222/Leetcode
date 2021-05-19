/**
 * 9.12 afternoon  05/17/21 evening fix
 * https://leetcode.com/problems/online-election/
 */

const pr = console.log;

function Bisect() {
    return {
        insort_right,
        insort_left,
        bisect_left,
        bisect_right
    }

    function insort_right(a, x, lo = 0, hi = null) {
        lo = bisect_right(a, x, lo, hi);
        a.splice(lo, 0, x);
    }

    function bisect_right(a, x, lo = 0, hi = null) { // upper_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = lo + hi >> 1;
            x < a[mid] ? hi = mid : lo = mid + 1;
        }
        return lo;
    }

    function insort_left(a, x, lo = 0, hi = null) {
        lo = bisect_left(a, x, lo, hi);
        a.splice(lo, 0, x);
    }

    function bisect_left(a, x, lo = 0, hi = null) {
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = lo + hi >> 1;
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}

// Accepted --- 332ms 70%
// reference: https://leetcode.com/problems/online-election/discuss/173382/C%2B%2BJavaPython-Binary-Search-in-Times
function TopVotedCandidate(persons, times) {
    let leads = [];
    let lead = -1;
    let cnt = new Map();
    let bisect = new Bisect();
    for (const p of persons) {
        cnt.set(p, cnt.get(p) + 1 || 1);
        if (cnt.get(p) >= (cnt.get(lead) || 0)) lead = p;
        leads.push(lead);
    }
    return {
        q
    }

    function q(t) {
        return leads[(bisect.bisect_right(times, t) - 1)];
    }
}

// TLE 90/97
function TopVotedCandidate1(pe, ti) {
    let persons = pe;
    let times = ti;
    let pn = persons.length;
    let tn = times.length;
    let memo = new Map();
    return {
        q
    }

    function q(t) {
        let idx, data;
        if (memo.has(t)) {
            idx = memo.get(t);
        } else {
            let max = times[tn - 1];
            if (t > max) {
                data = persons;
            } else {
                idx = lower_bound(times, t);
            }
        }
        if (times[idx] == t) {
            data = persons.slice(0, idx + 1);
        } else if (times[idx] > t) {
            data = persons.slice(0, idx);
        }
        m = counter_value_in_indexA_de(data);
        // pr(m);
        let max = 0;
        let d = new Map();
        for (const [k, ] of m) {
            let occ = m.get(k).length;
            if (occ > max) {
                max = occ;
            }
            if (!d.has(occ)) d.set(occ, new Set());
            d.get(occ).add(k);
        }
        // pr(d, max);
        let res = [...d.get(max)];
        if (res.length == 0) return res[0];
        res.sort((a, b) => m.get(b)[0] - m.get(a)[0]);
        // pr(res);
        return res[0];
    }

    function lower_bound(a, t) {
        let low = 0;
        let n = a.length;
        let high = n - 1;
        while (low < high) {
            let mid = low + (high - low >> 1);
            if (a[mid] < t) {
                low = mid + 1;
            } else if (a[mid] > t) {
                high = mid;
            } else {
                return mid;
            }
        }
        return high;
    }
}

const counter_value_in_indexA_de = (a_or_s) => {
    let m = new Map();
    let n = a_or_s.length;
    for (let i = 0; i < n; i++) {
        if (!m.has(a_or_s[i])) m.set(a_or_s[i], []);
        m.get(a_or_s[i]).unshift(i);
    }
    return m;
};

const main = () => {
    let tc = new TopVotedCandidate([0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30]);
    console.log(tc.q(3)); // 0
    console.log(tc.q(12)); // 1
    console.log(tc.q(25)); // 1
    console.log(tc.q(15)); // 0
    console.log(tc.q(24)); // 0
    console.log(tc.q(8)); // 1

    console.log("")
    let tc_debug1 = new TopVotedCandidate([0, 0, 0, 0, 1], [0, 6, 39, 52, 75]);
    console.log(tc_debug1.q(45)); // 0
    console.log(tc_debug1.q(49)); // 0
    console.log(tc_debug1.q(59)); // 0
    console.log(tc_debug1.q(68)); // 0
    console.log(tc_debug1.q(42)); // 0
    console.log(tc_debug1.q(37)); // 0
    console.log(tc_debug1.q(99)); // 0
    console.log(tc_debug1.q(26)); // 0
    console.log(tc_debug1.q(78)); // 0
    console.log(tc_debug1.q(43)); // 0

    console.log("")
    let tc_debug2 = new TopVotedCandidate([0, 0, 1, 1, 2], [0, 67, 69, 74, 87]);
    console.log(tc_debug2.q(4)); // 0
    console.log(tc_debug2.q(62)); // 0
    console.log(tc_debug2.q(100)); // 1
    console.log(tc_debug2.q(88)); // 1
    console.log(tc_debug2.q(70)); // 0
    console.log(tc_debug2.q(73)); // 0
    console.log(tc_debug2.q(22)); // 0
    console.log(tc_debug2.q(75)); // 1
    console.log(tc_debug2.q(29)); // 0
    console.log(tc_debug2.q(10)); // 0
}

main()

////////////////////////////// 09/12/20 afternoon //////////////////
// time limit 87/97
// function TopVotedCandidate(persons, times) {
//     this.persons = persons;
//     this.times = times;
// };

// TopVotedCandidate.prototype.q = function (t) {
//     let n = this.times.length;
//     let max = this.times[n - 1];
//     let data = [];
//     if (t > max) {
//         data = this.persons;
//     } else {
//         let idx;
//         for (let i = 1; i < n; i++) {
//             if (this.times[i] > t) {
//                 idx = i - 1;
//                 break;
//             } else if (this.times[i] == t) {
//                 idx = i;
//                 break;
//             }
//         }
//         data = this.persons.slice(0, idx + 1);
//     }
//     let element = [...new Set(data)];
//     // console.log(data)
//     let res = [];
//     for (const e of element) {
//         res.push([e, getFrequency(data, e)]);
//     }
//     res.sort((a, b) => {
//         if (a[1] == b[1]) return data.lastIndexOf(b[0]) - data.lastIndexOf(a[0]);
//         return b[1] - a[1];
//     });
//     // console.log(res)
//     return res[0][0];
// };

// const getFrequency = (arr, item) => {
//     return arr.filter(x => x === item).length;
// };