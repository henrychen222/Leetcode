# 12.22
from SingleLinkedList import Node
from SingleLinkedList import SingleLinkedList


def main():
    # creates the linked list with three data elements
    newlist = SingleLinkedList()
    newlist.head = Node("Mon")
    element2 = Node("Tue")
    element3 = Node("Wed")

    # Link first Node to second node, Link second Node to third node
    newlist.head.next = element2
    element2.next = element3

    """Traversing a Linked List"""
    newlist.traverse()

    """Insertion in a Linked List"""
    print("\n")
    newlist.insertion_begin("Sun")
    newlist.traverse()

    print("\n")
    newlist.insertion_end("Thu")
    newlist.traverse()

    print("\n")
    newlist.insertion_between(newlist.head.next, "Fri")
    newlist.traverse()

    """Removing an Item form a Liked List"""
    print("\n")
    newlist.remove("Wed")
    newlist.traverse()


if __name__ == '__main__':
    main()
