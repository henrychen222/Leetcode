/**
 * 7.24 night
 * reference:
 * https://github.com/henrychen222/Books/blob/master/Data%20Structures%20and%20Algorithms/JavaScript%20Data%20Structures%20and%20Algorithms.pdf (Page 199)
 * https://blog.nordible.com/Least-recently-used-cache-in-typescript/
 */
export class DLLNode { // double linkedlist node
    key: number;
    data: number;
    next: DLLNode | null;
    prev: DLLNode | null;
    constructor(key: number, data: number) {
        this.key = key;
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    cache: any;
    capacity: number;
    head: DLLNode | null;
    tail: DLLNode | null;

    constructor(capacity: number) {
        this.cache = {};
        this.capacity = capacity;
        this.head = new DLLNode(-1, -1);
        this.tail = new DLLNode(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    removeNode(node: DLLNode | null) {
        if (node) {
            let prev = node.prev;
            let next = node.next;
            if (prev) prev.next = next;
            if (next) next.prev = prev;
        }
    }

    addNode(node: DLLNode | null) {
        if (this.tail) {
            let realTail = this.tail.prev;
            if (realTail) {
                realTail.next = node;
                this.tail.prev = node;
                if (node) {
                    node.prev = realTail;
                    node.next = this.tail;
                }
            }
        }
    }

    get(key: number): number {
        let node = this.cache[key];
        if (node == undefined) {
            return -1;
        } else {
            this.removeNode(node);
            this.addNode(node);
            return node.data;
        }
    }

    set(key: number, value: number): void {
        let node = this.cache[key];
        if (node) this.removeNode(node);
        let newNode = new DLLNode(key, value);
        this.addNode(newNode);
        this.cache[key] = newNode;
        if (Object.keys(this.cache).length > this.capacity) {
            if (this.head) {
                let readHead = this.head.next;
                this.removeNode(readHead);
                if (readHead && readHead.key) delete this.cache[readHead.key];
            }
        }
    }
}

const main = () => {
    let myLRU = new LRUCache(5);
    myLRU.set(1, 1); // 1
    console.log(myLRU);
    myLRU.set(2, 2); // 1 <-> 2
    console.log(myLRU);
    myLRU.set(3, 3); // 1 <-> 2 <-> 3
    console.log(myLRU);
    myLRU.set(4, 4); // 1 <-> 2 <-> 3 <-> 4
    console.log(myLRU);
    myLRU.set(5, 5); // 1 <-> 2 <-> 3 <-> 4 <-> 5
    console.log(myLRU);

    console.log(myLRU.get(1));   // 2 <-> 3 <-> 4 <-> 5 <-> 1
    console.log(myLRU.get(2));   // 3 <-> 4 <-> 5 <-> 1 <-> 2
    console.log(myLRU.set(6, 6));// 4 <-> 5 <-> 1 <-> 2 <-> 6   
    console.log(myLRU.set(7, 7));// 5 <-> 1 <-> 2 <-> 6 <-> 7
    console.log(myLRU.set(8, 8));// 1 <-> 2 <-> 6 <-> 7 <-> 8
}

main()