# 1.6 start

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

    # def insert(self, newval):
    #     if self.val:
    #         if newval < self.val:
    #             if self.left is None:
    #                 self.left = TreeNode(newval)
    #             else:
    #                 self.left.insert(newval)
    #         elif newval > self.val:
    #             if self.right is None:
    #                 self.right = TreeNode(newval)
    #             else:
    #                 self.right.insert(newval)
    #     else:
    #         self.val = newval


import sys


class Solution:
    # correct http://yueguo1217.com/leetcode-530-minimum-absolute-difference-in-bst-easy-77-in-python/

    def getMinimumDifference(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """

        def in_order(root, newlist):
            if root is not None:
                in_order(root.left, newlist)
                newlist.append(root.val)
                in_order(root.right, newlist)

        newlist = list()
        in_order(root, newlist)
        return min([abs(x - y) for x, y in zip(newlist + [newlist[0]], [newlist[-1]] + newlist)])

    # correct https://www.polarxiong.com/archives/LeetCode-530-minimum-absolute-difference-in-bst.html
    # def getMinimumDifference(self, root):
    #     """
    #     :type root: TreeNode
    #     :rtype: int
    #     """
    #     result = sys.maxsize
    #     stack = []
    #     prev = None
    #     while root or stack:
    #         if root:
    #             stack.append(root)
    #             root = root.left
    #         else:
    #             node = stack.pop()
    #             if prev is not None:
    #                 result = min(result, node.val - prev)
    #             prev = node.val
    #             root = node.right
    #     return result


if __name__ == '__main__':
    solution = Solution()

    # root = TreeNode(10)
    # root.insert(1)
    # root.insert(None)
    # root.insert(3)
    # root.insert(2)

    root = [1, None, 3, 2]
    # root = [1, 3, 2]

    print(solution.getMinimumDifference(root))
