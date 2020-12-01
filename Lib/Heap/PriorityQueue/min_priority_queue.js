// 11.30 evening
/**
 * reference:
 * https://github.com/datastructures-js/priority-queue
 * https://github.com/datastructures-js/min-heap
 * https://github.com/datastructures-js/heap#construction
 */
class HeapNode {
    constructor(key, value) {
        this._key = key;
        this._value = value;
    }

    getKey() {
        return this._key;
    }

    getValue() {
        return this._value;
    }
}

const isNumber = (n) => typeof n === 'number';
const isNoneEmptyString = (s) => typeof s === 'string' && s.length;
const isNoneNullObject = (o) => typeof o === 'object' && o !== null;
const isNoneEmptyArray = (a) => Array.isArray(a) && a.length > 0;

class Heap {
    constructor(nodes) {
        this._nodes = Array.isArray(nodes) ? nodes : [];
        this._leaf = null;
    }

    _getLeftChildIndex(parentIndex) {
        return (parentIndex * 2) + 1;
    }

    _getRightChildIndex(parentIndex) {
        return (parentIndex * 2) + 2;
    }

    _getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    _getLastIndex() {
        return this._nodes.length - 1;
    }

    _swap(i, j) {
        const temp = this._nodes[i];
        this._nodes[i] = this._nodes[j];
        this._nodes[j] = temp;
    }

    _compareChildrenOf(parentIndex) {
        const leftChildIndex = this._getLeftChildIndex(parentIndex);
        const rightChildIndex = this._getRightChildIndex(parentIndex);
        const size = this.size();
        if (leftChildIndex >= size && rightChildIndex >= size) return -1;
        if (leftChildIndex >= size) return rightChildIndex;
        if (rightChildIndex >= size) return leftChildIndex;
        return this._compareChildren(leftChildIndex, rightChildIndex);
    }

    _heapifyUp() {
        let childIndex = this._getLastIndex();
        let parentIndex = this._getParentIndex(childIndex);
        while (this._shouldSwap(childIndex, parentIndex)) {
            this._swap(childIndex, parentIndex);
            childIndex = parentIndex;
            parentIndex = this._getParentIndex(childIndex);
        }
    }

    _heapifyDown() {
        let parentIndex = 0;
        let childIndex = this._compareChildrenOf(parentIndex);
        while (this._shouldSwap(childIndex, parentIndex)) {
            this._swap(childIndex, parentIndex);
            parentIndex = childIndex;
            childIndex = this._compareChildrenOf(parentIndex);
        }
    }

    _heapifyDownUntil(index) {
        let parentIndex = 0;
        let leftChildIndex = 1;
        let rightChildIndex = 2;
        let childIndex;
        while (leftChildIndex < index) {
            childIndex = this._compareChildrenBefore(
                index,
                leftChildIndex,
                rightChildIndex
            );
            if (this._shouldSwap(childIndex, parentIndex)) {
                this._swap(childIndex, parentIndex);
            }
            parentIndex = childIndex;
            leftChildIndex = this._getLeftChildIndex(parentIndex);
            rightChildIndex = this._getRightChildIndex(parentIndex);
        }
    }

    _clone(HeapType) {
        return new HeapType(this._nodes.slice());
    }

    sort() {
        for (let i = this._getLastIndex(); i > 0; i -= 1) {
            this._swap(0, i);
            this._heapifyDownUntil(i);
        }
        return this._nodes;
    }

    insert(key, value) {
        const newNode = new HeapNode(key, value);
        this._nodes.push(newNode);
        this._heapifyUp();
        return newNode;
    }

    root() {
        if (this.isEmpty()) return null;
        return this._nodes[0];
    }

    leaf() {
        return this._leaf;
    }

    extractRoot() {
        if (this.isEmpty()) return null;
        const root = this.root();
        this._nodes[0] = this._nodes[this._getLastIndex()];
        this._nodes.pop();
        this._heapifyDown();
        if (root === this._leaf) {
            if (this.isEmpty()) {
                this._leaf = null;
            } else {
                this._leaf = this.root();
            }
        }
        return root;
    }

    size() {
        return this._nodes.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this._nodes = [];
        this._leaf = null;
    }

    static _heapify(items, HeapType) {
        if (!isNoneEmptyArray(items)) return null;
        const heap = new HeapType();
        items.forEach((item) => {
            if (isNumber(item) || isNoneEmptyString(item)) {
                heap.insert(item);
            } else if (isNoneNullObject(item) &&
                (isNumber(item.key) || isNoneEmptyString(item.key))) {
                heap.insert(item.key, item.value);
            }
        });
        return heap;
    }
}

