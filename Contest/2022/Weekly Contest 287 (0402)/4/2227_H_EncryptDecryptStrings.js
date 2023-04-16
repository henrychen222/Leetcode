/**
 * 04/02/22 evening
 * https://leetcode.com/contest/weekly-contest-287/problems/encrypt-and-decrypt-strings/
 */

const pr = console.log;

const counter_value_in_indexA_in = (a_or_s) => { let m = new Map(); let n = a_or_s.length; for (let i = 0; i < n; i++) { if (!m.has(a_or_s[i])) m.set(a_or_s[i], []); m.get(a_or_s[i]).push(i); } return m; };

// Accepted
function Encrypter(k, v, dict) {
    dict = new Set(dict);
    let mk = counter_value_in_indexA_in(k), mv = counter_value_in_indexA_in(v), memo = new Map();
    return { encrypt, decrypt }
    function encrypt(s) {
        let res = '';
        for (const c of s) {
            let i = mk.get(c)[0];
            res += v[i];
        }
        return res;
    }
    function decrypt(s) {
        if (memo.has(s)) return memo.get(s);
        let res = 0;
        for (const dic of dict) {
            if (encrypt(dic) == s) res++;
        }
        memo.set(s, res);
        return res;
    }
}

////////////////////////////////////////////////////////////////////////////////
// fuck 201/203 passed TLE
function Encrypter1(k, v, dict) {
    dict = new Set(dict);
    let mk = counter_value_in_indexA_in(k), mv = counter_value_in_indexA_in(v);
    // pr(mk, mv);
    let maxLen = 0, minLen = Number.MAX_SAFE_INTEGER, memo = new Map();
    for (const dic of dict) {
        maxLen = Math.max(maxLen, dic.length);
        minLen = Math.min(minLen, dic.length);
    }
    // pr(minLen, maxLen)
    return { encrypt, decrypt }
    function encrypt(s) {
        let res = '';
        for (const c of s) {
            let i = mk.get(c)[0];
            res += v[i];
        }
        return res;
    }
    // we don't need to do dfs, just encrypt the dictionary check if == s
    function decrypt(s) { // s.length <= 200
        if (memo.has(s)) return memo.get(s);
        let n = s.length, res = 0;
        function dfs(pos, cur, len) {
            // pr(pos, cur, len);
            if (pos == n) {
                let t = cur.join("");
                // pr(t);
                if (dict.has(t)) res++;
                return;
            }
            for (let i = pos; i < n; i++) {
                if (len > maxLen) break;
                let next = s.slice(pos, i + 1); // find next substring/array
                if (!mv.has(next)) continue;
                if (allnotMatch(cur)) break;
                // pr("next", next, mv, allnotMatch(cur), cur.join(""), dict);
                let ia = mv.get(next) || [];
                for (const idx of ia) {
                    cur.push(k[idx]);
                    dfs(i + 1, cur, len + k[idx].length);
                    cur.pop();
                }
            }
        }
        dfs(0, [], 0);
        memo.set(s, res);
        return res;
    }
    function allnotMatch(cur) {
        let s = cur.join(""), allnotMatch = true;
        for (const dic of dict) {
            let isMatch = true;
            for (let i = 0; i < Math.min(dict.length, s.length); i++) {
                if (dic[i] != s[i]) {
                    isMatch = false;
                    break;
                }
            }
            if (isMatch) {
                allnotMatch = false;
            }
        }
        return allnotMatch;
    }
}

const main = () => {
    let encrypter = new Encrypter(['a', 'b', 'c', 'd'], ["ei", "zf", "ei", "am"], ["abcd", "acbd", "adbc", "badc", "dacb", "cadb", "cbda", "abad"]);
    pr(encrypter.encrypt("abcd")); // "eizfeiam"
    pr(encrypter.decrypt("eizfeiam")); // "abad" "cbad" "abcd" "cbcd"

    pr(encrypter.decrypt("ei".repeat(100)))
};

main()