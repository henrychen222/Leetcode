
// 02/09/21 evening
// Accepted --- 128ms 96.08%
class MyLinkedList {

    constructor() {
        this.a = [];
    }

    get(idx) {
        let n = this.a.length;
        if (idx >= n) return -1;
        return this.a[idx];
    }

    addAtHead(v) {
        this.a.unshift(v);
    }

    addAtTail(v) {
        this.a.push(v);
    }

    addAtIndex(idx, val) {
        let n = this.a.length;
        if (idx > n) return;
        // console.log("idx", idx - 1)
        // console.log(this.a);
        this.a.splice(idx, 0, val);
        // console.log(this.a);
    }

    deleteAtIndex(idx) {
        let n = this.a.length;
        if (idx >= n) return;
        // console.log(this.a);
        this.a.splice(idx, 1);
        // console.log(this.a);
    }
}


const main = () => {
    let linkedList = new MyLinkedList();
    linkedList.addAtHead(1);
    linkedList.addAtTail(3);
    linkedList.addAtIndex(1, 2); // 1->2->3
    // console.log(linkedList);
    console.log(linkedList.get(1)); // 2
    linkedList.deleteAtIndex(1); // 1->3
    // console.log(linkedList);
    console.log(linkedList.get(1)); // 3

    let ll_debug1 = new MyLinkedList();
    ll_debug1.addAtHead(7);
    ll_debug1.addAtHead(2);
    ll_debug1.addAtHead(1);
    ll_debug1.addAtIndex(3, 0);
    ll_debug1.deleteAtIndex(2);
    ll_debug1.addAtHead(6);
    ll_debug1.addAtTail(4);
    console.log(ll_debug1.get(4)); // 4
    ll_debug1.addAtHead(4);
    ll_debug1.addAtIndex(5, 0);
    ll_debug1.addAtHead(6);

    let ll_debug2 = new MyLinkedList();
    ll_debug2.addAtHead(5);
    ll_debug2.addAtIndex(1, 2);
    console.log(ll_debug2)
    console.log(ll_debug2.get(1)); // 2
    ll_debug2.addAtHead(6);
    ll_debug2.addAtTail(2);
    console.log(ll_debug2.get(3)); // 2
    ll_debug2.addAtTail(1);
    console.log(ll_debug2.get(5)); // -1
    ll_debug2.addAtHead(2);
    console.log(ll_debug2.get(2)); // 5
    ll_debug2.addAtHead(6);


    console.log("\n\n")
    let ll_debug3 = new MyLinkedList();
    ll_debug3.addAtHead(84);
    ll_debug3.addAtTail(2);
    ll_debug3.addAtTail(39);
    console.log(ll_debug3.get(3)); // -1
    console.log(ll_debug3.get(1)); // 2
    ll_debug3.addAtTail(42);
    ll_debug3.addAtIndex(1, 80);
    ll_debug3.addAtHead(14);
    ll_debug3.addAtHead(1);
    ll_debug3.addAtTail(53);
    ll_debug3.addAtTail(98);
    ll_debug3.addAtTail(19);
    ll_debug3.addAtTail(12);
    console.log(ll_debug3.get(2)); // 84
    ll_debug3.addAtHead(16);
    ll_debug3.addAtHead(33);
    ll_debug3.addAtIndex(4, 17);
    ll_debug3.addAtIndex(6, 8);
    ll_debug3.addAtHead(37);
    ll_debug3.addAtTail(43);
    ll_debug3.deleteAtIndex(11);
    ll_debug3.addAtHead(80);
    ll_debug3.addAtHead(31);
    ll_debug3.addAtIndex(13, 23);
    ll_debug3.addAtTail(17);
    console.log(ll_debug3.get(4)); // 16
    ll_debug3.addAtIndex(10, 0);
    ll_debug3.addAtTail(21);
    ll_debug3.addAtHead(73);
    ll_debug3.addAtHead(22);
    ll_debug3.addAtIndex(24, 37);
    ll_debug3.addAtTail(14);
    ll_debug3.addAtHead(97);
    ll_debug3.addAtHead(8);
    console.log(ll_debug3.get(6));  // 37
    ll_debug3.deleteAtIndex(17);
    ll_debug3.addAtTail(50);
    ll_debug3.addAtTail(28);
    ll_debug3.addAtHead(76);
    ll_debug3.addAtTail(79);
    console.log(ll_debug3.get(18)); // 23
    ll_debug3.deleteAtIndex(30);
    ll_debug3.addAtTail(5);
    ll_debug3.addAtHead(9);
    ll_debug3.addAtTail(83);
    ll_debug3.deleteAtIndex(3);
    ll_debug3.addAtTail(40);
    ll_debug3.deleteAtIndex(26);
    ll_debug3.addAtIndex(20, 90);
    ll_debug3.deleteAtIndex(30);
    ll_debug3.addAtTail(40);
    ll_debug3.addAtHead(56);
    ll_debug3.addAtIndex(15, 23);
    ll_debug3.addAtHead(51);
    ll_debug3.addAtHead(21);
    console.log(ll_debug3.get(26)); // 19
    ll_debug3.addAtHead(83);
    console.log(ll_debug3.get(30)); // 17
    ll_debug3.addAtHead(12);
    ll_debug3.deleteAtIndex(8);
    console.log(ll_debug3.get(4)); // 56
    ll_debug3.addAtHead(20);
    ll_debug3.addAtTail(45);
    console.log(ll_debug3.get(10)); // 31
    ll_debug3.addAtHead(56);
    console.log(ll_debug3.get(18)); // 17
    ll_debug3.addAtTail(33);
    console.log(ll_debug3.get(2)); // 12
    ll_debug3.addAtTail(70);
    ll_debug3.addAtHead(57);
    ll_debug3.addAtIndex(31, 24);
    ll_debug3.addAtIndex(16, 92);
    ll_debug3.addAtHead(40);
    ll_debug3.addAtHead(23);
    ll_debug3.deleteAtIndex(26);
    console.log(ll_debug3.get(1)); // 40
    ll_debug3.addAtHead(92);
    ll_debug3.addAtIndex(3, 78);
    ll_debug3.addAtTail(42);
    console.log(ll_debug3.get(18)); // 37
    ll_debug3.addAtIndex(39, 9);
    console.log(ll_debug3.get(13)); // 76
    ll_debug3.addAtIndex(33, 17);
    console.log(ll_debug3.get(51)); // 42   wrong start here
    ll_debug3.addAtIndex(18, 95);
    ll_debug3.addAtIndex(18, 33);
    ll_debug3.addAtHead(80);
    ll_debug3.addAtHead(21);
    ll_debug3.addAtTail(7);
    ll_debug3.addAtIndex(17, 46);
    console.log(ll_debug3.get(33)); // 80
    ll_debug3.addAtHead(60);
    ll_debug3.addAtTail(26);
    ll_debug3.addAtTail(4);
    ll_debug3.addAtHead(9);
    console.log(ll_debug3.get(45)); // 43
    ll_debug3.addAtTail(38);
    ll_debug3.addAtHead(95);
    ll_debug3.addAtTail(78);
    console.log(ll_debug3.get(54)); // 40
    ll_debug3.addAtIndex(42, 86);

    console.log("\n\n")
    let ll_debug4 = new MyLinkedList();
    ll_debug4.addAtHead(1);
    ll_debug4.addAtTail(3);
    ll_debug4.addAtIndex(1, 2);
    console.log(ll_debug4.get(1)); // 2
    ll_debug4.deleteAtIndex(0);
    console.log(ll_debug4.get(0)); // 1
}

main()
