/**
 * 09/29/21 night  10/01/21 evening complete
 * https://leetcode.com/problems/zuma-game/
 */

// Accepted --- 1512ms 37.50%
// reference: https://leetcode.com/problems/zuma-game/discuss/1011468/Classic-Java-DFS-with-Memo-that-passes-all-test-cases
const findMinStep = (board, hand) => {
    let cnt = Array(128).fill(0);
    for (const color of hand) cnt[color.charCodeAt()]++;
    return dfs(board, cnt, new Map());
};

const MAX = Number.MAX_SAFE_INTEGER;
const dfs = (board, hand, memo) => {
    if (memo.has(board)) return memo.get(board);
    let ans = MAX;
    if (board == '') return 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < hand.length; j++) {
            if (hand[j]) {
                let c = String.fromCharCode(j);
                // pr(c, j);
                board = board.slice(0, i) + c + board.slice(i);
                hand[j]--;
                let update = removeConsecutive(board);
                let res = dfs(update, hand, memo);
                if (res != -1) ans = Math.min(ans, 1 + res);
                board = board.slice(0, i) + board.slice(i + 1);
                hand[j]++;
            }
        }
    }
    memo.set(board, ans);
    return ans == MAX ? -1 : ans;
};

const removeConsecutive = (s) => {
    let i = 0,
        j = 0;
    while (i < s.length) {
        while (j < s.length && s[i] == s[j]) j++;
        if (j - i >= 3) {
            return removeConsecutive(s.slice(0, i) + s.slice(j));
        } else {
            i++;
        }
    }
    return s;
};

// Accepted --- 2122ms 37.50% 
const removeConsecutive1 = (s) => {
    let i = 0;
    while (i < s.length) {
        let j = i;
        while (j < s.length && s[i] == s[j]) j++;
        if (j - i >= 3) {
            s = s.slice(0, i) + s.slice(j);
            i = 0;
        } else {
            i++;
        }
    }
    return s;
};

const pr = console.log;
const main = () => {
    let board = "WRRBBW",
        hand = "RB";
    let board2 = "WWRRBBWW",
        hand2 = "WRBRW";
    let board3 = "G",
        hand3 = "GGGGG";
    let board4 = "RBYYBBRRB",
        hand4 = "YRBGB";
    let board_debug1 = "RRWWRRBBRR",
        hand_debug1 = "WB" // read: https://leetcode.com/problems/zuma-game/discuss/97007/SOLVED-Standard-test-program-is-wrong
    let board_debug2 = "WWBBWBBWW",
        hand_debug2 = "BB"
    let board_debug3 = "RRYGGYYRRYYGGYRR",
        hand_debug3 = "GGBBB"
    pr(findMinStep(board, hand))
    pr(findMinStep(board2, hand2))
    pr(findMinStep(board3, hand3))
    pr(findMinStep(board4, hand4))
    pr(findMinStep(board_debug1, hand_debug1)) // 2
    pr(findMinStep(board_debug2, hand_debug2)) // -1
    pr(findMinStep(board_debug3, hand_debug3)) // 5
};

main()



// WA 33/34 https://leetcode.com/problems/zuma-game/discuss/221386/Python-DFS-16-lines-very-easy-to-understand
// const findMinStep = (board, hand) => {
//     let h = '';
//     for (const c of hand) {
//         if (board.indexOf(c) == -1) continue;
//         h += c;
//     }
//     // pr(h);
//     let ans = dfs(board, h)
//     return ans == MAX ? -1 : ans;
// };

// const MAX = Number.MAX_SAFE_INTEGER;
// const dfs = (board, hand) => {
//     board = removeConsecutive(board);
//     // pr(board)
//     if (board && !hand) return MAX;
//     if (!board) return 0;
//     let ans = MAX;
//     for (let i = 0; i < board.length + 1; i++) {
//         for (let j = 0; j < hand.length; j++) {
//             let nextB = board.slice(0, i) + hand[j] + board.slice(i);
//             let nextH = hand.slice(0, j) + hand.slice(j + 1);
//             ans = Math.min(ans, 1 + dfs(nextB, nextH));
//         }
//     }
//     // pr(ans);
//     return ans;
// };

// const removeConsecutive = (s) => {
//     let i = 0;
//     for (let j = 0; j < s.length + 1; j++) {
//         if (j == s.length || s[i] != s[j]) {
//             if (j - i >= 3) return removeConsecutive(s.slice(0, i) + s.slice(j));
//             i = j;
//         }
//     }
//     return s;
// };

////////////////////////////////////////////////////////////////////////////////////////
// WA 31/34 https://zxi.mytechroad.com/blog/searching/leetcode-488-zuma-game/
// const findMinStep = (board, hand) => {
//     let cnt = Array(128).fill(0);
//     for (const color of hand) cnt[color.charCodeAt()]++;
//     // for (let i = 0; i < h.length; i++) if (h[i]) pr(i)
//     // pr(cnt);
//     return dfs(board, cnt);
// };

// const MAX = Number.MAX_SAFE_INTEGER;
// const dfs = (board, hand) => {
//     // pr(board)
//     if (board == '') return 0;
//     let ans = MAX;
//     // let i = j = 0;  issue
//     let i = 0;
//     // pr(i, j)
//     while (i < board.length) {
//         let j = i + 1;
//         while (j < board.length && board[i] == board[j]) j++;
//         let color = board[i].charCodeAt();
//         let need = 3 - (j - i);
//         if (hand[color] >= need) {
//             if (need < 0) need = 0;
//             let update = removeConsecutive(board.slice(0, i) + board.slice(j));
//             // pr('remove', update)
//             hand[color] -= need;
//             let res = dfs(update, hand);
//             if (res >= 0) ans = Math.min(ans, res + need);
//             hand[color] += need;
//         }
//         i = j;
//     }
//     return ans == MAX ? -1 : ans;
// };

// const removeConsecutive = (s) => {
//     let i = 0;
//     while (i < s.length) {
//         let j = i;
//         while (j < s.length && s[i] == s[j]) j++;
//         if (j - i >= 3) {
//             s = s.slice(0, i) + s.slice(j);
//             i = 0;
//         } else {
//             i++;
//         }
//     }
//     return s;
// };