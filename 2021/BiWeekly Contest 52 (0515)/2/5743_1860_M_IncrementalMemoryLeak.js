/**
 * 05/15/21 morning
 * https://leetcode.com/contest/biweekly-contest-52/problems/incremental-memory-leak/
 */

const pr = console.log;

// Accepted
const memLeak = (m1, m2) => {
    let t = 1;
    while (m1 >= t || m2 >= t) {
        if (m1 >= m2) {
            m1 -= t;
        } else {
            m2 -= t;
        }
        t++;
    }
    return [t, m1, m2];
};

const main = () => {
    let memory1 = 2, memory2 = 2;
    let memory1_2 = 8, memory2_2 = 11;
    pr(memLeak(memory1, memory2));
    pr(memLeak(memory1_2, memory2_2));
};

main()