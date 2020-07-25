/**
* 7.24 night
 * https://leetcode.com/problems/lru-cache/
 * 
 * reference: see /Lib/Cache/LRU.ts
*/
class DLLNode {
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

// Accepted --- 1236ms 77.6MB 11.76%
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

    put(key: number, value: number): void {
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

// Accepted --- 432ms 52.5MB 29.41%
/**
 * Reference:
 * https://medium.com/sparkles-blog/a-simple-lru-cache-in-typescript-cba0d9807c40
 * https://stackoverflow.com/questions/996505/lru-cache-implementation-in-javascript
 */
class LRUCache2 {
    cache: Map<number | undefined, number | undefined> = new Map<number | undefined, number | undefined>();
    capacity: number;
    constructor(capacity: number) {
        this.capacity = capacity;
    }
    get(key: number): number | undefined {
        let val;
        if (this.cache.has(key)) {
            val = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, val);
        } else {
            val = -1;
        }
        return val;
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size == this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }
        this.cache.set(key, value);

        /* Bug Code
        if (this.cache.size >= this.capacity) {
            const itemToDelete = this.cache.keys().next().value;
            this.cache.delete(itemToDelete);
        }
        this.cache.set(key, value);
        */
    }
}

const main = () => {
    // let cache = new LRUCache(2);
    let cache = new LRUCache2(2);
    cache.put(1, 1);
    console.log(cache);
    cache.put(2, 2);
    console.log(cache);
    console.log(cache.get(1));       // returns 1
    cache.put(3, 3);    // evicts key 2
    console.log(cache);
    console.log(cache.get(2));       // returns -1 (not found)
    cache.put(4, 4);    // evicts key 1
    console.log(cache);
    console.log(cache.get(1));       // returns -1 (not found)
    console.log(cache.get(3));       // returns 3
    console.log(cache.get(4));       // returns 4


    console.log("\n\n");
    let debug1 = new LRUCache2(2);
    console.log(debug1.get(2));      // -1
    debug1.put(2, 6);
    console.log(debug1);
    console.log(debug1.get(1));     // -1
    debug1.put(1, 5);
    console.log(debug1);
    debug1.put(1, 2);
    console.log(debug1);
    console.log(debug1.get(1));    // 2
    console.log(debug1.get(2));    // 6
}

main()