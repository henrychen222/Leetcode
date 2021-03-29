/**
 * 02/26/21 afternoon   03/28/21 night copy
 * https://leetcode.com/problems/reconstruct-original-digits-from-english/
 */

const pr = console.log;

// Accepted --- 108ms 50.00%
/**
 * reference:
 * https://www.cnblogs.com/grandyang/p/5996239.html
 * https://leetcode.com/problems/reconstruct-original-digits-from-english/discuss/91203/Share-my-simple-and-easy-O(N)-solution
 */
const originalDigits = (s) => {
    let m = {};
    let f = Array(10).fill(0);
    for (const c of s) {
        m.hasOwnProperty(c) ? m[c]++ : m[c] = 1;
    }
    pr(m)
    f[0] = m['z'] || 0;
    f[2] = m['w'] || 0;
    f[4] = m['u'] || 0;
    f[6] = m['x'] || 0;
    f[8] = m['g'] || 0;
    f[1] = (m['o'] || 0) - f[0] - f[2] - f[4];
    f[3] = (m['h'] || 0) - f[8];
    f[5] = (m['f'] || 0) - f[4];
    f[7] = (m['s'] || 0) - f[6];
    f[9] = (m['i'] || 0) - f[6] - f[8] - f[5];
    pr(f);
    let res = '';
    for (let i = 0; i < 10; i++) {
        res += (i + '').repeat(f[i]);
    }
    return res;
};

/////////////////////////////////// 02/26/21 afternoon //////////////////////////
// WA 14/24 don't understand the test cases
let m, f;
const originalDigits1 = (s) => {
    m = {};
    f = Array(10).fill(1);
    for (const c of s) {
        m.hasOwnProperty(c) ? m[c]++ : m[c] = 1;
    }
    pr(m);
    let res = [];
    while (canContinue()) {
        if (hasZero()) {
            m['z']--;
            m['e']--;
            m['r']--;
            m['o']--;
            res.push('0');
        } else {
            f[0] = 0;
        }
        if (hasOne()) {
            m['o']--;
            m['n']--;
            m['e']--;
            res.push('1');
        } else {
            f[1] = 0;
        }
        if (hasTwo()) {
            m['t']--;
            m['w']--;
            m['o']--;
            res.push('2');
        } else {
            f[2] = 0;
        }
        if (hasThree()) {
            m['t']--;
            m['h']--;
            m['r']--;
            m['e'] -= 2;
            res.push('3');
        } else {
            f[3] = 0;
        }
        if (hasFour()) {
            m['f']--;
            m['o']--;
            m['u']--;
            m['r']--;
            res.push('4');
        } else {
            f[4] = 0;
        }
        if (hasFive()) {
            m['f']--;
            m['i']--;
            m['v']--;
            m['e']--;
            res.push('5');
        } else {
            f[5] = 0;
        }
        if (hasSix()) {
            m['s']--;
            m['i']--;
            m['x']--;
            res.push('6');
        } else {
            f[6] = 0;
        }
        if (hasSeven()) {
            m['s']--;
            m['e'] -= 2;
            m['v']--;
            m['n']--;
            res.push('7');
        } else {
            f[7] = 0;
        }
        if (hasEight()) {
            m['e']--;
            m['i']--;
            m['g']--;
            m['h']--;
            m['t']--;
            res.push('8');
        } else {
            f[8] = 0;
        }
        if (hasNine()) {
            m['n'] -= 2;
            m['i']--;
            m['e']--;
            res.push('9');
        } else {
            f[9] = 0;
        }
        pr(m);
    }
    return res.sort((a, b) => a.localeCompare(b)).join("");
};

// const canContinue = () => {
//     if (f.some(x => x == 1)) return true;
//     return false;
// };

const canContinue = () => {
    if (f[0] || f[1] || f[2] || f[3] || f[4] || f[5] || f[6] || f[7] || f[8] || f[9]) return true;
    return false;
};

