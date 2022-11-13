/**
 * 05/28/22 morning
 * https://leetcode.com/contest/biweekly-contest-79/problems/sender-with-largest-word-count/
 */

const pr = console.log;

const ord = (c) => c.charCodeAt();
const isLowerCase = (c) => { let x = ord(c); return x >= 97 && x <= 122; };
const addOneOrManyMap = (m, x, cnt = 1) => m.set(x, m.get(x) + cnt || cnt);
const stmvalue_de = (m) => new Map([...m].sort((x, y) => {
    if (x[1] == y[1]) {
        let sx = x[0], sy = y[0], n = Math.min(sx.length, sy.length);
        for (let i = 0; i < n; i++) {
            let cx = sx[i], cy = sy[i];
            if (cx != cy) {
                if (isLowerCase(cx)) {
                    if (isLowerCase(cy)) {
                        return cy.localeCompare(cx);
                    } else {
                        return -1;
                    }
                } else {
                    if (isLowerCase(cy)) {
                       return 1;
                    } else {
                        return cy.localeCompare(cx);
                    }
                }
            }
        }
        return 0;
    }
    return y[1] - x[1];
}));

// Accepted
const largestWordCount = (messages, senders) => {
    let n = messages.length, m = new Map();
    for (let i = 0; i < n; i++) {
        let cnt = messages[i].split(" ").length;
        addOneOrManyMap(m, senders[i], cnt);
    }
    // pr(m);
    m = stmvalue_de(m);
    // pr(m);
    return m.keys().next().value;
};

const main = () => {
    let messages = ["Hello userTwooo", "Hi userThree", "Wonderful day Alice", "Nice day userThree"], senders = ["Alice", "userTwo", "userThree", "Alice"];
    let messages2 = ["How is leetcode for everyone", "Leetcode is useful for practice"], senders2 = ["Bob", "Charlie"];
    let messages_debug1 = ["Ux i E XMm", "G Mo f q Qa q", "v qZ J m R", "z pt T yG W xq Xq G", "GS F Ug", "QDv", "I iY k pd M", "aOi", "f xV xa", "c Zu Fa ofO", "x c E R H", "pw sfU", "i aE G Aqw", "Yu S di sV sx mc AlB", "D lx g cF k", "U fw rh Ne", "I aN o Sv aE s", "ZF c Jo IA", "Y S f Ld D M fbb", "OI Mn e Q A gT", "xV f Li v h vy I S", "Q gI G vj Qd c y r W", "Q R BK VI", "K Am NZ", "wk CT", "p sQ b Se l BI We fv", "x WF fW l n px WY rz", "S rW mh", "a T og TA b Gg h", "t v WO", "Ai bO mY", "e AMh", "t nfH", "q F G ch N", "sf W iH yx M Pf YjA", "uE D", "hA F q NX", "Fm", "lI C Vl Em md d L", "az kz i bx g v dD", "Fq UR qf hh", "C r Nq u Ve i", "x tT BR Bj d a yu G", "Nm M DM h Wu", "IZ y Lo ZN Yv", "l Kh ia Rt", "VR cg C fM mL MH", "a P e Gb", "Xq UO", "U qM", "h bM mn e a", "WD w VT Tf dK G YPE", "cT T wc O VLT", "e q K e Ao V kw", "Ie dt JB a C y O rq", "ih Wu", "QP T G Zl Yx Q pSz", "Rs", "xA y D e e g", "Gik", "D o Y wyD", "mG z N a j fz P", "U q W", "Ei xr Zf", "wT X EI vz BI", "nj Fr g J P qH h gZa", "e wB XX s", "wL Md wt", "RE yd U rY J qx", "DO Q a U N", "p F gh fv", "xn LT vg rZ pF z xrf", "k", "DD r sh B", "Z Eg iJ Hq r VX h", "Xy N k Hd Lk ea", "teU", "n kp U k KZ aw", "UG uO ax S y", "q D SD", "r ns E Wv XR wv tP g"],
        senders_debug1 = ["K", "kFIbpoFxn", "yErgn", "N", "wtJesr", "rusffeL", "KlpoodEd", "qGcQqIVdFr", "ztmCdK", "HFILjKln", "rusffeL", "TmmQZ", "R", "CNh", "YMQDBkOWy", "kjiSc", "cGMsZxxx", "YMQDBkOWy", "PPqsmNBewN", "gbtn", "nQNcL", "rK", "ppr", "LhSVp", "Ub", "QGRFMLY", "YMQDBkOWy", "Ub", "PPqsmNBewN", "SdDObYkD", "q", "suAakSCuHz", "QGRFMLY", "dnzhjdwrEt", "ubIEXAO", "EsBuLal", "kFIbpoFxn", "yErgn", "ubIEXAO", "TmmQZ", "TmmQZ", "xlQqQRrdTv", "mWxCG", "TmmQZ", "DmwIEmS", "gbtn", "nBQLLS", "QhF", "Ub", "ppr", "bmtYQKYv", "ppr", "EsBuLal", "PRiNk", "rusffeL", "ztmCdK", "PPqsmNBewN", "rK", "xlQqQRrdTv", "QGRFMLY", "EsBuLal", "QyYJw", "QIFauTN", "dnzhjdwrEt", "zJLcUq", "ubIEXAO", "HFILjKln", "ppr", "wtJesr", "ztmCdK", "suAakSCuHz", "zJLcUq", "TU", "HFILjKln", "lCkGjDY", "A", "zJLcUq", "SdDObYkD", "YMQDBkOWy", "R", "LhSVp"]
    pr(largestWordCount(messages, senders))
    pr(largestWordCount(messages2, senders2))
    pr(largestWordCount(messages_debug1, senders_debug1)) // "ubIEXAO"
};

main()