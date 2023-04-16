/*
 * 01/24/23 night
 * https://leetcode.com/problems/number-of-atoms/
 */

const pr = console.log;

const isDigit = (c) => '0123456789'.indexOf(c) != -1;
const isLowerCase = (c) => /[a-z]/.test(c);
const isUpperCase = (c) => /[A-Z]/.test(c);
const addOneOrManyMap = (m, x, cnt = 1) => m.set(x, m.get(x) + cnt || cnt);

// Accepted --- 156ms 8.82%
// Accepted --- 163ms 8.82%
const countOfAtoms = (s) => {
    let r = [], n = s.length, m = new Map(), chars = new Set(), res = '';
    // for (let i = 0; i < n; i++) {
    //     if (s[i] == ')') r.push(i);
    // }
    for (let i = 0; i < n;) {
        let item = '';
        if (isUpperCase(s[i])) {
            // pr("upper", s[i])
            let start;
            if (i + 1 < n && isLowerCase(s[i + 1])) {
                item += s[i];
                let idx = -1;
                for (let j = i + 1; j < n; j++) {
                    // pr(j, s[j])
                    if (isLowerCase(s[j])) {
                        item += s[j];
                    } else {
                        idx = j;
                        break;
                    }
                }
                // pr(idx)
                if (idx != -1) {
                    start = idx - 1;
                    i = idx;
                } else {
                    start = i + 1;
                    i += 2;
                }
            } else {
                item = s[i];
                start = i;
                i++;
            }
            chars.add(item);
            let mul = findNumberAfterChar(s, start);
            mul = mul.length == 0 ? 1 : mul - '0';
            let cnt = 0;
            for (let j = start - 1; j >= 0; j--) {
                if (s[j] == '(') {
                    cnt++;
                } else if (s[j] == ')') {
                    cnt--;
                }
            }
            // pr("before", "item", item, "mul", mul, "cnt", cnt, "start", start)
            // if (item == 'N') pr("before", "item", item, "mul", mul, "cnt", cnt)

            // for (let j = r.length - 1; j >= 0 && cnt > 0; j--, cnt--) {
            //     let v = findNumberAfterChar(s, r[j]) - '0';
            //     if (item == 'N') pr(r[j], r[j] + 1, 'v', v)
            //     mul *= v;
            // }

            let left = 0;
            for (let j = start + 1; j < n && cnt > 0; j++) {
                if (s[j] == ')') {
                    if (left > 0) {
                        left--;
                    } else {
                        let v = findNumberAfterChar(s, j) - '0';
                        // pr(i, 'v', v)
                        // if (item == 'N') pr(i, 'v', v)
                        mul *= v == 0 ? 1 : v;
                        cnt--;
                    }
                } else if (s[j] == '(') {
                    left++;
                }
            }
            // pr("after", "item", item, "mul", mul)
            // if (item == 'N') pr("after", "item", item, "mul", mul)
            addOneOrManyMap(m, item, mul)
        } else {
            i++;
        }
    }
    // pr(m, chars, [...chars].sort());
    for (const c of [...chars].sort()) {
        let occ = m.get(c);
        res += occ > 1 ? c + occ : c;
    }
    return res;
};

const findNumberAfterChar = (s, start) => {
    let res = '';
    for (let i = start + 1; i < s.length && isDigit(s[i]); i++)  res += s[i];
    return res;
};

const main = () => {
    let s = "H2O";
    let s2 = "Mg(OH)2";
    let s3 = "K4(ON(SO3)2)2";
    let debug1 = "Be32";
    let debug2 = "(NB3)33";
    let test3 = "(N42)24(OB40Li30CHe3O48LiNN26)33"
    let debug3 = "((N42)24(OB40Li30CHe3O48LiNN26)33(C12Li48N30H13HBe31)21(BHN30Li26BCBe47N40)15(H5)16)14";
    let debug4 = "Mg(H2O)N";
    let debug5 = "Uuo"
    pr(countOfAtoms(s))
    pr(countOfAtoms(s2))
    pr(countOfAtoms(s3))
    pr(countOfAtoms(debug1)) // "Be32"
    pr(countOfAtoms(debug2)) // "B99N33"
    pr(countOfAtoms(test3)) // "B1320C33He99Li1023N1899O1617"
    pr(countOfAtoms(debug3)) // "B18900Be18984C4200H5446He1386Li33894N50106O22638"
    pr(countOfAtoms(debug4)) // "H2MgNO"
    pr(countOfAtoms(debug5)) // "Uuo"

    /*
    "B 18900 
    Be 18984
    C 4200
    H  5446
    He 1386
    Li 33894
    N 50106 
    O 22638"
    */
};

main()


// const countOfAtoms1 = (s) => {
//     let st = [], n = s.length, m = new Map(), pre = 1;
//     for (let i = 0; i < n; i++) {
//         if (st[st.length - 1] == ')') {
//             st.pop();
//             let t = s[i] - '0', mul = t, item = '';
//             pr("before", "pre", pre, m, st)
//             while (st.length && st[st.length - 1] != '(') {
//                 let last = st.pop();
//                 if (isDigit(last)) {
//                     mul *= last - '0';
//                 } else if (isLowerCase(last)) {
//                     item = st.pop() + last;
//                 } else {
//                     item = last;
//                 }
//                 pr(item, mul, "pre", pre, "occ", pre * mul)
//                 if (item.length > 0) {
//                     addOneOrManyMap(m, item, pre * mul);
//                     mul = t;
//                     item = '';
//                 }
//             }
//             st.pop(); // remove matched '('
//             pr("after", m, st, 't', t)
//             pre *= t;
//             pr("pre", pre)
//             i++;
//         }
//         st.push(s[i]);
//     }
//     pr("m", m)
//     for (let i = 0; i < st.length; i++) {
//         if (isDigit(st[i])) {
//             let item = '';
//             if (isLowerCase(st[i - 1])) {
//                 item = st[i - 2] + st[i - 1];
//             } else {
//                 item = st[i - 1];
//             }
//             pr(item, s[i])
//             addOneOrManyMap(m, item, st[i] - '0');
//         }
//     }
//     // pr("m", m)
// };
