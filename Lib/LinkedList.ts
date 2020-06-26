/**
 * 6.25 evening
 * reference: https://stackoverflow.com/questions/42588925/linkedlist-implementation-in-typescript
 * https://github.com/henrychen222/Stevens-CS570/blob/master/Textbook/Learning%20Javascript%20Data%20Structures%20and%20Algorithms.pdf
 */
import { ListNode } from './ListNode';

export class LinkedList {
    private len = 0;
    private head = null;

    public append(val) {
        let node = new ListNode(val);
        let current;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.len++;
    };

    public removeAt(position) {
        if (position > -1 && position < this.len) {
            let current = this.head;
            let previous;
            let index = 0;
            if (position === 0) {
                this.head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.len--;
            return current.val;
        } else {
            return null;
        }
    };

    public insert(position, val) {
        if (position >= 0 && position <= this.len) {
            let node = new ListNode(val);
            let current = this.head;
            let previous;
            let index = 0;
            if (position === 0) {
                node.next = current;
                this.head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.len++;
            return true;
        } else {
            return false;
        }
    };

    public toString() {
        let current = this.head,
            string = '';
        while (current) {
            string += current.val + (current.next ? 'n' : '');
            current = current.next;
        }
        return string;
    };

    public indexOf(val) {
        let current = this.head;
        let index = -1;
        while (current) {
            if (val === current.val) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    public isEmpty() {
        return this.len === 0;
    };

    public size() {
        return this.len;
    };

    public getHead() {
        return this.head;
    };

    public print() {
        let current = this.head;
        let str = "";
        while (current) {
            str += current.val + " ";
            current = current.next;
        }
        console.log(str);
    }

    /*************************************** some other methods ************************************/
    // https://www.freecodecamp.org/forum/t/remove-elements-from-a-linked-list/219468
    public remove(val) {
        let current = this.head;
        let prev;
        if (current.val === val) {
            this.head = current.next;
        } else {
            while (current.val !== val) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
        }
        this.len--;
    };

}

// const main = () => {
//     let list = new LinkedList();
//     list.append(4);
//     list.append(5);
//     list.append(1);
//     list.append(9);
//     console.log(list.print());
//     list.remove(5);
//     console.log(list.print());
// }

// main()