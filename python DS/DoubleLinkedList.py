# 12.23 12.24
# https://www.tutorialspoint.com/python/python_advanced_linked_list.htm
# Read DSAP 7.3 Doubly Linked List
"""
Reference   compare to Single LinkedList
https://blog.csdn.net/kangxidagege/article/details/80211225
https://www.cnblogs.com/skywang12345/p/3561803.html
https://blog.csdn.net/qq_32575047/article/details/78885066
"""


class Node:
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None


class DoubleLinkedList:
    def __init__(self):
        self.head = None  # head: the first Node   tail: the last Node

    # Adding data elements before head
    def push(self, newdata):
        newNode = Node(newdata)
        newNode.next = self.head  # connect the newNode to the original head Node

        # make the original head node's prev point to the newNode
        if self.head is not None:
            self.head.prev = newNode

        # set NewNode to be head node
        self.head = newNode

    # Insert elements into the double linked list    (Don't understand)
    def insert(self, prev_node, newdata):
        if prev_node is None:
            return

        newNode = Node(newdata)
        newNode.next = prev_node.next  # prev_node's next point to newNode's next ???
        prev_node.next = newNode
        newNode.prev = prev_node

        if newNode.next is not None:
            newNode.next.prev = newNode

    # append(): add elements at the end        (Don't understand)
    def append(self, newdata):
        newNode = Node(newdata)
        newNode.next = None  # newNode as the last node, so next point to None

        # head node not exist
        if self.head is None:
            newNode.prev = None
            self.head = newNode
            return

        last = self.head

        while last.next is not None:
            last = last.next            # ????

        last.next = newNode
        newNode.prev = last
        return

    # Print the Doubly Linked list
    def show(self, node):
        while node is not None:
            print(node.data)
            last = node
            node = node.next
