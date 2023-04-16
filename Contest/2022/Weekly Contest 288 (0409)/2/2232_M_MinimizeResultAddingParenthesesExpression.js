/**
 * 04/09/22 evening
 * https://leetcode.com/contest/weekly-contest-288/problems/minimize-result-by-adding-parentheses-to-expression/
 */

const pr = console.log;

// Accepted
const minimizeResult = (s) => {
    let [a, b] = s.split('+'), d = [];
    for (let i = 0; i <= a.length; i++) {
        let al = a.slice(0, i), ar = a.slice(i);
        // pr("\nleft", al, ar);
        for (let j = 0; j <= b.length; j++) {
            let bl = b.slice(0, j), br = b.slice(j);
            let t = al + '(' + ar + '+' + bl + ')' + br;
            // pr("right", bl, br, "t", t, valid(t));
            if (valid(t)) {
                // pr("t", t);
                let v = cal(t);
                d.push([t, v]);
            }
        }
    }
    d.sort((x, y) => x[1] - y[1]);
    // pr(d);
    return d[0][0];
};

const cal = (s) => {
    let l = s.indexOf('('), m = s.indexOf('+'), r = s.indexOf(')');
    let a = s.slice(0, l), b = s.slice(l + 1, m), c = s.slice(m + 1, r), d = s.slice(r + 1);
    let xa = a.length == 0 ? 1 : a - '0';
    let xb = b - '0';
    let xc = c - '0';
    let xd = d.length == 0 ? 1 : d - '0';
    let v = xa * (xb + xc) * xd;
    // pr("each", 'a', a, 'b', b, 'c', c, 'd', d, v);
    return v;
};

const valid = (s) => {
    if (s.indexOf('+)') != -1 || s.indexOf('(+') != -1) return false;
    return true;
};

const main = () => {
    let expression = "247+38"
    let expression2 = "12+34"
    let expression3 = "999+999"
    pr(minimizeResult(expression))
    pr(minimizeResult(expression2))
    pr(minimizeResult(expression3))
};

main()