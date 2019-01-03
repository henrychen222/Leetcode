# 12.24
from DoubleLinkedList import DoubleLinkedList

dllist = DoubleLinkedList()

dllist.push(12)
dllist.push(8)
dllist.push(62)
dllist.show(dllist.head)

print()
dllist.insert(dllist.head.next, 13)
dllist.show(dllist.head)

print()
dllist.append(9)
dllist.show(dllist.head)


# # Append example
# dllist.push(12)
# dllist.append(9)
# dllist.push(8)
# dllist.push(62)
# dllist.append(45)
# dllist.show(dllist.head)
