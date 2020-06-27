/**
 * 6.26 night
 * https://leetcode.com/problems/palindrome-linked-list/
 */
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// Accepted --- 72ms 41.1MB 100.00%
const isPalindrome = (head: ListNode | null): boolean => {
    let arr = [];
    let current = head;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    // console.log(arr);
    return check(arr);
};

const check = (x: number[]): boolean => {
    let arr = [...x].reverse();
    for (let i = 0; i < arr.length; i++) {
        if (x[i] != arr[i]) {
            return false;
        }
    }
    return true;
};

console.log(check([-129, -129]));
