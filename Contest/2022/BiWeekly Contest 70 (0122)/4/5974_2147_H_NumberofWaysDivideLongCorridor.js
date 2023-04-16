/**
 * 01/22/22 noon
 * https://leetcode.com/contest/biweekly-contest-70/problems/count-the-hidden-sequences/
 */

const pr = console.log;

const mod = 1e9 + 7;
const numberOfWays = (s) => {
    let n = s.length, seat = [], res = 1;
    for (let i = 0; i < n; i++) {
        if (s[i] == 'S') seat.push(i);
    }
    // pr(seat)
    let m = seat.length;
    if (m & 1 || m == 0) return 0;
    for (let i = 1; i + 1 < m; i += 2) {
        res = res * (seat[i + 1] - seat[i]) % mod; // seat[i + 1] - seat[i]: distance between two seats, means ways to insert in plants
    }
    return res % mod;
};

// WA
const numberOfWays1 = (s) => {
    let n = s.length, seat = 0;
    for (const c of s) {
        if (c == 'S') seat++;
    }
    let l = 0, r = seat, res = seat == 2 ? 1 : 0;
    for (const c of s) {
        if (l == 2 && r == 2) res++;
        if (c == 'S') {
            l++;
            r--;
        }
    }
    return res;
};

const main = () => {
    let corridor = "SSPPSPS";
    let corridor2 = "PPSPSP";
    let corridor3 = "S";
    let debug1 = "SPPSSSSPPS";
    pr(numberOfWays(corridor))
    pr(numberOfWays(corridor2))
    pr(numberOfWays(corridor3))
    pr(numberOfWays(debug1))
};

main()
