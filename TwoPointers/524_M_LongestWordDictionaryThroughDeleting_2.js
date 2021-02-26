// 02/23/21

// final version: sort first and then directly find  96ms 81.74%
let m;
const findLongestWord = (s, d) => {
    m = new Map();
    let n = s.length;
    for (let i = 0; i < n; i++) {
        if (!m.has(s[i])) m.set(s[i], []);
        m.get(s[i]).push(i);
    }
    d.sort((a, b) => {
        if (a.length == b.length) return a.localeCompare(b);
        return b.length - a.length;
    });
    for (const ss of d) {
        if (ok(ss)) return ss;
    }
    return '';
};

const ok = (s) => {
    let compareIdx;
    for (const c of s) {
        if (m.has(c)) {
            let a = m.get(c);
            if (compareIdx == undefined) {
                compareIdx = a[0];
            } else {
                let idx = firstLarge(compareIdx, a);
                if (idx == undefined) {
                    return false;
                } else {
                    compareIdx = idx;
                }
            }
        } else {
            return false;
        }
    }
    return true;
};

const firstLarge = (compare, a) => {
    return a.find(x => x > compare);
};

const main = () => {
    let s = "abpcplea",
        d = ["ale", "apple", "monkey", "plea"];
    let s2 = "abpcplea",
        d2 = ["a", "b", "c"];
    let s_debug1 = "aewfafwafjlwajflwajflwafj",
        d_debug1 = ["apple", "ewaf", "awefawfwaf", "awef", "awefe", "ewafeffewafewf"];
    let s_debug2 = "apple",
        d_debug2 = ["zxc", "vbn"];
    console.log(findLongestWord(s, d));
    console.log(findLongestWord(s2, d2));
    console.log(findLongestWord(s_debug1, d_debug1));
    console.log(findLongestWord(s_debug2, d_debug2));
};

main()