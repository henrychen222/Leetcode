/**
 * 04/26/21 night
 * https://leetcode.com/problems/making-file-names-unique/
 */

const pr = console.log;

// Accepted --- 156ms 100.00%
const getFolderNames = (names) => {
    let m = new Map();
    let res = new Set();
    for (const s of names) {
        // pr(m, res);
        if (!m.has(s) && !res.has(s)) {
            res.add(s);
            m.set(s, 0);
        } else {
            let cnt = m.get(s) || 0;
            while (1) {
                cnt++;
                let cs = s + '(' + cnt + ')';
                if (!res.has(cs)) {
                    res.add(cs);
                    m.set(s, cnt);
                    break;
                }
            }
        }
    }
    return [...res];
};

const main = () => {
    let names = ["pes", "fifa", "gta", "pes(2019)"];
    let names2 = ["gta", "gta(1)", "gta", "avalon"];
    let names3 = ["onepiece", "onepiece(1)", "onepiece(2)", "onepiece(3)", "onepiece"];
    let names4 = ["wano", "wano", "wano", "wano"];
    let names5 = ["kaido", "kaido(1)", "kaido", "kaido(1)"];
    let debug1 = ["kingston(0)", "kingston", "kingston"];
    let debug2 = ["kaido", "kaido(1)", "kaido", "kaido(1)", "kaido(2)"]
    pr(getFolderNames(names));
    pr(getFolderNames(names2));
    pr(getFolderNames(names3));
    pr(getFolderNames(names4));
    pr(getFolderNames(names5));
    pr(getFolderNames(debug1)); // ["kingston(0)","kingston","kingston(1)"]
    pr(getFolderNames(debug2)); // ["kaido","kaido(1)","kaido(2)","kaido(1)(1)","kaido(2)(1)"]
};

main()


// if (s[n - 1] == ')') {
//     let idx = s.lastIndexOf('(');
//     t = s.slice(0, idx);
//     let num = Number(s.slice(idx + 1, n - 1));
//     kmax = mx(kmax, num);
// } else {
//     t = s;
// }