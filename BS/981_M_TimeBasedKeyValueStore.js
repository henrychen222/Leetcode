/**
 * 04/06/21 night
 * https://leetcode.com/problems/time-based-key-value-store/
 */

const pr = console.log;

// Accepted --- 404ms 98.96%
// reference: https://leetcode.com/problems/time-based-key-value-store/discuss/425691/Javascript-map
function TimeMap() {
    let m = new Map();
    return {
        set,
        get
    }

    function set(k, v, t) { 
        if(!m.has(k)) m.set(k, []);
        m.get(k)[t] = v; // always manage the value array size >= t, empty is undefined
        // pr(m);
    }

    // function get(k, t) {
    //     if (!m.has(k)) return '';
    //     let cur = m.get(k);
    //     pr(cur);
    //     if (cur[t]) return cur[t];
    //     while (t--) {
    //         if (cur[t]) return cur[t];
    //     }
    //     return '';
    // }

    // Accepted --- 420ms 82.64%
    function get(k, t) {
        let a = m.get(k);
        if (a[t]) return a[t];
        while (t--) {
            if (a[t]) return a[t];
        }
        return '';
    }
};


// TLE 44/45
// function TimeMap() {
//     let m = new Map();
//     return {
//         set,
//         get
//     }

//     function set(k, v, t) {
//         m.has(k) ? m.get(k).push([t, v]) : m.set(k, [[t, v]]);
//         // if(!m.has(k)) m.set(k, []);
//         // m.get(k).push([t, v]);
//         pr(m);
//     }

//     function get(k, t) {
//         let a = m.get(k);
//         // pr(a);
//         a.sort((x, y) => y[0] - x[0]);
//         let n = a.length;
//         for (let i = 0; i < n; i++) {
//             if (t >= a[i][0]) {
//                 return a[i][1];
//             }
//         }
//         return '';
//     }
// };

const main = () => {
    let kv = new TimeMap();
    kv.set("foo", "bar", 1);
    pr(kv.get("foo", 1)); // "bar"   
    pr(kv.get("foo", 3)); // "bar" 
    kv.set("foo", "bar2", 4);
    pr(kv.get("foo", 4)); // "bar2"   
    pr(kv.get("foo", 5)); // "bar2" 
};

main()