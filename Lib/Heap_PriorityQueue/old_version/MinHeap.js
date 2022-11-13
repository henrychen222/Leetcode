/**
 * 9.9 evening
 * reference: Book 266
 */
function MinHeap() {
    this.items = [];
}

MinHeap.prototype.add = function (item) {
    this.items[this.items.length] = item;
    this.bubbleUp();
}

MinHeap.prototype.poll = function () {
    let item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
}

MinHeap.prototype.bubbleDown = function () {
    let index = 0;
    while (this.leftChild(index) && this.leftChild(index) < this.items[index] || this.rightChild(index) < this.items[index]) {
        let smallerIndex = this.leftChildIndex(index);
        if (this.rightChild(index) && this.rightChild(index) < this.items[smallerIndex]) {
            smallerIndex = this.rightChildrenIndex(index);
        }
        this.swap(smallerIndex, index);
        index = smallerIndex;
    }
}

MinHeap.prototype.bubbleUp = function () {
    var index = this.items.length - 1;
    while (this.parent(index) && this.parent(index) > this.items[index]) {
        this.swap(this.parentIndex(index), index);
        index = this.parentIndex(index);
    }
}

MinHeap.prototype.swap = function (index1, index2) {
    let temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
}

MinHeap.prototype.leftChildIndex = function (index) {
    return index * 2 + 1;
}

MinHeap.prototype.rightChildrenIndex = function (index) {
    return index * 2 + 2;
}

MinHeap.prototype.parentIndex = function (index) {
    return Math.floor((index - 1) >> 1);
}

MinHeap.prototype.parent = function (index) {
    return this.items[this.parentIndex(index)];
}

MinHeap.prototype.leftChild = function (index) {
    return this.items[this.leftChildIndex(index)];
}

MinHeap.prototype.rightChild = function (index) {
    return this.items[this.rightChildrenIndex(index)];
}

MinHeap.prototype.peek = function () {
    return this.items[0];
}

MinHeap.prototype.size = function () {
    return this.items.length;
}

const testMinHeap = () => {
    var mh1 = new MinHeap();
    mh1.add(1);
    mh1.add(10);
    mh1.add(5);
    mh1.add(100);
    mh1.add(8);
    console.log(mh1.poll()); // 1
    console.log(mh1.poll()); // 5
    console.log(mh1.poll()); // 8
    console.log(mh1.poll()); // 10
    console.log(mh1.poll()); // 100
};

testMinHeap();