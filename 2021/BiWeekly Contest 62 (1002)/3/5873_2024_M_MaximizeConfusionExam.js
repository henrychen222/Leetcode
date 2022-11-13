/**
 * 10/02/21 morning
 * https://leetcode.com/contest/biweekly-contest-62/problems/maximize-the-confusion-of-an-exam/
 */

const pr = console.log;

const mx = Math.max;
const maxConsecutiveAnswers = (s, k) => {
    let sn = s.length;
    if (sn <= k) return sn;
    let a = [];
    let start = 0;
    for (let i = 0; i + 1 < sn; i++) {
        if (s[i + 1] != s[i]) {
            a.push(s.slice(start, i + 1));
            start = i + 1;
        }
    }
    a.push(s.slice(start));
    pr(a)
    let res1 = find(a, 'F', k);
    let res2 = find(a, 'T', k);
    pr(res1, res2)
    return mx(res1, res2);
};

// Wrong
const find = (a, c, kk) => {
    let res = 0, n = a.length;
    for (let i = 0; i < n; i++) {
        if (a[i][0] == c) {
            pr("cur", a[i], "seach", c)
            let cur = a[i].length, cnt = 0;
            let j;
            for (j = i + 1; j < n; j++) { // right search
                let t = a[j]; tn = t.length;
                if (cnt + tn < kk) {
                    cnt += tn;
                } else if (cnt + tn == kk) {
                    cnt += tn;
                    for (let k = j + 1; k < n; k++) {
                        pr("111111")
                        if (a[k][0] != c) break;
                        cnt += a[k].length;
                    }
                    res = mx(res, cur + cnt);
                    break;
                } else {
                    let plus = kk - cnt;
                    cnt += plus;
                    res = mx(res, cur + cnt);
                    break;
                }
            }
            pr("right search max", res, 'cnt', cnt)
            cnt = 0;
            for (let j = i - 1; ~j; j--) { // left search
                let t = a[j]; tn = t.length;
                if (cnt + tn < kk) {
                    cnt += tn;
                } else if (cnt + tn == kk) {
                    cnt += tn;
                    for (let k = j - 1; ~k; k--) {
                        if (a[k][0] != c) break;
                        cnt += a[k].length;
                    }
                    res = mx(res, cur + cnt);
                    break;
                } else {
                    let plus = kk - cnt;
                    cnt += plus;
                    res = mx(res, cur + cnt);
                    break;
                }
            }
            pr("left search max", res, 'cnt', cnt)
            res = mx(res, cur);
        }
    }
    return res;
};

const main = () => {
    let answerKey = "TTFF", k = 2;
    let answerKey2 = "TFFT", k2 = 1;
    let answerKey3 = "TTFTTFTT", k3 = 1;
    let answerKey_debug1 = "F", k_debug1 = 1;
    let answerKey_debug2 = "TF", k_debug2 = 2;
    let answerKey_debug3 = "TTTTTFTFFT", k_debug3 = 2;
    // pr(maxConsecutiveAnswers(answerKey, k))
    // pr(maxConsecutiveAnswers(answerKey2, k2))
    // pr(maxConsecutiveAnswers(answerKey3, k3))
    // pr(maxConsecutiveAnswers(answerKey_debug1, k_debug1)) // 1
    // pr(maxConsecutiveAnswers(answerKey_debug2, k_debug2)) // 2
    pr(maxConsecutiveAnswers(answerKey_debug3, k_debug3)) // 8
};

main()