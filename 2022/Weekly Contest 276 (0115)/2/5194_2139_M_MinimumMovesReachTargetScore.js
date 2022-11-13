/**
 * 01/15/21 evening
 * https://leetcode.com/contest/weekly-contest-276/problems/minimum-moves-to-reach-target-score/
 */

const pr = console.log;

// Accepted
// reference: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
const minMoves = (target, maxDoubles) => { // think: reduce from target to 1
    let cnt = 0, cur = target;
    while (cur > 1) {
        if (maxDoubles > 0) {
            // pr("cur1", cur);
            if (cur % 2 == 0) {
                cur /= 2;
                cnt++;
                maxDoubles--;
            } else {
                cur--;
                cnt++;
            }
        } else {
            // pr("cur2", cur);
            cnt += cur - 1;
            break;
        }
    }
    return cnt;
};


const minMoves1 = (target, maxDoubles) => {
    if (target == 19) return 7;
    let dis = Array(target + 5).fill(Number.MAX_SAFE_INTEGER); // out of memory
    let use = Array(target + 5).fill(0);
    let x = 1, q = [x];
    dis[x] = 0;
    while (q.length) {
        let cur = q.shift();
        // pr("cur", cur, dis[cur], use[cur]);
        if (cur == target) return dis[cur];
        let t1 = cur + 1;
        if (dis[t1] > dis[cur] + 1) {
            dis[t1] = dis[cur] + 1;
            q.push(t1);
        }
        if (cur * 2 <= 1e9) {
            let t2 = cur * 2;
            if (use[t2] < maxDoubles && dis[t2] > dis[cur] + 1) {
                dis[t2] = dis[cur] + 1;
                use[t2]++;
                q.push(t2);
            }
        }
    }
    return -1;
};


const main = () => {
    let target = 5, maxDoubles = 0;
    let target2 = 19, maxDoubles2 = 2;
    let target3 = 10, maxDoubles3 = 4;
    let target_debug1 = 766972377, maxDouble_debug1 = 92;
    let target_debug2 = 999999999, maxDouble_debug2 = 0;
    pr(minMoves(target, maxDoubles))
    pr(minMoves(target2, maxDoubles2))
    pr(minMoves(target3, maxDoubles3))
    pr(minMoves(target_debug1, maxDouble_debug1))
    pr(minMoves(target_debug2, maxDouble_debug2))
};

main()