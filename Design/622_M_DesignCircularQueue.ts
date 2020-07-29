/**
 * 7.27 night
 * https://leetcode.com/problems/design-circular-queue/
 * 
 * reference:
 * https://www.programiz.com/dsa/circular-queue
 * https://algorithmtutor.com/Data-Structures/Basic/Queues/
 * https://www.studytonight.com/data-structures/circular-queue
 */

// Accepted --- 144ms 42.1MB 20.00%
class MyCircularQueue {
    capacity: number;
    front: number;
    rear: number;
    queue: number[] = [];

    constructor(k: number) {
        this.capacity = k;  // set the size of the queue to be k
        this.front = -1;
        this.rear = -1;
    }

    // Insert an element into the circular queue. Return true if the operation is successful
    enQueue(value: number): boolean {
        if (!this.isFull()) {
            if (this.front == -1) this.front = 0;
            this.rear = (this.rear + 1) % this.capacity; // wrong if (this.rear = this.rear + 1 % this.capacity)
            this.queue[this.rear] = value;
            return true;
        }
        return false;
    }

    // Delete an element from the circular queue. Return true if the operation is successful.
    deQueue(): boolean {
        let value: number;
        if (!this.isEmpty()) {
            value = this.queue[this.front];
            if (this.front == this.rear) {
                this.front = -1;
                this.rear = -1;
            } else {
                this.front = (this.front + 1) % this.capacity;
            }
            return true;
        }
        return false;
    }

    // Get the front item from the queue. If the queue is empty, return -1
    Front(): number {
        if (this.front == -1) return -1;
        return this.queue[this.front];
    }

    // Get the last item from the queue. If the queue is empty, return -1.
    Rear(): number {
        if (this.rear == -1) return -1;
        return this.queue[this.rear];
    }

    isEmpty(): boolean {
        return this.front == -1 ? true : false;
    }

    isFull(): boolean {
        if (this.front == 0 && this.rear == this.capacity - 1) return true;
        if (this.front == this.rear + 1) return true;
        return false;
    }
}

// Accepted --- 144ms 42.1MB 20.00%
class MyCircularQueue2 {
    capacity: number;
    front: number;
    rear: number;
    queue: number[] = [];

    constructor(k: number) {
        this.capacity = k;
        this.front = -1;
        this.rear = -1;
    }

    enQueue(value: number): boolean {
        if (this.isFull()) {
            return false;
        } else {
            if (this.front == -1) this.front = 0;
            this.rear = (this.rear + 1) % this.capacity;
            this.queue[this.rear] = value;
            return true;
        }
    }

    deQueue(): boolean {
        let value: number;
        if (this.isEmpty()) {
            return false;
        } else {
            value = this.queue[this.front];
            if (this.front == this.rear) {
                this.front = -1;
                this.rear = -1;
            } else {
                this.front = (this.front + 1) % this.capacity;
            }
            return true;
        }
    }

    Front(): number {
        if (this.front == -1) return -1;
        return this.queue[this.front];
    }

    Rear(): number {
        if (this.rear == -1) return -1;
        return this.queue[this.rear];
    }

    isEmpty(): boolean {
        if (this.front == -1) return true;
        return false;
    }

    isFull(): boolean {
        if (this.front == 0 && this.rear == this.capacity - 1) return true;
        if (this.front == this.rear + 1) return true;
        return false;
    }
}

const main = () => {
    let circularQueue = new MyCircularQueue(3); // set the size to be 3
    console.log(circularQueue.enQueue(1));  // return true
    console.log(circularQueue.enQueue(2));  // return true
    console.log(circularQueue.enQueue(3));  // return true
    console.log(circularQueue.enQueue(4));  // return false, the queue is full
    console.log(circularQueue.Rear());  // return 3
    console.log(circularQueue.isFull());  // return true
    console.log(circularQueue.deQueue());  // return true
    console.log(circularQueue.enQueue(4));  // return true
    console.log(circularQueue.Rear());  // return 4

    console.log("\n");
    let cq_debug1 = new MyCircularQueue(4);
    console.log(cq_debug1.enQueue(3)); // true
    console.log(cq_debug1.Front());  // 3
    console.log(cq_debug1.isFull()); // false
    console.log(cq_debug1.enQueue(7)); // true
    console.log(cq_debug1.enQueue(2)); // true
    console.log(cq_debug1.enQueue(5)); // true
    console.log(cq_debug1.deQueue());  // true
    console.log(cq_debug1.enQueue(4)); // true
    // console.log(cq_debug1.isFull(), cq_debug1.capacity);
    console.log(cq_debug1.enQueue(2)); // false
    console.log(cq_debug1.isEmpty());  // false
    console.log(cq_debug1.Rear());     // 4

}

main()