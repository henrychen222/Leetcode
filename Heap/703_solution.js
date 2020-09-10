// 9.9 afternoon

// reference: https://leetcode.com/problems/kth-largest-element-in-a-stream/discuss/834008/Simple-Java-MinHeap-Solution
function KthLargest(k, nums) {
    this.k = k;
    this.minHeap = new MinHeap();
    for (const i of nums) {
        this.minHeap.add(i);
        if (this.minHeap.size() > this.k) {
            this.minHeap.poll();
        }
    }
};

KthLargest.prototype.add = function (val) {
    console.log(this.minHeap);
    this.minHeap.add(val);
    if (this.minHeap.size() > this.k) {
        this.minHeap.poll();
    }
    return this.minHeap.peek();
};


/**
 * reference: Book 266
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/discuss/504552/JavaScript-Min-Heap-solution
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/discuss/776865/Javascript-solution-with-MinHeap-approach
 */


class MinHeap {
    constructor(data = []) {
        this.data = data;
        this.comparator = (a, b) => a - b;
        this.heapify();
    }

    heapify() {
        if (this.size() < 2) return;
        for (let i = 1; i < this.size(); i++) {
            this.bubbleUp(i);
        }
    }

    peek() {
        if (this.size() === 0) return null;
        return this.data[0];
    }

    add(value) {
        this.data.push(value);
        this.bubbleUp(this.size() - 1);
    }

    poll() {
        if (this.size() === 0) return null;
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return result;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    bubbleDown(index) {
        const lastIndex = this.size() - 1;
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let findIndex = index;
            if (leftIndex <= lastIndex && this.comparator(this.data[leftIndex], this.data[findIndex]) < 0) {
                findIndex = leftIndex;
            }
            if (rightIndex <= lastIndex && this.comparator(this.data[rightIndex], this.data[findIndex]) < 0) {
                findIndex = rightIndex;
            }
            if (index !== findIndex) {
                this.swap(index, findIndex);
                index = findIndex;
            } else {
                break;
            }
        }
    }

    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }

    size() {
        return this.data.length;
    }
}



const main = () => {
    let k = 3;
    let arr = [4, 5, 8, 2];
    let kthLargest = new KthLargest(k, arr);
    console.log(kthLargest.add(3)); // 4
    console.log(kthLargest.add(5)); // 5
    console.log(kthLargest.add(10)); // 5
    console.log(kthLargest.add(9)); // 8
    console.log(kthLargest.add(4)); // 8

    console.log("");
    let kthLargest2 = new KthLargest(2, [0]);
    console.log(kthLargest2.add(-1)); // -1
    console.log(kthLargest2.add(1)); // 0
    console.log(kthLargest2.add(-2)); // 0
    console.log(kthLargest2.add(-4)); // 0
    console.log(kthLargest2.add(3)); // 1
}

main()