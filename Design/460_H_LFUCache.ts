/**
 * 7.27 night
 * https://leetcode.com/problems/lfu-cache/
 * 
 * need to fix
 */
class LFUNode {
    key: number;
    data: number;
    freqCount: number;
    next: LFUNode | null;
    prev: LFUNode | null;
    constructor(key: number, data: number) {
        this.key = key;
        this.data = data;
        this.freqCount = 1;
        this.next = null;
        this.prev = null;
    }
}

class LFUDoublyLinkedList {
    head: LFUNode | null;
    tail: LFUNode | null;
    size: number;
    constructor() {
        this.head = new LFUNode(-1, -1);
        this.tail = new LFUNode(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }

    insertAtHead(node: LFUNode | null) {
        if (node && node.next && this.head && this.head.next) {
            node.next = this.head.next;
            this.head.next.prev = node;
            node.prev = this.head;
            this.size++;
        }
    }

    removeAtTail() {
        if (this.tail) {
            let oldTail = this.tail.prev;
            let prev = this.tail.prev;
            if (prev && prev.prev) {
                prev.prev.next = this.tail;
                this.tail.prev = prev.prev;
                this.size--;
                return oldTail;
            }
        }
    }

    removeNode(node: LFUNode | null) {
        if (node && node.prev && node.next) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            this.size--;
        }
    }
}

class LFUCache {
    cache: any;
    freq: any;
    minFreq: number;
    capacity: number;
    size: number;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.minFreq = 0;
        this.size = 0;
        this.cache = {};
        this.freq = {};
    }

    get(key: number): number | null {
        let node = this.cache[key];
        if (node === undefined) {
            return null;
        } else {
            let oldFreqCount = node.freqCount;
            node.freqCount++;
            this.freq[oldFreqCount].removeNode(node);
            if (this.freq[node.freqCount] === undefined) {
                this.freq[node.freqCount] = new LFUDoublyLinkedList();
            }
            this.freq[node.freqCount].insertAtHead(node);
            if (oldFreqCount == this.minFreq && Object.keys(this.freq[oldFreqCount]).length == 0) {
                this.minFreq++;
            }
        }
        return node.data;
    }

    put(key: number, value: number): void {
        let node = this.cache[key];
        if (node === undefined) {
            node = new LFUNode(key, value);
            this.cache[key] = node;
            if (this.size != this.capacity) {
                if (this.freq[1] === undefined) {
                    this.freq[1] = new LFUDoublyLinkedList();
                }
                this.freq[1].insertAtHead(node);
                this.size++;
            } else {

                console.log("freq", this.freq); // ?? object
                console.log("minFreq", this.freq[this.minFreq]);
                
                let oldTail = this.freq[this.minFreq].removeAtTail();
                console.log(oldTail); // ?? undefined
                delete this.cache[oldTail.key]; // issue
                
                if (this.freq[1] === undefined) {
                    this.freq[1] = new LFUDoublyLinkedList();
                }
                this.freq[1].insertAtHead(node);
            }
            this.minFreq = 1;
        } else {
            let oldFreqCount = node.freqCount;
            node.data = value;
            node.freqCount++;
            this.freq[oldFreqCount].removeNode(node);
            if (this.freq[node.freqCount] === undefined) {
                this.freq[node.freqCount] = new LFUDoublyLinkedList();
            }
            this.freq[node.freqCount].insertAtHead(node);
            if (oldFreqCount == this.minFreq && Object.keys(this.freq[oldFreqCount]).length == 0) {
                this.minFreq++;
            }
        }
    }
}


const main = () => {
    let cache = new LFUCache(2);

    cache.put(1, 1);
    console.log(cache);

    cache.put(2, 2);
    console.log(cache);
    console.log(cache.get(1));       // returns 1

    cache.put(3, 3);    // evicts key 2
    console.log(cache);

    // console.log(cache.get(2));       // returns -1 (not found)
    // console.log(cache.get(3));       // returns 3.
    // cache.put(4, 4);    // evicts key 1.
    // console.log(cache);

    // console.log(cache.get(1));       // returns -1 (not found)
    // console.log(cache.get(3));       // returns 3
    // console.log(cache.get(4));       // returns 4
}

main()