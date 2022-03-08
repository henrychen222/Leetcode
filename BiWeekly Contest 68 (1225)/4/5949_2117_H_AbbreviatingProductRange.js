// 12/25/21 afternoon

const pr = console.log;

const ll = BigInt;

// Accepted --- 1948ms
// reference: kmjp
const abbreviateProduct = (l, r) => {
    let p = 1n, e = 0, over10 = false, prePow = 1;
    for (let x = l; x <= r; x++) {
        // pr("step 1", p, x)
        p *= ll(x);
        // pr("step 2", p)
        while (p % 10n == 0) {
            p /= 10n;
            e++;
        }
        prePow += Math.log10(x);
        while (prePow > 100) prePow--;
        if (p > 1e10) {
            over10 = true;
            p %= ll(1e10);
        }
        // pr(p, prePow);
    }
    // pr(p, prePow);
    p = Number(p);
    // pr(p, prePow);
    if (!over10) return p + 'e' + e;
    let pre = (10 ** prePow) + '', suf = p + '';
    // pr("pre", pre, "suf", suf)
    pre.indexOf('e') == -1 ? pre = pre.slice(0, 5) : pre = pre[0] + pre.slice(2, 6);
    suf = '...' + suf.slice(-5) + 'e' + e;
    return pre + suf;
};

// TLE
const abbreviateProduct1 = (l, r) => {
    let p = 1n;
    for (let x = l; x <= r; x++) p *= ll(x);
    let s = p.toString(), n = s.length;
    pr(p);
    for (let i = n - 1; ~i; i--) {
        if (s[i] != '0') {
            let d = `${s.slice(0, i)}`, rest = `${s[i]}e${n - i - 1}`;
            pr(d);
            if (d.length >= 10) {
                d = `${d.slice(0, 5)}...${d.slice(-4)}`;
            }
            pr(d);
            d += rest;
            return d;
        }
    }
};

const main = () => {
    let left = 1, right = 4;
    let left2 = 2, right2 = 11;
    let left3 = 999998, right3 = 1000000;
    let left_debug1 = 256, right_debug1 = 65535;
    let left_debug2 = 8, right_debug2 = 18;
    let left_debug3 = 990000, right_debug3 = 990010;
    pr(abbreviateProduct(left, right));
    pr(abbreviateProduct(left2, right2));
    pr(abbreviateProduct(left3, right3));
    pr(abbreviateProduct(left_debug1, right_debug1)); // "23510...78528e16317"
    pr(abbreviateProduct(left_debug2, right_debug2)); // "12703...22432e2"
    pr(abbreviateProduct(left_debug3, right_debug3)); // "89538...56512e6"
};

main()

// pr(990000 * 990001, 990000n * 990001n)

// pr(30194030198 * 990003, 30194030198n * 990003n)