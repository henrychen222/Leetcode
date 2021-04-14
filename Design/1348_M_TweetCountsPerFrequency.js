/**
 * 04/13/21 morning
 * https://leetcode.com/problems/tweet-counts-per-frequency/
 */

const M = 60;
const H = 3600;
const D = 86400;

// Accepted --- 388ms 19.56%
function TweetCounts() {
    let m = new Map();
    return {
        recordTweet,
        getTweetCountsPerFrequency
    }

    function recordTweet(tweetName, time) {
        if (!m.has(tweetName)) m.set(tweetName, []);
        m.get(tweetName).push(time);
    }

    function getTweetCountsPerFrequency(freq, tweetName, st, et) {
        let a = m.get(tweetName).sort((x, y) => x - y);
        let p;
        if (freq == 'minute') {
            p = M;
        } else if (freq == 'hour') {
            p = H;
        } else if (freq == 'day') {
            p = D;
        }
        let block = [];
        let i;
        for (i = st; i + p - 1 <= et; i += p) { // i + p <= et + 1 works, but i + p < et will WA
            block.push([i, i + p - 1]);
        }
        if (et >= i) {
            block.push([i, et]);
        }
        let res = [];
        for (const b of block) {
            let l = b[0];
            let r = b[1];
            let cnt = 0;
            for (const e of a) {
                if (e >= l && e <= r) {
                    cnt++;
                } else if (e > r) {
                    break;
                }
            }
            res.push(cnt);
        }
        return res;
    }
}


const pr = console.log;
const main = () => {
    let tweetCounts = new TweetCounts();
    tweetCounts.recordTweet("tweet3", 0);
    tweetCounts.recordTweet("tweet3", 60);
    tweetCounts.recordTweet("tweet3", 10);
    pr(tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 0, 59)); // [2]
    pr(tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 0, 60)); // [2,1]
    tweetCounts.recordTweet("tweet3", 120);
    pr(tweetCounts.getTweetCountsPerFrequency("hour", "tweet3", 0, 210)); // [4]
};

main()


/*

["TweetCounts","recordTweet","recordTweet","recordTweet","recordTweet","recordTweet","recordTweet","recordTweet","recordTweet","getTweetCountsPerFrequency","recordTweet","getTweetCountsPerFrequency","recordTweet"]
[[],["tweet0",19],["tweet1",34],["tweet2",36],["tweet3",59],["tweet4",64],["tweet2",48],["tweet4",21],["tweet2",44],["minute","tweet1",59,9302],["tweet2",74],["minute","tweet4",64,2783],["tweet2",16]]


try to truncate the long 20's test case
["TweetCounts","recordTweet","recordTweet","recordTweet","recordTweet","recordTweet","recordTweet","recordTweet","recordTweet","recordTweet", "recordTweet", "getTweetCountsPerFrequency","getTweetCountsPerFrequency", "getTweetCountsPerFrequency"]
[[],["tweet0",631372],["tweet1",806061698],["tweet2",143450529],["tweet3",666934331],["tweet4",548592405],["tweet4",145316744],["tweet3",90353872],["tweet4",184256024],["tweet3",259210120],["tweet3",97980791],["day","tweet4",666934331,666938901],["minute","tweet3",631372,633829], ["hour","tweet1",438777326,438777985]]
*/