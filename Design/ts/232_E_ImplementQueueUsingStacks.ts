/**
 * 6.22 night
 * https://leetcode.com/problems/implement-queue-using-stacks/
 */

// Accepted --- 68ms 33MB 100.00%
class MyQueue {
    item: any[] = [];
    constructor() { }

    push(x: number): void {
        this.item.push(x);
    }

    pop(): number {
        return this.item.shift();
    }

    peek(): number {
        return this.item[0];
    }

    empty(): boolean {
        return this.item.length == 0;
    }
}

const main = () => {
    let queue = new MyQueue();
    queue.push(1);
    console.log(queue);
    queue.push(2);
    console.log(queue);
    console.log(queue.peek());  // returns 1
    console.log(queue.pop());   // returns 1
    console.log(queue.empty()); // returns false
}

main()