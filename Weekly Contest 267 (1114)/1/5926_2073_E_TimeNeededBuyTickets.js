/**
 * 11/13/21 evening
 * https://leetcode.com/contest/weekly-contest-267/problems/time-needed-to-buy-tickets/
 */

const pr = console.log;

// Accepted
const timeRequiredToBuy = (a, k) => {
    a = a.map((x, i) => [x, i]);
    let res = 1;
    while(1) {
        let cur = a.shift();
        // pr(a, "cur", cur);
        if (cur[1] == k && cur[0] == 1) break;
        cur[0]--;
        if (cur[0] > 0) a.push(cur);
        res++;
    }
    return res;
};

// const timeRequiredToBuy = (a, k) => {
//     let m = {}, res = 0;
//     for (let i = 0; i < a.length; i++) m[i] =a[i];
//     pr(m);
//     while (m[k] > 0) {
//         let tmp = [];
//         let cnt = 0;
//         for (const i in m) {
//             let x = m[i];
//             if (i - '0' == k) {
//                 break;
//             }
//             if (x == 1) {
//                delete m[i];
//             } else {
//                m[i] = x - 1;
//             }
//             cnt++;
//         }
//         pr(m, cnt);
//         res += cnt;
//     }
//     return res;
// };

// const timeRequiredToBuy = (a, k) => {
//     let res = 0, round = 1;
//     while (a[k] > 0) {
//         a = a.map(x => x - 1);
//         let cnt = 0;
//         if (round == 1) {
//             cnt = k + 1;
//         } else {
//             for (const x of a) {
//                 if (x >= 0) cnt++;
//             }
//         }
//         pr(a, cnt)
//         res += cnt;
//         round++;
//     }
//     return res;
// };

const main = () => {
    let tickets = [2, 3, 2], k = 2;
    let tickets2 = [5, 1, 1, 1], k2 = 0;
    let tickets_debug1 = [84, 49, 5, 24, 70, 77, 87, 8], k_debug1 = 3;
    pr(timeRequiredToBuy(tickets, k))
    pr(timeRequiredToBuy(tickets2, k2))
    pr(timeRequiredToBuy(tickets_debug1, k_debug1)) // 154
};

main()

/*


*/