/*
 * 11/12/23 afternoon
 * https://leetcode.com/contest/weekly-contest-371/problems/high-access-employees/
 */

const pr = console.log;

// Accepted
const findHighAccessEmployees = (g) => {
    let m = new Map(), res = [];
    for (const [c, t] of g) {
        if (!m.has(c)) m.set(c, []);
        m.get(c).push(t.slice(0, 2) + ":" + t.slice(2))
    }
    for (const [, a] of m) a.sort();
    // pr(m)
    for (const [c, a] of m) {
        for (let i = 0; i + 2 < a.length; i++) {
            let minutesDiff = calMinutes(a[i], a[i + 2]);
            // pr(a[i], a[i + 2], minutesDiff)
            if (minutesDiff < 60) {
                res.push(c);
                break;
            }
        }
    }
    return res;
};

const calMinutes = (s, t) => { // HH:MM
    let [hs, ms] = s.split(":").map(Number), [ht, mt] = t.split(":").map(Number);
    let ds = new Date(2023, 1, 1, hs, ms, 0), dt = new Date(2023, 1, 1, ht, mt, 0);
    let seconds = Math.abs(ds.getTime() - dt.getTime()) / 1000, miutes = seconds / 60;
    return miutes;
};


const main = () => {
    let g = [["a", "0549"], ["b", "0457"], ["a", "0532"], ["a", "0621"], ["b", "0540"]];
    let g2 = [["d", "0002"], ["c", "0808"], ["c", "0829"], ["e", "0215"], ["d", "1508"], ["d", "1444"], ["d", "1410"], ["c", "0809"]];
    let g3 = [["cd", "1025"], ["ab", "1025"], ["cd", "1046"], ["cd", "1055"], ["ab", "1124"], ["ab", "1120"]];
    let g_debug1 = [["akuhmu", "0454"], ["aywtqh", "0523"], ["akuhmu", "0518"], ["ihhkc", "0439"], ["ihhkc", "0508"], ["akuhmu", "0529"], ["aywtqh", "0530"], ["aywtqh", "0419"]]
    pr(findHighAccessEmployees(g))
    pr(findHighAccessEmployees(g2))
    pr(findHighAccessEmployees(g3))
    pr(findHighAccessEmployees(g_debug1)) // ["akuhmu"]
};

main()


// pr(calMinutes("08:15", "09:15"))

// pr(calMinutes("00:05", "23:50"))

// let a = ["00:05", "23:50", "09:15", "08:15"]
// a.sort();
// pr(a)
