/**
 * 7.28 night
 * https://leetcode.com/problems/design-linked-list/
 */

// issue 35/57
function DoublyLinkedListNode(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
    this.head = null;
    this.tail = null;
    this.size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    // if (index >= this.size || index < 0) return -1;
    // let current = this.head;
    // let currentIdx = 0;
    // while (currentIdx != index) {
    //     current = current.next;
    //     currentIdx++;
    // }
    // return current.data;
    if (!this.size || index < 0 || index >= this.size) {
        return -1;
    } else {
        let currentNode;
        if (index < this.size / 2) {
            let counter = 0;
            currentNode = this.head;
            while (counter < index) {
                currentNode = currentNode.next;
                counter += 1;
            }
        } else {
            let counter = this.size - 1;
            currentNode = this.tail;
            while (counter > index) {
                currentNode = currentNode.prev;
                counter -= 1;
            }
        }
        return currentNode.data;
    }
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    // if (this.head == null) {
    //     this.head = new DoublyLinkedListNode(val);
    //     this.tail = this.head;
    // } else {
    //     let tmp = new DoublyLinkedListNode(val);
    //     tmp.next = this.head;
    //     this.head.prev = tmp;
    //     this.head = tmp;
    // }
    // this.size++;
    const newNode = new DoublyLinkedListNode(val);
    if (!this.size) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
    return newNode;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    // if (!this.tail) {
    //     this.tail = new DoublyLinkedListNode(val);
    //     this.head = this.tail;
    // } else {
    //     let tmp = new DoublyLinkedListNode(val);
    //     tmp.prev = this.tail;
    //     this.tail.next = tmp;
    //     this.tail = tmp;
    // }
    // this.size++;
    const newNode = new DoublyLinkedListNode(val);
    if (!this.size) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
    return newNode;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.length) {
        return null;
    } else if (index === 0) {
        return this.addAtHead(val);
    } else if (index === this.size) {
        return this.addAtTail(val);
    } else {
        const newNode = new DoublyLinkedListNode(val);
        const newPrevNode = this.getNodeAtIndex(index - 1);
        const newNextNode = newPrevNode.next;
        newNode.prev = newPrevNode;
        newPrevNode.next = newNode;
        newNode.next = newNextNode;
        newNextNode.prev = newNode;
        this.size++;
        return newNode;
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index >= this.length) return;
    let removeNode;
    if (index == 0) {
        removeNode = this.deleteAtHead();
    } else if (index == this.length - 1) {
        removeNode = this.deleteAtTail();
    } else {
        removeNode = this.getNodeAtIndex(index);
        if (removeNode && removeNode.next && removeNode.prev) {
            const after = removeNode.next;
            const before = removeNode.prev;
            removeNode.next = null;
            removeNode.prev = null;
            before.next = after;
            after.prev = before;
            this.size--;
        }

    }
    return removeNode;
};

MyLinkedList.prototype.deleteAtHead = function () {
    let toReturn = null;
    if (this.head) {
        toReturn = this.head.data;
        if (this.tail == this.head) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
    }
    this.size--;
    return toReturn;
}

MyLinkedList.prototype.deleteAtTail = function () {
    let toReturn = null;
    if (this.tail) {
        toReturn = this.tail.data;
        if (this.tail == this.head) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }
    this.size--;
    return toReturn;
}

MyLinkedList.prototype.getNodeAtIndex = function (index) {
    // if (index >= this.size || index < 0) return null;
    // let current = this.head;
    // let currentIdx = 0;
    // while (currentIdx != index) {
    //     current = current.next;
    //     currentIdx++;
    // }
    // return current;
    if (!this.size || index < 0 || index >= this.size) {
        return null;
    } else {
        let currentNode;
        if (index < this.size / 2) {
            let counter = 0;
            currentNode = this.head;
            while (counter < index) {
                currentNode = currentNode.next;
                counter += 1;
            }
        } else {
            let counter = this.size - 1;
            currentNode = this.tail;
            while (counter > index) {
                currentNode = currentNode.prev;
                counter -= 1;
            }
        }
        return currentNode;
    }
};

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
    console.log(ll_debug1.get(4));
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
}

main()