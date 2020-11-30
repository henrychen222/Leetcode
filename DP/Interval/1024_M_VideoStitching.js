/**
 * 11.29 night
 * https://leetcode.com/problems/video-stitching/
 * 
 * reference:
 * https://leetcode.com/problems/video-stitching/discuss/270036/JavaC%2B%2BPython-Greedy-Solution-O(1)-Space
 */

// Accepted --- 80ms 61.54%  Greedy
const videoStitching = (clips, T) => {
    let n = clips.length;
    let res = 0;
    clips.sort((a, b) => a[0] - b[0]);
    let i = start = end = 0;
    while (start < T) {
        while (i < n && clips[i][0] <= start) {
            end = Math.max(end, clips[i][1]);
            i++;
        }
        // console.log(res, start, end, i)
        if (start == end) return -1;
        start = end;
        res++;
    }
    return res;
};

// Accepted --- 76ms 84.62%
const videoStitching_DP = (clips, T) => {
    let dp = new Array(T + 1).fill(T + 1);
    dp[0] = 0;
    for (let i = 1; i <= T && dp[i - 1] < T; i++) {
        for (const c of clips) {
            if (c[0] < i && i <= c[1]) {
                dp[i] = Math.min(dp[i], dp[c[0]] + 1);
            }
        }
    }
    return dp[T] == T + 1 ? -1 : dp[T];
};

// Accepted --- 84ms 38.46%
const videoStitching_DP_modify = (clips, T) => {
    let dp = new Array(T + 1).fill(T + 1);
    dp[0] = 0;
    for (let i = 1; i <= T; i++) {
        if (dp[i - 1] < T) {
            for (const c of clips) {
                if (c[0] < i && i <= c[1]) {
                    dp[i] = Math.min(dp[i], dp[c[0]] + 1);
                }
            }
        }
    }
    return dp[T] == T + 1 ? -1 : dp[T];
};

// Accepted --- 72ms 96.15%
const videoStitching_DP_modify2 = (clips, T) => {
    let dp = new Array(T + 1).fill(T + 1);
    dp[0] = 0;
    for (let i = 1; i <= T; i++) {
        if (dp[i - 1] >= T) continue;
        for (const c of clips) {
            if (c[0] < i && i <= c[1]) {
                dp[i] = Math.min(dp[i], dp[c[0]] + 1);
            }
        }
    }
    return dp[T] == T + 1 ? -1 : dp[T];
};

const main = () => {
    let clips = [
            [0, 2],
            [4, 6],
            [8, 10],
            [1, 9],
            [1, 5],
            [5, 9]
        ],
        T = 10;
    let clips2 = [
            [0, 1],
            [1, 2]
        ],
        T2 = 5;
    let clips3 = [
            [0, 1],
            [6, 8],
            [0, 2],
            [5, 6],
            [0, 4],
            [0, 3],
            [6, 7],
            [1, 3],
            [4, 7],
            [1, 4],
            [2, 5],
            [2, 6],
            [3, 4],
            [4, 5],
            [5, 7],
            [6, 9]
        ],
        T3 = 9;
    let clips4 = [
            [0, 4],
            [2, 8]
        ],
        T4 = 5;
    console.log(videoStitching(clips, T));
    console.log(videoStitching(clips2, T2));
    console.log(videoStitching(clips3, T3));
    console.log(videoStitching(clips4, T4));
};

main()