/**
 * 03/20/21 morning
 * https://leetcode.com/contest/biweekly-contest-48/problems/design-authentication-manager/
 */

// Accepted
function AuthenticationManager(timeToLive) {
    this.m = new Map();
    this.last = timeToLive;
};

AuthenticationManager.prototype.generate = function (tokenId, currentTime) {
    this.m.set(tokenId, currentTime);
};

AuthenticationManager.prototype.renew = function (tokenId, currentTime) {
    if (!this.m.has(tokenId)) return;
    // pr(tokenId, expire, currentTime);
    let expire = this.m.get(tokenId) + this.last;
    if (expire > currentTime) this.m.set(tokenId, currentTime);
};

AuthenticationManager.prototype.countUnexpiredTokens = function (currentTime) {
    // pr(this.m);
    let cnt = 0;
    for (const [k, v] of this.m) {
        let expire = v + this.last;
        // pr(expire, currentTime);
        if (expire > currentTime) cnt++;
    }
    return cnt;
};

const pr = console.log;
const main = () => {
    let authenticationManager = new AuthenticationManager(5);
    authenticationManager.renew("aaa", 1);
    authenticationManager.generate("aaa", 2);
    pr(authenticationManager.countUnexpiredTokens(6)); // 1
    authenticationManager.generate("bbb", 7);
    authenticationManager.renew("aaa", 8);
    authenticationManager.renew("bbb", 10);
    pr(authenticationManager.countUnexpiredTokens(15)); // 0
};

main();