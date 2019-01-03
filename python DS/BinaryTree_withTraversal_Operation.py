# 12.27 morning
from BinaryTree_withTraversal import Node


def createParentNode():
    root = Node(10)
    root.PrintTree()
    print()


def insertNode():
    root = Node(12)
    root.insert(6)
    root.insert(14)
    root.insert(3)
    root.PrintTree_Insert()

# 1.1 night Tree Traversal Algorithms
def preOrder():
    root = Node(27)
    root.insert(14)
    root.insert(35)
    root.insert(10)
    root.insert(19)
    root.insert(31)
    root.insert(42)
    print()
    root.PrintTree_Insert()
    print(root.pre_order(root))

def inOrder():
    root = Node(27)
    root.insert(14)
    root.insert(35)
    root.insert(10)
    root.insert(19)
    root.insert(31)
    root.insert(42)
    print()
    root.PrintTree_Insert()
    print(root.in_order(root))

def postOrder():
    root = Node(27)
    root.insert(14)
    root.insert(35)
    root.insert(10)
    root.insert(19)
    root.insert(31)
    root.insert(42)
    print()
    root.PrintTree_Insert()
    print(root.post_order(root))


if __name__ == '__main__':
    createParentNode()
    insertNode()
    preOrder()
    inOrder()
    postOrder()