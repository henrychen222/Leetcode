/**
 * 04/12/21 morning
 * https://leetcode.com/problems/design-twitter/
 */


// Accepted --- 76ms 91.09%
function Twitter() {
    let um = new Map();
    let fm = new Map();
    let t = 0;
    return {
        postTweet,
        getNewsFeed,
        follow,
        unfollow
    }

    function postTweet(userId, tweetId) {
        t++;
        if (!um.has(userId)) um.set(userId, []);
        um.get(userId).push([tweetId, t]);
    }

    function getNewsFeed(userId) {
        // pr(um, fm);
        let res = um.get(userId) || [];
        let fe = fm.get(userId) || new Set();
        for (const e of fe) {
            res = res.concat(um.get(e) || []);
            // pr("res", res);
        }
        res.sort((x, y) => y[1] - x[1]);
        return res.slice(0, 10).map(x => x[0]);
    }

    function follow(followerId, followeeId) {
        // pr(fm);
        // pr(followerId, followeeId);
        if (!fm.has(followerId)) fm.set(followerId, new Set());
        fm.get(followerId).add(followeeId);
    }

    function unfollow(followerId, followeeId) {
        if (fm.has(followerId)) fm.get(followerId).delete(followeeId);
    }
};


const pr = console.log;

const main = () => {
    let twitter = new Twitter();
    twitter.postTweet(1, 5);
    pr(twitter.getNewsFeed(1)); // [5]
    twitter.follow(1, 2);
    twitter.postTweet(2, 6);
    pr(twitter.getNewsFeed(1)); // [6, 5]
    twitter.unfollow(1, 2);
    pr(twitter.getNewsFeed(1)); // [5]

    pr("")
    let debug1 = new Twitter();
    debug1.follow(1, 5);
    pr(debug1.getNewsFeed(1)); // []

    pr("")
    let debug2 = new Twitter();
    debug2.postTweet(1, 5);
    debug2.postTweet(1, 3);
    pr(debug2.getNewsFeed(1)); // [3, 5]

    pr("")
    let debug3 = new Twitter();
    debug3.postTweet(1, 4);
    debug3.postTweet(2, 5);
    debug3.unfollow(1, 2);
    pr(debug3.getNewsFeed(1)); // [4]
};

main()