const hasZero = () => {
    if (m.hasOwnProperty('z') && m.hasOwnProperty('e') && m.hasOwnProperty('r') && m.hasOwnProperty('o')) {
        if (m['z'] >= 1 && m['e'] >= 1 && m['r'] >= 1 && m['o'] >= 1) {
            return true;
        }
    } else {
        return false;
    }
};

const hasOne = () => {
    if (m.hasOwnProperty('o') && m.hasOwnProperty('n') && m.hasOwnProperty('e')) {
        if (m['o'] >= 1 && m['n'] >= 1 && m['e'] >= 1) {
            return true;
        }
    } else {
        return false;
    }
};

const hasTwo = () => {
    if (m.hasOwnProperty('t') && m.hasOwnProperty('w') && m.hasOwnProperty('o')) {
        if (m['t'] >= 1 && m['w'] >= 1 && m['o'] >= 1) {
            return true;
        }
    }
    return false;
};

const hasThree = () => {
    if (m.hasOwnProperty('t') && m.hasOwnProperty('h') && m.hasOwnProperty('r') && m.hasOwnProperty('e')) {
        if (m['t'] >= 1 && m['h'] >= 1 && m['r'] >= 1 && m['e'] >= 2) {
            return true;
        }
    }
    return false;
};

const hasFour = () => {
    if (m.hasOwnProperty('f') && m.hasOwnProperty('o') && m.hasOwnProperty('u') && m.hasOwnProperty('r')) {
        if (m['f'] >= 1 && m['o'] >= 1 && m['u'] >= 1 && m['r'] >= 1) {
            return true;
        }
    }
    return false;
};

const hasFive = () => {
    if (m.hasOwnProperty('f') && m.hasOwnProperty('i') && m.hasOwnProperty('v') && m.hasOwnProperty('e')) {
        if (m['f'] >= 1 && m['i'] >= 1 && m['v'] >= 1 && m['e'] >= 1) {
            return true;
        }
    }
    return false;
};

const hasSix = () => {
    if (m.hasOwnProperty('s') && m.hasOwnProperty('i') && m.hasOwnProperty('x')) {
        if (m['s'] >= 1 && m['i'] >= 1 && m['x'] >= 1) {
            return true;
        }
    }
    return false;
};

const hasSeven = () => {
    if (m.hasOwnProperty('s') && m.hasOwnProperty('e') && m.hasOwnProperty('v') && m.hasOwnProperty('n')) {
        if (m['s'] >= 1 && m['e'] >= 2 && m['v'] >= 1 && m['n'] >= 1) {
            return true;
        }
    }
    return false;
};

const hasEight = () => {
    if (m.hasOwnProperty('e') && m.hasOwnProperty('i') && m.hasOwnProperty('g') && m.hasOwnProperty('h') && m.hasOwnProperty('t')) {
        if (m['e'] >= 1 && m['i'] >= 1 && m['g'] >= 1 && m['h'] >= 1 && m['t'] >= 1) {
            return true;
        }
    }
    return false;
};

const hasNine = () => {
    if (m.hasOwnProperty('n') && m.hasOwnProperty('i') && m.hasOwnProperty('e')) {
        if (m['n'] >= 2 && m['i'] >= 1 && m['e'] >= 1) {
            return true;
        }
    }
    return false;
};

const main = () => {
    let s = "owoztneoer";
    let s2 = "fviefuro";
    let s3 = 'threeonetwoone';
    pr(originalDigits(s));
    pr(originalDigits(s2));
    pr(originalDigits(s3)); // "1123"

    // No need to consider, wrong case
    // let test1 = "es"
    // let test2 = "ertf"
    // pr(originalDigits(test1)); // "479" ?? why
    // pr(originalDigits(test2)); // "34"  ?? why
};

main()


/**
 * 1: o n e
 * 2: t w o
 * 3: t h r e e
 * 4: f o u r
 * 5: f i v e
 * 6: s i x
 * 7: s e v e n
 * 8: e i g h t
 * 9: n i n e
 */