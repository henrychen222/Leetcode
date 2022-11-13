/**
 * 05/01/21 evening
 * https://leetcode.com/contest/weekly-contest-239/problems/splitting-a-string-into-descending-consecutive-values/
 */

const pr = console.log;

// Accepted --- 124ms  AC 51 minutes after contest 12:51
const splitString = (s) => {
    let n = s.length;
    let f = [];
    for (let i = 0; i < n; i++) {
        let first = Number(s.slice(0, i));
        if (first == 0) continue;
        f.push(first);
    }
    // pr("first", f);
    for (const e of f) {
        let tmp = e + '';
        let re = [e];
        let pre = e;
        while (pre >= 1 && tmp.length <= n) {
            tmp += (pre - 1).toString();
            re.push(pre - 1);
            pre--;
        }
        // pr(re, tmp, s);
        if (isMatch(re, s)) return 1;
    }
    return 0;
};

const isMatch = (re, ss) => {
    // pr("\nmatch", re, ss, '\n')
    let s = ss;
    for (const num of re) {
        // pr("search", num, s)
        let find = 0;
        for (let i = 0; i < s.length; i++) {
            let cur = s.slice(0, i + 1);
            // pr("cur", cur, Number(cur));
            if (cur.length > 0 && Number(cur) == num) {
                find = 1;
                s = s.slice(i + 1);
                // pr(s);
                break;
            }
        }
        // pr(find, num, s)
        if (s.length == 0) return 1;
        if (!find) return 0;
    }
    // if (Number(s) != 0) return 0;
    // return 1;

    // Accepted --- 88ms
    if (s.length == 0 || Number(s) == 0) return 1;
    return 0;
};

const main = () => {
    let s = "1234";
    let s2 = "050043";
    let s3 = "9080701";
    let s4 = "10009998";
    let s_debug1 = "0095749573";
    let s_debug2 = "1051546050";
    let s_debug3 = "200100";
    pr(splitString(s)); // 0
    pr(splitString(s2)); // 1
    pr(splitString(s3)); // 0
    pr(splitString(s4)); // 1
    pr(splitString(s_debug1)); // 1
    pr(splitString(s_debug2)); // 0
    pr(splitString(s_debug3)); // 1
};

main()


// let s = '3';
// pr(s.slice(0, 0))