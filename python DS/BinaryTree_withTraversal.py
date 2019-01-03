# 12.27 morning
# https://www.tutorialspoint.com/python/python_binary_tree.htm

"""
Read DSAP 8.2 Binary Tree   11.1 Binary Search Tree

(Binary Tree)
https://www.geeksforgeeks.org/binary-tree-data-structure/
1. Every node has at most two children.
2. Each child node is labeled as being either a left child or a right child.
3. A left child precedes a right child in the order of children of a node.

(Binary Search Tree)
https://www.geeksforgeeks.org/binary-search-tree-data-structure/
   The left subtree of a node contains only nodes with keys lesser than the node’s key.
   The right subtree of a node contains only nodes with keys greater than the node’s key.
   The left and right subtree each must also be a binary search tree.

   总结:
   每个Node最多两个子节点
   任何子节点都会被标注left child 或者 right child
   左 优先于右

   左 < 根
   右 > 根
   所有左子树，右子树仍然是Binary Search Tree
"""


class Node:
    def __init__(self, data):
        self.left = None
        self.right = None
        self.data = data

    def insert(self, newdata):
        # if parent node exist, do the following insert operation, otherwise, create parent node with newdata
        if self.data:
            # Compare the new value with the parent node,
            # if new values smaller than the parent node, put to left, otherwise to right
            # 左 < 根
            if newdata < self.data:
                # if left to right child node doesn't exist, create new parent node with newdata, otherwise insert it
                if self.left is None:
                    self.left = Node(newdata)
                else:
                    self.left.insert(newdata)
            # 右 > 根
            elif newdata > self.data:
                if self.right is None:
                    self.right = Node(newdata)
                else:
                    self.right.insert(newdata)
        else:
            self.data = newdata

    def PrintTree(self):
        print(self.data)

    def PrintTree_Insert(self):
        if self.left:
            self.left.PrintTree_Insert()
        print(self.data)
        if self.right:
            self.right.PrintTree_Insert()

    """
    1.1 night
    Tree Traversal Algorithms
    https://www.tutorialspoint.com/python/python_tree_traversal_algorithms.htm
    Read DSAP 8.4
    """

    # 先序  根左右  root --> left ---> right
    def pre_order(self, root):
        result = []
        if root:
            result.append(root.data)
            result = result + self.pre_order(root.left)
            result = result + self.pre_order(root.right)
        return result

    # 中序  左根右 left --> root ---> right
    def in_order(self, root):
        result = []
        if root:
            result = result + self.in_order(root.left)
            result.append(root.data)
            result = result + self.in_order(root.right)
        return result

    # 后序  左右根 left --> right ---> root
    def post_order(self, root):
        result = []
        if root:
            result = result + self.post_order(root.left)
            result = result + self.post_order(root.right)
            result.append(root.data)
        return result
