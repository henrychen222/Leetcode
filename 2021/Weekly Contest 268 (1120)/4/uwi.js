// 11/20/21 night

const pr = console.log;

const isPalindrome = (s) => { let n = s.length; let i = 0; let j = n - 1; while (i < j) { if (s[i++] != s[j--]) return false; } return true; };

const int = parseInt;
const kMirror = (k, n) => {
    let res = 0;
    for (let len = 1; ; len++) {
        let min = 10 ** ((len - 1) >> 1), max = 10 ** ((len + 1) >> 1);
        // pr(min, max);
        for (let base = min; base < max; base++) {
            let x = base;
            for (let i = len & 1 ? int(base / 10) : base; i > 0; i = int(i / 10)) {
                // pr("i", i);
                x = x * 10 + i % 10;
            }
            // pr("x", x);
            let s = x.toString(k);
            if (isPalindrome(s)) {
                res += x;
                n--;
                if (!n) return res;
            }
        }
    }
};

const main = () => {
    let k = 2, n = 5;
    let k2 = 3, n2 = 7;
    let k3 = 7, n3 = 17;
    let k_debug1 = 4, n_debug1 = 20;
    let k_debug2 = 3, n_debug2 = 20;
    let k_debug3 = 5, n_debug3 = 20;
    pr(kMirror(k, n))
    pr(kMirror(k2, n2))
    pr(kMirror(k3, n3))
    pr(kMirror(k_debug1, n_debug1)) // 12448815
    pr(kMirror(k_debug2, n_debug2)) // 2863752
    pr(kMirror(k_debug3, n_debug3)) // 1000828708
};

main()