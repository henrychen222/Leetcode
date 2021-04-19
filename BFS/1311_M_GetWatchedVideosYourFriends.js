/**
 * 04/18/21 afternoon
 * https://leetcode.com/problems/get-watched-videos-by-your-friends/
 */

const pr = console.log;

/**
 * reference: 
 * https://leetcode.com/problems/get-watched-videos-by-your-friends/discuss/470820/Java-BFS-%2B-sort-easy-to-understand
 */

// Accepted --- 228ms 14.29%
const watchedVideosByFriends = function (watchedVideos, friends, id, level) {
    let n = friends.length;
    let visit = Array(n).fill(0);
    visit[id] = 1;
    let q = [id]; // level friend queue
    for (let i = 1; i <= level; i++) {
        let tmp = [];
        for (const e of q) {
            for (const fid of friends[e]) {
                // pr(fid);
                if (visit[fid]) continue;
                visit[fid] = 1;
                tmp.push(fid);
            }
        }
        q = tmp;
    }
    // pr(q);
    let m = new Map();
    for (const fid of q) {
        for (const video of watchedVideos[fid]) {
            m.set(video, m.get(video) + 1 || 1);
        }
    }
    // pr(m);
    let res = Array.from(m.keys());
    res.sort((x, y) => {
        let cx = m.get(x);
        let cy = m.get(y);
        if (cx == cy) {
            return x.localeCompare(y);
        }
        return cx - cy;
    });
    return res;
};

// don't know
const watchedVideosByFriends2 = function (watchedVideos, friends, id, level) {
    let fm = new Map();
    let vm = new Map();
    let n = friends.length;
    for (let i = 0; i < n; i++) {
        let e = friends[i];
        if (!fm.has(e[0])) {
            fm.set(e[0], new Set());
            vm.set(e[0], []);
        }
        fm.get(e[0]).add(e[1]);
        vm.get(e[0]).push(i);
    }
    pr("friend", fm);
    pr("video", vm);
    let lm = new Map();
    let lfs = new Set([id]); // level friend set
    let res = [];
    for (let i = 1; i <= level; i++) {
        pr("level", i, lfs);
        let se = new Set();
        for (const e of lfs) {
            let friend = fm.get(e) || new Set();
            for (const fid of friend) {
                se.add(fid);
            }
            let video = vm.get(e) || [];
            pr(friend, video);
            for (const vidx of video) {
                res.push(watchedVideos[vidx]);
            }
        }
        lfs = se;
    }
    pr(res)
};

const watchedVideosByFriends1 = function (watchedVideos, friends, id, level) {
    let fm = new Map();
    let n = friends.length;
    for (let i = 0; i < n; i++) {
        let e = friends[i];
        if (!fm.has(e[0])) fm.set(e[0], []);
        fm.get(e[0]).push([e[1], i]);
    }
    pr(fm);
    let lm = new Map();
    let lfs = new Set([id]);
    let res = [];
    for (let i = 1; i <= level; i++) {
        let se = new Set();
        pr("level", i, lfs);
        for (const e of lfs) {
            pr(e);
            let tmp = fm.get(e) || [];
            pr(tmp);
            for (const [fid, videoIdx] of tmp) {
                pr(fid, videoIdx)
                se.add(fid);
                res.push(watchedVideos[videoIdx]);
            }
        }
        lfs = se;
    }
    pr(res)
};

const main = () => {
    let watchedVideos = [
            ["A", "B"],
            ["C"],
            ["B", "C"],
            ["D"]
        ],
        friends = [
            [1, 2],
            [0, 3],
            [0, 3],
            [1, 2]
        ],
        id = 0,
        level = 1;
    let watchedVideos2 = [
            ["A", "B"],
            ["C"],
            ["B", "C"],
            ["D"]
        ],
        friends2 = [
            [1, 2],
            [0, 3],
            [0, 3],
            [1, 2]
        ],
        id2 = 0,
        level2 = 2;
    pr(watchedVideosByFriends(watchedVideos, friends, id, level));
    pr(watchedVideosByFriends(watchedVideos2, friends2, id2, level2));
};

main()