class MinHeap extends Heap {
    _getMinChildIndex(leftChildIndex, rightChildIndex) {
        const leftChild = this._nodes[leftChildIndex];
        const rightChild = this._nodes[rightChildIndex];
        if (leftChild.getKey() < rightChild.getKey()) {
            return leftChildIndex;
        }
        return rightChildIndex;
    }

    _getMinChildIndexBefore(index, leftChildIndex, rightChildIndex) {
        const leftChild = this._nodes[leftChildIndex];
        const rightChild = this._nodes[rightChildIndex];
        if (rightChild.getKey() < leftChild.getKey() && rightChildIndex < index) {
            return rightChildIndex;
        }
        return leftChildIndex;
    }

    _shouldSwap(childIndex, parentIndex) {
        if (childIndex < 0 || childIndex >= this.size()) return false;
        if (parentIndex < 0 || parentIndex >= this.size()) return false;
        const child = this._nodes[childIndex];
        const parent = this._nodes[parentIndex];
        return child.getKey() < parent.getKey();
    }

    _compareChildren(leftChildIndex, rightChildIndex) {
        return this._getMinChildIndex(leftChildIndex, rightChildIndex);
    }

    _compareChildrenBefore(index, leftChildIndex, rightChildIndex) {
        return this._getMinChildIndexBefore(index, leftChildIndex, rightChildIndex);
    }

    insert(key, value) {
        const newNode = super.insert(key, value);
        if (this._leaf === null || key > this._leaf.getKey()) {
            this._leaf = newNode;
        }
        return newNode;
    }

    clone() {
        return super._clone(MinHeap);
    }

    static heapify(items) {
        return super._heapify(items, MinHeap);
    }
}

class PriorityQueue {
    constructor(options = {}) {
        const {
            priority
        } = options;
        if (priority !== undefined && typeof priority !== 'function') {
            throw new Error('invalid priority callback');
        }
        this._getPriority = typeof priority === 'function' ? priority : null;
    }

    size() {
        return this._heap.size();
    }

    isEmpty() {
        return this._heap.isEmpty();
    }

    front() {
        if (this.isEmpty()) return null;
        const first = this._heap.root();
        return {
            priority: first.getKey(),
            element: first.getValue()
        };
    }

    back() {
        if (this.isEmpty()) return null;
        const last = this._heap.leaf();
        return {
            priority: last.getKey(),
            element: last.getValue()
        };
    }

    enqueue(element, p) {
        if (p && Number.isNaN(+p)) {
            throw new Error('invalid priority number');
        }
        if (Number.isNaN(+p) && this._getPriority === null) {
            throw new Error('missing priority number or constructor callback');
        }
        const priority = !Number.isNaN(+p) ? p : this._getPriority(element);
        this._heap.insert(priority, element);
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const first = this._heap.extractRoot();
        return {
            priority: first.getKey(),
            element: first.getValue()
        };
    }

    toArray() {
        return this._heap
            .clone()
            .sort()
            .map((n) => ({
                priority: n.getKey(),
                element: n.getValue()
            }))
            .reverse();
    }

    clear() {
        this._heap.clear();
    }
}

class MinPriorityQueue extends PriorityQueue {
    constructor(options) {
        super(options);
        this._heap = new MinHeap();
    }
}












/////////////////////////////////// TEST ///////////////////////////////////////
/**
 * https://leetcode.com/problems/ugly-number-ii/
 */
// Accepted --- 264ms 7.02%
const nthUglyNumber = (n) => {
    let pq = new MinPriorityQueue({
        priority: (x) => x.first
    });
    pq.enqueue({
        first: 1,
    })
    for (let i = 1; i < n; i++) {
        let tmp = pq.dequeue().element.first;
        while (!pq.isEmpty() && pq.front().element.first == tmp) {
            tmp = pq.dequeue().element.first;
        }
        pq.enqueue({
            first: tmp * 2
        });
        pq.enqueue({
            first: tmp * 3
        });
        pq.enqueue({
            first: tmp * 5
        });
    }
    return pq.front().element.first;
};

const main = () => {
    let n = 10;
    let debug1 = 103;
    let debug2 = 1147;
    console.log(nthUglyNumber(n));
    console.log(nthUglyNumber(debug1)); // 1728
    console.log(nthUglyNumber(debug2));
};

main()