/**
 * 7.28 night
 * 
 * reference: 
 * https://github.com/henrychen222/Books/blob/master/Data%20Structures%20and%20Algorithms/JavaScript%20Data%20Structures%20and%20Algorithms.pdf (Page 184)
 */
function DoublyLinkedListNode(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
};

DoublyLinkedList.prototype.isEmpty = function () {
    return this.size == 0;
}

DoublyLinkedList.prototype.insertAtHead = function (val) { // unshift()
    if (this.head == null) {
        this.head = new DoublyLinkedListNode(val);
        this.tail = this.head;
    } else {
        let tmp = new DoublyLinkedListNode(val);
        tmp.next = this.head;
        this.head.prev = tmp;
        this.head = tmp;
    }
    this.size++;
}

DoublyLinkedList.prototype.insertAtTail = function (val) { // push()
    if (!this.tail) {
        this.tail = new DoublyLinkedListNode(val);
        this.head = this.tail;
    } else {
        let tmp = new DoublyLinkedListNode(val);
        tmp.prev = this.tail;
        this.tail.next = tmp;
        this.tail = tmp;
    }
    this.size++;
}

DoublyLinkedList.prototype.deleteAtHead = function () { // shift()
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

DoublyLinkedList.prototype.deleteAtTail = function () { // pop()
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

DoublyLinkedList.prototype.findStartingHead = function (val) {
    let currentHead = this.head;
    while (currentHead.next) {
        if (currentHead.data == val) {
            return true;
        }
        currentHead = currentHead.next;
    }
    return false;
}

DoublyLinkedList.prototype.findStartingTail = function (val) {
    let currentTail = this.tail;
    while (currentTail.prev) {
        if (currentTail.data == val) {
            return true;
        }
        currentTail = currentTail.prev;
    }
    return false;
}

const main = () => {
    let dll = new DoublyLinkedList();
    dll.insertAtHead(10); // tail: 10  head: 10
    console.log(dll);
    console.log("\n");

    dll.insertAtHead(12); // tail: 10  head: 12
    console.log(dll);
    console.log("\n");

    dll.insertAtHead(20); // tail: 10  head: 20
    console.log(dll);
    console.log("\n");

    dll.insertAtTail(30); // tail: 30  head: 20
    console.log(dll);
    console.log("\n");

    dll.deleteAtTail();
    console.log(dll); // tail: 10  head: 20
    console.log("\n");

    
    let dll2 = new DoublyLinkedList();
    dll2.insertAtHead(10); // tail: 10 head: 10 14 
    dll2.insertAtHead(12); // tail: 10 head: 12 15 
    dll2.insertAtHead(20); //  tail: 10 head: 20 16 
    dll2.insertAtTail(30); // tail: 30 head: 20
    console.log(dll2.findStartingTail(10)); // true
    console.log(dll2.findStartingTail(100)); // false
}

main();