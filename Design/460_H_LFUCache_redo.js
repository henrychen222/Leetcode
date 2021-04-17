/**
 * 04/14/21 morning
 * https://leetcode.com/problems/lfu-cache/
 */


// Accepted --- 3544ms 5.24%
function LFUCache(capacity) {
    let m = new Map();
    let t = 0;
    return {
        get,
        put
    }

    function get(key) {
        t++;
        if (!m.has(key)) return -1;
        let tmp = m.get(key);
        m.set(key, [tmp[0] + 1, tmp[1], t]);
        // pr("\n", m, "get", key);
        return tmp[1];
    }

    function put(key, value) {
        t++;
        if (capacity == 0) return;
        let tmp = m.get(key);
        if (tmp) {
            m.set(key, [tmp[0] + 1, value, t]);
        } else {
            let curL = m.size;
            if (curL < capacity) {
                // pr("1111")
                m.set(key, [1, value, t]);
            } else {
                let a = Array.from(m.keys());
                // pr("a", a, "put", key);
                a.sort((x, y) => {
                    let tmpx = m.get(x);
                    let tmpy = m.get(y);
                    let cx = tmpx[0];
                    let cy = tmpy[0];
                    if (cx == cy) {
                        return tmpy[2] - tmpx[2];
                    }
                    return cy - cx;
                });
                // pr("a", a);
                let remove = a.pop();
                m.delete(remove);
                m.set(key, [1, value, t]);
            }
        }
        // pr("m", m, "put", key);
    }
}


const pr = console.log;
const main = () => {
    let lfu = new LFUCache(2);
    lfu.put(1, 1);
    lfu.put(2, 2);
    pr(lfu.get(1)); // 1
    lfu.put(3, 3);
    pr(lfu.get(2)); // -1
    pr(lfu.get(3)); // 3
    lfu.put(4, 4);
    pr(lfu.get(1)); // -1
    pr(lfu.get(3)); // 3
    pr(lfu.get(4)); // 4

    pr("")
    let debug1 = new LFUCache(0);
    debug1.put(0, 0);
    pr(debug1.get(0)); // -1

    pr("");
    let debug2 = new LFUCache(1);
    debug2.put(2, 1);
    pr(debug2.get(2)); // 1

    pr("");
    let debug3 = new LFUCache(2);
    debug3.put(3, 1);
    debug3.put(2, 1);
    debug3.put(2, 2);
    debug3.put(4, 4);
    pr(debug3.get(2)); // 2

    pr("");
    let debug4 = new LFUCache(2);
    pr(debug4.get(2)); // -1
    debug4.put(2, 6);
    pr(debug4.get(1)); // -1
    debug4.put(1, 5);
    debug4.put(1, 2);
    pr(debug4.get(1)); // 2
    pr(debug4.get(2)); // 6

    pr("");
    let debug5 = new LFUCache(2);
    debug5.put(2, 1);
    debug5.put(3, 2);
    pr(debug5.get(3)); // 2
    pr(debug5.get(2)); // 1
    debug5.put(4, 3);
    pr(debug5.get(2)); // 1
    pr(debug5.get(3)); // -1
    pr(debug5.get(4)); // 3

    pr("")
    let debug6 = new LFUCache(3);
    debug6.put(1, 1);
    debug6.put(2, 2);
    debug6.put(3, 3);
    debug6.put(4, 4);
    pr(debug6.get(4)); // 4
    pr(debug6.get(3)); // 3
    pr(debug6.get(2)); // 2
    pr(debug6.get(1)); // -1
    debug6.put(5, 5);
    pr(debug6.get(1)); // -1
    pr(debug6.get(2)); // 2
    pr(debug6.get(3)); // 3
    pr(debug6.get(4)); // -1
    pr(debug6.get(5)); // 5
}

main()