/**
 * 6.22 night
 * https://leetcode.com/problems/implement-stack-using-queues/
 */

// Accepted --- 60ms 32.9MB 100.00%
class MyStack {
    item: any[] = [];
    constructor() { }

    push(x: number): void {
        this.item.push(x);
    }

    pop(): number {
        return this.item.pop();
    }

    top(): number {
        return this.item[this.item.length - 1];
    }

    empty(): boolean {
        return this.item.length == 0;
    }
}

const main = () => {
    let stack = new MyStack();
    stack.push(1);
    console.log(stack);
    stack.push(2);
    console.log(stack);

    console.log(stack.top());   // returns 2
    console.log(stack.pop());   // returns 2
    console.log(stack.empty()); // returns false
}

main()