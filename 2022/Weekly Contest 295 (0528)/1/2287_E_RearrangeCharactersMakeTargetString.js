/**
 * 05/28/22 evening
 * https://leetcode.com/contest/weekly-contest-295/problems/rearrange-characters-to-make-target-string/
 */

const pr = console.log;

// WA
const rearrangeCharacters1 = (s, t) => {
    let res = 0, pre = s;
    while (1) {
        let remove = new Set(), update = "";
        for (const c of t) {
            for (let i = 0; i < s.length; i++) {
                if (c == s[i] && !remove.has(i)) {
                    remove.add(i);
                    break;
                }
            }
        }
        pr(s, remove)
        for (let i = 0; i < s.length; i++) {
            if (!remove.has(i)) update += s[i];
        }
        s = update;
        if (s == pre) {
            break;
        } else {
            pre = s;
        }
        res++;
    }
    return res;
};

// don't know
const ord = (c) => c.charCodeAt();
const rearrangeCharacters2 = (s, t) => {
    let fs = Array(26).fill(0), ft = Array(26).fill(0), res = Number.MAX_SAFE_INTEGER;
    for (const c of s) fs[ord(c) - 97]++;
    for (const c of t) ft[ord(c) - 97]++;
    // pr(fs);
    // pr(ft);
    for (const c of t) {
        // let tocc = ft[ord(c) - 97];
        let socc = fs[ord(c) - 97];
        pr(socc);
        res = Math.min(res, socc);
    }
    return res;
};


const counter = (a_or_s) => { let m = new Map(); for (const x of a_or_s) m.set(x, m.get(x) + 1 || 1); return m; };
const removeOneOrManyMap = (m, x, cnt = 1) => { let occ = m.get(x); occ > cnt ? m.set(x, occ - cnt) : m.delete(x); };

// Accepted
const rearrangeCharacters = (s, t) => {
    let ms = counter(s), mt = counter(t), res = 0;
    // pr(ms);
    // pr(mt);
    while (1) {
        let ok = true;
        for (const [c, occ] of mt) {
            let socc = ms.get(c) || 0;
            if (socc < occ) {
               ok = false;
               break;
            } else {
                removeOneOrManyMap(ms, c, occ)
            }
        }
        if (!ok) {
            break;
        } else {
            res++;
        }
    }
    return res;
};

const main = () => {
    let s = "ilovecodingonleetcode", target = "code";
    let s2 = "abcba", target2 = "abc";
    let s3 = "abbaccaddaeea", target3 = "aaaaa";
    let s_debug1 = "codecodecodecode", target_debug1 = "codecode";
    let s_debug2 = "rav", target_debug2 = "vr";
    pr(rearrangeCharacters(s, target))
    pr(rearrangeCharacters(s2, target2))
    pr(rearrangeCharacters(s3, target3))
    pr(rearrangeCharacters(s_debug1, target_debug1)) // 2
    pr(rearrangeCharacters(s_debug2, target_debug2)) // 1
};

main()