/*
 * 12/10/22 evening
 * https://leetcode.com/contest/weekly-contest-323/problems/design-memory-allocator/
 */

const pr = console.log;

// Accepted
function Allocator(n) {
    let a = Array(n).fill(-1);
    return { allocate, free }
    function allocate(size, id) {
        let cnt = 0;
        for (let i = 0; i < n; i++) {
            a[i] == -1 ? cnt++ : cnt = 0; // range count
            if (cnt == size) { // previous range valid
                for (let j = 0; j < cnt; j++) a[i-j] = id;
                return i - size + 1;
            }
        }
        return -1;
    }

    // TLE
    function allocate1(size, id) {
        let res = -1;
        for (let i = 0; i < n; i++) {
            if (a[i] == -1) {
                res = i;
                let cnt = 0, ok = true;
                for (let j = i; cnt < size; j++, cnt++) {
                    if (a[j] != -1) {
                        res = -1;
                        ok = false;
                        for (let k = i; cnt > 0; k++, cnt--) { // reset
                            a[k] = -1;
                        }
                        break;
                    } else {
                        a[j] = id;
                    }
                }
                if (ok) break;
            }
        }
        // pr("allocate", a)
        return res;
    }
    function free(id) {
        let res = 0;
        for (let i = 0; i < n; i++) {
            if (a[i] == id) {
                a[i] = -1;
                res++;
            }
        }
        // pr("free", a)
        return res;
    }
}

const main = () => {
    let loc = new Allocator(10);
    pr(loc.allocate(1, 1)) // 0
    pr(loc.allocate(1, 2)); // 1
    pr(loc.allocate(1, 3)); //  2
    pr(loc.free(2)); // 1
    pr(loc.allocate(3, 4)); // 3
    pr(loc.allocate(1, 1)); // 1
    pr(loc.allocate(1, 1)); // 6
    pr(loc.free(1)); // 3
    pr(loc.allocate(10, 2)); // -1
    pr(loc.free(7)); // 0
};

main()