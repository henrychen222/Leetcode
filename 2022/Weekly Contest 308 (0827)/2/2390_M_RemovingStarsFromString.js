/*
* 08/27/22 evening
https://leetcode.com/contest/weekly-contest-308/problems/removing-stars-from-a-string/
*/

const pr = console.log;

const cutMaxConsecutive = (as) => { let d = [], l = 0, n = as.length; for (let i = 0; i + 1 < n; i++) { if (as[i + 1] != as[i]) { d.push(as.slice(l, i + 1)); l = i + 1; } } d.push(as.slice(l)); return d; };

// Accepted
const removeStars = (s) => {
    let st = [];
    for (const c of s) {
        if (c == '*') {
            st.pop();
        } else {
            st.push(c);
        }
    }
    return st.join("");
};

// TLE
const removeStars1 = (s) => {
    let D = cutMaxConsecutive(s), cur = '', d = [], res = '';
    for (const e of D) {
        if (e[0] == '*') {
            d.push(cur);
            d.push(e)
            cur = '';
        } else {
            cur += e;
        }
    }
    if (cur != '') d.push(cur)
    // pr("build", d);
    while (1) {
        let hasStar = false;
        for (let i = 1; i < d.length; i++) {
            if (d[i][0] == '*' && d[i - 1][0] != '*') {
                hasStar = true;
                let min = Math.min(d[i - 1].length, d[i].length);
                d[i] = d[i].slice(0, d[i].length - min);
                d[i - 1] = d[i - 1].slice(0, d[i - 1].length - min);
            }
        }
        d = d.filter(x => x != '');
        // pr("d", d)
        if (!hasStar) break;
    }
    // pr("after remove", d);
    for (const e of d) {
        if (e[0] != '*') res += e;
    }
    return res;
};

const main = () => {
    let s = "leet**cod*e";
    let s2 = "erase*****";
    let debug1 = "abb*cdfg*****x*";
    let debug2 = "g*j*c*qtsc**j*cpyg*dck*egk*gy**hec*ngp*t*poz*os*kl**z*e******wvy****d";
    pr(removeStars(s))
    pr(removeStars(s2))
    pr(removeStars(debug1)) // "a"
    pr(removeStars(debug2)) // "qtcpydceghd"
};

main()