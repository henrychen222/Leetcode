/**
 * 12.28 night   05/30/21 copy
 * https://leetcode.com/problems/snapshot-array/
 */

// Accepted --- 356ms 78.60%
function SnapshotArray(length) {
    let t = 0;
    let a = [new Map()]; // snap_id length array
    return {
        set,
        snap,
        get
    }

    function set(idx, v) {
        a[t].set(idx, v);
    }

    function snap() {
        a.push(new Map()); // each snap enlarge the array
        t++;
        return t - 1;
    }

    function get(idx, snap_id) {
        // pr(a, idx, snap_id);
        for (let i = snap_id; ~i; i--) {
            if (a[i].has(idx)) {
                return a[i].get(idx);
            }
        }
        return 0;
    }
};

// reference: https://leetcode.com/problems/snapshot-array/discuss/454280/Java-list-and-map-explained-clean-beats-95
// Accepted --- 380ms 49.82%
function SnapshotArray2(length) {
    let a = [new Map()];
    return {
        set,
        snap,
        get
    }

    function set(idx, v) {
        let snap_id = a.length - 1;
        a[snap_id].set(idx, v);
    }

    function snap() {
        a.push(new Map());
        return a.length - 2;
    }

    function get(idx, snap_id) {
        pr(a);
        for (let i = snap_id; ~i; i--) {
            if (a[i].has(idx)) {
                return a[i].get(idx);
            }
        }
        return 0;
    }
};

////////////////////////////////////////////////////////////////////
function pair(snap_id, v) {
    this.snap_id = snap_id;
    this.v = v;
}

// don't know
function SnapshotArray1(length) {
    let t = 0;
    let a = Array(length).fill([]);
    return {
        set,
        snap,
        get
    }

    function set(idx, v) {
        a[idx].push(new pair(t, v));
    }

    function snap() {
        let snap_id = t;
        // pr(a);
        t++;
        let n = a.length;
        for (let i = 0; i < n; i++) {
            let d = [...a[i]];
            d.push(new pair(t, 0));
            a[i] = d;
        }
        return snap_id;
    }

    function get(idx, snap_id) {
        // pr(a);
        let d = a[idx];
        // pr("get", d);
        let n = d.length;
        for (let i = n - 1; ~i; i--) {
            if (d[i].snap_id == snap_id) {
                // pr(d[i], snap_id)
                return d[i].v;
            }
        }
    }
};


const pr = console.log;
const main = () => {
    let snapshotArr = new SnapshotArray(3);
    snapshotArr.set(0, 5);
    pr(snapshotArr.snap()); // 0
    snapshotArr.set(0, 6);
    pr(snapshotArr.get(0, 0)); // 5

    pr("\n-----")
    let snapshotArr2 = new SnapshotArray(1);
    snapshotArr2.set(0, 4);
    snapshotArr2.set(0, 16);
    snapshotArr2.set(0, 13);
    pr(snapshotArr2.snap()); // 0
    pr(snapshotArr2.get(0, 0)); // 13
    pr(snapshotArr2.snap()); // 1

    pr("\n-----")
    let snapshotArr3 = new SnapshotArray(4);
    pr(snapshotArr3.snap());
    pr(snapshotArr3.snap());
    pr(snapshotArr3.get(3, 1));
    snapshotArr3.set(2, 4);
    pr(snapshotArr3.snap());
    snapshotArr3.set(1, 4);

    pr("\n-----")
    let snapshotArr4 = new SnapshotArray(2);
    snapshotArr4.set(0, 12);
    pr(snapshotArr4.snap()); // 0
    pr(snapshotArr4.snap()); // 1
    pr(snapshotArr4.get(1, 0)); // 0
    pr(snapshotArr4.get(1, 0)); // 0
    pr(snapshotArr4.snap()); // 2
    pr(snapshotArr4.snap()); // 3


    pr("\n-----")
    let snapshotArr5 = new SnapshotArray(1);
    snapshotArr5.set(0, 15);
    pr(snapshotArr5.snap()); // 0
    pr(snapshotArr5.snap()); // 1
    pr(snapshotArr5.snap()); // 2
    pr(snapshotArr5.get(0, 2)); // 15
    pr(snapshotArr5.snap()); // 3
    pr(snapshotArr5.snap()); // 4
    pr(snapshotArr5.get(0, 0)); // 15
};

main()



// issue
// class SnapshotArray {
//     constructor(length) {
//         this.a = Array(length).fill([]);
//         this.cnt = 0;
//     }

//     set(index, val) {
//         let find = false;
//         for (let i = 0; i < this.a[index].length; i++) {
//             if (this.a[index][i].snap_id == this.cnt) {
//                 find = true;
//                 this.a[index][i].val = val;
//             }
//         }
//         console.log("1111", this.a, this.a[index])
//         if (!find) {
//             this.a[index].push({
//                 snap_id: this.cnt,
//                 val: val
//             });
//         }
//     }

//     snap() {
//         this.cnt++;
//         return this.cnt - 1;
//     }

//     get(index, snap_id) {
//         // console.log(this.a)
//         let res = this.a[index].find(x => x.snap_id == snap_id);
//         return res == undefined ? 0 : res.val;
//     }
// }