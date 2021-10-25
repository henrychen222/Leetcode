/**
 * 10/02/21 morning
 * https://leetcode.com/contest/biweekly-contest-62/problems/maximize-the-confusion-of-an-exam/
 */

const pr = console.log;

const mx = Math.max;
const maxConsecutiveAnswers = (s, k) => {
    let res1 = find(s, 'F', k);
    let res2 = find(s, 'T', k);
    // pr(res1, res2)
    return mx(res1, res2);
};

const find = (s, c, k) => {
    let n = s.length, cnt = 0, res = 0;
    for (let i = 0, j = i; i < n; i++) {
        // pr(i, j)
        for (; j < n; j++) {
            if (s[j] == c) {
            } else if (cnt < k) {
                cnt++;
            } else {
                break;
            }
        }
        res = mx(res, j - i);
        if (s[i] != c) cnt--;
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
    let answerKey_debug4 = "FFFTTFTTFT", k_debug4 = 3;
    pr(maxConsecutiveAnswers(answerKey, k))
    pr(maxConsecutiveAnswers(answerKey2, k2))
    pr(maxConsecutiveAnswers(answerKey3, k3))
    pr(maxConsecutiveAnswers(answerKey_debug1, k_debug1)) // 1
    pr(maxConsecutiveAnswers(answerKey_debug2, k_debug2)) // 2
    pr(maxConsecutiveAnswers(answerKey_debug3, k_debug3)) // 8
    pr(maxConsecutiveAnswers(answerKey_debug4, k_debug4)) // 8
};

main()