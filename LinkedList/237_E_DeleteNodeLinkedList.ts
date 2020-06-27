/**
 * 6.25 evening
 * https://leetcode.com/problems/delete-node-in-a-linked-list/
 * reference: https://www.cnblogs.com/grandyang/p/4647576.html
 */

export class ListNode {
    public val;
    public next;
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// https://www.cnblogs.com/grandyang/p/4647576.html
// 先把当前节点的值用下一个节点的值覆盖了，然后我们删除下一个节点
// Accepted --- 96ms 38.2MB
const deleteNode = (node: ListNode): void => {
    node.val = node.next.val;
    node.next = node.next.next;
};