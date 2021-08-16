/**
 * 08/16/21
 * https://leetcode.com/problems/minimum-window-substring/
 */

// Accepted --- 92ms 86.32%
// reference: https://www.cnblogs.com/grandyang/p/4340948.html
const minWindow = (s, t) => {
    let tm = counter(t);
    let n = s.length, m = t.length, left = 0, cnt = 0, min = Number.MAX_SAFE_INTEGER, res = '';
    for (let i = 0; i < n; i++) {
        let c = s[i];
        // pr('before', tm)
        let ccnt = tm.get(c) || 0;
        ccnt--;
        // pr(c, ccnt);
        tm.set(c, ccnt);
        if (ccnt >= 0) cnt++;
        // pr('after 1', tm)
        while (cnt == m) {
            let len = i - left + 1;
            if (len < min) {
                min = len;
                res = s.substr(left, min);
            }
            let lcnt = tm.get(s[left]) || 0;
            lcnt++;
            tm.set(s[left], lcnt);
            if (lcnt > 0) cnt--;
            left++;
            // pr(tm)
        }
        // pr('after 2', tm)
        // pr()
    }
    return res;
};

// TLE
const minWindow1 = (s, t) => {
    let n = s.length,
        m = t.length,
        min = Number.MAX_SAFE_INTEGER,
        se = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let len = j - i + 1;
            if (len < m) continue;
            let sub = s.slice(i, j + 1);
            if (ok(sub, t)) {
                min = Math.min(min, len);
                se.add(sub);
            }
        }
    }
    // pr(se);
    if (min == Number.MAX_SAFE_INTEGER) return '';
    for (const e of se) {
        if (e.length == min) return e;
    }
};

const ok = (s, t) => {
    let sm = counter(s);
    let tm = counter(t);
    for (const [c, occ] of tm) {
        if (occ > (sm.get(c) || 0)) return false;
    }
    return true;
};

const counter = (a_or_s) => { let map = new Map(); for (const i of a_or_s) map.set(i, map.get(i) + 1 || 1); return map; };

const pr = console.log;
const main = () => {
    let s = "ADOBECODEBANC",
        t = "ABC";
    let s2 = "a",
        t2 = "a";
    let s3 = "a",
        t3 = "aa";
    let s_debug1 = "wegdtzwabazduwwdysdetrrctotpcepalxdewzezbfewbabbseinxbqqplitpxtcwwhuyntbtzxwzyaufihclztckdwccpeyonumbpnuonsnnsjscrvpsqsftohvfnvtbphcgxyumqjzltspmphefzjypsvugqqjhzlnylhkdqmolggxvneaopadivzqnpzurmhpxqcaiqruwztroxtcnvhxqgndyozpcigzykbiaucyvwrjvknifufxducbkbsmlanllpunlyohwfsssiazeixhebipfcdqdrcqiwftutcrbxjthlulvttcvdtaiwqlnsdvqkrngvghupcbcwnaqiclnvnvtfihylcqwvderjllannflchdklqxidvbjdijrnbpkftbqgpttcagghkqucpcgmfrqqajdbynitrbzgwukyaqhmibpzfxmkoeaqnftnvegohfudbgbbyiqglhhqevcszdkokdbhjjvqqrvrxyvvgldtuljygmsircydhalrlgjeyfvxdstmfyhzjrxsfpcytabdcmwqvhuvmpssingpmnpvgmpletjzunewbamwiirwymqizwxlmojsbaehupiocnmenbcxjwujimthjtvvhenkettylcoppdveeycpuybekulvpgqzmgjrbdrmficwlxarxegrejvrejmvrfuenexojqdqyfmjeoacvjvzsrqycfuvmozzuypfpsvnzjxeazgvibubunzyuvugmvhguyojrlysvxwxxesfioiebidxdzfpumyon",
        t_debug1 = "ozgzyywxvtublcl"
    pr(minWindow(s, t))
    pr(minWindow(s2, t2))
    pr(minWindow(s3, t3))
    pr(minWindow(s_debug1, t_debug1))
};

main()