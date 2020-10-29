/**
 * 10.27 afternoon
 * https://leetcode.com/problems/number-of-recent-calls/
 */

// Accepted --- 472ms 29.18%
function RecentCounter() {
    this.requests = [];
};

RecentCounter.prototype.ping = function (t) {
    this.requests.push(t);
    this.requests = this.requests.filter(x => x >= t - 3000);
    return this.requests.length;
};


// Accepted --- 224ms 82.50%
function RecentCounter() {
    this.requests = [];
};

RecentCounter.prototype.ping = function (t) {
    this.requests.push(t);
    while (this.requests[0] < t - 3000) {
        this.requests.shift();
    }
    return this.requests.length;
};