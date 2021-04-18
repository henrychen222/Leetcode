/**
 * 04/17/21 evening
 * https://leetcode.com/problems/maximum-frequency-stack/
 */

const pr = console.log;

// Accepted --- 388ms 29.91%
// reference: https://leetcode.com/problems/maximum-frequency-stack/discuss/163410/C%2B%2BJavaPython-O(1)
function FreqStack() {
    let m = new Map();
    let freq = new Map();
    let maxfreq = 0;
    return {
        push,
        pop
    }

    function push(x) {
        let occ = freq.get(x) + 1 || 1;
        freq.set(x, occ);
        maxfreq = Math.max(maxfreq, occ);
        if (!m.has(occ)) m.set(occ, []);
        m.get(occ).push(x);
    }

    function pop() {
        // pr(m)
        // pr(freq);
        let remove = m.get(maxfreq).pop();
        freq.set(remove, maxfreq - 1);
        if (m.get(maxfreq).length == 0) maxfreq--;
        return remove;
    }
}

// TLE 30/37
function FreqStack2() {
    let m = new Map();
    let st = [];
    return {
        push,
        pop
    }

    function push(x) {
        st.push(x);
        m.set(x, m.get(x) + 1 || 1);
    }

    function pop() {
        let a = Array.from(m.keys());
        a.sort((x, y) => {
            let cx = m.get(x);
            let cy = m.get(y);
            if (cx == cy) return st.lastIndexOf(x) - st.lastIndexOf(y);
            return cx - cy;
        });
        let remove = a.pop();
        let idx = st.lastIndexOf(remove);
        st.splice(idx, 1);
        let cnt = m.get(remove);
        if (cnt == 1) {
            m.delete(remove);
        } else {
            m.set(remove, cnt - 1);
        }
        return remove;
    }
}

// TLE 31/37
function FreqStack1() {
    let m = new Map();
    let n = 0;
    return {
        push,
        pop
    }

    function push(x) {
        n++;
        if (m.has(x)) {
            let tmp = m.get(x);
            tmp[1].push(n - 1);
            m.set(x, [tmp[0] + 1, tmp[1]]);
        } else {
            m.set(x, [1, [n - 1]]);
        }
    }

    function pop() {
        n--;
        let a = Array.from(m.keys());
        pr(n, m);
        a.sort((x, y) => {
            let tmpx = m.get(x);
            let tmpy = m.get(y);
            let cx = tmpx[0];
            let cy = tmpy[0];
            let posx = tmpx[1];
            let posy = tmpy[1];
            if (cx == cy) return posx[posx.length - 1] - posy[posy.length - 1];
            return cx - cy;
        });
        let remove = a.pop();
        let tmp = m.get(remove);
        if (tmp[0] == 1) {
            m.delete(remove);
        } else {
            tmp[1].pop();
            m.set(remove, [tmp[0] - 1, tmp[1]]);
        }
        for (const [k, v] of m) {
            let a = v[1];
            a = a.map(x => x - 1);
            m.set(k, [v[0], a]);
        }
        return remove;
    }
}

const main = () => {
    let freqStack = new FreqStack();
    freqStack.push(5);
    freqStack.push(7);
    freqStack.push(5);
    freqStack.push(7);
    freqStack.push(4);
    freqStack.push(5);
    pr(freqStack.pop()); // 5
    pr(freqStack.pop()); // 7
    pr(freqStack.pop()); // 5
    pr(freqStack.pop()); // 4

    pr("")
    let debug1 = new FreqStack();
    debug1.push(1);
    debug1.push(0);
    debug1.push(0);
    debug1.push(1);
    debug1.push(5);
    debug1.push(4);
    debug1.push(1);
    debug1.push(5);
    debug1.push(1);
    debug1.push(6);
    pr(debug1.pop()); // 1
    pr(debug1.pop()); // 1
    pr(debug1.pop()); // 5
    pr(debug1.pop()); // 1
    pr(debug1.pop()); // 0
    pr(debug1.pop()); // 6
    pr(debug1.pop()); // 4
    pr(debug1.pop()); // 5
    pr(debug1.pop()); // 0
    pr(debug1.pop()); // 1
};

main()