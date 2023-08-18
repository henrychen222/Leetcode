/*
 * 07/29/23 evening
 * https://leetcode.com/contest/weekly-contest-356/problems/shortest-string-that-contains-three-strings/
 */

const pr = console.log;

const lexical_smallest_comp = (x, y) => x < y ? -1 : x > y ? 1 : 0;

const valid = (s) => hasA(s) && hasB(s) && hasC(s);
const hasA = (s) => s.indexOf(a) != -1;
const hasB = (s) => s.indexOf(b) != -1;
const hasC = (s) => s.indexOf(c) != -1;
const share = (s, t) => {
    let setS = new Set(s), setT = new Set(t);
    for (const c of setS) {
        if (setT.has(c)) return true;
    }
    for (const c of setT) {
        if (setS.has(c)) return true;
    }
    return false;
}

/////////////////////////////////////////////////////////////////////////
// Accepted
// reference: https://leetcode.cn/circle/discuss/4Am5k9/
const minimumString = (a, b, c) => {
    let d = [merge(merge(a, b), c), merge(merge(a, c), b), merge(merge(b, a), c), merge(merge(b, c), a), merge(merge(c, a), b), merge(merge(c, b), a)];
    // pr(d)
    d.sort((x, y) => {
        if (x.length != y.length) return x.length - y.length;
        return lexical_smallest_comp(x, y);
    })
    // pr(d)
    return d[0];
};

const merge = (s, t) => {
    // pr(s, t)
    if (s.indexOf(t) != -1) return s;
    for (let l = Math.min(s.length, t.length); l > 0; l--) {
        if (s.slice(-l) == t.slice(0, l)) return s.slice(0, -l) + t;
    }
    return s + t;
};

///////////////////////////////////////////////////////////////////
// TLE
let a, b, c, max, res, len, source;
const minimumString1 = (aa, bb, cc) => {
    a = aa, b = bb, c = cc, res = new Set(), len = new Set(), res = '', source = new Set();
    max = a.length + b.length + c.length;
    let d = [a + b + c, a + c + b, b + a + c, b + c + a, c + a + b, c + b + a];
    for (const c of aa) source.add(c);
    for (const c of bb) source.add(c);
    for (const c of cc) source.add(c);
    // pr(source)
    if (!share(a, b) && !share(a, c) && !share(b, c)) return d.sort()[0];
    dfs([]);
    return res;
};

const dfs = (cur) => {
    if (cur.length > max) return;
    if (len >= 2) return;
    let curS = cur.join("")
    // pr(curS)
    if (valid(curS)) {
        // pr("ok", curS)
        if (res.length == 0) {
            res = curS;
        } else {
            if (curS.length < res.length) {
                res = curS;
            } else if (curS.length == res.length && curS < res) {
                res = curS;
            }
        }
        len.add(cur.length)
    }
    for (const c of source) {
        cur.push(c);
        if (ok(cur.join(""))) dfs(cur);
        // dfs(cur);
        cur.pop();
    }
};

const ok = (s) => {
    if (!hasA(s) && !hasB(s) && !hasC(s) && s.length >= Math.max(a.length, b.length, c.length)) return false;
    return true;
};

const main = () => {
    let a = "abc", b = "bca", c = "aaa";
    let a2 = "ab", b2 = "ba", c2 = "aba";
    let a_debug1 = "xyyyz", b_debug1 = "xzyz", c_debug1 = "zzz";
    let a_debug2 = "csl", b_debug2 = "aq", c_debug2 = "bvb";
    let a_debug3 = "o", b_debug3 = "s", c_debug3 = "liaqm";
    let a_debug4 = "y", b_debug4 = "ohojl", c_debug4 = "dl";
    let a_debug5 = "ca", b_debug5 = "a", c_debug5 = "a";
    pr(minimumString(a, b, c))
    pr(minimumString(a2, b2, c2))
    pr(minimumString(a_debug1, b_debug1, c_debug1)) // "xyyyzxzyzzz"
    pr(minimumString(a_debug2, b_debug2, c_debug2)) // "aqbvbcsl"
    pr(minimumString(a_debug3, b_debug3, c_debug3)) // "liaqmos"
    pr(minimumString(a_debug4, b_debug4, c_debug4)) // "dlohojly"
    pr(minimumString(a_debug5, b_debug5, c_debug5)) // "ca"
};

main()


// pr("aaabca".indexOf("abc"))
// pr("abc".indexOf("aaabca"))

// let s = 'abcd'
// pr(s.slice(0,-2), s.slice(-2))

// let s1 = ['CA', 'ca', 'aca', 'aca', 'aca', 'aca']
// let s2 = ['CA', 'ca', 'aca', 'aca', 'aca', 'aca']
// let s3 = ['CA', 'ca', 'aca', 'aca', 'aca', 'aca']
// s1.sort((x, y) => x.localeCompare(y))
// s2.sort(lexical_smallest_comp)
// s3.sort()

// pr(s1)
// pr(s2)
// pr(s3)