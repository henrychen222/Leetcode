/**
 * 10/07/21 morning
 * https://leetcode.com/problems/stickers-to-spell-word/
 * 
 * reference:
 * https://www.cnblogs.com/grandyang/p/8468045.html
 * https://leetcode.com/contest/leetcode-weekly-contest-53/ranking/1/
 */

// Accepted --- 464ms 36.67%
const MAX = Number.MAX_SAFE_INTEGER;
const minStickers = (stickers, target) => {
    let n = target.length;
    let dp = Array(1 << n).fill(MAX);
    dp[0] = 0;
    for (let i = 0; i < 1 << n; i++) { // mask
        if (dp[i] == MAX) continue;
        for (const s of stickers) {
            let cur = i; // current mask
            for (const c of s) {
                for (let j = 0; j < n; j++) {
                    if (cur & (1 << j)) continue;
                    // if (1 & (cur >> j)) continue;   
                    // if (cur << ~j < 0) continue;
                    if (c == target[j]) {
                        cur |= 1 << j; // set jth bit (to 1)
                        break;
                    }
                }
            }
            dp[cur] = Math.min(dp[cur], dp[i] + 1);
            // pr(dp[cur])
        }
    }
    return dp[(1 << n) - 1] == MAX ? -1 : dp[(1 << n) - 1];
};

const pr = console.log
const main = () => {
    let stickers = ["with", "example", "science"],
        target = "thehat";
    let stickers2 = ["notice", "possible"],
        target2 = "basicbasic";
    let stickers_debug1 = ["summer", "sky", "cent", "bright", "kill", "forest", "neighbor", "capital", "tall"],
        target_debug1 = "originalchair"
    pr(minStickers(stickers, target))
    pr(minStickers(stickers2, target2))
    pr(minStickers(stickers_debug1, target_debug1)) // 3
};

main()