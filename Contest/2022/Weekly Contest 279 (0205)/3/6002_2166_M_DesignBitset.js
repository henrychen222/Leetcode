/**
 * 02/05/21 evening
 * https://leetcode.com/contest/weekly-contest-279/problems/design-bitset/
 */

const pr = console.log;

// Accepted
// reference: PurpleCrayon
function Bitset(n) {
    let a = Array(n).fill(0), One = 0, f = 0;
    return { fix, unfix, flip, all, one, count, toString };
    function fix(idx) {
        if (a[idx] == f) {
            pr("fix", a[idx], f)
            a[idx] = f ^ 1;
            One++;
        }
    }
    function unfix(idx) {
        if (a[idx] != f) {
            pr("unfix", a[idx], f)
            a[idx] = f;
            One--;
        }
    }
    function flip() {
        f ^= 1;
        One = n - One;
    }
    function all() {
        return One == n;
    }
    function one() {
        return One >= 1;
    }
    function count() {
        return One;
    }
    function toString() {
        // pr("string", a);
        let res = '';
        for(const x of a) res += x ^ f;
        return res;
    }
}

//////////////////////////////////////////////////////////////////////
// TLE
function Bitset1(n) {
    let a = Array(n).fill(0);
    return { fix, unfix, flip, all, one, count, toString };
    function fix(idx) {
        a[idx] = 1;
    }
    function unfix(idx) {
        a[idx] = 0;
    }
    function flip() {
        // pr("flip1", a)
        let t = [];
        for (const x of a) t.push(x ^ 1);
        a = t;
        // pr("flip2", a)
    }
    function all() {
        for (let x of a) {
            if (x != 1) return false;
        }
        return true;
    }
    function one() {
        for (let x of a) {
            if (x == 1) return true;
        }
        return false;
    }
    function count() {
        let cnt = 0;
        for (let x of a) {
            if (x == 1) cnt++;
        }
        return cnt;
    }
    function toString() {
        return a.join("");
    }
}

// TLE
function Bitset2(n) {
    let a = Array(n).fill(0), Zero = n, One = 0;
    return { fix, unfix, flip, all, one, count, toString };
    function fix(idx) {
        if (a[idx] != 1) {
            a[idx] = 1;
            One++;
            Zero--;
        }
    }
    function unfix(idx) {
        if (a[idx] != 0) {
            a[idx] = 0;
            Zero++;
            One--;
        }
    }
    function flip() {
        let t = [];
        for (const x of a) {
            if (x == 0) {
               Zero--;
               One++;
            } else {
                Zero++;
                One--;
            }
            t.push(x ^ 1);
        }
        a = t;
    }
    function all() {
        return One == n;
    }
    function one() {
        return One >= 1;
    }
    function count() {
        return One;
    }
    function toString() {
        return a.join("");
    }
}

const main = () => {
    let bs = new Bitset(5); // bitset = "00000".
    bs.fix(3);
    bs.fix(1);
    bs.flip();
    pr(bs.all());      // false
    bs.unfix(0);
    bs.flip();
    pr(bs.one());      // true
    bs.unfix(0);
    pr(bs.count());    // 2
    pr(bs.toString()); // "01010"

    pr("")
    let debug1 = new Bitset(2);
    debug1.flip();
    debug1.unfix(1);
    pr(debug1.all()); // false
    debug1.fix(1);
    debug1.fix(1);
    debug1.unfix(1);
    pr(debug1.all()); // false
    pr(debug1.count()); // 1
    pr(debug1.toString()); // "10"
    pr(debug1.toString()); // "10"
    pr(debug1.toString()); // "10"
    debug1.unfix(0);
    debug1.flip();
    pr(debug1.all()); // true
    debug1.unfix(0);
    pr(debug1.one()); // true
    pr(debug1.one()); // true
    pr(debug1.all()); // false
    debug1.fix(0);
    debug1.unfix(0);
};

main()


/*
["Bitset","flip","unfix","all","fix","fix","unfix","all","count","toString","toString","toString","unfix","flip","all","unfix","one","one","all","fix","unfix"]
[[2],[],[1],[],[1],[1],[1],[],[],[],[],[],[0],[],[],[0],[],[],[],[0],[0]]

[null,null,null,false,null,null,null,false,1,"10","10","10",null,null,true,null,true,true,false,null,null]
*/