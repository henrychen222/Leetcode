class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        let qElement = new QElement(element, priority);
        let contain = false;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }
        if (!contain) {
            this.items.push(qElement);
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            this.items.shift();
            return this.items;
        }
        return -1;
    }

    front() {
        if (!this.isEmpty()) {
            return this.items[0];
        }
        return -1;
    }

    rear() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
        return -1;
    }

    isEmpty() {
        return this.items.length == 0;
    }

    size() {
        return this.items.length;
    }

    show() {
        let str = "";
        for (let i = 0; i < this.items.length; i++)
            str += this.items[i].element + " ";
        return str;
    }
}

const main = () => {
    let priorityQueue = new PriorityQueue();
    console.log(priorityQueue.isEmpty()); // true
    console.log(priorityQueue.front()); // -1

    priorityQueue.enqueue("Sumit", 2);
    priorityQueue.enqueue("Gourav", 1);
    priorityQueue.enqueue("Piyush", 1);
    priorityQueue.enqueue("Sunny", 2);
    priorityQueue.enqueue("Sheru", 3);

    console.log(priorityQueue.show()); // [Gourav Piyush Sumit Sunny Sheru] 
    console.log(priorityQueue.front().element); // Gourav
    console.log(priorityQueue.rear().element); // Sheru 
    console.log(priorityQueue.dequeue()); // [Piyush Sumit Sunny Sheru] 
    priorityQueue.enqueue("Sunil", 2);
    console.log(priorityQueue.show()); // [Piyush Sumit Sunny Sunil Sheru] 
}

main()