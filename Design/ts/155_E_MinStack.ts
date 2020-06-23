/**
 * 6.22 night
 * https://leetcode.com/problems/min-stack/
 */

class MinStack {
    item: any[] = [];
    constructor() { }

    push(x: number): void {
        this.item.push(x);
    }

    pop(): void {
        return this.item.pop();
    }

    top(): number {
        return this.item[this.item.length - 1];
    }

    getMin(): number {
        let arr = [...this.item].sort((a, b) => a - b);
        return arr[0];
    }
}

const main = () => {
    let minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    console.log(minStack);
    console.log(minStack.getMin()); // return -3
    minStack.pop();
    console.log(minStack.top());    // return 0
    console.log(minStack.getMin()); // return -2
}

main()