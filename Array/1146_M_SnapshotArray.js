/**
 * 12.28 night
 * https://leetcode.com/problems/snapshot-array/
 */


// issue
class SnapshotArray {
    constructor(length) {
        this.a = Array(length).fill([]);
        this.cnt = 0;
    }

    set(index, val) {
        let find = false;
        for (let i = 0; i < this.a[index].length; i++) {
            if (this.a[index][i].snap_id == this.cnt) {
                find = true;
                this.a[index][i].val = val;
            }
        }
        console.log("1111", this.a, this.a[index])
        if (!find) {
            this.a[index].push({
                snap_id: this.cnt,
                val: val
            });
        }
    }

    snap() {
        this.cnt++;
        return this.cnt - 1;
    }

    get(index, snap_id) {
        // console.log(this.a)
        let res = this.a[index].find(x => x.snap_id == snap_id);
        return res == undefined ? 0 : res.val;
    }
}

const main = () => {
    let snapshotArr = new SnapshotArray(3);
    snapshotArr.set(0, 5); // Set array[0] = 5
    console.log(snapshotArr.snap()); // Take a snapshot, return snap_id = 0
    snapshotArr.set(0, 6);
    console.log(snapshotArr.get(0, 0)); // Get the value of array[0] with snap_id = 0, return 5

    console.log("\n-----")
    let snapshotArr2 = new SnapshotArray(1);
    snapshotArr2.set(0, 4);
    snapshotArr2.set(0, 16);
    snapshotArr2.set(0, 13);
    console.log(snapshotArr2.snap());
    console.log(snapshotArr2.get(0, 0)); // 13
    console.log(snapshotArr2.snap());

    console.log("\n-----")
    let snapshotArr3 = new SnapshotArray(4);
    console.log(snapshotArr3.snap());
    console.log(snapshotArr3.snap());
    console.log(snapshotArr3.get(3, 1));
    snapshotArr3.set(2, 4);
    console.log(snapshotArr3.snap());
    snapshotArr3.set(1, 4);

    console.log("\n-----")
    let snapshotArr4 = new SnapshotArray(2);
    console.log(snapshotArr4.a);
    snapshotArr4.set(0, 12);
    console.log(snapshotArr4.a);
    console.log(snapshotArr4.snap());
    console.log(snapshotArr4.snap());
    console.log(snapshotArr4.get(1, 0)); // 0
    console.log(snapshotArr4.get(1, 0)); // 0
    console.log(snapshotArr4.snap());
    console.log(snapshotArr4.snap());
};

main()