# https://www.tutorialspoint.com/python/python_linked_lists.htm   12.22
# read DSAP 7.1 Singly Linked List

"""Create a LinkedList"""
class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None


class SingleLinkedList:
    def __init__(self):
        self.head = None     # head: the first Node   tail: the last Node

    def traverse(self):
        show = self.head
        while show is not None:
            print(show.data)
            show = show.next

    def insertion_begin(self, newdata):
        newNode = Node(newdata)
        newNode.next = self.head  # Link the newNode to first node
        self.head = newNode  # reset head

    # Don't understand
    def insertion_end(self, newdata):
        newNode = Node(newdata)
        if self.head is None:
            self.head = newNode
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = newNode

    # don't understand
    def insertion_between(self, middleNode, newdata):
        if middleNode is None:
            print("The mentioned node is absent")
            return
        newNode = Node(newdata)
        newNode.next = middleNode.next  # connect the newNode's pointer to nextNode(middleNode)
        middleNode.next = newNode

    # don't understand
    def remove(self, remove_key):
        new_head = self.head

        if new_head == None:
            return

        if new_head is not None:
            if new_head.data == remove_key:
                self.head = new_head.next
                new_head = None
                return

        while new_head is not None:
            if new_head.data == remove_key:
                break
            previous = new_head
            new_head = new_head.next

        previous.next = new_head.next
        new_head = None
