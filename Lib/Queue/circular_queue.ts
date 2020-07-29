/**
 * 7.27 night
 * 
 * reference:
 * https://www.programiz.com/dsa/circular-queue
 * https://algorithmtutor.com/Data-Structures/Basic/Queues/
 * https://www.studytonight.com/data-structures/circular-queue
 */

export class MyCircularQueue {
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
        if (!this.isFull()) {
            if (this.front == -1) this.front = 0;
            this.rear = (this.rear + 1) % this.capacity;
            this.queue[this.rear] = value;
            return true;
        }
        return false;
    }

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

    Front(): number {
        if (this.front == -1) return -1;
        return this.queue[this.front];
    }

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
}

main()