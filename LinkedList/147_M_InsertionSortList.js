/**
 * 7.7 morning
 * https://leetcode.com/problems/insertion-sort-list/
 * reference: https://www.cnblogs.com/grandyang/p/4250107.html
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// Accepted --- 108ms 39.1MB 67.77%
const insertionSortList = (head) => {
    let dummy = new ListNode(-1);
    let current = dummy;
    while (head) {
        let tmp = head.next;
        current = dummy;
        while (current.next && current.next.val <= head.val) {
            current = current.next;
        }
        head.next = current.next;
        current.next = head;
        head = tmp;
    }
    return dummy.next;
};

const main = () => {
    //  4->2->1->3
    let head = new ListNode(4);
    head.next = new ListNode(2);
    head.next.next = new ListNode(1);
    head.next.next.next = new ListNode(3);
    console.log(insertionSortList(head));

    // -1->5->3->4->0
    let head2 = new ListNode(-1);
    head2.next = new ListNode(5);
    head2.next.next = new ListNode(3);
    head2.next.next.next = new ListNode(4);
    head2.next.next.next.next = new ListNode(0);
    console.log(insertionSortList(head2));
};

main()