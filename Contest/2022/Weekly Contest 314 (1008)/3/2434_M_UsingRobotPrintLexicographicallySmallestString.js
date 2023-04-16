/*
 * 10/08/22 evening
 * https://leetcode.com/contest/weekly-contest-314/problems/using-a-robot-to-print-the-lexicographically-smallest-string/
 */

const pr = console.log;

const ord = (c) => c.charCodeAt();
const char = (ascii) => String.fromCharCode(ascii);

const robotWithString = (s) => {
    let f = Array(26).fill(0), t = [], res = '';
    for (const c of s) f[ord(c) - 97]++;
    for (const c of s) {
        f[ord(c) - 97]--;
        t.push(c);
        // pr(t.join(""), res)
        while (t.length) {
            let find = false;
            for (let i = 0; i < 26; i++) {
                let curC = char(i + 97);
                if (curC < t[t.length - 1]) { // check if can find smaller char < t's last char, in the rest of S
                    if (f[i] > 0) {
                        find = true;
                        break;
                    }
                }
            }
            if (find) { // find means there is lexical smaller one, by moving much more right
                break;
            } else { // not find, current is lexical smaller
                res += t.pop();
            }
        }
    }
    return res;
};

// WA
const robotWithString1 = (s) => {
    let n = s.length; l = '', res = '';
    for (let i = 0; i < n; i++) {
        l = s[i] + l;
        let r = s.slice(i + 1), cur = l + r;
        pr(l, r, cur);
        if (cur < res || res.length == 0) res = cur;
    }
    return res;
};

const main = () => {
    let s = "zza";
    let s2 = "bac";
    let s3 = "bdda";
    let debug1 = "bydizfve";
    pr(robotWithString(s))
    pr(robotWithString(s2))
    pr(robotWithString(s3))
    pr(robotWithString(debug1)) // "bdevfziy"
};

main()

/*
 s="bydizfve" t=""     p=""

 s="ydizfve" t=""  p="b"

 s="izfve" t="yd"  p="b"
 s="izfve" t="y"  p="bd"

 s="" t="yizfve"  p="bd"

 s="" t="yizfve"  p="bdevfziy"
*/
