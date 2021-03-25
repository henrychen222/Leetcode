/**
 * 03/23/21 evening
 * https://leetcode.com/problems/design-browser-history/
 */

const pr = console.log;

// Accepted --- 200ms 72.68%
function BrowserHistory(homepage) {
    let his = [homepage];
    let cur = 0;
    return {
        visit: visit,
        back: back,
        forward: forward
    }

    function visit(url) {
        // pr("\n---------visit---------", url)
        let n = his.length;
        let idx = -1;
        for (let i = 0; i < n; i++) {
            if (his[i] == url) {
                idx = i;
                break;
            }
        }
        if (idx == -1) {
            his = his.slice(0, cur + 1);
            his.push(url);
            cur = his.length - 1;
            // cur++; // (cur - 0 + 1 + 1) - 1  Accepted also 208ms
        } else {
            his = his.slice(0, idx + 1);
            cur = idx;
        }
        // pr(idx, his, cur, his[cur]);
    }

    function back(steps) {
        // pr("\n---------back---------")
        let pos = cur - steps;
        if (pos < 0) {
            cur = 0;
            // pr(his, cur, his[cur])
            return his[0];
        }
        cur = pos;
        // pr(his, cur, his[cur])
        return his[pos];
    }

    function forward(steps) {
        // pr("\n---------forward---------")
        let n = his.length;
        let pos = cur + steps;
        if (pos >= n) {
            cur = n - 1;
            // pr(his, cur, his[cur])
            return his[n - 1];
        }
        cur = pos;
        // pr(his, cur, his[cur])
        return his[pos];
    }
}


// Accepted --- 196ms 83.21%
class BrowserHistory2 {
    constructor(homepage) {
        this.his = [homepage];
        this.cur = 0;
    }

    visit(url) {
        let n = this.his.length;
        let idx = -1;
        for (let i = 0; i < n; i++) {
            if (this.his[i] == url) {
                idx = i;
                break;
            }
        }
        if (idx == -1) {
            this.his = this.his.slice(0, this.cur + 1);
            this.his.push(url);
            this.cur = this.his.length - 1;
            // this.cur++; // Accpeted --- 188ms 97.24%
        } else {
            this.his = this.his.slice(0, idx + 1);
            this.cur = idx;
        }
    }

    back(steps) {
        let pos = this.cur - steps;
        if (pos < 0) {
            this.cur = 0;
            return this.his[0];
        }
        this.cur = pos;
        return this.his[pos];
    }

    forward(steps) {
        let n = this.his.length;
        let pos = this.cur + steps;
        if (pos >= n) {
            this.cur = n - 1;
            return this.his[n - 1];
        }
        this.cur = pos;
        return this.his[pos];
    }
}

const main = () => {
    let browserHistory = new BrowserHistory("leetcode.com");
    browserHistory.visit("google.com");
    browserHistory.visit("facebook.com");
    browserHistory.visit("youtube.com");
    pr(browserHistory.back(1)); // facebook.com
    pr(browserHistory.back(1)); // google.com
    pr(browserHistory.forward(1)); // return facebook.com
    browserHistory.visit("linkedin.com");
    pr(browserHistory.forward(2)); // linkedin.com
    pr(browserHistory.back(2)); // google.com
    pr(browserHistory.back(7)); // leetcode.com

    pr("\n");
    let debug1 = new BrowserHistory("zav.com");
    debug1.visit("kni.com");
    pr(debug1.back(7)); // zav.com
    pr(debug1.back(7)); // zav.com
    pr(debug1.forward(5)); // kni.com
    pr(debug1.forward(1)); // kni.com
    debug1.visit("pwrrbnw.com");
    debug1.visit("mosohif.com");
    pr(debug1.back(9)); // zav.com
};

main()