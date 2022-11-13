/**
 * 10.31 morning
 * https://leetcode.com/contest/biweekly-contest-38/problems/count-substrings-that-differ-by-one-character/
 */

// const countSubstrings = (s, t) => {
//     let ns = s.length;
//     let nt = t.length;
//     let setS = new Set();
//     let setT = new Set();
//     for (let i = 0; i < ns; i++) {
//         for (let j = i; j < ns; j++) {
//             let subss = s.slice(i, j + 1);
//             // console.log(subss);
//             if (subss.length != 0) setS.add(subss);
//         }
//     }
//     for (let i = 0; i < nt; i++) {
//         for (let j = i; j < nt; j++) {
//             let subst = t.slice(i, j + 1);
//             if (subst.length != 0) setT.add(subst);
//         }
//     }
//     console.log(setS, setT);
//     let cnt = 0;
//     setS.forEach(s => {
//         setT.forEach(t => {
//             if (s.length > t.length) {
//                 if (ok(t, s, 1)) {
//                     console.log(s, t, ok(s, t, 1));
//                     cnt++;
//                 }
//             } else if (t.length < s.length) {
//                 if (ok(s, t, 1)) {
//                     console.log(s, t, ok(s, t, 1));
//                     cnt++;
//                 }
//             } else {
//                 if (ok(s, t, 1) && s != t) {
//                     console.log(s, t, ok(s, t, 1));
//                     cnt++;
//                 }
//             }
//         });
//     });
//     return cnt;
// };


// Accepted
const countSubstrings = (s, t) => {
    let ns = s.length;
    let nt = t.length;
    let setS = [];
    let setT = [];
    for (let i = 0; i < ns; i++) {
        for (let j = i; j < ns; j++) {
            let subss = s.slice(i, j + 1);
            if (subss.length != 0) setS.push(subss);
        }
    }
    for (let i = 0; i < nt; i++) {
        for (let j = i; j < nt; j++) {
            let subst = t.slice(i, j + 1);
            if (subst.length != 0) setT.push(subst);
        }
    }
    console.log(setS, setT);
    let cnt = 0;
    setS.forEach(s => {
        setT.forEach(t => {
            if (ok(s, t, 1) && s != t && s.length == t.length) {
                console.log(s, t, ok(s, t, 1));
                cnt++;
            }
        });
    });
    return cnt;
};

const ok = (short, long) => {
    let diff = long.length - short.length;
    let cnt = 0;
    for (let i = 0; i < short.length; i++) {
        if (cnt > 1) return false;
        if (short[i] != long[i]) {
            cnt++;
        }
    }
    if ((diff + cnt) > 1) return false;
    return true;
}

const main = () => {
    let s = "aba", t = "baba";
    let s2 = "ab", t2 = "bb";
    let s3 = "a", t3 = "a";
    let s4 = "abe", t4 = "bbc";
    console.log(countSubstrings(s, t));
    console.log(countSubstrings(s2, t2));
    console.log(countSubstrings(s3, t3));
    console.log(countSubstrings(s4, t4));
    // console.log(equals(s, t, 1));
};

main()